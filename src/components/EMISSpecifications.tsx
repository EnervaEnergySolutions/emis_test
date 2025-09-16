import React, { useState, useEffect } from 'react';
import { EMISSpecsData, SubmeterRow } from '../types';
import { Settings, CheckCircle, AlertCircle } from 'lucide-react';

interface EMISSpecificationsProps {
  onComplete: (data: EMISSpecsData) => void;
}

const EMISSpecifications: React.FC<EMISSpecificationsProps> = ({ onComplete }) => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [completedTabs, setCompletedTabs] = useState<Set<string>>(new Set(['tab1']));
  const [submeterRows, setSubmeterRows] = useState<SubmeterRow[]>([
    { id: '1', meterName: '', parameter: '', interval: 'Monthly', minutes: '', comments: '' }
  ]);
  const [formData, setFormData] = useState<EMISSpecsData>({
    additionalMonitoring: `Additional metering and monitoring may include the following:

• Major energy end uses (panel level): Switchgear panel, etc.
• Equipment level energy end uses: chiller, boiler, cooling towers, pumps, compressors, air handlers, major electromotors, etc. 
• Functional area/zones of building/plant energy end uses: chiller plant, compressed air system, etc.
• Additional building automation system or process control points`,
    otherDataSources: `• The software platform must have the ability to collect dynamic and static data from multiple sources (e.g., BACnet, Modbus, OPC, CSV, RDBMS, and SQL).
• The technology will integrate with multiple external data sources such as local or on-site weather stations or third-party weather providers. Degree-days will be calculated automatically and charted for inclusion in year-to-year or month-to-month energy comparisons. 
• The technology will integrate with existing lighting control and plug control systems so these data sources are available for analysis and diagnostics. [List the lighting control and/or plug load control systems.]
• The technology will integrate with the owner's CMMS. [Indicate the CMMS vendor.]
• The technology will integrate with existing IoT-based sensing so these data sources are available for analysis and diagnostics. [List the sensing technologies and communication protocols.]
• Provision of an API to support integration of data and fault findings with the third-party applications such as business intelligence software or other accounting systems.`,
    energyConsumptionTracking: `o	Whole-building level: electricity, gas, water, steam, etc. 
o	End-use submetered level: Pumping system, Air Compressors, HVAC, lighting, etc.
o	Equipment submetered level: chiller, boiler, cooling tower, pump, etc.
o	Renewable energy sources: Solar photovoltaic, biogas, etc.`
  });

  const tabs = [
    { id: 'tab1', name: 'Data Integration' },
    { id: 'tab2', name: 'Utility Bill Analytics' },
    { id: 'tab3', name: 'Interval Meter Data Analytics' },
    { id: 'tab4', name: 'System Data Analytics' },
    { id: 'tab5', name: 'Automated System Optimization' },
    { id: 'tab6', name: 'Project Management and Reporting' },
    { id: 'tab7', name: 'IT Requirements' },
    { id: 'tab8', name: 'Technical Warranty, Support and Training' }
  ];

  const getCompletionPercentage = () => {
    return Math.round((completedTabs.size / tabs.length) * 100);
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setCompletedTabs(prev => new Set([...prev, tabId]));
  };

  const handleCheckboxChange = (id: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [id]: checked }));
  };

  const handleInputChange = (id: string, value: string) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const addSubmeterRow = () => {
    const newRow: SubmeterRow = {
      id: Date.now().toString(),
      meterName: '',
      parameter: '',
      interval: 'Monthly',
      minutes: '',
      comments: ''
    };
    setSubmeterRows([...submeterRows, newRow]);
  };

  const removeSubmeterRow = (id: string) => {
    setSubmeterRows(submeterRows.filter(row => row.id !== id));
  };

  const updateSubmeterRow = (id: string, field: keyof SubmeterRow, value: string) => {
    setSubmeterRows(rows => 
      rows.map(row => 
        row.id === id ? { ...row, [field]: value } : row
      )
    );
  };

  const handleGenerateReport = () => {
    if (completedTabs.size !== tabs.length) {
      alert('Please visit and complete all modules before generating the report.');
      return;
    }
    onComplete({ ...formData, submeterRows });
  };

  const renderSection = (id: string, title: string, content: React.ReactNode) => (
    <div className="bg-gray-50 rounded-lg p-6 section">
      <label className="flex items-center text-lg font-semibold text-gray-900 mb-4">
        <input
          type="checkbox"
          checked={formData[id] || false}
          onChange={(e) => handleCheckboxChange(id, e.target.checked)}
          className="mr-3 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        {title}
      </label>
      <div className={`inner-content ${!formData[id] ? 'hidden' : ''} ml-8 space-y-4`}>
        {content}
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Settings className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">EMIS Specifications Survey</h1>
          </div>
          
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

          {/* Tab Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`p-3 rounded-lg text-sm font-medium transition-all relative ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : completedTabs.has(tab.id)
                    ? 'bg-green-100 text-green-800 border border-green-300'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="flex items-center justify-center mb-1">
                  {completedTabs.has(tab.id) ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    <div className="h-4 w-4 rounded-full border-2 border-current" />
                  )}
                </div>
                <div className="text-xs">{tab.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'tab1' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4">Data Integration</h2>
            
            {/* 1.1 Utility data integration */}
            {renderSection('include_1_1', '1.1 Utility data integration', (
              <>
                <p className="text-gray-700">The technology will provide the capability to integrate utility meter data from existing systems:</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Electricity', 'Natural Gas', 'Propane', 'Steam', 'Chilled Water', 'Water', 'Waste Water', 'Compressed Air', 'Renewable Energy'].map((utility) => (
                    <label key={utility} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData[`utility_${utility.replace(/\s+/g, '')}_tab1`] || false}
                        onChange={(e) => handleCheckboxChange(`utility_${utility.replace(/\s+/g, '')}_tab1`, e.target.checked)}
                        className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="text-sm text-gray-700">{utility}</span>
                    </label>
                  ))}
                </div>
              </>
            ))}

            {/* 1.2 Interval sub-meter data integration */}
            {renderSection('include_1_2', '1.2 Interval sub-meter data integration', (
              <>
                <p className="text-gray-700">The technology will integrate with new and existing meters and monitoring systems from an interval meter and/or meters with pulse outputs. Where it is necessary to take advantage of existing metering data, the technology will integrate with the following systems for whole facility meters and/or submeters:</p>
                
                {/* Submeter Table */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-3 text-left">Meter Name</th>
                        <th className="border border-gray-300 p-3 text-left">Parameter</th>
                        <th className="border border-gray-300 p-3 text-left">Intervals</th>
                        <th className="border border-gray-300 p-3 text-left">Comments</th>
                        <th className="border border-gray-300 p-3 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {submeterRows.map((row) => (
                        <tr key={row.id}>
                          <td className="border border-gray-300 p-2">
                            <input
                              type="text"
                              value={row.meterName}
                              onChange={(e) => updateSubmeterRow(row.id, 'meterName', e.target.value)}
                              className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                              placeholder="Meter Name"
                            />
                          </td>
                          <td className="border border-gray-300 p-2">
                            <input
                              type="text"
                              value={row.parameter}
                              onChange={(e) => updateSubmeterRow(row.id, 'parameter', e.target.value)}
                              className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                              placeholder="Parameter"
                            />
                          </td>
                          <td className="border border-gray-300 p-2">
                            <select
                              value={row.interval}
                              onChange={(e) => updateSubmeterRow(row.id, 'interval', e.target.value)}
                              className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                            >
                              <option>Monthly</option>
                              <option>Daily</option>
                              <option>Hourly</option>
                              <option>Sub-hourly</option>
                            </select>
                            {row.interval === 'Sub-hourly' && (
                              <div className="mt-2">
                                <input
                                  type="text"
                                  value={row.minutes}
                                  onChange={(e) => updateSubmeterRow(row.id, 'minutes', e.target.value)}
                                  className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                                  placeholder="15"
                                />
                                <span className="text-xs text-gray-600 ml-1">mins interval</span>
                              </div>
                            )}
                          </td>
                          <td className="border border-gray-300 p-2">
                            <input
                              type="text"
                              value={row.comments}
                              onChange={(e) => updateSubmeterRow(row.id, 'comments', e.target.value)}
                              className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                              placeholder="Comments"
                            />
                          </td>
                          <td className="border border-gray-300 p-2">
                            <button
                              onClick={() => removeSubmeterRow(row.id)}
                              className="px-2 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <button
                  onClick={addSubmeterRow}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Add Row
                </button>
                
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• Data should be available for analysis in real or near-real time through a continuous and automated data acquisition process.</p>
                  <p>• The technology will have the capability to consolidate meter readings to create virtual meter points. In other words, it can add and subtract the readings from multiple meters at the same interval, to produce a calculated time series of energy use.</p>
                  <p>• The technology will be able to upload and store a minimum history of 5 years of energy use or other data from standard spreadsheet or text file formats.</p>
                  <p>• The technology will have the capacity to store at least 5 years of data, trended at intervals up to 15 minutes for analysis, reporting, and visualization.</p>
                  <p>• The technology will have the ability to parse out data cluster displays into coincident time intervals ranging from 10 minutes to 1 year.</p>
                </div>
              </>
            ))}

            {/* 1.3 Building automation system (BAS) data integration */}
            {renderSection('include_1_3', '1.3 Building automation system (BAS) data integration', (
              <>
                <p className="text-gray-700">The technology will extract data from the building control systems for Fault Detection and Diagnostics (FDD) functions:</p>
                
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• The data collection interval will be selected to meet the needs of the FDD software and is compatible with BAS trending, with 15-minute interval data being the most implemented. Change of value and/or slower polling rates may be needed to reduce network burden on the control system, and the effect of data collection interval on network speed will be determined during FDD setup. Slower or faster polling rates may also be implemented based on the type of fault (e.g., hunting and cycling faults may need one- to five-minute interval data).</p>
                  <p>• Integration with non-legacy vintages of BAS providers will occur via common protocols such as BACnet and Modbus, or through the BAS vendor's gateway. If the BAS does not support BACnet, a data gateway or protocol converter will need to be installed by the EMIS vendor.</p>
                  <p>• BAS data will be integrated as follows:</p>
                </div>

                <div className="ml-4">
                  <p className="font-medium text-gray-800 mb-2">These data include:</p>
                  <div className="space-y-2">
                    {['chiller/boiler plant data', 'air handler data', 'zone device data'].map((item) => (
                      <label key={item} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData[`bas_${item.replace(/[^a-zA-Z]/g, '')}_1_3`] || false}
                          onChange={(e) => handleCheckboxChange(`bas_${item.replace(/[^a-zA-Z]/g, '')}_1_3`, e.target.checked)}
                          className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="text-sm text-gray-700">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="ml-4">
                  <p className="font-medium text-gray-800 mb-2">Integration will include but not be limited to:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {['energy meter data already connected into the BAS', 'equipment status', 'setpoints', 'valve/damper control signals', 'fan speed', 'air flow rate', 'pump water flow rate', 'air and water temperatures'].map((item) => (
                      <label key={item} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData[`bas_${item.replace(/[^a-zA-Z]/g, '')}_1_3`] || false}
                          onChange={(e) => handleCheckboxChange(`bas_${item.replace(/[^a-zA-Z]/g, '')}_1_3`, e.target.checked)}
                          className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="text-sm text-gray-700">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-700">
                  <p>• Near-real time data polling or end of day batch uploads to the EMIS are acceptable.</p>
                  <p>• The data integration will not adversely affect the speed of the existing BAS control or visualization functions.</p>
                </div>
              </>
            ))}

            {/* 1.4 Additional monitoring */}
            {renderSection('include_1_4', '1.4 Additional monitoring required or preferred', (
              <textarea
                value={formData.additionalMonitoring || ''}
                onChange={(e) => handleInputChange('additionalMonitoring', e.target.value)}
                className="w-full h-40 p-3 border border-gray-300 rounded-lg resize-vertical"
              />
            ))}

            {/* 1.5 Metadata / data tagging */}
            {renderSection('include_1_5', '1.5 Metadata / data tagging', (
              <>
                <p className="text-gray-700">The use of standard naming conventions and a metadata schema (which may be referred to as 'data tags') improves the ability of the EMIS to consistently analyze, visualize, and derive value from operational data. A metadata schema will be selected for the EMIS project, defining at a minimum:</p>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>a data dictionary for all terms used in the schema;</li>
                  <li>a data taxonomy, providing categories and subcategories for the defined terms;</li>
                </ul>
                <p className="text-gray-700">The specific version of the metadata schema should be noted, as well as noting whether the schema is an adaptation or extension of another existing schema.</p>
                <p className="text-gray-700">The EMIS vendor will provide appropriate metadata for all data integrated with the EMIS, in alignment with the schema or tagging system selected for the project.</p>
              </>
            ))}

            {/* 1.6 Other data sources and APIs */}
            {renderSection('include_1_6', '1.6 Other data sources and APIs', (
              <>
                <p className="text-gray-700">The software platform may need to integrate with other software platforms used by the facility to operate and manage.</p>
                <textarea
                  value={formData.otherDataSources || ''}
                  onChange={(e) => handleInputChange('otherDataSources', e.target.value)}
                  className="w-full h-48 p-3 border border-gray-300 rounded-lg resize-vertical"
                />
              </>
            ))}

            {/* 1.7 Data validation */}
            {renderSection('include_1_7', '1.7 Data validation', (
              <>
                <p className="text-gray-700">• The data connection to the EMIS will be validated by the EMIS vendor. In case of a data connection interruption, the data should be stored locally for at least two weeks of hourly data, or one week of sub-hourly data (e.g., 15-minute or 5-minute data).</p>
                <p className="text-gray-700">• The technology will detect meter and sensor data quality issues such as gaps, spikes, and flat-lines, and the technology provider will have an option or service to automatically fill and/or correct data.</p>
                <p className="text-gray-700">• The EMIS vendor will help to identify inaccurate data.</p>
                <p className="text-gray-700">• The EMIS vendor will address insufficient data collection intervals, false negative and false positive diagnostics, dropped communications, and erroneous metadata tagging.</p>
              </>
            ))}
          </div>
        )}

        {/* Tab 2: Utility Bill Analytics */}
        {activeTab === 'tab2' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4">Utility Bill Analytics</h2>
            
            {renderSection('include_2_1', '2.1 Utility bill management', (
              <>
                <p className="text-gray-700">• The technology will provide the capability to allocate utility costs to different tenants or occupant groups sharing a building, to enable recharges and tenant billing.</p>
                <p className="text-gray-700">• The technology will provide capabilities for savings analysis and comparison across a building portfolio through benchmarking, deriving energy use intensity, aligning bills with a calendar month, and normalizing usage based on weather data using standard protocols such as IPMVP Option C.</p>
              </>
            ))}

            {renderSection('include_2_2', '2.2 Utility budgeting', (
              <>
                <p className="text-gray-700">• The technology will chart and report energy costs against budget, indicating surplus/deficit.</p>
                <p className="text-gray-700">• The technology will include custom utility tariffs for energy cost and demand calculations.</p>
              </>
            ))}

            {renderSection('include_2_3', '2.3 Greenhouse gas (GHG) tracking', (
              <>
                <p className="text-gray-700">• The technology will calculate, monitor, and report GHG emissions associated with facility energy use. The technology will supply recommended GHG conversion factors from a referenceable source, and the software will allow the users to enter their own conversion factors.</p>
                <p className="text-gray-700">• Greenhouse gas calculations will account for on-site renewables, where relevant.</p>
              </>
            ))}
          </div>
        )}

        {/* Tab 3: Interval Meter Data Analytics */}
        {activeTab === 'tab3' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4">Interval Meter Data Analytics</h2>
            
            {renderSection('include_3_1', '3.1 Energy consumption tracking', (
              <>
                <p className="text-gray-700">The technology will track and provide flexible charting capabilities for multiple meters on an hourly or sub hourly (e.g., 15-minute) basis.</p>
                <textarea
                  value={formData.energyConsumptionTracking || ''}
                  onChange={(e) => handleInputChange('energyConsumptionTracking', e.target.value)}
                  className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-vertical"
                />
                <div className="space-y-2 text-gray-700">
                  <p className="font-medium">Energy cost tracking</p>
                  <ul className="list-disc ml-6">
                    <li>The technology will calculate and provide visualizations of near real-time/daily/monthly and historic energy costs.</li>
                    <li>The technology will use facility-specific tariffs in $/energy unit.</li>
                  </ul>
                  <p className="font-medium">Energy unit conversion</p>
                  <ul className="list-disc ml-6">
                    <li>The technology will have the ability to normalize the data according to factors that are known to affect energy consumption, such as production rates, floor area, hours of operation, heating degree days, and cooling degree days.</li>
                    <li>The technology will have the capability to convert, display, and report energy use in total GJ and additional environmental metrics such as CO2 equivalent.</li>
                  </ul>
                </div>
              </>
            ))}

            {renderSection('include_3_2', '3.2 Energy performance analysis', (
              <>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p className="font-medium">Time series load profiling</p>
                    <ul className="list-disc ml-6">
                      <li>The technology will provide plots of at least 168-hour periods of hourly (or more frequent) interval energy usage versus time.</li>
                      <li>The technology will provide options to select the time period and data points that are plotted.</li>
                      <li>The technology will allow multiple user-selected data points to be plotted on a single chart or graph.</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium">Benchmarking</p>
                    <ul className="list-disc ml-6">
                      <li>Benchmarking using the following meter-level key performance indicators (KPIs) will be included in the EMIS for the following metrics. The technology will allow the user to add custom KPIs and custom normalization factors. The benchmarks will be configured to allow for comparison to the prior [day/week/month/year].</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium">Baseline energy consumption modeling</p>
                    <ul className="list-disc ml-6">
                      <li>The technology will characterize and predict the typical or expected energy usage based on key drivers such as weather (degree days or outside air temperature), production, time of day/week, and other variables.</li>
                      <li>The baseline will be used for energy savings calculations, near-future load predictions, energy use comparisons, and energy anomaly detection.</li>
                      <li>The technology has the capability to set up multiple baselines, e.g., prior year and a corporate goal baseline.</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium">Energy anomaly detection</p>
                    <ul className="list-disc ml-6">
                      <li>The technology will identify and flag unexpectedly high or low energy use at the whole-facility and each submeter.</li>
                      <li>The technology will allow for energy anomaly detection thresholds to be user-defined.</li>
                      <li>The technology will provide the ability to track energy anomalies (duration and persistence) to facilitate response and resolution.</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium">Building energy dashboards and reports</p>
                    <ul className="list-disc ml-6">
                      <li>The technology provider will provide a public-facing configurable dashboard display for occupants and visitors to view owner-defined aspects of energy consumed in the facility, including energy use intensity, and cumulative savings over time.</li>
                      <li>The technology provider will provide an operator-facing or energy manager-facing configurable dashboard display to view building energy performance.</li>
                      <li>The technology provider will provide all necessary hardware, software, and connectivity for users to create their own shareable reports.</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium">Demand monitoring</p>
                    <ul className="list-disc ml-6">
                      <li>The technology will provide daily/monthly/annual peak load monitoring.</li>
                      <li>The technology will provide notification through e-mail, or text message to an individual and/or group of recipients when the demand for critical metered loads passes a threshold.</li>
                    </ul>
                  </div>
                </div>
              </>
            ))}
          </div>
        )}

        {/* Tab 4: System Data Analytics */}
        {activeTab === 'tab4' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4">System Data Analytics</h2>
            
            {renderSection('include_4_1', '4.1 Fault and Optimization Opportunity Detection', (
              <p className="text-gray-700">The technology will provide fault and optimization opportunity detection capabilities.</p>
            ))}

            {renderSection('include_4_2', '4.2 Fault and Opportunity Diagnosis', (
              <p className="text-gray-700">The technology will diagnose faults and identify opportunities for improvement.</p>
            ))}

            {renderSection('include_4_3', '4.3 FDD Configuration', (
              <p className="text-gray-700">The technology will support configuration of FDD settings.</p>
            ))}

            {renderSection('include_4_4', '4.4 Fault management and FDD results presentation', (
              <p className="text-gray-700">The technology will present fault management data in a user‑friendly format.</p>
            ))}

            {renderSection('include_4_5', '4.5 Work order management', (
              <p className="text-gray-700">The technology will integrate with work order systems for managing detected faults.</p>
            ))}

            {renderSection('include_4_6', '4.6 System-level diagnostic supports', (
              <p className="text-gray-700">The technology will provide system‑level diagnostic support capabilities.</p>
            ))}
          </div>
        )}

        {/* Tab 5: Automated System Optimization */}
        {activeTab === 'tab5' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4">Automated System Optimization</h2>
            
            {renderSection('include_5_1', '5.1 HVAC performance optimization', (
              <p className="text-gray-700">The technology will optimize HVAC performance through automated controls.</p>
            ))}

            {renderSection('include_5_2', '5.2 Peak demand charge minimization', (
              <p className="text-gray-700">The technology will minimize peak demand charges by adjusting loads in real time.</p>
            ))}

            {renderSection('include_5_3', '5.3 Provision of grid services', (
              <p className="text-gray-700">The technology will enable the provision of grid services where applicable.</p>
            ))}

            {renderSection('include_5_4', '5.4 Other supervisory control strategies', (
              <p className="text-gray-700">The technology will support additional supervisory control strategies as required.</p>
            ))}
          </div>
        )}

        {/* Tab 6: Project Management and Reporting */}
        {activeTab === 'tab6' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4">Project Management and Reporting</h2>
            
            {renderSection('include_6_1', '6.1 Project management and verification of savings', (
              <>
                <p className="text-gray-700">• The technology will provide the capability to log and track the status of energy efficiency projects (e.g., start, ongoing, finish) and personnel assigned. The technology will allow users to annotate charts and displays with key events and will store those annotations.</p>
                <p className="text-gray-700">• The technology will provide measurement and verification (M&V) capabilities in accordance with the International Protocol for Measurement and Verification Protocol (IPMVP) Option C or other industry standards, such as ASHRAE Guideline 14. The baseline model type should be described in the proposal, and preferably adhere to transparent/documented model specifications. Additional requirements include:</p>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Provision of baseline model fitness metrics (e.g., NMBE, CV[RMSE], R2)</li>
                  <li>Ability to create multiple baseline models for a single meter</li>
                  <li>Ability to perform M&V using monthly and interval data</li>
                  <li>Ability to convert savings to common units (e.g., GJ, $) and normalize (e.g., GJ/sq ft/yr or GJ/unit of production)</li>
                  <li>Ability to use ambient temperature data within the baseline models</li>
                  <li>Ability to acquire other independent variable data, such as production rate, hours of operation, etc. These data may be entered manually or acquired from a facility-level system</li>
                </ul>
                <p className="text-gray-700">• The technology will provide the ability to express savings for each discrete project or in aggregate at the whole-building meter or submeter level, for a defined pre- and post- period or as a cumulative aggregated total. Output and charting requirements include: time-series charts including actual and predicted energy use, cumulative sum of energy savings charts (CUSUM), and energy savings report tables.</p>
                <p className="text-gray-700">• The technology will provide capabilities to support savings analysis using IPMVP Option B.</p>
              </>
            ))}

            {renderSection('include_6_2', '6.2 Notification, reporting and data export', (
              <>
                <p className="text-gray-700">• The technology will provide customizable notification schemes including: work order generation, e-mail, phone, text message, to individual and/or group recipients for data quality alerting, anomaly detection, and fault detection.</p>
                <p className="text-gray-700">• The technology will provide year-over-year energy, cost, and/or equipment health and performance reports in a format specified or acceptable by the facility.</p>
                <p className="text-gray-700">• The technology will provide users the ability to create and save custom reports.</p>
                <p className="text-gray-700">• The technology will export reports to the following file formats [specify which]:</p>
                <div className="grid grid-cols-3 gap-3 ml-6">
                  {['.pdf', '.doc/.docx', '.html'].map((format) => (
                    <label key={format} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData[`export_${format.replace(/[^a-zA-Z]/g, '')}`] || false}
                        onChange={(e) => handleCheckboxChange(`export_${format.replace(/[^a-zA-Z]/g, '')}`, e.target.checked)}
                        className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="text-sm text-gray-700">{format}</span>
                    </label>
                  ))}
                </div>
                <p className="text-gray-700">• The technology will allow users to export data (all, or selected points or totalizations) to the following file formats: .xlsx/.xls, .csv, .xml</p>
              </>
            ))}
          </div>
        )}

        {/* Tab 7: IT Requirements */}
        {activeTab === 'tab7' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4">IT Requirements</h2>
            
            {renderSection('include_7_1', '7.1 Data storage and backup', (
              <p className="text-gray-700">The technology will ensure robust data storage and backup solutions.</p>
            ))}

            {renderSection('include_7_2', '7.2 Software hosting and data ownership', (
              <p className="text-gray-700">Hosting arrangements and data ownership protocols will be clearly defined.</p>
            ))}

            {renderSection('include_7_3', '7.3 Cybersecurity', (
              <p className="text-gray-700">Robust cybersecurity measures will be incorporated.</p>
            ))}

            {renderSection('include_7_4', '7.4 Permissions and access control', (
              <p className="text-gray-700">Role‑based permissions and secure access control will be provided.</p>
            ))}

            {renderSection('include_7_5', '7.5 Usability', (
              <p className="text-gray-700">The technology will be designed for ease of use and intuitive operation.</p>
            ))}

            {renderSection('include_7_6', '7.6 Networking', (
              <p className="text-gray-700">Networking requirements for connectivity and performance will be met.</p>
            ))}
          </div>
        )}

        {/* Tab 8: Technical Warranty, Support and Training */}
        {activeTab === 'tab8' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4">Technical Warranty, Support and Training</h2>
            
            {renderSection('include_8_1', '8.1 Warranty', (
              <p className="text-gray-700">A defined warranty period with specified terms will be provided.</p>
            ))}

            {renderSection('include_8_2', '8.2 Technical support', (
              <p className="text-gray-700">Technical support, including service level agreements, will be offered.</p>
            ))}

            {renderSection('include_8_3', '8.3 Training', (
              <p className="text-gray-700">Training for end users and technical staff will be provided.</p>
            ))}

            {renderSection('include_8_4', '8.4 Testing and Commissioning', (
              <p className="text-gray-700">Testing and commissioning protocols and procedures will be outlined.</p>
            ))}
          </div>
        )}

        {/* Generate Report Button */}
        <div className="flex justify-center mt-8 pt-6 border-t border-gray-200">
          <button
            onClick={handleGenerateReport}
            disabled={completedTabs.size !== tabs.length}
            className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium"
          >
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default EMISSpecifications;