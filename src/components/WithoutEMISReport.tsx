import React from 'react';
import { UserInfo, FacilityAssessmentResults, TechnicalObjective, EMISSpecsData } from '../types';
import { Download, FileText, CheckCircle } from 'lucide-react';

interface WithoutEMISReportProps {
  userInfo: UserInfo;
  facilityType: 'with-emis' | 'without-emis' | null;
  assessmentResults?: FacilityAssessmentResults | null;
  technicalObjectives: TechnicalObjective[];
  emisSpecsData?: EMISSpecsData | null;
  onStartNew: () => void;
}

const WithoutEMISReport: React.FC<WithoutEMISReportProps> = ({
  userInfo,
  facilityType,
  assessmentResults,
  technicalObjectives,
  emisSpecsData,
  onStartNew
}) => {

  const generateReportContent = () => {
    let report = "";
    
    // Organization Information Header
    report += `<h2 style='color:#007BFF; margin-top: 30px; margin-bottom: 20px; border-bottom: 2px solid #007BFF; padding-bottom: 8px;'>Organization Information</h2>`;
    report += `<div style='margin-bottom: 25px; padding: 15px; background-color: #f8f9fa; border-radius: 8px;'>`;
    report += `<p style='margin: 8px 0;'><strong>Application ID:</strong> ${userInfo.appId}</p>`;
    report += `<p style='margin: 8px 0;'><strong>Organization Name:</strong> ${userInfo.orgName}</p>`;
    report += `<p style='margin: 8px 0;'><strong>Facility Type:</strong> ${userInfo.orgType}</p>`;
    report += `<p style='margin: 8px 0;'><strong>Facility Address:</strong> ${userInfo.siteAddress}</p>`;
    report += `<p style='margin: 8px 0;'><strong>Attendee Names:</strong> ${userInfo.attendeeNames.join(", ")}</p>`;
    report += `</div>`;
    
    // EMIS Introduction
    report += `<h2 style='color:#007BFF; margin-top: 40px; margin-bottom: 20px; border-bottom: 2px solid #007BFF; padding-bottom: 8px;'>Energy Management Information Systems (EMIS)</h2>`;
    report += `<p style='margin: 18px 0; line-height: 1.7;'>An Energy Management Information System (EMIS) provides your organization with relevant information to enhance energy performance visibility to manage and control energy use in relation to production. This enables effective planning and decision-making regarding energy management, continuous improvement, and driving significant energy efficiency and cost savings. An EMIS foundation is built on three key elements:</p>`;
    report += `<ol style='margin: 20px 0 20px 30px; line-height: 1.6;'><li style='margin-bottom: 8px;'>Data capture and storage</li><li style='margin-bottom: 8px;'>Analysis</li><li style='margin-bottom: 8px;'>Reporting and notifications</li></ol>`;
    report += `<p style='margin: 18px 0; line-height: 1.7;'>A well-designed EMIS equips your facility operators with actionable insights to optimize energy efficiency and improve overall operational performance.</p>`;
    report += `<p style='margin: 18px 0; line-height: 1.7;'>Implementing EMIS has led to significant energy and cost savings across various Canadian industries. For example, New Gold's New Afton Mine in British Columbia implemented an EMIS to monitor over 160 energy consumption data points, including 157 electrical sub-meters and 6 gas meters. This initiative enabled the mine to achieve ISO 50001 energy certification in 2014, marking it as the first mining facility in North America to do so. More references of EMIS implementations can be found in Energy management information systems - Natural Resources Canada</p>`;
    
    if (facilityType === 'without-emis') {
      report += `<p style='margin: 18px 0; line-height: 1.7; padding: 15px; background-color: #e8f4fd; border-left: 4px solid #007BFF; border-radius: 4px;'>For your facility, which currently does not have an EMIS, it is recommended to implement a system that includes real-time monitoring and data collection, utility billing and data analytics, performance benchmarking, energy consumption forecasting, automated alerts and notifications, automated controls and optimization, energy performance reporting, and integration with production and facility systems. This comprehensive EMIS will provide the necessary tools to monitor, analyze, and manage energy consumption effectively, supporting the facility's energy management goals and driving continuous improvement.</p>`;
    }

    // Assessment Results (only for facilities with EMIS)
    if (facilityType === 'with-emis' && assessmentResults) {
      report += `<h2 style='color:#007BFF; margin-top: 40px; margin-bottom: 20px; border-bottom: 2px solid #007BFF; padding-bottom: 8px;'>Facility Assessment Summary</h2>`;
      report += `<div style='margin-bottom: 25px; padding: 15px; background-color: #f8f9fa; border-radius: 8px;'>`;
      report += `<p style='margin: 12px 0; font-size: 16px;'><strong>Overall Assessment Score:</strong> ${assessmentResults.overallPercentage}% (${assessmentResults.totalScore}/${assessmentResults.maxTotalScore} points)</p>`;
      report += `<h3 style='margin: 20px 0 15px 0; color: #495057;'>Section Scores:</h3><ul style='margin: 15px 0 15px 25px;'>`;
      assessmentResults.sections.forEach(section => {
        report += `<li style='margin-bottom: 8px;'><strong>${section.title}:</strong> ${section.percentage}% (${section.totalScore}/${section.maxScore} points)</li>`;
      });
      report += `</ul>`;
      
      // Recommendations
      report += `<h3 style='margin: 25px 0 15px 0; color: #495057;'>Assessment Recommendations:</h3><ul style='margin: 15px 0 15px 25px;'>`;
      assessmentResults.recommendations.forEach(rec => {
        report += `<li style='margin-bottom: 10px; line-height: 1.6;'>${rec}</li>`;
      });
      report += `</ul>`;
      report += `</div>`;
    }
    
    // Technical Objectives
    report += `<h3 style='color:#495057; margin-top: 35px; margin-bottom: 18px;'>Selected Technical Objectives</h3>`;
    report += `<p style='margin: 15px 0; line-height: 1.7;'>During the site visit, the following features were selected:</p>`;
    report += `<ul style='margin: 20px 0 20px 30px; line-height: 1.6;'>`;
    technicalObjectives.forEach(objective => {
      if (objective.checked) {
        let text = objective.text;
        if (objective.id === 'obj2' && objective.reductionPercentage) {
          text = text + ' ' + objective.reductionPercentage + ' percent';
        }
        report += `<li style='margin-bottom: 12px;'>${text}</li>`;
      }
    });
    report += `</ul>`;
    
    report += `<p style='margin: 25px 0 20px 0; line-height: 1.7; font-weight: 500;'>Based on the features, we propose the implementation of an EMIS system as outlined below.</p>`;
    
    // EMIS Specifications (if available)
    if (emisSpecsData) {
      let sectionNumber = 1;
      
      // Data Integration
      if (emisSpecsData.include_1_1 || emisSpecsData.include_1_2 || emisSpecsData.include_1_3 || emisSpecsData.include_1_4 || emisSpecsData.include_1_5 || emisSpecsData.include_1_6 || emisSpecsData.include_1_7) {
        report += `<h2 style='color:#007BFF; margin-top: 40px; margin-bottom: 20px; border-bottom: 2px solid #007BFF; padding-bottom: 8px;'>${sectionNumber}. Data Integration</h2>`;
        let subNumber = 1;
        
        if (emisSpecsData.include_1_1) {
          report += `<div style='margin-bottom: 30px;'>`;
          report += `<h3 style='color:#495057; margin-bottom: 15px;'>${sectionNumber}.${subNumber} Utility data integration</h3>`;
          report += `<p style='margin: 15px 0; line-height: 1.7;'>The technology will provide the capability to integrate utility meter data from existing systems:</p>`;
          
          // Add selected utilities
          const utilities = ['Electricity', 'NaturalGas', 'Propane', 'Steam', 'ChilledWater', 'Water', 'WasteWater', 'CompressedAir', 'RenewableEnergy'];
          const selectedUtilities = utilities.filter(utility => emisSpecsData[`utility_${utility}_tab1`]);
          if (selectedUtilities.length > 0) {
            const formattedUtilities = selectedUtilities.map(utility => {
              return utility.replace(/([A-Z])/g, ' $1').trim();
            });
            report += `<p style='margin: 15px 0; padding: 10px; background-color: #f8f9fa; border-radius: 4px;'><strong>Selected options:</strong> ${formattedUtilities.join(', ')}</p>`;
          }
          report += `</div>`;
          subNumber++;
        }
        
        if (emisSpecsData.include_1_2) {
          report += `<div style='margin-bottom: 30px;'>`;
          report += `<h3 style='color:#495057; margin-bottom: 15px;'>${sectionNumber}.${subNumber} Interval sub-meter data integration</h3>`;
          report += `<p style='margin: 15px 0; line-height: 1.7;'>The technology will integrate with new and existing meters and monitoring systems from an interval meter and/or meters with pulse outputs. Where it is necessary to take advantage of existing metering data, the technology will integrate with the following systems for whole facility meters and/or submeters:</p><p></p>`;
          
          // Add submeter table if available with improved formatting for Word
          if (emisSpecsData.submeterRows && emisSpecsData.submeterRows.length > 0) {
            report += `<table width="100%" style="
        table-layout: fixed;
        border-collapse: collapse;
        margin: 10px 0;
        word-wrap: break-word;
        overflow-wrap: break-word;
      ">`;
            report += `<tbody>
        <tr>
          <th style="width:25%;border:1px solid #ccc;padding:4px;white-space:normal;word-wrap:break-word;word-break:break-all;">
            Meter Name
          </th>
          <th style="width:25%;border:1px solid #ccc;padding:4px;white-space:normal;word-wrap:break-word;word-break:break-all;">
            Parameter
          </th>
          <th style="width:25%;border:1px solid #ccc;padding:4px;white-space:normal;word-wrap:break-word;word-break:break-all;">
            Intervals
          </th>
          <th style="width:25%;border:1px solid #ccc;padding:4px;white-space:normal;word-wrap:break-word;word-break:break-all;">
            Comments
          </th>
        </tr>`;
            emisSpecsData.submeterRows.forEach((row: any) => {
              let interval = row.interval;
              if (interval === 'Sub-hourly' && row.minutes) {
                interval = `Sub-hourly: ${row.minutes} mins interval`;
              }
              report += `<tr>
                <td style="border:1px solid #ccc;padding:10px;white-space:normal;word-wrap:break-word;word-break:break-all;">${row.meterName || ''}</td>
                <td style="border:1px solid #ccc;padding:10px;white-space:normal;word-wrap:break-word;word-break:break-all;">${row.parameter || ''}</td>
                <td style="border:1px solid #ccc;padding:10px;white-space:normal;word-wrap:break-word;word-break:break-all;">${interval}</td>
                <td style="border:1px solid #ccc;padding:10px;white-space:normal;word-wrap:break-word;word-break:break-all;">${row.comments || ''}</td>
              </tr>`;
            });
            report += `</tbody></table>`;
          }
          
          report += `<ul style='margin: 20px 0 20px 30px; line-height: 1.6;'>`;
          report += `<li style='margin-bottom: 10px;'>Data should be available for analysis in real or near-real time through a continuous and automated data acquisition process.</li>`;
          report += `<li style='margin-bottom: 10px;'>The technology will have the capability to consolidate meter readings to create virtual meter points. In other words, it can add and subtract the readings from multiple meters at the same interval, to produce a calculated time series of energy use.</li>`;
          report += `<li style='margin-bottom: 10px;'>The technology will be able to upload and store a minimum history of 5 years of energy use or other data from standard spreadsheet or text file formats.</li>`;
          report += `<li style='margin-bottom: 10px;'>The technology will have the capacity to store at least 5 years of data, trended at intervals up to 15 minutes for analysis, reporting, and visualization.</li>`;
          report += `<li style='margin-bottom: 10px;'>The technology will have the ability to parse out data cluster displays into coincident time intervals ranging from 10 minutes to 1 year.</li>`;
          report += `</ul>`;
          report += `</div>`;
          subNumber++;
        }
        
        if (emisSpecsData.include_1_3) {
          report += `<div style='margin-bottom: 30px;'>`;
          report += `<h3 style='color:#495057; margin-bottom: 15px;'>${sectionNumber}.${subNumber} Building automation system (BAS) data integration</h3>`;
          report += `<p style='margin: 15px 0; line-height: 1.7;'>The technology will extract data from the building control systems for Fault Detection and Diagnostics (FDD) functions:</p>`;
          report += `<ul style='margin: 20px 0 20px 30px; line-height: 1.6;'>`;
          report += `<li style='margin-bottom: 10px;'>The data collection interval will be selected to meet the needs of the FDD software and is compatible with BAS trending, with 15-minute interval data being the most implemented. Change of value and/or slower polling rates may be needed to reduce network burden on the control system, and the effect of data collection interval on network speed will be determined during FDD setup. Slower or faster polling rates may also be implemented based on the type of fault (e.g., hunting and cycling faults may need one- to five-minute interval data).</li>`;
          report += `<li style='margin-bottom: 10px;'>Integration with non-legacy vintages of BAS providers will occur via common protocols such as BACnet and Modbus, or through the BAS vendor's gateway. If the BAS does not support BACnet, a data gateway or protocol converter will need to be installed by the EMIS vendor.</li>`;
          report += `<li style='margin-bottom: 10px;'>BAS data will be integrated as follows:</li>`;
          report += `</ul>`;
          
          // Add BAS data types with proper spacing
          const basDataTypes = ['chillerboilerplantdata', 'airhandlerdata', 'zonedevicedata'];
          const basDataTypeLabels = ['chiller/boiler plant data', 'air handler data', 'zone device data'];
          const selectedBASData = basDataTypes.filter(type => emisSpecsData[`bas_${type}_1_3`]);
          if (selectedBASData.length > 0) {
            const formattedBASData = selectedBASData.map(type => {
              const index = basDataTypes.indexOf(type);
              return basDataTypeLabels[index];
            });
            report += `<div style='margin: 15px 0 15px 40px; padding: 10px; background-color: #f8f9fa; border-radius: 4px;'>`;
            report += `<p style='margin: 5px 0; font-weight: 500;'>These data include:</p>`;
            report += `<p style='margin: 5px 0;'>${formattedBASData.join(', ')}</p>`;
            report += `</div>`;
          }
          
          const basIntegrationTypes = ['energymeteralreadyconnectedintotheBAS', 'equipmentstatus', 'setpoints', 'valvedampercontrolsignals', 'fanspeed', 'airflowrate', 'pumpwaterflowrate', 'airandwatertemperatures'];
          const basIntegrationLabels = ['energy meter data already connected into the BAS', 'equipment status', 'setpoints', 'valve/damper control signals', 'fan speed', 'air flow rate', 'pump water flow rate', 'air and water temperatures'];
          const selectedBASIntegration = basIntegrationTypes.filter(type => emisSpecsData[`bas_${type}_1_3`]);
          if (selectedBASIntegration.length > 0) {
            const formattedBASIntegration = selectedBASIntegration.map(type => {
              const index = basIntegrationTypes.indexOf(type);
              return basIntegrationLabels[index];
            });
            report += `<div style='margin: 15px 0 15px 40px; padding: 10px; background-color: #f8f9fa; border-radius: 4px;'>`;
            report += `<p style='margin: 5px 0; font-weight: 500;'>Integration will include but not be limited to:</p>`;
            report += `<p style='margin: 5px 0;'>${formattedBASIntegration.join(', ')}</p>`;
            report += `</div>`;
          }
          
          report += `<ul style='margin: 20px 0 20px 30px; line-height: 1.6;'>`;
          report += `<li style='margin-bottom: 10px;'>Near-real time data polling or end of day batch uploads to the EMIS are acceptable.</li>`;
          report += `<li style='margin-bottom: 10px;'>The data integration will not adversely affect the speed of the existing BAS control or visualization functions.</li>`;
          report += `</ul>`;
          report += `</div>`;
          subNumber++;
        }
        
        if (emisSpecsData.include_1_4) {
          report += `<div style='margin-bottom: 30px;'>`;
          report += `<h3 style='color:#495057; margin-bottom: 15px;'>${sectionNumber}.${subNumber} Additional monitoring required or preferred</h3>`;
          if (emisSpecsData.additionalMonitoring) {
            const additionalText = emisSpecsData.additionalMonitoring.replace(/\n/g, "<br>");
            report += `<div style='margin: 15px 0; padding: 15px; background-color: #f8f9fa; border-radius: 4px; line-height: 1.7;'>${additionalText}</div>`;
          }
          report += `</div>`;
          subNumber++;
        }
        
        if (emisSpecsData.include_1_5) {
          report += `<div style='margin-bottom: 30px;'>`;
          report += `<h3 style='color:#495057; margin-bottom: 15px;'>${sectionNumber}.${subNumber} Metadata / data tagging</h3>`;
          report += `<p style='margin: 15px 0; line-height: 1.7;'>The use of standard naming conventions and a metadata schema (which may be referred to as 'data tags') improves the ability of the EMIS to consistently analyze, visualize, and derive value from operational data. A metadata schema will be selected for the EMIS project, defining at a minimum:</p>`;
          report += `<ul style='margin: 20px 0 20px 30px; line-height: 1.6;'>`;
          report += `<li style='margin-bottom: 8px;'>a data dictionary for all terms used in the schema;</li>`;
          report += `<li style='margin-bottom: 8px;'>a data taxonomy, providing categories and subcategories for the defined terms;</li>`;
          report += `</ul>`;
          report += `<p style='margin: 15px 0; line-height: 1.7;'>The specific version of the metadata schema should be noted, as well as noting whether the schema is an adaptation or extension of another existing schema.</p>`;
          report += `<p style='margin: 15px 0; line-height: 1.7;'>The EMIS vendor will provide appropriate metadata for all data integrated with the EMIS, in alignment with the schema or tagging system selected for the project.</p>`;
          report += `</div>`;
          subNumber++;
        }
        
        if (emisSpecsData.include_1_6) {
          report += `<div style='margin-bottom: 30px;'>`;
          report += `<h3 style='color:#495057; margin-bottom: 15px;'>${sectionNumber}.${subNumber} Other data sources and APIs</h3>`;
          if (emisSpecsData.otherDataSources) {
            const otherText = emisSpecsData.otherDataSources.replace(/\n/g, "<br>");
            report += `<div style='margin: 15px 0; padding: 15px; background-color: #f8f9fa; border-radius: 4px; line-height: 1.7;'>${otherText}</div>`;
          }
          report += `</div>`;
          subNumber++;
        }
        
        if (emisSpecsData.include_1_7) {
          report += `<div style='margin-bottom: 30px;'>`;
          report += `<h3 style='color:#495057; margin-bottom: 15px;'>${sectionNumber}.${subNumber} Data validation</h3>`;
          report += `<ul style='margin: 20px 0 20px 30px; line-height: 1.6;'>`;
          report += `<li style='margin-bottom: 10px;'>The data connection to the EMIS will be validated by the EMIS vendor. In case of a data connection interruption, the data should be stored locally for at least two weeks of hourly data, or one week of sub-hourly data (e.g., 15-minute or 5-minute data).</li>`;
          report += `<li style='margin-bottom: 10px;'>The technology will detect meter and sensor data quality issues such as gaps, spikes, and flat-lines, and the technology provider will have an option or service to automatically fill and/or correct data.</li>`;
          report += `<li style='margin-bottom: 10px;'>The EMIS vendor will help to identify inaccurate data.</li>`;
          report += `<li style='margin-bottom: 10px;'>The EMIS vendor will address insufficient data collection intervals, false negative and false positive diagnostics, dropped communications, and erroneous metadata tagging.</li>`;
          report += `</ul>`;
          report += `</div>`;
          subNumber++;
        }
        
        sectionNumber++;
      }
      
      // Utility Bill Analytics
      if (emisSpecsData.include_2_1 || emisSpecsData.include_2_2 || emisSpecsData.include_2_3) {
        report += `<h2 style='color:#007BFF; margin-top: 40px; margin-bottom: 20px; border-bottom: 2px solid #007BFF; padding-bottom: 8px;'>${sectionNumber}. Utility Bill Analytics</h2>`;
        let subNumber = 1;
        
        if (emisSpecsData.include_2_1) {
          report += `<div style='margin-bottom: 30px;'>`;
          report += `<h3 style='color:#495057; margin-bottom: 15px;'>${sectionNumber}.${subNumber} Utility bill management</h3>`;
          report += `<ul style='margin: 20px 0 20px 30px; line-height: 1.6;'>`;
          report += `<li style='margin-bottom: 10px;'>The technology will provide the capability to allocate utility costs to different tenants or occupant groups sharing a building, to enable recharges and tenant billing.</li>`;
          report += `<li style='margin-bottom: 10px;'>The technology will provide capabilities for savings analysis and comparison across a building portfolio through benchmarking, deriving energy use intensity, aligning bills with a calendar month, and normalizing usage based on weather data using standard protocols such as IPMVP Option C.</li>`;
          report += `</ul>`;
          report += `</div>`;
          subNumber++;
        }
        
        if (emisSpecsData.include_2_2) {
          report += `<div style='margin-bottom: 30px;'>`;
          report += `<h3 style='color:#495057; margin-bottom: 15px;'>${sectionNumber}.${subNumber} Utility budgeting</h3>`;
          report += `<ul style='margin: 20px 0 20px 30px; line-height: 1.6;'>`;
          report += `<li style='margin-bottom: 10px;'>The technology will chart and report energy costs against budget, indicating surplus/deficit.</li>`;
          report += `<li style='margin-bottom: 10px;'>The technology will include custom utility tariffs for energy cost and demand calculations.</li>`;
          report += `</ul>`;
          report += `</div>`;
          subNumber++;
        }
        
        if (emisSpecsData.include_2_3) {
          report += `<div style='margin-bottom: 30px;'>`;
          report += `<h3 style='color:#495057; margin-bottom: 15px;'>${sectionNumber}.${subNumber} Greenhouse gas (GHG) tracking</h3>`;
          report += `<ul style='margin: 20px 0 20px 30px; line-height: 1.6;'>`;
          report += `<li style='margin-bottom: 10px;'>The technology will calculate, monitor, and report GHG emissions associated with facility energy use. The technology will supply recommended GHG conversion factors from a referenceable source, and the software will allow the users to enter their own conversion factors.</li>`;
          report += `<li style='margin-bottom: 10px;'>Greenhouse gas calculations will account for on-site renewables, where relevant.</li>`;
          report += `</ul>`;
          report += `</div>`;
          subNumber++;
        }
        
        sectionNumber++;
      }
      
      // Interval Meter Data Analytics
      if (emisSpecsData.include_3_1 || emisSpecsData.include_3_2) {
        report += `<h2 style='color:#007BFF; margin-top: 40px; margin-bottom: 20px; border-bottom: 2px solid #007BFF; padding-bottom: 8px;'>${sectionNumber}. Interval Meter Data Analytics</h2>`;
        let subNumber = 1;
        
        if (emisSpecsData.include_3_1) {
          report += `<div style='margin-bottom: 30px;'>`;
          report += `<h3 style='color:#495057; margin-bottom: 15px;'>${sectionNumber}.${subNumber} Energy consumption tracking</h3>`;
          report += `<p style='margin: 15px 0; line-height: 1.7;'>The technology will track and provide flexible charting capabilities for multiple meters on an hourly or sub hourly (e.g., 15-minute) basis.</p>`;
          if (emisSpecsData.energyConsumptionTracking) {
            const trackingText = emisSpecsData.energyConsumptionTracking.replace(/\n/g, "<br>");
            report += `<div style='margin: 15px 0; padding: 15px; background-color: #f8f9fa; border-radius: 4px; line-height: 1.7;'>${trackingText}</div>`;
          }
          report += `<h4 style='color:#6c757d; margin: 25px 0 15px 0;'>Energy cost tracking</h4>`;
          report += `<ul style='margin: 15px 0 15px 30px; line-height: 1.6;'>`;
          report += `<li style='margin-bottom: 8px;'>The technology will calculate and provide visualizations of near real-time/daily/monthly and historic energy costs.</li>`;
          report += `<li style='margin-bottom: 8px;'>The technology will use facility-specific tariffs in $/energy unit.</li>`;
          report += `</ul>`;
          report += `<h4 style='color:#6c757d; margin: 25px 0 15px 0;'>Energy unit conversion</h4>`;
          report += `<ul style='margin: 15px 0 15px 30px; line-height: 1.6;'>`;
          report += `<li style='margin-bottom: 8px;'>The technology will have the ability to normalize the data according to factors that are known to affect energy consumption, such as production rates, floor area, hours of operation, heating degree days, and cooling degree days.</li>`;
          report += `<li style='margin-bottom: 8px;'>The technology will have the capability to convert, display, and report energy use in total GJ and additional environmental metrics such as CO2 equivalent.</li>`;
          report += `</ul>`;
          report += `</div>`;
          subNumber++;
        }
        
        if (emisSpecsData.include_3_2) {
          report += `<div style='margin-bottom: 30px;'>`;
          report += `<h3 style='color:#495057; margin-bottom: 15px;'>${sectionNumber}.${subNumber} Energy performance analysis</h3>`;
          
          report += `<h4 style='color:#6c757d; margin: 25px 0 15px 0;'>Time series load profiling</h4>`;
          report += `<ul style='margin: 15px 0 15px 30px; line-height: 1.6;'>`;
          report += `<li style='margin-bottom: 8px;'>The technology will provide plots of at least 168-hour periods of hourly (or more frequent) interval energy usage versus time.</li>`;
          report += `<li style='margin-bottom: 8px;'>The technology will provide options to select the time period and data points that are plotted.</li>`;
          report += `<li style='margin-bottom: 8px;'>The technology will allow multiple user-selected data points to be plotted on a single chart or graph.</li>`;
          report += `</ul>`;
          
          report += `<h4 style='color:#6c757d; margin: 25px 0 15px 0;'>Benchmarking</h4>`;
          report += `<ul style='margin: 15px 0 15px 30px; line-height: 1.6;'>`;
          report += `<li style='margin-bottom: 8px;'>Benchmarking using the following meter-level key performance indicators (KPIs) will be included in the EMIS for the following metrics. The technology will allow the user to add custom KPIs and custom normalization factors. The benchmarks will be configured to allow for comparison to the prior [day/week/month/year].</li>`;
          report += `</ul>`;
          
          report += `<h4 style='color:#6c757d; margin: 25px 0 15px 0;'>Baseline energy consumption modeling</h4>`;
          report += `<ul style='margin: 15px 0 15px 30px; line-height: 1.6;'>`;
          report += `<li style='margin-bottom: 8px;'>The technology will characterize and predict the typical or expected energy usage based on key drivers such as weather (degree days or outside air temperature), production, time of day/week, and other variables.</li>`;
          report += `<li style='margin-bottom: 8px;'>The baseline will be used for energy savings calculations, near-future load predictions, energy use comparisons, and energy anomaly detection.</li>`;
          report += `<li style='margin-bottom: 8px;'>The technology has the capability to set up multiple baselines, e.g., prior year and a corporate goal baseline.</li>`;
          report += `</ul>`;
          
          report += `<h4 style='color:#6c757d; margin: 25px 0 15px 0;'>Energy anomaly detection</h4>`;
          report += `<ul style='margin: 15px 0 15px 30px; line-height: 1.6;'>`;
          report += `<li style='margin-bottom: 8px;'>The technology will identify and flag unexpectedly high or low energy use at the whole-facility and each submeter.</li>`;
          report += `<li style='margin-bottom: 8px;'>The technology will allow for energy anomaly detection thresholds to be user-defined.</li>`;
          report += `<li style='margin-bottom: 8px;'>The technology will provide the ability to track energy anomalies (duration and persistence) to facilitate response and resolution.</li>`;
          report += `</ul>`;
          
          report += `<h4 style='color:#6c757d; margin: 25px 0 15px 0;'>Building energy dashboards and reports</h4>`;
          report += `<ul style='margin: 15px 0 15px 30px; line-height: 1.6;'>`;
          report += `<li style='margin-bottom: 8px;'>The technology provider will provide a public-facing configurable dashboard display for occupants and visitors to view owner-defined aspects of energy consumed in the facility, including energy use intensity, and cumulative savings over time.</li>`;
          report += `<li style='margin-bottom: 8px;'>The technology provider will provide an operator-facing or energy manager-facing configurable dashboard display to view building energy performance.</li>`;
          report += `<li style='margin-bottom: 8px;'>The technology provider will provide all necessary hardware, software, and connectivity for users to create their own shareable reports.</li>`;
          report += `</ul>`;
          
          report += `<h4 style='color:#6c757d; margin: 25px 0 15px 0;'>Demand monitoring</h4>`;
          report += `<ul style='margin: 15px 0 15px 30px; line-height: 1.6;'>`;
          report += `<li style='margin-bottom: 8px;'>The technology will provide daily/monthly/annual peak load monitoring.</li>`;
          report += `<li style='margin-bottom: 8px;'>The technology will provide notification through e-mail, or text message to an individual and/or group of recipients when the demand for critical metered loads passes a threshold.</li>`;
          report += `</ul>`;
          report += `</div>`;
          subNumber++;
        }
        
        sectionNumber++;
      }
      
      // System Data Analytics
      if (emisSpecsData.include_4_1 || emisSpecsData.include_4_2 || emisSpecsData.include_4_3 || emisSpecsData.include_4_4 || emisSpecsData.include_4_5 || emisSpecsData.include_4_6) {
        report += `<h2 style='color:#007BFF; margin-top: 40px; margin-bottom: 20px; border-bottom: 2px solid #007BFF; padding-bottom: 8px;'>${sectionNumber}. System Data Analytics</h2>`;
        let subNumber = 1;
        
        if (emisSpecsData.include_4_1) {
          report += `<div style='margin-bottom: 30px;'>`;
          report += `<h3 style='color:#495057; margin-bottom: 15px;'>${sectionNumber}.${subNumber} Fault and Optimization Opportunity Detection</h3>`;
          report += `<ul style='margin: 20px 0 20px 30px; line-height: 1.6;'>`;
          report += `<li style='margin-bottom: 10px;'>The technology will provide fault and optimization opportunity detection capabilities.</li>`;
          report += `</ul>`;
          report += `</div>`;
          subNumber++;
        }
        
        if (emisSpecsData.include_4_2) {
          report += `<div style='margin-bottom: 30px;'>`;
          report += `<h3 style='color:#495057; margin-bottom: 15px;'>${sectionNumber}.${subNumber} Fault and Opportunity Diagnosis</h3>`;
          report += `<ul style='margin: 20px 0 20px 30px; line-height: 1.6;'>`;
          report += `<li style='margin-bottom: 10px;'>The technology will diagnose faults and identify opportunities for improvement.</li>`;
          report += `</ul>`;
          report += `</div>`;
          subNumber++;
        }
        
        if (emisSpecsData.include_4_3) {
          report += `<div style='margin-bottom: 30px;'>`;
          report += `<h3 style='color:#495057; margin-bottom: 15px;'>${sectionNumber}.${subNumber} FDD Configuration</h3>`;
          report += `<ul style='margin: 20px 0 20px 30px; line-height: 1.6;'>`;
          report += `<li style='margin-bottom: 10px;'>The technology will support configuration of FDD settings.</li>`;
          report += `</ul>`;
          report += `</div>`;
          subNumber++;
        }
        
        if (emisSpecsData.include_4_4) {
          report += `<div style='margin-bottom: 30px;'>`;
          report += `<h3 style='color:#495057; margin-bottom: 15px;'>${sectionNumber}.${subNumber} Fault management and FDD results presentation</h3>`;
          report += `<ul style='margin: 20px 0 20px 30px; line-height: 1.6;'>`;
          report += `<li style='margin-bottom: 10px;'>The technology will present fault management data in a user‑friendly format.</li>`;
          report += `</ul>`;
          report += `</div>`;
          subNumber++;
        }
        
        if (emisSpecsData.include_4_5) {
          report += `<div style='margin-bottom: 30px;'>`;
          report += `<h3 style='color:#495057; margin-bottom: 15px;'>${sectionNumber}.${subNumber} Work order management</h3>`;
          report += `<ul style='margin: 20px 0 20px 30px; line-height: 1.6;'>`;
          report += `<li style='margin-bottom: 10px;'>The technology will integrate with work order systems for managing detected faults.</li>`;
          report += `</ul>`;
          report += `</div>`;
          subNumber++;
        }
        
        if (emisSpecsData.include_4_6) {
          report += `<div style='margin-bottom: 30px;'>`;
          report += `<h3 style='color:#495057; margin-bottom: 15px;'>${sectionNumber}.${subNumber} System-level diagnostic supports</h3>`;
          report += `<ul style='margin: 20px 0 20px 30px; line-height: 1.6;'>`;
          report += `<li style='margin-bottom: 10px;'>The technology will provide system-level diagnostic support capabilities.</li>`;
          report += `</ul>`;
          report += `</div>`;
          subNumber++;
        }
        
        sectionNumber++;
      }
      
      // Automated System Optimization
      if (emisSpecsData.include_5_1 || emisSpecsData.include_5_2 || emisSpecsData.include_5_3 || emisSpecsData.include_5_4) {
        report += `<h2 style='color:#007BFF; margin-top: 40px; margin-bottom: 20px; border-bottom: 2px solid #007BFF; padding-bottom: 8px;'>${sectionNumber}. Automated System Optimization</h2>`;
        let subNumber = 1;
        
        if (emisSpecsData.include_5_1) {
          report += `<div style='margin-bottom: 30px;'>`;
          report += `<h3 style='color:#495057; margin-bottom: 15px;'>${sectionNumber}.${subNumber} HVAC performance optimization</h3>`;
          report += `<ul style='margin: 20px 0 20px 30px; line-height: 1.6;'>`;
          report += `<li style='margin-bottom: 10px;'>The technology will optimize HVAC performance through automated controls.</li>`;
          report += `</ul>`;
          report += `</div>`;
          subNumber++;
        }
        
        if (emisSpecsData.include_5_2) {
          report += `<div style='margin-bottom: 30px;'>`;
          report += `<h3 style='color:#495057; margin-bottom: 15px;'>${sectionNumber}.${subNumber} Peak demand charge minimization</h3>`;
          report += `<ul style='margin: 20px 0 20px 30px; line-height: 1.6;'>`;
          report += `<li style='margin-bottom: 10px;'>The technology will minimize peak demand charges by adjusting loads in real time.</li>`;
          report += `</ul>`;
          report += `</div>`;
          subNumber++;
        }
        
        if (emisSpecsData.include_5_3) {
          report += `<div style='margin-bottom: 30px;'>`;
          report += `<h3 style='color:#495057; margin-bottom: 15px;'>${sectionNumber}.${subNumber} Provision of grid services</h3>`;
          report += `<ul style='margin: 20px 0 20px 30px; line-height: 1.6;'>`;
          report += `<li style='margin-bottom: 10px;'>The technology will enable the provision of grid services where applicable.</li>`;
          report += `</ul>`;
          report += `</div>`;
          subNumber++;
        }
        
        if (emisSpecsData.include_5_4) {
          report += `<div style='margin-bottom: 30px;'>`;
          report += `<h3 style='color:#495057; margin-bottom: 15px;'>${sectionNumber}.${subNumber} Other supervisory control strategies</h3>`;
          report += `<ul style='margin: 20px 0 20px 30px; line-height: 1.6;'>`;
          report += `<li style='margin-bottom: 10px;'>The technology will support additional supervisory control strategies as required.</li>`;
          report += `</ul>`;
          report += `</div>`;
          subNumber++;
        }
        
        sectionNumber++;
      }
      
      // Project Management and Reporting
      if (emisSpecsData.include_6_1 || emisSpecsData.include_6_2) {
        report += `<h2 style='color:#007BFF; margin-top: 40px; margin-bottom: 20px; border-bottom: 2px solid #007BFF; padding-bottom: 8px;'>${sectionNumber}. Project Management and Reporting</h2>`;
        let subNumber = 1;
        
        if (emisSpecsData.include_6_1) {
          report += `<div style='margin-bottom: 30px;'>`;
          report += `<h3 style='color:#495057; margin-bottom: 15px;'>${sectionNumber}.${subNumber} Project management and verification of savings</h3>`;
          report += `<ul style='margin: 20px 0 20px 30px; line-height: 1.6;'>`;
          report += `<li style='margin-bottom: 10px;'>The technology will provide the capability to log and track the status of energy efficiency projects (e.g., start, ongoing, finish) and personnel assigned. The technology will allow users to annotate charts and displays with key events and will store those annotations.</li>`;
          report += `<li style='margin-bottom: 10px;'>The technology will provide measurement and verification (M&V) capabilities in accordance with the International Protocol for Measurement and Verification Protocol (IPMVP) Option C or other industry standards, such as ASHRAE Guideline 14. The baseline model type should be described in the proposal, and preferably adhere to transparent/documented model specifications. Additional requirements include:</li>`;
          report += `</ul>`;
          report += `<ul style='margin: 15px 0 15px 50px; line-height: 1.6;'>`;
          report += `<li style='margin-bottom: 8px;'>Provision of baseline model fitness metrics (e.g., NMBE, CV[RMSE], R2)</li>`;
          report += `<li style='margin-bottom: 8px;'>Ability to create multiple baseline models for a single meter</li>`;
          report += `<li style='margin-bottom: 8px;'>Ability to perform M&V using monthly and interval data</li>`;
          report += `<li style='margin-bottom: 8px;'>Ability to convert savings to common units (e.g., GJ, $) and normalize (e.g., GJ/sq ft/yr or GJ/unit of production)</li>`;
          report += `<li style='margin-bottom: 8px;'>Ability to use ambient temperature data within the baseline models</li>`;
          report += `<li style='margin-bottom: 8px;'>Ability to acquire other independent variable data, such as production rate, hours of operation, etc. These data may be entered manually or acquired from a facility-level system</li>`;
          report += `</ul>`;
          report += `<ul style='margin: 20px 0 20px 30px; line-height: 1.6;'>`;
          report += `<li style='margin-bottom: 10px;'>The technology will provide the ability to express savings for each discrete project or in aggregate at the whole-building meter or submeter level, for a defined pre- and post- period or as a cumulative aggregated total. Output and charting requirements include: time-series charts including actual and predicted energy use, cumulative sum of energy savings charts (CUSUM), and energy savings report tables.</li>`;
          report += `<li style='margin-bottom: 10px;'>The technology will provide capabilities to support savings analysis using IPMVP Option B.</li>`;
          report += `</ul>`;
          report += `</div>`;
          subNumber++;
        }
        
        if (emisSpecsData.include_6_2) {
          report += `<div style='margin-bottom: 30px;'>`;
          report += `<h3 style='color:#495057; margin-bottom: 15px;'>${sectionNumber}.${subNumber} Notification, reporting and data export</h3>`;
          report += `<ul style='margin: 20px 0 20px 30px; line-height: 1.6;'>`;
          report += `<li style='margin-bottom: 10px;'>The technology will provide customizable notification schemes including: work order generation, e-mail, phone, text message, to individual and/or group recipients for data quality alerting, anomaly detection, and fault detection.</li>`;
          report += `<li style='margin-bottom: 10px;'>The technology will provide year-over-year energy, cost, and/or equipment health and performance reports in a format specified or acceptable by the facility.</li>`;
          report += `<li style='margin-bottom: 10px;'>The technology will provide users the ability to create and save custom reports.</li>`;
          
          // Get selected export formats
          const exportFormats = [];
          if (emisSpecsData.export_pdf) exportFormats.push('.pdf');
          if (emisSpecsData.export_docdocx) exportFormats.push('.doc/.docx');
          if (emisSpecsData.export_html) exportFormats.push('.html');
          
          report += `<li style='margin-bottom: 10px;'>The technology will export reports to the following file formats [specify which]: ${exportFormats.join(', ')}</li>`;
          report += `<li style='margin-bottom: 10px;'>The technology will allow users to export data (all, or selected points or totalizations) to the following file formats: .xlsx/.xls, .csv, .xml</li>`;
          report += `</ul>`;
          report += `</div>`;
          subNumber++;
        }
        
        sectionNumber++;
      }
      
      // IT Requirements
      if (emisSpecsData.include_7_1 || emisSpecsData.include_7_2 || emisSpecsData.include_7_3 || emisSpecsData.include_7_4 || emisSpecsData.include_7_5 || emisSpecsData.include_7_6) {
        report += `<h2 style='color:#007BFF; margin-top: 40px; margin-bottom: 20px; border-bottom: 2px solid #007BFF; padding-bottom: 8px;'>${sectionNumber}. IT Requirements</h2>`;
        let subNumber = 1;
        
        if (emisSpecsData.include_7_1) {
          report += `<div style='margin-bottom: 30px;'>`;
          report += `<h3 style='color:#495057; margin-bottom: 15px;'>${sectionNumber}.${subNumber} Data storage and backup</h3>`;
          report += `<ul style='margin: 20px 0 20px 30px; line-height: 1.6;'>`;
          report += `<li style='margin-bottom: 10px;'>Robust data storage and backup solutions will be ensured.</li>`;
          report += `</ul>`;
          report += `</div>`;
          subNumber++;
        }
        
        if (emisSpecsData.include_7_2) {
          report += `<div style='margin-bottom: 30px;'>`;
          report += `<h3 style='color:#495057; margin-bottom: 15px;'>${sectionNumber}.${subNumber} Software hosting and data ownership</h3>`;
          report += `<ul style='margin: 20px 0 20px 30px; line-height: 1.6;'>`;
          report += `<li style='margin-bottom: 10px;'>Hosting arrangements and data ownership protocols will be clearly defined.</li>`;
          report += `</ul>`;
          report += `</div>`;
          subNumber++;
        }
        
        if (emisSpecsData.include_7_3) {
          report += `<div style='margin-bottom: 30px;'>`;
          report += `<h3 style='color:#495057; margin-bottom: 15px;'>${sectionNumber}.${subNumber} Cybersecurity</h3>`;
          report += `<ul style='margin: 20px 0 20px 30px; line-height: 1.6;'>`;
          report += `<li style='margin-bottom: 10px;'>Robust cybersecurity measures will be incorporated.</li>`;
          report += `</ul>`;
          report += `</div>`;
          subNumber++;
        }
        
        if (emisSpecsData.include_7_4) {
          report += `<div style='margin-bottom: 30px;'>`;
          report += `<h3 style='color:#495057; margin-bottom: 15px;'>${sectionNumber}.${subNumber} Permissions and access control</h3>`;
          report += `<ul style='margin: 20px 0 20px 30px; line-height: 1.6;'>`;
          report += `<li style='margin-bottom: 10px;'>Role‑based permissions and secure access control will be provided.</li>`;
          report += `</ul>`;
          report += `</div>`;
          subNumber++;
        }
        
        if (emisSpecsData.include_7_5) {
          report += `<div style='margin-bottom: 30px;'>`;
          report += `<h3 style='color:#495057; margin-bottom: 15px;'>${sectionNumber}.${subNumber} Usability</h3>`;
          report += `<ul style='margin: 20px 0 20px 30px; line-height: 1.6;'>`;
          report += `<li style='margin-bottom: 10px;'>The technology will be designed for ease of use and intuitive operation.</li>`;
          report += `</ul>`;
          report += `</div>`;
          subNumber++;
        }
        
        if (emisSpecsData.include_7_6) {
          report += `<div style='margin-bottom: 30px;'>`;
          report += `<h3 style='color:#495057; margin-bottom: 15px;'>${sectionNumber}.${subNumber} Networking</h3>`;
          report += `<ul style='margin: 20px 0 20px 30px; line-height: 1.6;'>`;
          report += `<li style='margin-bottom: 10px;'>Networking requirements for connectivity and performance will be met.</li>`;
          report += `</ul>`;
          report += `</div>`;
          subNumber++;
        }
        
        sectionNumber++;
      }
      
      // Technical Warranty, Support and Training
      if (emisSpecsData.include_8_1 || emisSpecsData.include_8_2 || emisSpecsData.include_8_3 || emisSpecsData.include_8_4) {
        report += `<h2 style='color:#007BFF; margin-top: 40px; margin-bottom: 20px; border-bottom: 2px solid #007BFF; padding-bottom: 8px;'>${sectionNumber}. Technical Warranty, Support and Training</h2>`;
        let subNumber = 1;
        
        if (emisSpecsData.include_8_1) {
          report += `<div style='margin-bottom: 30px;'>`;
          report += `<h3 style='color:#495057; margin-bottom: 15px;'>${sectionNumber}.${subNumber} Warranty</h3>`;
          report += `<ul style='margin: 20px 0 20px 30px; line-height: 1.6;'>`;
          report += `<li style='margin-bottom: 10px;'>A defined warranty period with specified terms will be provided.</li>`;
          report += `</ul>`;
          report += `</div>`;
          subNumber++;
        }
        
        if (emisSpecsData.include_8_2) {
          report += `<div style='margin-bottom: 30px;'>`;
          report += `<h3 style='color:#495057; margin-bottom: 15px;'>${sectionNumber}.${subNumber} Technical support</h3>`;
          report += `<ul style='margin: 20px 0 20px 30px; line-height: 1.6;'>`;
          report += `<li style='margin-bottom: 10px;'>Technical support, including service level agreements, will be offered.</li>`;
          report += `</ul>`;
          report += `</div>`;
          subNumber++;
        }
        
        if (emisSpecsData.include_8_3) {
          report += `<div style='margin-bottom: 30px;'>`;
          report += `<h3 style='color:#495057; margin-bottom: 15px;'>${sectionNumber}.${subNumber} Training</h3>`;
          report += `<ul style='margin: 20px 0 20px 30px; line-height: 1.6;'>`;
          report += `<li style='margin-bottom: 10px;'>Training for end users and technical staff will be provided.</li>`;
          report += `</ul>`;
          report += `</div>`;
          subNumber++;
        }
        
        if (emisSpecsData.include_8_4) {
          report += `<div style='margin-bottom: 30px;'>`;
          report += `<h3 style='color:#495057; margin-bottom: 15px;'>${sectionNumber}.${subNumber} Testing and Commissioning</h3>`;
          report += `<ul style='margin: 20px 0 20px 30px; line-height: 1.6;'>`;
          report += `<li style='margin-bottom: 10px;'>Testing and commissioning protocols and procedures will be outlined.</li>`;
          report += `</ul>`;
          report += `</div>`;
          subNumber++;
        }
        
        sectionNumber++;
      }
    }
    
    return report;
  };

  const downloadWord = () => {
    const reportContent = generateReportContent();
    
    const htmlContent = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' 
             xmlns:w='urn:schemas-microsoft-com:office:word' 
             xmlns='http://www.w3.org/TR/REC-html40'>
        <head>
          <meta charset='utf-8'>
          <title>EMIS Report</title>
          <style>
            body { 
              font-family: 'Aptos', sans-serif; 
              margin: 40px; 
              line-height: 1.6; 
              color: #333;
            }
            h2, h3, h4 { 
              margin-bottom: 15px; 
              page-break-after: avoid;
            }
            h2 {
              color: #007BFF;
              border-bottom: 2px solid #007BFF;
              padding-bottom: 8px;
              margin-top: 40px;
            }
            h3 {
              color: #495057;
              margin-top: 25px;
            }
            h4 {
              color: #6c757d;
              margin-top: 20px;
            }
            p { 
              margin: 15px 0; 
              text-align: justify;
            }
            ul { 
              margin: 15px 0 15px 30px; 
            }
            li { 
              margin-bottom: 8px; 
            }
            
            th, td { 
              border: 1px solid #ccc; 
              padding: 10px;
              word-wrap: break-word;
              word-break: break-word;
              white-space: normal;
            }
            th {
              background-color: #f8f9fa;
              font-weight: bold;
            }
            .highlight-box {
              background-color: #f8f9fa;
              padding: 15px;
              border-radius: 4px;
              margin: 15px 0;
            }
          </style>
        </head>
        <body>
          ${reportContent}
        </body>
      </html>
    `;

    const blob = new Blob([htmlContent], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'EMIS_Report.doc';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8">
          <div className="text-center">
            <FileText className="mx-auto h-16 w-16 mb-4 opacity-90" />
            <h1 className="text-4xl font-bold mb-3">
              {facilityType === 'with-emis' ? 'EMIS Assessment Report' : 'EMIS Implementation Report'}
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              {facilityType === 'with-emis' 
                ? 'Comprehensive assessment results and strategic recommendations for optimizing your existing Energy Management Information System'
                : 'Detailed specifications and implementation roadmap for deploying a comprehensive Energy Management Information System'
              }
            </p>
          </div>
        </div>

        {/* Report Content */}
        <div className="p-8">
          <div id="report-content" className="prose prose-lg max-w-none">
            <div 
              dangerouslySetInnerHTML={{ __html: generateReportContent() }}
              className="space-y-6"
            />
          </div>
        </div>

        {/* Action Section */}
        <div className="bg-gray-50 border-t border-gray-200 p-8">
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-start">
            {/* Download Section */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Export Report</h3>
              <p className="text-gray-600 mb-4">Download your comprehensive EMIS report in Microsoft Word format for sharing and archival purposes.</p>
              <button
                onClick={downloadWord}
                className="flex items-center space-x-3 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              >
                <Download className="h-5 w-5" />
                <span className="font-medium">Download Report (.doc)</span>
              </button>
            </div>
            
            {/* New Survey Section */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Start New Assessment</h3>
              <p className="text-gray-600 mb-4">Begin a new EMIS survey for another facility or update your current assessment with new information.</p>
              <button
                onClick={onStartNew}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-md hover:shadow-lg font-medium"
              >
                Start New Survey
              </button>
            </div>
          </div>
        </div>

        {/* Survey Summary */}
        <div className="bg-blue-50 border-t border-blue-200 p-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-semibold text-blue-800 mb-6 flex items-center text-xl">
              <CheckCircle className="h-6 w-6 mr-3" />
              Survey Completion Summary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="h-3 w-3 bg-green-500 rounded-full mr-3"></div>
                  <h4 className="font-medium text-gray-900">Organization Details</h4>
                </div>
                <p className="text-gray-600 text-sm">Complete organizational information and facility details collected</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="h-3 w-3 bg-green-500 rounded-full mr-3"></div>
                  <h4 className="font-medium text-gray-900">Technical Objectives</h4>
                </div>
                <p className="text-gray-600 text-sm">{technicalObjectives.filter(obj => obj.checked).length} objectives selected and documented</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="h-3 w-3 bg-green-500 rounded-full mr-3"></div>
                  <h4 className="font-medium text-gray-900">
                    {facilityType === 'with-emis' ? 'EMIS Assessment' : 'EMIS Specifications'}
                  </h4>
                </div>
                <p className="text-gray-600 text-sm">
                  {facilityType === 'with-emis' && assessmentResults && 
                    `Assessment completed with ${assessmentResults.overallPercentage}% overall score`
                  }
                  {emisSpecsData && 'Comprehensive specifications survey completed'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithoutEMISReport;