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
    isPer