import React, { useState, useEffect } from 'react';
import { facilityQuestions, sectionNames } from '../data/facilityQuestions';
import { FacilityAssessmentAnswer, FacilityAssessmentResults, AssessmentSection } from '../types';
import { CheckCircle, Circle, AlertCircle, Info, X } from 'lucide-react';

interface FacilityAssessmentProps {
  onComplete: (results: FacilityAssessmentResults) => void;
}

const FacilityAssessment: React.FC<FacilityAssessmentProps> = ({ onComplete }) => {
  const [answers, setAnswers] = useState<Record<string, FacilityAssessmentAnswer>>({});
  const [currentSection, setCurrentSection] = useState(0);
  const [showDetails, setShowDetails] = useState<string | null>(null);
  
  const sections = [
    { name: 'Energy Meters', questions: facilityQuestions.filter(q => q.subsection === 'Energy Meters') },
    { name: 'Relevant Variables', questions: facilityQuestions.filter(q => q.subsection === 'Relevant Variables') },
    { name: 'Data Capture and Storage', questions: facilityQuestions.filter(q => q.subsection === 'Data Capture and Storage') },
    { name: 'Data Analysis', questions: facilityQuestions.filter(q => q.subsection === 'Data Analysis') },
    { name: 'Target Setting', questions: facilityQuestions.filter(q => q.subsection === 'Target Setting') },
    { name: 'Energy Performance Reporting', questions: facilityQuestions.filter(q => q.subsection === 'Energy Performance Reporting') },
    { name: 'System Support Skills', questions: facilityQuestions.filter(q => q.subsection === 'System Support Skills') }
  ];

  const handleAnswerChange = (questionId: string, optionIndex: number) => {
    const question = facilityQuestions.find(q => q.id === questionId);
    if (!question) return;

    const selectedOption = question.answerOptions[optionIndex];
    setAnswers(prev => ({
      ...prev,
      [questionId]: {
        questionId,
        value: selectedOption.text,
        score: selectedOption.score
      }
    }));
  };

  const handleSliderChange = (questionId: string, value: number) => {
    const question = facilityQuestions.find(q => q.id === questionId);
    if (!question) return;

    // For percentage-based questions, use the slider value directly
    if (question.isPercentageBased) {
      const score = Math.round(value); // 0-5 scale
      setAnswers(prev => ({
        ...prev,
        [questionId]: {
          questionId,
          value: `${score}/5 (${Math.round((score/5) * 100)}%)`,
          score: score
        }
      }));
    } else {
      const selectedOption = question.answerOptions[value];
      setAnswers(prev => ({
        ...prev,
        [questionId]: {
          questionId,
          value: selectedOption.text,
          score: selectedOption.score
        }
      }));
    }
  };

  const handlePercentageInput = (questionId: string, percentage: number) => {
    const question = facilityQuestions.find(q => q.id === questionId);
    if (!question) return;

    // Convert percentage to 0-5 score
    const score = Math.round((percentage / 100) * 5);
    setAnswers(prev => ({
      ...prev,
      [questionId]: {
        questionId,
        value: `${score}/5 (${percentage}%)`,
        score: score
      }
    }));
  };

  const calculateResults = (): FacilityAssessmentResults => {
    const sectionResults: AssessmentSection[] = sections.map(section => {
      const sectionAnswers = section.questions.map(q => answers[q.id]).filter(Boolean);
      const totalScore = sectionAnswers.reduce((sum, a) => sum + a.score, 0);
      const maxScore = section.questions.reduce((sum, q) => sum + q.maxScore, 0);
      
      return {
        id: section.name,
        title: section.name,
        totalScore,
        maxScore,
        percentage: maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0
      };
    });

    const totalScore = sectionResults.reduce((sum, s) => sum + s.totalScore, 0);
    const maxTotalScore = sectionResults.reduce((sum, s) => sum + s.maxScore, 0);
    const overallPercentage = maxTotalScore > 0 ? Math.round((totalScore / maxTotalScore) * 100) : 0;

    // Generate specific recommendations based on actual answers
    const recommendations: string[] = [];
    
    Object.values(answers).forEach(answer => {
      const question = facilityQuestions.find(q => q.id === answer.questionId);
      if (question) {
        const selectedOption = question.answerOptions.find(opt => opt.text === answer.value);
        if (selectedOption && selectedOption.description) {
          recommendations.push(`This facility ${selectedOption.description}`);
        }
      }
    });

    return {
      sections: sectionResults,
      totalScore,
      maxTotalScore,
      overallPercentage,
      recommendations
    };
  };

  const isSectionComplete = (sectionIndex: number) => {
    return sections[sectionIndex].questions.every(q => answers[q.id]);
  };

  const allSectionsComplete = () => {
    return sections.every((_, index) => isSectionComplete(index));
  };

  const getCompletionPercentage = () => {
    const totalQuestions = facilityQuestions.length;
    const answeredQuestions = Object.keys(answers).length;
    return Math.round((answeredQuestions / totalQuestions) * 100);
  };

  const handleFinishAssessment = () => {
    if (!allSectionsComplete()) {
      alert('Please complete all sections before finishing the assessment.');
      return;
    }
    
    const results = calculateResults();
    onComplete(results);
  };

  const getSliderValue = (questionId: string) => {
    const answer = answers[questionId];
    if (!answer) return 0;
    
    const question = facilityQuestions.find(q => q.id === questionId);
    if (!question) return 0;
    
    if (question.isPercentageBased) {
      return answer.score; // Return the score directly (0-5)
    } else {
      return question.answerOptions.findIndex(opt => opt.text === answer.value);
    }
  };

  // Check if question should use slider - only for questions with isSlider: true
  const shouldUseSlider = (question: any) => {
    return question.isSlider === true;
  };

  const renderSliderQuestion = (question: any) => {
    const currentValue = getSliderValue(question.id);
    const currentAnswer = answers[question.id];
    
    // Handle percentage-based questions differently
    if (question.isPercentageBased) {
      return (
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900">{question.title}</h3>
              <button
                onClick={() => setShowDetails(showDetails === question.id ? null : question.id)}
                className="flex items-center space-x-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm"
              >
                <Info className="h-4 w-4" />
                <span>Details</span>
              </button>
            </div>
            
            {question.nextSteps && (
              <div className="flex items-start space-x-2 bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-yellow-800">Next Steps</p>
                  <p className="text-sm text-yellow-700">{question.nextSteps}</p>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <h4 className="font-medium text-blue-900 mb-2">Assessment Method:</h4>
              <p className="text-sm text-blue-800 mb-3">
                Calculate the percentage based on the criteria below, then use the slider to set your score (0-5).
              </p>
              
              <div className="space-y-2 mb-4">
                <label className="block text-sm font-medium text-blue-900">
                  Enter calculated percentage:
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    className="w-20 px-3 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0-100"
                    onChange={(e) => {
                      const percentage = parseInt(e.target.value) || 0;
                      handlePercentageInput(question.id, Math.min(100, Math.max(0, percentage)));
                    }}
                  />
                  <span className="text-sm text-blue-700">%</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Score (0-5):
              </label>
              <input
                type="range"
                min="0"
                max="5"
                step="1"
                value={currentValue}
                onChange={(e) => handleSliderChange(question.id, parseInt(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-gray-600 mt-2 px-1">
                {[0, 1, 2, 3, 4, 5].map((score) => (
                  <span key={score} className="text-center">
                    {score}
                  </span>
                ))}
              </div>
            </div>
            
            {currentAnswer && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-blue-900">Current Selection: {currentAnswer.value}</span>
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                    {currentAnswer.score} pts
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }
    
    // Regular slider questions
    const currentOption = question.answerOptions[currentValue];
    
    return (
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900">{question.title}</h3>
            <button
              onClick={() => setShowDetails(showDetails === question.id ? null : question.id)}
              className="flex items-center space-x-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm"
            >
              <Info className="h-4 w-4" />
              <span>Details</span>
            </button>
          </div>
          
          {question.nextSteps && (
            <div className="flex items-start space-x-2 bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
              <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-yellow-800">Next Steps</p>
                <p className="text-sm text-yellow-700">{question.nextSteps}</p>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="relative">
            <input
              type="range"
              min="0"
              max={question.answerOptions.length - 1}
              value={currentValue}
              onChange={(e) => handleSliderChange(question.id, parseInt(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, #ef4444 0%, #f59e0b 25%, #eab308 50%, #22c55e 75%, #16a34a 100%)`
              }}
            />
            <div className="flex justify-between text-xs text-gray-600 mt-2 px-1">
              {question.sliderLabels?.map((label: string, index: number) => (
                <span 
                  key={index} 
                  className="text-center text-xs flex-1"
                  style={{ 
                    textAlign: index === 0 ? 'left' : index === question.sliderLabels.length - 1 ? 'right' : 'center'
                  }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
          
          {currentOption && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-blue-900">{currentOption.text}</span>
                <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                  {currentOption.score} pts
                </span>
              </div>
              {currentOption.description && (
                <p className="text-sm text-blue-800">This facility {currentOption.description}</p>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderRadioQuestion = (question: any) => {
    return (
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900">{question.title}</h3>
            <button
              onClick={() => setShowDetails(showDetails === question.id ? null : question.id)}
              className="flex items-center space-x-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm"
            >
              <Info className="h-4 w-4" />
              <span>Details</span>
            </button>
          </div>
          
          {question.nextSteps && (
            <div className="flex items-start space-x-2 bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
              <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-yellow-800">Next Steps</p>
                <p className="text-sm text-yellow-700">{question.nextSteps}</p>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-3">
          {question.answerOptions.map((option: any, optionIndex: number) => (
            <label key={optionIndex} className="flex items-start space-x-3 cursor-pointer">
              <input
                type="radio"
                name={question.id}
                checked={answers[question.id]?.value === option.text}
                onChange={() => handleAnswerChange(question.id, optionIndex)}
                className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-gray-900">{option.text}</span>
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                    {option.score} pts
                  </span>
                </div>
                {option.description && (
                  <p className="text-sm text-gray-600 mt-1">This facility {option.description}</p>
                )}
              </div>
            </label>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Facility EMIS Assessment</h1>
          <p className="text-gray-600 mb-6">Evaluate your facility's current Energy Management Information System capabilities</p>
          
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progress</span>
              <span>{getCompletionPercentage()}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${getCompletionPercentage()}%` }}
              ></div>
            </div>
          </div>

          {/* Section Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 mb-8">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => setCurrentSection(index)}
                className={`p-3 rounded-lg text-sm font-medium transition-all ${
                  currentSection === index
                    ? 'bg-blue-600 text-white'
                    : isSectionComplete(index)
                    ? 'bg-green-100 text-green-800 border border-green-300'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="flex items-center justify-center mb-1">
                  {isSectionComplete(index) ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    <Circle className="h-4 w-4" />
                  )}
                </div>
                <div className="text-xs">{section.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Current Section Content */}
        <div className="space-y-8">
          <div className="border-l-4 border-blue-600 pl-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-900">{sections[currentSection].name}</h2>
            <p className="text-gray-600">Section {currentSection + 1} of {sections.length}</p>
          </div>

          {sections[currentSection].questions.map((question) => (
            <div key={question.id}>
              {shouldUseSlider(question) ? renderSliderQuestion(question) : renderRadioQuestion(question)}
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
          <button
            onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
            disabled={currentSection === 0}
            className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous Section
          </button>
          
          <div className="flex space-x-4">
            {currentSection < sections.length - 1 ? (
              <button
                onClick={() => setCurrentSection(currentSection + 1)}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Next Section
              </button>
            ) : (
              <button
                onClick={handleFinishAssessment}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                Complete Assessment
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Details Modal */}
      {showDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Question Details</h3>
                <button
                  onClick={() => setShowDetails(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>
              {(() => {
                const question = facilityQuestions.find(q => q.id === showDetails);
                return question ? (
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">{question.title}</h4>
                    <div className="text-gray-700 leading-relaxed whitespace-pre-line">{question.explanation}</div>
                  </div>
                ) : null;
              })()}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3B82F6;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3B82F6;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
};

export default FacilityAssessment;