import React from 'react';
import { FacilityAssessmentResults, QuestionRecommendation } from '../types';
import SpiderChart from './SpiderChart';
import { Download, AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react';

interface AssessmentResultsProps {
  results: FacilityAssessmentResults;
  onBack: () => void;
  onContinue: () => void;
}

const AssessmentResults: React.FC<AssessmentResultsProps> = ({ results, onBack, onContinue }) => {
  
  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-600 bg-green-100';
    if (percentage >= 60) return 'text-yellow-600 bg-yellow-100';
    if (percentage >= 40) return 'text-orange-600 bg-orange-100';
    return 'text-red-600 bg-red-100';
  };

  const getScoreIcon = (percentage: number) => {
    if (percentage >= 70) return <CheckCircle className="h-5 w-5" />;
    return <AlertTriangle className="h-5 w-5" />;
  };

  const getSectionDescription = (sectionTitle: string) => {
    const descriptions: { [key: string]: string } = {
      'Energy Meters': 'Energy Account Centres (EACs) are discrete areas, processes, or cost centres within a facility for which energy consumption can be separately measured and managed. This section evaluates the identification of EACs, sub-metering coverage, meter types appropriateness, installation quality, and accuracy. Proper energy metering is fundamental to effective energy management.',
      'Relevant Variables': 'Key drivers are variables that significantly influence energy consumption patterns in a facility. This section assesses the identification and measurement of key drivers that significantly influence energy usage. Understanding these variables is crucial for accurate energy analysis and forecasting.',
      'Data Capture and Storage': 'This section examines the automation level of meter reading, data entry processes, error checking mechanisms, data capture frequency, and historical data storage capabilities. Effective data capture and storage systems are essential for reliable energy management.',
      'Data Analysis': 'This section evaluates the system\'s capability to perform complex analysis, integration with data capture systems, performance comparison against drivers, and data analysis flexibility. Sophisticated analysis capabilities enable better energy management decisions.',
      'Target Setting': 'This section assesses how targets are established, their realism, acceptance by EAC owners, accountability structures, and the inclusiveness of the target-setting process. Effective target setting drives energy performance improvement.',
      'Energy Performance Reporting': 'This section examines report production speed, generation responsibility, timeliness, user-friendliness, content quality, accessibility, drill-down capabilities, and IT system integration. Quality reporting enables informed decision-making.',
      'System Support Skills': 'This section evaluates internal capabilities for maintaining meters, data capture systems, network integration, IT environment status, EMIS operation skills, and analytical capabilities. Strong internal capabilities ensure system sustainability and effectiveness.'
    };
    return descriptions[sectionTitle] || 'This section evaluates specific aspects of your EMIS implementation.';
  };

  const getSectionRecommendations = (section: any) => {
    const recommendations: { [key: string]: string[] } = {
      'Energy Meters': [
        'Implement comprehensive sub-metering strategy to achieve 80%+ coverage',
        'Establish clear Energy Account Centres aligned with operational processes',
        'Ensure all meters are appropriate for their measurement conditions',
        'Develop regular calibration and maintenance schedules'
      ],
      'Relevant Variables': [
        'Identify all key drivers affecting energy consumption',
        'Establish correlation between drivers and energy usage patterns',
        'Implement automated measurement systems for critical variables',
        'Regular review and validation of driver relationships'
      ],
      'Data Capture and Storage': [
        'Automate meter reading and data entry processes',
        'Implement comprehensive error checking mechanisms',
        'Ensure adequate data capture frequency for analysis needs',
        'Establish robust historical data storage capabilities'
      ],
      'Data Analysis': [
        'Upgrade analysis capabilities to support complex statistical methods',
        'Improve integration between data capture and analysis systems',
        'Implement flexible data analysis and aggregation tools',
        'Develop multiple regression analysis capabilities'
      ],
      'Target Setting': [
        'Establish statistically-based target setting processes',
        'Ensure realistic and achievable targets based on historical data',
        'Improve EAC owner engagement and accountability',
        'Implement inclusive target-setting processes'
      ],
      'Energy Performance Reporting': [
        'Automate report generation for immediate availability',
        'Improve report user-friendliness and accessibility',
        'Implement comprehensive drill-down capabilities',
        'Enhance integration with existing IT systems'
      ],
      'System Support Skills': [
        'Develop internal technical capabilities for system maintenance',
        'Improve network integration between systems',
        'Upgrade IT environment to current standards',
        'Enhance analytical and target-setting skills through training'
      ]
    };
    
    const sectionRecs = recommendations[section.title] || [];
    if (section.percentage < 50) {
      return sectionRecs.slice(0, 3);
    } else if (section.percentage < 70) {
      return sectionRecs.slice(0, 2);
    } else {
      return sectionRecs.slice(0, 1);
    }
  };

  const downloadWord = () => {
    const content = document.getElementById('assessment-results');
    if (!content) return;

    // Create spider chart as base64 image
    const canvas = document.querySelector('canvas');
    let chartImageData = '';
    if (canvas) {
      chartImageData = canvas.toDataURL('image/png');
    }

    const htmlContent = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' 
             xmlns:w='urn:schemas-microsoft-com:office:word' 
             xmlns='http://www.w3.org/TR/REC-html40'>
        <head>
          <meta charset='utf-8'>
          <title>EMIS Assessment Results</title>
          <style>
            body { 
              font-family: 'Calibri', 'Arial', sans-serif; 
              margin: 40px; 
              line-height: 1.6; 
              color: #333;
            }
            .header { 
              text-align: center; 
              margin-bottom: 30px; 
              border-bottom: 2px solid #3B82F6;
              padding-bottom: 20px;
            }
            .header h1 {
              color: #3B82F6;
              font-size: 24px;
              margin-bottom: 10px;
            }
            .overall-score {
              background: #f0f9ff;
              padding: 20px;
              border-radius: 8px;
              margin: 20px 0;
              text-align: center;
              border: 1px solid #3B82F6;
            }
            .section { 
              margin-bottom: 25px; 
              padding: 20px; 
              border-left: 4px solid #3B82F6;
              background: #f9f9f9;
              page-break-inside: avoid;
            }
            .section h3 {
              color: #3B82F6;
              margin-bottom: 15px;
              font-size: 18px;
            }
            .score { 
              font-weight: bold; 
              color: #3B82F6;
              font-size: 16px;
            }
            .recommendation { 
              background: #e0f2fe; 
              padding: 15px; 
              margin: 15px 0; 
              border-radius: 5px;
              border-left: 3px solid #0288d1;
            }
            .recommendation h4 {
              color: #0288d1;
              margin-bottom: 10px;
            }
            h1, h2, h3 { 
              color: #3B82F6; 
              page-break-after: avoid;
            }
            h2 {
              font-size: 20px;
              margin-top: 30px;
              margin-bottom: 15px;
            }
            ul {
              margin: 10px 0 10px 20px;
            }
            li {
              margin-bottom: 8px;
            }
            .description {
              font-style: italic;
              color: #666;
              margin-bottom: 15px;
              padding: 10px;
              background: #f5f5f5;
              border-radius: 4px;
            }
            .progress-bar {
              width: 100%;
              height: 20px;
              background: #e0e0e0;
              border-radius: 10px;
              overflow: hidden;
              margin: 10px 0;
            }
            .progress-fill {
              height: 100%;
              background: #3B82F6;
              border-radius: 10px;
            }
            .chart-container {
              text-align: center;
              margin: 20px 0;
              page-break-inside: avoid;
            }
            .chart-image {
              max-width: 100%;
              height: auto;
              border: 1px solid #ddd;
              border-radius: 8px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>EMIS Assessment Results</h1>
            <p>Energy Management Information System Evaluation Report</p>
            <p><strong>Assessment Date:</strong> ${new Date().toLocaleDateString()}</p>
          </div>

          <div class="overall-score">
            <h2>Overall Assessment Score</h2>
            <div class="score">${results.overallPercentage}% (${results.totalScore}/${results.maxTotalScore} points)</div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: ${results.overallPercentage}%"></div>
            </div>
          </div>

          <h2>Executive Summary</h2>
          <p>This assessment evaluates your facility's Energy Management Information System (EMIS) across seven critical areas. The overall score of ${results.overallPercentage}% indicates ${results.overallPercentage >= 80 ? 'excellent' : results.overallPercentage >= 60 ? 'good' : results.overallPercentage >= 40 ? 'moderate' : 'significant improvement needed'} EMIS capabilities.</p>

          ${chartImageData ? `
          <div class="chart-container">
            <h2>Performance Overview - Spider Chart</h2>
            <img src="${chartImageData}" alt="EMIS Performance Spider Chart" class="chart-image" />
          </div>
          ` : ''}

          <h2>Section Performance Analysis</h2>
          ${results.sections.map(section => `
            <div class="section">
              <h3>${section.title}</h3>
              <div class="score">Score: ${section.percentage}% (${section.totalScore}/${section.maxScore} points)</div>
              <div class="progress-bar">
                <div class="progress-fill" style="width: ${section.percentage}%"></div>
              </div>
              
              <div class="description">
                ${getSectionDescription(section.title)}
              </div>

              <div class="recommendation">
                <h4>Recommendations for ${section.title}:</h4>
                <ul>
                  ${getSectionRecommendations(section).map(rec => `<li>${rec}</li>`).join('')}
                </ul>
              </div>
            </div>
          `).join('')}

          <h2>Detailed Assessment Findings</h2>
          <div class="recommendation">
            <h4>Detailed Question Analysis and Next Steps:</h4>
            <ul>
              ${results.recommendations.map(rec => `
                <li>
                  <strong>${rec.questionTitle}</strong><br/>
                  Selected Answer: ${rec.selectedAnswer} (${rec.score} pts)<br/>
                  ${rec.selectedAnswerDescription ? `Assessment: This facility ${rec.selectedAnswerDescription}<br/>` : ''}
                  ${rec.conditionalNextStep ? `<em>Next Steps: ${rec.conditionalNextStep}</em>` : ''}
                </li>
              `).join('')}
            </ul>
          </div>

          <h2>Next Steps and Implementation Priorities</h2>
          <p>Based on this comprehensive assessment, we recommend focusing on the lowest-scoring sections first. Sections scoring below 70% should be prioritized for immediate improvement. Consider developing an action plan that addresses the specific recommendations for each section.</p>
          
          <div class="recommendation">
            <h4>Priority Actions:</h4>
            <ol>
              <li><strong>Immediate (0-3 months):</strong> Address sections scoring below 50%</li>
              <li><strong>Short-term (3-6 months):</strong> Improve sections scoring 50-70%</li>
              <li><strong>Medium-term (6-12 months):</strong> Optimize sections scoring above 70%</li>
              <li><strong>Ongoing:</strong> Maintain and continuously improve all systems</li>
            </ol>
          </div>

          <h2>Conclusion</h2>
          <p>This EMIS assessment provides a comprehensive evaluation of your facility's energy management capabilities. The detailed findings and recommendations should guide your energy management improvement efforts and help prioritize investments in EMIS enhancements.</p>
        </body>
      </html>
    `;

    const blob = new Blob([htmlContent], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'EMIS_Assessment_Results.doc';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div id="assessment-results" className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <TrendingUp className="mx-auto h-12 w-12 text-blue-600 mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">EMIS Assessment Results</h1>
          <p className="text-gray-600">Your facility's Energy Management Information System evaluation</p>
        </div>

        {/* Overall Score */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Overall Assessment Score</h2>
            <div className="flex items-center justify-center space-x-4">
              <span className={`text-4xl font-bold px-4 py-2 rounded-lg ${getScoreColor(results.overallPercentage)}`}>
                {results.overallPercentage}%
              </span>
              <div className="text-gray-600">
                <div>{results.totalScore} / {results.maxTotalScore} points</div>
              </div>
            </div>
          </div>
        </div>

        {/* Spider Chart */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Performance Overview</h3>
          <div className="bg-gray-50 rounded-lg p-6">
            <SpiderChart results={results} />
          </div>
        </div>

        {/* Detailed Section Analysis */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Detailed Section Analysis</h3>
          <div className="space-y-6">
            {results.sections.map((section, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-600">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">{section.title}</h4>
                  <div className="flex items-center space-x-2">
                    {getScoreIcon(section.percentage)}
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(section.percentage)}`}>
                      {section.percentage}%
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  {getSectionDescription(section.title)}
                </p>
                
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-600">Score: {section.totalScore} / {section.maxScore} points</span>
                  <div className="w-48 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${section.percentage}%` }}
                    ></div>
                  </div>
                </div>

                <div className="mt-4">
                  <h5 className="font-medium text-gray-800 mb-2">Recommendations for {section.title}:</h5>
                  <ul className="space-y-1">
                    {getSectionRecommendations(section).map((rec, recIndex) => (
                      <li key={recIndex} className="text-sm text-gray-700 flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specific Facility Findings */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Detailed Question Analysis and Next Steps</h3>
          <div className="space-y-3">
            {results.recommendations.map((recommendation, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{recommendation.questionTitle}</h4>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700"><strong>Selected Answer:</strong> {recommendation.selectedAnswer}</span>
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                      {recommendation.score} pts
                    </span>
                  </div>
                  {recommendation.selectedAnswerDescription && (
                    <p className="text-gray-600 mb-3">
                      <strong>Assessment:</strong> This facility {recommendation.selectedAnswerDescription}
                    </p>
                  )}
                </div>
                
                {recommendation.conditionalNextStep && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-yellow-800 mb-1">Recommended Next Steps:</p>
                        <p className="text-sm text-yellow-700">{recommendation.conditionalNextStep}</p>
                      </div>
                    </div>
                  </div>
                )}
                
                {!recommendation.conditionalNextStep && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <p className="text-sm text-green-700">Performance meets recommended thresholds.</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* General Section Recommendations */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">General Section Improvement Recommendations</h3>
          <div className="space-y-4">
            {results.sections.map((section, index) => (
              <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">{section.title} ({section.percentage}%)</h4>
                <ul className="space-y-1">
                  {getSectionRecommendations(section).map((rec, recIndex) => (
                    <li key={recIndex} className="text-sm text-blue-800 flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Legacy section for backward compatibility - can be removed if not needed */}
        <div className="mb-8" style={{ display: 'none' }}>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Legacy Recommendations</h3>
          <div className="space-y-3">
            {results.recommendations.map((recommendation, index) => (
              <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-blue-800">Legacy format would go here</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between pt-6 border-t border-gray-200">
          <div className="flex gap-3">
            <button
              onClick={downloadWord}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download className="h-4 w-4" />
              <span>Download Word Report</span>
            </button>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={onBack}
              className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentResults;