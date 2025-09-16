import React, { useState } from 'react';
import { TechnicalObjective } from '../types';
import { Target, ArrowRight } from 'lucide-react';

interface TechnicalObjectivesProps {
  onComplete: (objectives: TechnicalObjective[]) => void;
}

const TechnicalObjectives: React.FC<TechnicalObjectivesProps> = ({ onComplete }) => {
  const [objectives, setObjectives] = useState<TechnicalObjective[]>([
    { id: 'obj1', text: 'Facilitate continuous energy management and increased operational efficiency', checked: false },
    { id: 'obj2', text: 'Enable the organization to reduce portfolio energy use by', checked: false, reductionPercentage: '' },
    { id: 'obj3', text: 'Automate energy performance analysis using an energy information system', checked: false },
    { id: 'obj4', text: 'Perform automated fault detection and diagnostics (FDD) for the HVAC system', checked: false },
    { id: 'obj5', text: 'Achieve automated system optimization with the EMIS software performing supervisory control to supplement the building automation system (BAS)', checked: false },
    { id: 'obj6', text: 'Track the impact of energy efficiency projects, and measure and verify savings', checked: false },
    { id: 'obj7', text: 'Track and manage peak demand', checked: false },
    { id: 'obj8', text: 'Produce reports for energy and utility management, operations, and maintenance', checked: false },
    { id: 'obj9', text: 'Support implementation of ISO 50001 Ready', checked: false },
    { id: 'obj10', text: 'Manage GHG emission monitoring and subsequent reporting', checked: false }
  ]);

  const handleObjectiveChange = (id: string, checked: boolean) => {
    setObjectives(prev => prev.map(obj => 
      obj.id === id ? { ...obj, checked } : obj
    ));
  };

  const handlePercentageChange = (value: string) => {
    setObjectives(prev => prev.map(obj => 
      obj.id === 'obj2' ? { ...obj, reductionPercentage: value } : obj
    ));
  };

  const handleNext = () => {
    onComplete(objectives);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Target className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Technical Objectives Survey</h1>
          </div>
          <p className="text-gray-600">Select the technical objectives that align with your organization's energy management goals.</p>
        </div>

        <div className="space-y-6">
          {objectives.map((objective) => (
            <div key={objective.id} className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-600">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={objective.checked}
                  onChange={(e) => handleObjectiveChange(objective.id, e.target.checked)}
                  className="mt-1 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <div className="flex-1">
                  <span className="text-gray-900 font-medium">
                    {objective.text}
                    {objective.id === 'obj2' && (
                      <>
                        {objective.checked && (
                          <input
                            type="text"
                            value={objective.reductionPercentage}
                            onChange={(e) => handlePercentageChange(e.target.value)}
                            placeholder="Enter percentage"
                            className="ml-2 w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                          />
                        )}
                        <span> percent</span>
                      </>
                    )}
                  </span>
                </div>
              </label>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-8 pt-6 border-t border-gray-200">
          <button
            onClick={handleNext}
            className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <span>Next</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechnicalObjectives;