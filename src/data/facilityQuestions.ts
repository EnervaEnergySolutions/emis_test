export const facilityQuestions = [
  // Energy Meters Section
  {
    id: 'em1',
    title: 'Key Energy Account Centres (EACs) Identified',
    subsection: 'Energy Meters',
    explanation: `KEY ENERGY ACCOUNT CENTRES (EACS) IDENTIFIED (SCORE 0–10)

The identification of Energy Account Centres (EACs) is the means whereby energy consumption within a site or facility is delineated. EACs should, at a minimum, match the accounting cost centres for a facility to allow management to treat energy as any other input cost for that centre. In more complex production processes, the use of accounting cost centres may not lead to a sufficiently discrete separation of energy consumptions and costs; as a result, there be a need for multiple EACs within each ACC. In these circumstances, EACs may be individual production areas, whole production lines or, if the energy consumption is significant, an individual unit operation such as a drier or furnace.

An important consideration is that all of the production equipment within the EAC should be under the responsibility of one operation or production manager who should be held accountable for the performance of that EAC. A single operations or production manager may be responsible for multiple EACs.

Another factor to consider is that performance and targets should be set and managed at the EAC level.`,
    answerOptions: [
      { text: 'EACs are delineated at an appropriate scale and scope for the site\'s operations or processes.', score: 10, description: 'has EACs delineated at an appropriate scale and scope for the site\'s operations or processes.' },
      { text: 'In most cases, EACs have been set at an appropriate level, but further EACs are required to provide a sufficiently discrete view to set targets and manage performance.', score: 7, description: 'has EACs set at mostly appropriate levels, but further EACs are required for discrete target setting and performance management.' },
      { text: 'EACs are set at an Accounting Cost Centre level but this is not sufficiently discrete to either set appropriate targets or manage performance.', score: 5, description: 'has EACs set at Accounting Cost Centre level but lacks sufficient discreteness for appropriate target setting or performance management.' },
      { text: 'EACs are defined at a Departmental level.', score: 3, description: 'has EACs defined at a departmental level.' },
      { text: 'No EACs have been identified.', score: 0, description: 'has not identified any EACs.' }
    ],
    maxScore: 10
  },
  {
    id: 'em2',
    title: 'Energy Sub-metering Coverage on EACs',
    subsection: 'Energy Meters',
    explanation: `ENERGY SUB-METERING COVERAGE ON EACS (SCORE 0–10)

Once the optimal Energy Account Centres have been defined, the next stage in an Energy Management Information System is to ensure that all energy flows into the Energy Account Centre are measured.

Remember to include both primary utilities - electricity, natural gas, oil, etc. - and secondary utilities, such as compressed air, where relevant. These measurement devices are normally referred to as sub-meters in order to distinguish them from the fiscal meters used to measure the primary energy flows to the site.

Sub-metering should cover the highest amount of energy possible within each of the EACs. This will allow for the most accurate overall representation of energy usage. Sub-meters should only be installed where the energy flow's financial value justifies the cost.

In order to calculate this coverage, the following data should be determined for each EAC:
• Overall weighting of energy for each EAC. This is subjective and the sum of the weighting should total 100%. These have been tagged below as Weighted %.
• Approximate percentage of the amount of energy being monitored for each EAC. These have been tagged below as Measured %.

Assessments can be made based on the following factors:
• Nameplate energy ratings on equipment throughout the facility;
• Relative size of piping going into an EAC, that which is measured vs. not measured;

Overall Energy Sub-metering Coverage (%) = SUM [(EAC1 Weighted %) × (EAC1 Measured %) + (EAC2 Weighted % × EAC 2 Measured %) + … + (EAC N Weighted %) × (EAC N Measured %)].`,
    answerOptions: [
      { text: '90-100% coverage', score: 10, description: 'has 90-100% energy sub-metering coverage on EACs.' },
      { text: '80-89% coverage', score: 9, description: 'has 80-89% energy sub-metering coverage on EACs.' },
      { text: '70-79% coverage', score: 8, description: 'has 70-79% energy sub-metering coverage on EACs.' },
      { text: '60-69% coverage', score: 7, description: 'has 60-69% energy sub-metering coverage on EACs.' },
      { text: '50-59% coverage', score: 6, description: 'has 50-59% energy sub-metering coverage on EACs.' },
      { text: '40-49% coverage', score: 5, description: 'has 40-49% energy sub-metering coverage on EACs.' },
      { text: '30-39% coverage', score: 4, description: 'has 30-39% energy sub-metering coverage on EACs.' },
      { text: '20-29% coverage', score: 3, description: 'has 20-29% energy sub-metering coverage on EACs.' },
      { text: '10-19% coverage', score: 2, description: 'has 10-19% energy sub-metering coverage on EACs.' },
      { text: '1-9% coverage', score: 1, description: 'has 1-9% energy sub-metering coverage on EACs.' },
      { text: '0% coverage', score: 0, description: 'has 0% energy sub-metering coverage on EACs.' }
    ],
    maxScore: 10
  },
  {
    id: 'em3',
    title: 'Meter Types Appropriate for Function',
    subsection: 'Energy Meters',
    explanation: `METER TYPES APPROPRIATE FOR FUNCTION (SCORE 0–10)

All meters must be suitable for their intended purpose, meaning they should accurately measure the expected range of energy flows within the required flow range. This criterion focuses on the selection of meter types and requires the auditor to assess their appropriateness for the specific function.

Primary considerations for appropriate meter function are:
• Rangeability – Calculated by taking the ratio of the meter maximum flow rate to the process low flow rate. Consider the range of flow the meter is capable of metering. Different meter elements will have different flow ranges, which are a function of the physical characteristics, e.g., orifice plates generally have low rangeability due to the relationship between flow and pressure drop (a square law) this means that a 4:1 turndown at the orifice plate equates to a 16:1 turndown at the differential pressure transducer.
• Appropriate measurement – Inherent characteristic of any meter will measure volume (velocity), mass or energy rates. Consider for example whether the meter measures mass rate, assuming this is the required parameter for reporting.
• Process conditions. – Consider whether the meter is appropriate for the process temperature and pressure. Hot water may, for example, flash into steam because of meter pressure drop; similarly, if the meter is measuring steam or gas, are pressure and temperature compensation necessary?`,
    answerOptions: [
      { text: 'All sub-meters have been selected with due regard to the range of energy flows expected and are appropriate for measurement and process conditions.', score: 10, description: 'has all sub-meters selected with due regard to energy flow ranges and appropriate for measurement and process conditions.' },
      { text: 'Most of the sub-meters have been selected with due regard to the range of energy flows expected and are appropriate for measurement and process conditions. Some meters will need replacement.', score: 7, description: 'has most sub-meters appropriately selected, though some meters will need replacement.' },
      { text: 'A minority of sub-meters are appropriate for the range of energy flows expected and as a consequence the majority will need replacement.', score: 3, description: 'has only a minority of sub-meters appropriate for expected energy flows, with majority needing replacement.' },
      { text: 'Meters not functional and/or meter reading suspect.', score: 0, description: 'has non-functional meters and/or suspect meter readings.' }
    ],
    maxScore: 10
  },
  {
    id: 'em4',
    title: 'Meter Installation Satisfactory',
    subsection: 'Energy Meters',
    explanation: `METER INSTALLATION SATISFACTORY (SCORE 0–5)

The long-term viability of the metering system is contingent on correct installation and, therefore, the ability to maintain these systems. Meters that are difficult to maintain are less likely to be inspected or calibrated regularly. Indicators of a satisfactory installation will include the presence of calibration records and evidence of regular recalibration. Other aspects to consider include:

Metering systems are easy to maintain and calibrate due to several factors: the meter can be easily removed from service for inspection, is readily accessible, and its transmitters can be isolated from the process for calibration.

Mechanical installation is correct. Key points are: meter aligned with piping; manufacturer's recommendations are followed, and any external tubing (impulse) is as short as possible. For example, steam orifice meters require a level head of water to be maintained in the transmitter tubing. Refer to manufacturers' O&M manuals for specific meters information.

The upstream and downstream piping for the meter is appropriately configured. Typically, process meters require straight sections of pipe free from elbows and restrictions both upstream and downstream. These lengths are typically specified in terms of pipe diameters with upstream values ranging from 10 to 15 pipe diameters and downstream requirements ranging from 5 to 10 pipe diameters.

Score is based on inspection and site operations feedback.

Most meter manufacturers have detailed resources available on their websites to assist users in selecting and installing their equipment correctly.`,
    answerOptions: [
      { text: 'All metering systems are installed correctly and can easily be inspected/calibrated.', score: 5, description: 'has all metering systems installed correctly and easily inspected/calibrated.' },
      { text: 'Only some of the meters have issues related to installation.', score: 4, description: 'has some meters with installation-related issues.' },
      { text: 'At least ½ of the meters have issues related to installation.', score: 2, description: 'has at least half of the meters with installation-related issues.' },
      { text: 'More than ¾ of meters not functional and/or not installed correctly.', score: 0, description: 'has more than three-quarters of meters non-functional and/or incorrectly installed.' }
    ],
    maxScore: 5
  },
  {
    id: 'em5',
    title: 'Meter Accuracy/Repeatability Understood',
    subsection: 'Energy Meters',
    explanation: `METER ACCURACY/REPEATABILITY UNDERSTOOD (SCORE 0–5)

Accuracy and repeatability considerations are:

Age of the metering systems. Manufacturers recommend periodic inspection of metering systems. Verify if the meter has been maintained or calibrated. Steam can erode the edges of an orifice plate, leading to inaccurate differential pressure readings. Calibrations are required for pressure, temperature and differential pressure transmitters. Pressure and temperature compensation must also be considered in most applications.

External fixed factors are sometimes used in meter or receiving equipment that can impact measurement totals. Factors may not be appropriate or not updated frequently. Process conditions may have changed since the system was commissioned. Examples might be converting natural gas from actual (uncorrected) conditions to standard conditions using fixed pressure and temperatures. Standard conditions are required to reconcile against billing volumes and to convert volume to energy. Another common error found is incorrect ratios used for current transformers in electrical measurement.

Meter type may not be appropriate for process fluid. Dirty or viscous fluids have an impact on the metering accuracy.

Score each meter with one point for each item above. Average based on total number of meters.`,
    answerOptions: [
      { text: 'Unreliable', score: 0, description: 'has unreliable meters that provide inconsistent readings and cannot be trusted for energy management decisions.' },
      { text: 'Poor accuracy', score: 1, description: 'has meters with poor accuracy that significantly affect energy management effectiveness.' },
      { text: 'Fair accuracy', score: 2, description: 'has meters with fair accuracy but some issues that may affect energy management.' },
      { text: 'Good accuracy', score: 3, description: 'has meters with good accuracy and regular maintenance procedures.' },
      { text: 'Excellent accuracy', score: 4, description: 'has meters with very good accuracy and comprehensive maintenance.' },
      { text: 'Accurate and maintained', score: 5, description: 'has accurate and well-maintained meters that provide reliable data for energy management.' }
    ],
    isSlider: true,
    isPercentageBased: true,
    sliderLabels: ['Unreliable', 'Poor', 'Fair', 'Good', 'Very Good', 'Accurate & Maintained'],
    maxScore: 5
  },

  // Relevant Variables Section
  {
    id: 'rv1',
    title: 'Key Drivers Identified',
    subsection: 'Relevant Variables',
    explanation: `KEY DRIVERS IDENTIFIED (SCORE 0–10)

There are three main types of energy driver, i.e., factors influencing the energy performance of an EAC:
• Production – e.g., production levels and production mix.
• Environmental – e.g., ambient temperature, humidity.
• Operational – control temperatures and pressures.

For each EAC, the relevant energy driver(s) must be identified, focusing on those that have the greatest impact account centre's energy performance. For each EAC, a list of all possible relevant variables is created, which is subsequently reduced through discussion with the site staff to isolate those that have the greatest impact on energy performance.

This section is scored as a subjective percentage based on the extent to which the listed drivers account for all variables that can affect energy consumption.`,
    answerOptions: [
      { text: '90-100% of drivers identified', score: 10, description: 'has identified 90-100% of key energy drivers.' },
      { text: '80-89% of drivers identified', score: 9, description: 'has identified 80-89% of key energy drivers.' },
      { text: '70-79% of drivers identified', score: 8, description: 'has identified 70-79% of key energy drivers.' },
      { text: '60-69% of drivers identified', score: 7, description: 'has identified 60-69% of key energy drivers.' },
      { text: '50-59% of drivers identified', score: 6, description: 'has identified 50-59% of key energy drivers.' },
      { text: '40-49% of drivers identified', score: 5, description: 'has identified 40-49% of key energy drivers.' },
      { text: '30-39% of drivers identified', score: 4, description: 'has identified 30-39% of key energy drivers.' },
      { text: '20-29% of drivers identified', score: 3, description: 'has identified 20-29% of key energy drivers.' },
      { text: '10-19% of drivers identified', score: 2, description: 'has identified 10-19% of key energy drivers.' },
      { text: '1-9% of drivers identified', score: 1, description: 'has identified 1-9% of key energy drivers.' },
      { text: '0% of drivers identified', score: 0, description: 'has identified 0% of key energy drivers.' }
    ],
    maxScore: 10
  },
  {
    id: 'rv2',
    title: 'Driver Measurement Appropriate to Function',
    subsection: 'Relevant Variables',
    explanation: `DRIVER MEASUREMENT APPROPRIATE TO FUNCTION (SCORE 0 –10)

Similar to energy meters, the selection and installation of measurement sensors for utility drivers must consider the type and physical characteristics of the energy flow., so the measurement and sensors for measuring relevant variables must likewise be chosen and installed correctly.

Particular issues specific to driver measurement relate to the measurement of variable absolute values, such as temperature, pressure and relative humidity and the period over which these absolute values are either sampled or averaged in order to arrive at a measure of the driver.

This score determines not only whether the facility has determined how to measure the drivers, but also ensures that the measurements have been correlated to the energy consumption for each EAC.

If drivers for each EAC have not yet been defined, the score should be 0, even if measurements are being taken.`,
    answerOptions: [
      { text: 'Drivers have been identified, measurements have been defined in order to monitor the drivers, and these correlate to the energy consumption of the EAC.', score: 10, description: 'has identified drivers with defined measurements that correlate to EAC energy consumption.' },
      { text: 'Drivers have been identified, measurements have been partially or fully defined, but there is no correlation between a change in the given measurement and the energy consumption of each EAC.', score: 7, description: 'has identified drivers with defined measurements but no correlation to EAC energy consumption.' },
      { text: 'Drivers have been identified for each EAC, but specific measurements have not been defined for each driver.', score: 4, description: 'has identified drivers for each EAC but specific measurements are not defined.' },
      { text: 'No drivers have been identified.', score: 0, description: 'has not identified any drivers.' }
    ],
    maxScore: 10
  },
  {
    id: 'rv3',
    title: 'Correct Measurement of Drivers',
    subsection: 'Relevant Variables',
    explanation: `CORRECT MEASUREMENT OF DRIVERS (SCORE 0–10)

This score determines whether they are actually measuring the drivers which have been determined for each EAC. Scores are based on equipment being in place that monitors the measurable for each driver.

If drivers and their measurement type have not been defined for each EAC, the score should be 0. In order to prevent the collection of data that will not be used, it is important to begin by defining the drivers and their measurement type prior to putting equipment in place to monitor the drivers.`,
    answerOptions: [
      { text: 'The correct drivers to measure have been identified, and they are, in fact, being measured.', score: 10, description: 'has identified correct drivers and is measuring them.' },
      { text: 'They know their drivers and the reasons for their importance and are measuring the majority of them.', score: 7, description: 'knows drivers and their importance, measuring the majority.' },
      { text: 'They know their drivers and the reasons for their importance and are measuring half of them.', score: 5, description: 'knows drivers and their importance, measuring half of them.' },
      { text: 'They know their drivers and the reasons for their importance but are measuring fewer than half.', score: 3, description: 'knows drivers and their importance but measuring fewer than half.' },
      { text: 'They don\'t know their drivers, drivers are identified incorrectly, or there\'s no measurement.', score: 0, description: 'does not know drivers, has incorrect identification, or no measurement.' }
    ],
    maxScore: 10
  },

  // Data Capture and Storage Section
  {
    id: 'dcs1',
    title: 'Effort in Meter Reading',
    subsection: 'Data Capture and Storage',
    explanation: `EFFORT IN METER READING (SCORE 0–5)

Manual data collection and entry systems become unreliable and cannot offer high resolution data. Data collection may be any or all of the following:
• Automatically passed from meter to PLC and data historian. No manual effort is required. Data is only passed part way through an automated system.
• Data is captured by manual reading and then typed into computer systems (Excel or other database).
• Score by assessing the manual effort required to get the data into a data historian.`,
    answerOptions: [
      { text: 'Complete automated System for data monitoring and collection.', score: 5, description: 'has a complete automated system for data monitoring and collection.' },
      { text: 'Automated System for data monitoring; only partial data is collected automatically. Some portions of automated system not functional.', score: 4, description: 'has an automated system for data monitoring with partial automated data collection.' },
      { text: 'Data is monitored via the DCS or SCADA system but are not captured by a database and must be recorded manually.', score: 3, description: 'monitors data via DCS or SCADA but requires manual recording.' },
      { text: 'Manual readings are taken from meters or remote totalizers and entered into a database.', score: 2, description: 'takes manual readings from meters and enters into database.' },
      { text: 'Manual readings are taken from meters with no database entry.', score: 1, description: 'takes manual readings from meters with no database entry.' },
      { text: 'Energy meters are not in place or not accessible.', score: 0, description: 'has energy meters that are not in place or not accessible.' }
    ],
    isSlider: true,
    isPercentageBased: false,
    sliderLabels: [
  "Fully Automated",
  "Mostly Automated",
  "Monitored Only",
  "Manual with Database",
  "Manual Only",
  "No Meters"
]
,
    maxScore: 5
  },
  {
    id: 'dcs2',
    title: 'Effort in Data Entry',
    subsection: 'Data Capture and Storage',
    explanation: `EFFORT IN DATA ENTRY (SCORE 0–5)

If automated systems are in place to collect data and no human intervention is required, score high.

Are the manually recorded readings directly typed into the database or are further conversions required before entry?

If the data entry system matches the same order as the manually recorded data, less chance exists to enter data in the wrong areas. Easiest data entry is when both screen and list are in the same order.

Data entry is an assigned duty with back-up people assigned to cover vacation and sick time. Score based on impression and level of organization of data entry system.`,
    answerOptions: [
      { text: 'Automated system in place to store data in a data historian system.', score: 5, description: 'has an automated system in place to store data in a data historian system.' },
      { text: 'Partially automated collection of data into a database. Some data still entered manually.', score: 3, description: 'has partially automated data collection with some manual entry.' },
      { text: 'Manual entry into a database.', score: 2, description: 'uses manual entry into a database.' },
      { text: 'Manual entry into an Excel spreadsheet with no ability to mine data.', score: 1, description: 'uses manual entry into Excel with no data mining capability.' },
      { text: 'No database exists.', score: 0, description: 'has no database.' }
    ],
    isSlider: true,
    isPercentageBased: false,
    sliderLabels: [
  "Fully Automated",
  "Partially Automated",
  "Manual Database Entry",
  "Manual Spreadsheet Entry",
  "No System"
]
,
    maxScore: 5
  },
  {
    id: 'dcs3',
    title: 'Error Checking Mechanisms Included',
    subsection: 'Data Capture and Storage',
    explanation: `ERROR CHECKING MECHANISMS INCLUDED (SCORE 0–5)

This scorecard assesses whether error checking systems are in place to quickly identify faulty readings from the energy meters or driver measurements.

Error check might be the operation of utilities against production totals. Out of range or zero should be flagged. Does the system account for data rollover in the meter or receiver system?

Has the system been commissioned so that meter readings have been cross-checked against the reporting system? Many metering systems have indexes to indicate non-resettable total meter counts.

Some metering systems have error status flags to indicate electronics issues with the meter. For example, an out of range or no-flow situation.

O&M manuals should be referenced when installing error checking mechanisms.

Score based on impressions of whether any error check systems are in place or reported.`,
    answerOptions: [
      { text: 'Error Status from the meters or communications status triggers a flag in the database indicating that the data is inaccurate.', score: 5, description: 'has error status from meters that triggers database flags for inaccurate data.' },
      { text: 'Most meters have error or communications flag status or can be cross checked against other metering systems.', score: 3, description: 'has most meters with error/communications flags or cross-checking capability.' },
      { text: 'Data is manually checked in the reports by someone who is familiar with the expected values that should be received from the system. The reports are then adjusted based on the manual inspections.', score: 2, description: 'manually checks data in reports with adjustments based on inspections.' },
      { text: 'Data is manually checked in the reports by someone who is familiar with the system. The reports are not manually adjusted.', score: 1, description: 'manually checks data in reports without adjustments.' },
      { text: 'Data is not cross checked against any expected values and no error status on metering observed.', score: 0, description: 'does not cross-check data and has no error status on metering.' }
    ],
    isSlider: true,
    isPercentageBased: false,
    sliderLabels: [
  "Automated Error Flags",
  "Systematic Cross-Checks",
  "Manual Validation with Adjustments",
  "Manual Validation Only",
  "No Error Checks"
]
,
    maxScore: 5
  },
  {
    id: 'dcs4',
    title: 'Frequency of Data Capture Appropriate',
    subsection: 'Data Capture and Storage',
    explanation: `FREQUENCY OF DATA CAPTURE APPROPRIATE (SCORE 0–10)

Both meter and driver data is considered in assessing if data capture frequency is appropriate. Key factors in this area are:

Is meter or driver data capture frequency capable of meeting the minimum requirements for the reporting system? A capture rate of one hour will not be adequate to report accurately on a shift system of 7.5 hours for example. Similarly, capturing ambient temperature readings every minute will wastefully increase the amount of data analysis required.

Enough resolution is required to identify any meter faults conditions. Examples might be short intervals of flows that exceed meter specifications.

Sufficient resolution is required to identify abnormal driver and process conditions.

Enough resolution is required to capture peak meter rates. Electrical utility may capture peak electrical consumption based on 15-minute intervals. This will drive the frequency of data capture to match the utility billing.

Only automated collection systems can meet these requirements. Score based on above five constraints.`,
    answerOptions: [
      { text: 'Data capture meets all requirements', score: 10, description: 'has data capture that meets all requirements.' },
      { text: 'Data capture systems meet majority of requirements, some adjustments are necessary to meet frequency requirements.', score: 7, description: 'has data capture systems meeting majority of requirements with some adjustments needed.' },
      { text: 'Data capture systems do not capture data at required frequency.', score: 4, description: 'has data capture systems that do not capture data at required frequency.' },
      { text: 'Data capture rate is not appropriate for reporting or does not meet minimum requirements (manual data collection systems).', score: 0, description: 'has inappropriate data capture rate that does not meet minimum requirements.' }
    ],
    maxScore: 10
  },
  {
    id: 'dcs5',
    title: 'Degrees of Separation Between Meters and Storage',
    subsection: 'Data Capture and Storage',
    explanation: `DEGREES OF SEPARATION BETWEEN METERS AND STORAGE (SCORE 0–10)

The extent of the chain between the metering systems and historical storage will dictate the reliability of the chain. Shorter and simpler connections between the chains will mean a more reliable data collection system.

Score based on overall impressions of any existing system. Manual systems score zero.`,
    answerOptions: [
      { text: 'A working system is in place to automatically collect data. The site staff have great confidence in this system.', score: 10, description: 'has a working automated data collection system with high staff confidence.' },
      { text: 'Some meters are not reporting and maintenance effort is required to fix these issues.', score: 7, description: 'has some non-reporting meters requiring maintenance effort.' },
      { text: 'Some technical issues exist with the meters and historical storage connection chain. This can be fixed with a dedicated effort.', score: 5, description: 'has technical issues with meter-storage connection that can be fixed with dedicated effort.' },
      { text: 'Technical issues exist with the data collection and system does not meet requirements. Major re-working of system is required.', score: 2, description: 'has technical issues with data collection requiring major system rework.' },
      { text: 'Data collection is not possible with the current receiver and/or data historian. Also zero if a manual system is used.', score: 0, description: 'cannot collect data with current receiver/historian or uses manual system.' }
    ],
    maxScore: 10
  },
  {
    id: 'dcs6',
    title: 'Historical Data Storage Sufficient',
    subsection: 'Data Capture and Storage',
    explanation: `HISTORICAL DATA STORAGE SUFFICIENT (SCORE 0–5)

To report on historical energy usage data is stored in a database. Longer term storage gives more opportunity to view trends in energy usage.

Given the frequency of data capture, is the database capable of effectively processing the amount of stored data for reporting (e.g., where reports take hours to generate)?

Is the database capable of storing long term data so individual shifts, days, months, seasons and years can be reported on?

Score based on impressions of amount of data and overall functionality of the system.`,
    answerOptions: [
      { text: 'Database historian can effectively store required amount of data.', score: 5, description: 'has a database historian that can effectively store required data amounts.' },
      { text: 'Database is functioning correctly but some data not captured.', score: 4, description: 'has a functioning database but some data is not captured.' },
      { text: 'Database historian is capable of storing required data but more effort is required to set up database to correctly capture and/or report data.', score: 3, description: 'has a capable database historian but requires more setup effort for proper data capture/reporting.' },
      { text: 'Database needs to be reconfigured to store and capture data. Data historian may not be up to the task.', score: 1, description: 'needs database reconfiguration and data historian may be inadequate.' },
      { text: 'Historical data storage is not possible long-term as the database cannot store quantity of required data.', score: 0, description: 'cannot store historical data long-term due to database limitations.' }
    ],
    maxScore: 5
  },

  // Data Analysis Section
  {
    id: 'da1',
    title: 'Scale of System Appropriate to Complexity of Analysis',
    subsection: 'Data Analysis',
    explanation: `SCALE OF SYSTEM APPROPRIATE TO COMPLEXITY OF ANALYSIS (SCORE 0–5)

This criterion compares the scale of the EMIS system and the required analysis. The requirements are both the organization's own and those necessary to provide accurate and reliable analysis. These are not necessarily the same, as some organizations will not realize the full requirements and potential of an EMIS system.

Qualifying considerations include:
• Number of meters and frequency of data storage and analysis;
• Complexity of reporting and analysis;
• Single site of multiple site system;
• Resource requirements to facilitate the analysis.`,
    answerOptions: [
      { text: 'System capable of required scale of analysis and technical content. May serve multiple sites. Intuitive and/or simple interface to configure and obtain analysis. Automated analysis requiring no resource.', score: 5, description: 'has a system capable of required analysis scale with intuitive interface and automated analysis.' },
      { text: 'System capable of required scale of analysis and technical content with minimum resource requirements. Specialist input required for initial set-up and definition of analysis.', score: 3, description: 'has a system capable of required analysis with minimum resource requirements and specialist setup.' },
      { text: 'System capable of required scale and technical content but has high resource requirements, i.e., specialist knowledge and input required to achieve analysis.', score: 2, description: 'has a system capable of required analysis but with high resource requirements.' },
      { text: 'System capable of required scale and technical content but has high resource requirements. Either resources not available or not allocated to the task.', score: 1, description: 'has a capable system but resources are not available or allocated.' },
      { text: 'System incapable of processing the required amount of data in a timely manner. Technical capabilities of system inadequate to complete required analysis.', score: 0, description: 'has a system incapable of processing required data or completing analysis.' }
    ],
    maxScore: 5
  },
  {
    id: 'da2',
    title: 'Close Integration with Data Capture System',
    subsection: 'Data Analysis',
    explanation: `CLOSE INTEGRATION WITH DATA CAPTURE SYSTEM (SCORE 0–5)

This criterion considers how closely the analysis and reporting tool is integrated with the data historian. Closer integration will reduce resource requirements in extracting and processing data.`,
    answerOptions: [
      { text: 'Full integration with data historian. Access by analysis and reporting tool to data historian available at all times.', score: 5, description: 'has full integration with data historian available at all times.' },
      { text: 'Full integration with data historian. Access by analysis and reporting tool to data historian only at pre-scheduled times.', score: 3, description: 'has full integration with data historian at pre-scheduled times only.' },
      { text: 'Semi-integrated with data historian. Automated data extraction from data historian into separate database.', score: 2, description: 'has semi-integration with automated data extraction to separate database.' },
      { text: 'No integration with data historian. Data can be extracted using batch procedure, but this requires specialist.', score: 1, description: 'has no integration but can extract data using batch procedures requiring specialists.' },
      { text: 'No integration with data historian. Data must be extracted manually from data historian and input into analysis and reporting tool manually.', score: 0, description: 'has no integration requiring manual data extraction and input.' }
    ],
    maxScore: 5
  },
  {
    id: 'da3',
    title: 'Comparison of Ongoing Performance Against Drivers',
    subsection: 'Data Analysis',
    explanation: `COMPARISON OF ONGOING PERFORMANCE AGAINST DRIVERS (SCORE 0–10)

This criterion considers whether the relationship between relevant variables and energy consumption is considered on measuring performance.

Relevant variables are independent variables that have a direct impact on energy consumption, such as production rate, product mix, occupancy and ambient temperature. It cannot be assumed that these drivers have a significant impact on consumption. Best practice is to perform multiple regressions against a number of drivers and then to consider only those drivers that have a statistically significant relationship.`,
    answerOptions: [
      { text: 'Multiple regression statistical analysis of the impact of all available relevant variables. Regular re-screening of relevant variables to ensure that changes in circumstances have not changed the validity of drivers chosen (e.g., change in product mix, new plant installation).', score: 10, description: 'performs multiple regression analysis with regular re-screening of relevant variables.' },
      { text: 'Multiple regression statistical analysis of the impact of all available relevant variables based only on historical data analysis.', score: 7, description: 'performs multiple regression analysis based on historical data only.' },
      { text: 'Comparison with multiple relevant variables based on linear regression. Consideration of each energy driver independently.', score: 5, description: 'compares multiple variables using linear regression with independent driver consideration.' },
      { text: 'Simple comparison against energy driver, based on linear regression or visual interpretation.', score: 3, description: 'performs simple comparison against energy drivers using linear regression or visual interpretation.' },
      { text: 'No consideration of relevant variables.', score: 0, description: 'does not consider relevant variables.' }
    ],
    maxScore: 10
  },
  {
    id: 'da4',
    title: 'Data Analysis Over Flexible Time Frames',
    subsection: 'Data Analysis',
    explanation: `DATA ANALYSIS OVER FLEXIBLE TIME FRAMES (SCORE 0–10)

The period during which data is analyzed will vary according to audience and the analysis or reporting required e.g.:
• Previous year;
• Monthly analysis for budgeting and management reporting;
• Weekly analysis for operational management;
• Daily/shift based analysis for production and shop floor;

The definition of each of these periods is also important to ensure that analysis periods coincide with actual shift times, corporate reporting periods, etc.`,
    answerOptions: [
      { text: 'Flexible and multiple time frames can be selected by the user at any time. These can either be programmed in or used on an ad-hoc basis. Several definitions can be used in parallel for a given period.', score: 10, description: 'allows flexible and multiple time frames selectable by user with parallel definitions.' },
      { text: 'Flexible and multiple time frames can be selected by the user at any time e.g., 06:00 Monday to 06:00 Saturday, eight-hour shifts', score: 7, description: 'allows flexible and multiple time frames selectable by user.' },
      { text: 'Flexible analysis time frames either pre-defined by user or set by system (e.g., last week, month to date, etc.)', score: 5, description: 'provides flexible analysis time frames pre-defined by user or system.' },
      { text: 'Fixed analysis period, pre-defined by user to coincide with shifts, work week, etc.', score: 3, description: 'uses fixed analysis periods pre-defined by user.' },
      { text: 'Fixed analysis period, defined by system e.g., only daily, midnight to midnight', score: 0, description: 'uses fixed analysis periods defined by system only.' }
    ],
    maxScore: 10
  },
  {
    id: 'da5',
    title: 'Data Aggregated Over Flexible Time Period',
    subsection: 'Data Analysis',
    explanation: `DATA AGGREGATED OVER FLEXIBLE TIME PERIOD (SCORE 0–5)

Data historians are typically configured to sample meter readings and variables at a frequency of between one minute and one hour. However, in order to report to different audiences, it is desirable to aggregate both the consumptions and targets over a flexible time frame.

For shift operations, the ability to report consumptions and targets over shifts on the previous day will:`,
    answerOptions: [
      { text: 'Aggregate data over multiple variable time periods, multiple time period data possible on a single report.', score: 5, description: 'aggregates data over multiple variable time periods with multiple periods on single reports.' },
      { text: 'Aggregate data over multiple variable time periods, single time period on any given report.', score: 4, description: 'aggregates data over multiple variable time periods with single period per report.' },
      { text: 'Aggregate data over variable time period, but only one definition of the time period at a time.', score: 3, description: 'aggregates data over variable time periods with one definition at a time.' },
      { text: 'Aggregate data over fixed time period defined by user.', score: 2, description: 'aggregates data over fixed time periods defined by user.' },
      { text: 'Aggregate data over fixed time period defined by system.', score: 1, description: 'aggregates data over fixed time periods defined by system.' },
      { text: 'Not able to aggregate data.', score: 0, description: 'cannot aggregate data.' }
    ],
    maxScore: 5
  },

  // Target Setting Section
  {
    id: 'ts1',
    title: 'Targets Based on Analysis of Data',
    subsection: 'Target Setting',
    explanation: `TARGETS BASED ON ANALYSIS OF DATA (SCORE 0–10)

Have targets been based on an analysis of historic performance or on theoretical performance characteristics or are they arbitrary?`,
    answerOptions: [
      { text: 'Target based on multiple regressions, defining both base load and variable load. Separate targets entered for start-up, shut-down, product changeover and downtime, etc.', score: 10, description: 'has targets based on multiple regressions with separate targets for various operational states.' },
      { text: 'Target based on multiple regressions, defining both base load and variable load.', score: 7, description: 'has targets based on multiple regressions defining base and variable loads.' },
      { text: 'Target based on single regression, defining both base load and variable load.', score: 5, description: 'has targets based on single regression defining base and variable loads.' },
      { text: 'Targets based on data visualization — these are targets based on visual inspection of data and subjective decision of appropriate target. or Ad-hoc targets. Corporate energy reduction targets are often based on a percentage reduction determined by a desire to reduce energy consumption that is not determined by any analysis. Without analysis it cannot be determined if such targets are achievable.', score: 3, description: 'has targets based on data visualization or ad-hoc corporate reduction targets.' },
      { text: 'No target. Measurement of energy consumption by Energy Account Centre will enable some savings to be identified and improvements made, though without targets, the improvements could not be quantified or sustained.', score: 0, description: 'has no targets set.' }
    ],
    maxScore: 10
  },
  {
    id: 'ts2',
    title: 'Realistic Targets Defined',
    subsection: 'Target Setting',
    explanation: `REALISTIC TARGETS DEFINED (SCORE 0–10)

Targets should be based on realistic analysis and be achievable in the medium-term.`,
    answerOptions: [
      { text: 'Targets based on statistical analysis and account for standard error in analysis. The standard error band will take into account the accuracy of the target achieved and uncertainty in the data points.', score: 10, description: 'has targets based on statistical analysis accounting for standard error.' },
      { text: 'Targets based on analysis. Target line set at least squares regression line. This represents the average performance of the target data set and is, therefore, historically achievable 50 percent of the time.', score: 7, description: 'has targets based on analysis with least squares regression line.' },
      { text: 'Target set arbitrarily within achievable range or target calculated using historical consumption and relevant variables. Set at best achieved level.', score: 5, description: 'has targets set arbitrarily within achievable range or at best achieved level.' },
      { text: 'Target set at level not previously achieved.', score: 3, description: 'has targets set at levels not previously achieved.' },
      { text: 'No target.', score: 0, description: 'has no targets.' }
    ],
    maxScore: 10
  },
  {
    id: 'ts3',
    title: 'Targets Accepted by EAC Owner',
    subsection: 'Target Setting',
    explanation: `TARGETS ACCEPTED BY EAC OWNER (SCORE 0–10)

For targets to be effective the EAC owner must accept the target as realistic and be willing to take action to improve performance.`,
    answerOptions: [
      { text: 'EAC owner fully accepts targets and is involved in tightening standards.', score: 10, description: 'has EAC owners who fully accept targets and are involved in tightening standards.' },
      { text: 'EAC owner fully accepts targets but unsure how to influence them.', score: 7, description: 'has EAC owners who fully accept targets but are unsure how to influence them.' },
      { text: 'EAC owner will go along with targets without full commitment or EAC owner only accepts targets when performance is good.', score: 5, description: 'has EAC owners who go along with targets without full commitment.' },
      { text: 'EAC owner does not accept basis for targets. Rejects targets.', score: 3, description: 'has EAC owners who do not accept the basis for targets.' },
      { text: 'No EAC owners.', score: 0, description: 'has no EAC owners.' }
    ],
    maxScore: 10
  },
  {
    id: 'ts4',
    title: 'EAC Owner is Accountable for Performance and Empowered to Improve It',
    subsection: 'Target Setting',
    explanation: `EAC OWNER IS ACCOUNTABLE FOR PERFORMANCE AND EMPOWERED TO IMPROVE IT (SCORE 0–5)

Does the EAC owner have the authority and ability to implement improvement actions based on the performance shown by the targets?`,
    answerOptions: [
      { text: 'EAC owner directly accountable for performance, empowered to take action, and willing to implement changes.', score: 5, description: 'has EAC owners directly accountable, empowered, and willing to implement changes.' },
      { text: 'EAC owner directly accountable for performance, empowered to take action, but unwilling to implement changes.', score: 4, description: 'has EAC owners directly accountable and empowered but unwilling to implement changes.' },
      { text: 'EAC owner has regular contact with person who is accountable and empowered to make changes. Able to influence this person to make changes.', score: 3, description: 'has EAC owners with regular contact to accountable persons and ability to influence changes.' },
      { text: 'EAC owner remote from decision makers. Can instigate change request but reliant on others to decide whether to implement.', score: 2, description: 'has EAC owners remote from decision makers but can instigate change requests.' },
      { text: 'EAC owner remote from decision makers and unable to exert any influence.', score: 0, description: 'has EAC owners remote from decision makers with no influence.' }
    ],
    maxScore: 5
  },
  {
    id: 'ts5',
    title: 'Target-setting Process Inclusive',
    subsection: 'Target Setting',
    explanation: `TARGET-SETTING PROCESS INCLUSIVE (SCORE 0–5)

To what extent have the owners of the Energy Account Centres been involved in the process of target setting? If targets are to be accepted and owned, the EAC owners should be actively involved in the process.`,
    answerOptions: [
      { text: 'EAC owner fully involved in target setting process.', score: 5, description: 'has EAC owners fully involved in target setting process.' },
      { text: 'EAC owner present during target setting in capacity of observer only.', score: 3, description: 'has EAC owners present during target setting as observers only.' },
      { text: 'EAC owner aware of target setting, but not involved.', score: 1, description: 'has EAC owners aware of target setting but not involved.' },
      { text: 'EAC owner neither involved nor aware of target setting.', score: 0, description: 'has EAC owners neither involved nor aware of target setting.' }
    ],
    maxScore: 5
  },

  // Energy Performance Reporting Section
  {
    id: 'epr1',
    title: 'Production of Performance Reports',
    subsection: 'Energy Performance Reporting',
    explanation: `PRODUCTION OF PERFORMANCE REPORTS (SCORE 0–5)

Can performance reports be automatically generated and accessed by multiple users?`,
    answerOptions: [
      { text: 'Reports are available immediately after the end of the measured reporting period. For example, for a daily report, if the day ends at 06:00, the reports should be available by 06:30.', score: 5, description: 'has reports available immediately after the end of measured reporting periods.' },
      { text: 'Reports available 24 hours after end of period.', score: 3, description: 'has reports available 24 hours after end of period.' },
      { text: 'Reports available one week or more after end of period.', score: 1, description: 'has reports available one week or more after end of period.' },
      { text: 'Reports available only if produced as a one-off report. Not routinely available.', score: 0, description: 'has reports available only as one-off productions, not routinely.' }
    ],
    maxScore: 5
  },
  {
    id: 'epr2',
    title: 'Report Generation',
    subsection: 'Energy Performance Reporting',
    explanation: `REPORT GENERATION (SCORE 0–5)

Who is responsible for producing performance reports?`,
    answerOptions: [
      { text: 'Automatic report generation, accessible to all stakeholders.', score: 5, description: 'has automatic report generation accessible to all stakeholders.' },
      { text: 'Reports are generated by a wider group of people. Specialist knowledge is not required to produce reports.', score: 3, description: 'has reports generated by wider groups without requiring specialist knowledge.' },
      { text: 'Reports generated by specialists. It cannot easily be produced if these individuals are not available.', score: 1, description: 'has reports generated by specialists only.' },
      { text: 'No responsibility allocated or explicit skills needed to produce reports.', score: 0, description: 'has no responsibility allocated for report production.' }
    ],
    maxScore: 5
  },
  {
    id: 'epr3',
    title: 'Timeliness of Performance Reports',
    subsection: 'Energy Performance Reporting',
    explanation: `TIMELINESS OF PERFORMANCE REPORTS (SCORE 0–5)

How quickly are performance reports available after the period of measurement?`,
    answerOptions: [
      { text: 'Reports available immediately after the end of the period measured. For example, for a daily report, if the day ends at 06:00, the reports should be available by 06:30.', score: 5, description: 'has reports available immediately after the end of measured periods.' },
      { text: 'Reports available 24 hours after end of period.', score: 3, description: 'has reports available 24 hours after end of period.' },
      { text: 'Reports available one week or more after end of period.', score: 1, description: 'has reports available one week or more after end of period.' },
      { text: 'Reports available only if produced as a one-off report. Not routinely available.', score: 0, description: 'has reports available only as one-off productions.' }
    ],
    maxScore: 5
  },
  {
    id: 'epr4',
    title: 'User Friendliness of Performance Reports',
    subsection: 'Energy Performance Reporting',
    explanation: `USER FRIENDLINESS OF PERFORMANCE REPORTS (SCORE 0–5)

Are the performance reports easy to understand and do they contain user approved data?`,
    answerOptions: [
      { text: 'Reports easy to understand for all users.', score: 5, description: 'has reports that are easy to understand for all users.' },
      { text: 'Some parts of report easily understood, other parts not understood or ignored.', score: 3, description: 'has reports with some parts easily understood, others not understood or ignored.' },
      { text: 'Reports are too complex for the EAC owner to fully understand or explain.', score: 1, description: 'has reports too complex for EAC owners to understand or explain.' },
      { text: 'Complex reports, understood only by individuals who created them.', score: 0, description: 'has complex reports understood only by their creators.' }
    ],
    maxScore: 5
  },
  {
    id: 'epr5',
    title: 'Content of Performance Reports',
    subsection: 'Energy Performance Reporting',
    explanation: `CONTENT OF PERFORMANCE REPORTS (SCORE 0–5)

Is the data in the performance reports sufficient to stimulate action and specific enough to guide focus?`,
    answerOptions: [
      { text: 'Content is ideal for interpreting performance and making improvements. No extraneous content.', score: 5, description: 'has report content ideal for interpreting performance and making improvements.' },
      { text: 'Contains required information, but masked by irrelevant or unnecessary information.', score: 3, description: 'has reports containing required information but masked by irrelevant content.' },
      { text: 'Contains some useful information, but not all the information required.', score: 1, description: 'has reports containing some useful information but not all required.' },
      { text: 'Irrelevant or incorrect content.', score: 0, description: 'has reports with irrelevant or incorrect content.' }
    ],
    maxScore: 5
  },
  {
    id: 'epr6',
    title: 'Readership of Performance Reports',
    subsection: 'Energy Performance Reporting',
    explanation: `READERSHIP OF PERFORMANCE REPORTS (SCORE 0–5)

Are performance reports available to all relevant users or restricted to key stakeholders? Are reports paper-based or live and generated directly from the data?`,
    answerOptions: [
      { text: 'Live generated reports available to all those concerned. Reports available only to those concerned.', score: 5, description: 'has live generated reports available to all concerned parties.' },
      { text: 'Live generated reports available to all people concerned. All reports available to everyone, even if not involved. Only some reports relevant to an individual are made available.', score: 3, description: 'has live generated reports available to all with some targeting to individuals.' },
      { text: 'Paper-based reporting, inconsistent distribution with result that those concerned often do not receive relevant reports.', score: 1, description: 'has paper-based reporting with inconsistent distribution.' },
      { text: 'Paper-based reporting with restricted access.', score: 0, description: 'has paper-based reporting with restricted access.' }
    ],
    maxScore: 5
  },
  {
    id: 'epr7',
    title: 'Ability to Roll Up Performance Reports',
    subsection: 'Energy Performance Reporting',
    explanation: `ABILITY TO ROLL UP PERFORMANCE REPORTS (SCORE 0–5)

Is it possible to drill down to consider performance from a site level to a department or EAC level, and is the data consistent throughout?`,
    answerOptions: [
      { text: 'Can drill down, data consistent. All users capable of drilling down.', score: 5, description: 'can drill down with consistent data and all users capable of drilling down.' },
      { text: 'Can drill down, data consistent. Requires specialist knowledge to drill down.', score: 3, description: 'can drill down with consistent data but requires specialist knowledge.' },
      { text: 'Can drill down, but data is inconsistent.', score: 1, description: 'can drill down but data is inconsistent.' },
      { text: 'Not possible to drill down.', score: 0, description: 'cannot drill down.' }
    ],
    maxScore: 5
  },
  {
    id: 'epr8',
    title: 'Integration with Other IT Systems',
    subsection: 'Energy Performance Reporting',
    explanation: `INTEGRATION WITH OTHER IT SYSTEMS (SCORE 0–5)

Are the data in the performance reports available to other internal IT systems?`,
    answerOptions: [
      { text: 'Integrated IT platform. The system is able to send emails and export data to Excel, Word, and other platforms.', score: 5, description: 'has integrated IT platform with email and export capabilities.' },
      { text: 'Limited but useful communication with other systems.', score: 3, description: 'has limited but useful communication with other systems.' },
      { text: 'Can communicate with isolated systems, but not user-friendly.', score: 1, description: 'can communicate with isolated systems but not user-friendly.' },
      { text: 'Isolated system on separate platform.', score: 0, description: 'has isolated system on separate platform.' }
    ],
    maxScore: 5
  },

  // System Support Skills Section
  {
    id: 'sss1',
    title: 'Capability to Maintain Meters and Data Capture System',
    subsection: 'System Support Skills',
    explanation: `CAPABILITY TO MAINTAIN METERS AND DATA CAPTURE SYSTEM (SCORE 0–5)

Can IT hardware, software, faulty meters and communication hardware be diagnosed and maintained in-house?`,
    answerOptions: [
      { text: 'Automated condition monitoring and error flagging. Skilled in-house technicians available to perform maintenance and repairs.', score: 5, description: 'has automated condition monitoring with skilled in-house technicians for maintenance and repairs.' },
      { text: 'Reasonable capability. Some preventive maintenance and engineering procedures in place. Procedures include condition monitoring and scheduled calibration and testing.', score: 3, description: 'has reasonable capability with some preventive maintenance and engineering procedures.' },
      { text: 'Limited capability. Organization restricted to respond only to breakdowns.', score: 1, description: 'has limited capability restricted to breakdown response only.' },
      { text: 'No in-house capability.', score: 0, description: 'has no in-house capability.' }
    ],
    maxScore: 5
  },
  {
    id: 'sss2',
    title: 'Data Capture and Reporting on a Single Network',
    subsection: 'System Support Skills',
    explanation: `DATA CAPTURE AND REPORTING ON A SINGLE NETWORK (SCORE 0–5)

Are data capture and reporting systems integrated on a single network? Is communication between different system components simple?`,
    answerOptions: [
      { text: 'Single network and common communication platform.', score: 5, description: 'has single network and common communication platform.' },
      { text: 'Both systems on same network, but some limitations in communication between component parts exist.', score: 3, description: 'has both systems on same network with some communication limitations.' },
      { text: 'Separate networks, but communication between the networks possible through communication protocols.', score: 1, description: 'has separate networks with communication possible through protocols.' },
      { text: 'Systems for data historian and analysis/reporting tool separate and incompatible.', score: 0, description: 'has separate and incompatible systems for data historian and analysis/reporting.' }
    ],
    maxScore: 5
  },
  {
    id: 'sss3',
    title: 'IT Environment Up to Date',
    subsection: 'System Support Skills',
    explanation: `IT ENVIRONMENT UP TO DATE (SCORE 0–5)

Are operating systems and tools up-to-date and is technical support available for all components?`,
    answerOptions: [
      { text: 'All systems up-to-date and compatible.', score: 5, description: 'has all systems up-to-date and compatible.' },
      { text: 'Systems are still supported by suppliers, but not all kept up-to-date. Can be updated easily if required.', score: 3, description: 'has systems still supported by suppliers but not all up-to-date.' },
      { text: 'Some parts of the system are out-of-date and unsupported. Critical parts of IT environment stable and reliable.', score: 1, description: 'has some parts out-of-date and unsupported but critical parts stable.' },
      { text: 'Systems out-of-date and no longer supported. Systems unstable.', score: 0, description: 'has systems out-of-date, unsupported, and unstable.' }
    ],
    maxScore: 5
  },
  {
    id: 'sss4',
    title: 'Capability to Maintain and Operate EMIS',
    subsection: 'System Support Skills',
    explanation: `CAPABILITY TO MAINTAIN AND OPERATE EMIS (SCORE 0–5)

Technical skills are required to understand the system, to modify system configuration when adding new plant/ new meters.`,
    answerOptions: [
      { text: 'Widespread skills available to maintain and operate system. Skills updated regularly to maintain a pool of capable people.', score: 5, description: 'has widespread skills available with regular updates to maintain capable people.' },
      { text: 'Good internal skills can cope with all requirements but limited to one individual. Skills would be unavailable if this individual is absent.', score: 4, description: 'has good internal skills but limited to one individual.' },
      { text: 'Internal skills available for routine changes. External skills required for changes involved. Training and development in place to improve skills.', score: 3, description: 'has internal skills for routine changes with training and development in place.' },
      { text: 'Internal skills available for routine changes. External skills required for complex changes.', score: 2, description: 'has internal skills for routine changes but requires external skills for complex changes.' },
      { text: 'Very limited internal skills set. Able to call on external resources.', score: 1, description: 'has very limited internal skills but can call on external resources.' },
      { text: 'Technical skills no longer available. System unsupported.', score: 0, description: 'has no technical skills available and system is unsupported.' }
    ],
    maxScore: 5
  },
  {
    id: 'sss5',
    title: 'Technical Skills Available to Analyze Data and Set Targets',
    subsection: 'System Support Skills',
    explanation: `TECHNICAL SKILLS AVAILABLE TO ANALYZE DATA AND SET TARGETS (SCORE 0–5)

Technical skills required to analyze data and to set new targets and generate new reports.`,
    answerOptions: [
      { text: 'Internal skills available for routine changes. External skills required for complex changes. Training and development in place to upgrade skills.', score: 5, description: 'has internal skills for routine changes with training and development to upgrade skills.' },
      { text: 'Internal skills available for most requirements but limited to 1-2 people.', score: 3, description: 'has internal skills for most requirements but limited to 1-2 people.' },
      { text: 'Very limited internal skills set. Able to call on external resources.', score: 1, description: 'has very limited internal skills but can call on external resources.' },
      { text: 'No internal skills.', score: 0, description: 'has no internal skills.' }
    ],
    maxScore: 5
  }
];

export const sectionNames = [
  'Energy Meters',
  'Relevant Variables', 
  'Data Capture and Storage',
  'Data Analysis',
  'Target Setting',
  'Energy Performance Reporting',
  'System Support Skills'
];