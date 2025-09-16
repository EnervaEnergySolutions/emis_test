import React from 'react';
import { Building, Settings, ArrowRight } from 'lucide-react';

interface FacilityChoiceProps {
  onChoice: (type: 'with-emis' | 'without-emis') => void;
}

const FacilityChoice: React.FC<FacilityChoiceProps> = ({ onChoice }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <Building className="mx-auto h-12 w-12 text-blue-600 mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Facility Assessment Type</h1>
          <p className="text-gray-600">Please select the type of assessment that best describes your facility</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Facility with EMIS */}
          <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-colors cursor-pointer group"
               onClick={() => onChoice('with-emis')}>
            <div className="text-center">
              <Settings className="mx-auto h-16 w-16 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Facility with EMIS</h2>
              <p className="text-gray-600 mb-6">
                Your facility already has an Energy Management Information System (EMIS) in place. 
                We'll assess your current system's capabilities and performance.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-blue-900 mb-2">This assessment includes:</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Energy metering and data capture evaluation</li>
                  <li>• Data analysis and reporting assessment</li>
                  <li>• System performance scoring</li>
                  <li>• Tailored improvement recommendations</li>
                  <li>• Spider chart visualization of results</li>
                </ul>
              </div>
              <button className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors group-hover:bg-blue-700">
                <span>Assess Existing EMIS</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Facility without EMIS */}
          <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-green-500 transition-colors cursor-pointer group"
               onClick={() => onChoice('without-emis')}>
            <div className="text-center">
              <Building className="mx-auto h-16 w-16 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Facility without EMIS</h2>
              <p className="text-gray-600 mb-6">
                Your facility does not currently have an EMIS. We'll help you define requirements 
                and specifications for implementing a new system.
              </p>
              <div className="bg-green-50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-green-900 mb-2">This survey includes:</h3>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Technical objectives definition</li>
                  <li>• EMIS specifications survey</li>
                  <li>• Data analysis and reporting assessment</li>
                  <li>• System feature selection</li>
                  <li>• Implementation recommendations</li>
                </ul>
              </div>
              <button className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors group-hover:bg-green-700">
                <span>Plan New EMIS</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityChoice;