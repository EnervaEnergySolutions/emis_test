import React, { useState } from 'react';
import { UserInfo } from '../types';
import { Building2, Users, MapPin, Hash } from 'lucide-react';

interface OrganizationInfoProps {
  onComplete: (userInfo: UserInfo) => void;
}

const OrganizationInfo: React.FC<OrganizationInfoProps> = ({ onComplete }) => {
  const [formData, setFormData] = useState({
    appId: '',
    orgName: '',
    orgType: '11 - Agriculture, forestry, fishing and hunting',
    siteAddress: '',
  });
  const [attendeeList, setAttendeeList] = useState<string[]>([]);
  const [newAttendee, setNewAttendee] = useState('');

  const facilityTypes = [
    '11 - Agriculture, forestry, fishing and hunting',
    '21 - Mining, quarrying, and oil and gas extraction',
    '22 - Utilities',
    '23 - Construction',
    '31-32-33 - Manufacturing',
    '48 - Transportation',
    '56 - Administrative and support, waste management and remediation services'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const addAttendee = () => {
    if (newAttendee.trim()) {
      setAttendeeList([...attendeeList, newAttendee.trim()]);
      setNewAttendee('');
    }
  };

  const removeAttendee = (index: number) => {
    setAttendeeList(attendeeList.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (!formData.appId.trim()) {
      alert('Please enter an Application ID.');
      return;
    }

    if (!formData.orgName.trim() || !formData.siteAddress.trim()) {
      alert('Please fill in all required fields.');
      return;
    }

    const userInfo: UserInfo = {
      ...formData,
      attendeeNames: attendeeList
    };

    onComplete(userInfo);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 m-6">
      <div className="text-center mb-8">
        <Building2 className="mx-auto h-12 w-12 text-blue-600 mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Organization Information</h1>
        <p className="text-gray-600">Please provide your organization details to begin the EMIS assessment</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Hash className="h-4 w-4 mr-2" />
            Application ID *
          </label>
          <input
            type="text"
            name="appId"
            value={formData.appId}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            placeholder="Enter your application ID"
            required
          />
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Building2 className="h-4 w-4 mr-2" />
            Organization Name *
          </label>
          <input
            type="text"
            name="orgName"
            value={formData.orgName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            placeholder="Enter organization name"
            required
          />
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Building2 className="h-4 w-4 mr-2" />
            Facility Type *
          </label>
          <select
            name="orgType"
            value={formData.orgType}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          >
            {facilityTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <MapPin className="h-4 w-4 mr-2" />
            Facility Address *
          </label>
          <input
            type="text"
            name="siteAddress"
            value={formData.siteAddress}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            placeholder="Enter facility address"
            required
          />
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Users className="h-4 w-4 mr-2" />
            Attendee Names
          </label>
          <div className="flex gap-2 mb-3">
            <input
              type="text"
              value={newAttendee}
              onChange={(e) => setNewAttendee(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addAttendee()}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Enter attendee name"
            />
            <button
              type="button"
              onClick={addAttendee}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Add
            </button>
          </div>
          
          {attendeeList.length > 0 && (
            <ul className="space-y-2 max-h-32 overflow-y-auto">
              {attendeeList.map((name, index) => (
                <li key={index} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg">
                  <span className="text-gray-700">{name}</span>
                  <button
                    type="button"
                    onClick={() => removeAttendee(index)}
                    className="text-red-600 hover:text-red-800 font-medium transition-colors"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="pt-6">
          <button
            onClick={handleSubmit}
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
          >
            Start Assessment
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrganizationInfo;