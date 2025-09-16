import React, { useState } from 'react';
import OrganizationInfo from './components/OrganizationInfo';
import FacilityChoice from './components/FacilityChoice';
import FacilityAssessment from './components/FacilityAssessment';
import AssessmentResults from './components/AssessmentResults';
import TechnicalObjectives from './components/TechnicalObjectives';
import EMISSpecifications from './components/EMISSpecifications';
import WithoutEMISReport from './components/WithoutEMISReport';
import { UserInfo, FacilityAssessmentResults, TechnicalObjective, EMISSpecsData } from './types';

type AppState = 'org-info' | 'facility-choice' | 'facility-assessment' | 'assessment-results' | 'technical-objectives' | 'emis-specs' | 'without-emis-report';

function App() {
  const [currentState, setCurrentState] = useState<AppState>('org-info');
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [facilityType, setFacilityType] = useState<'with-emis' | 'without-emis' | null>(null);
  const [assessmentResults, setAssessmentResults] = useState<FacilityAssessmentResults | null>(null);
  const [technicalObjectives, setTechnicalObjectives] = useState<TechnicalObjective[]>([]);
  const [emisSpecsData, setEmisSpecsData] = useState<EMISSpecsData | null>(null);

  const handleOrgInfoComplete = (info: UserInfo) => {
    setUserInfo(info);
    setCurrentState('facility-choice');
  };

  const handleFacilityChoice = (type: 'with-emis' | 'without-emis') => {
    setFacilityType(type);
    if (type === 'with-emis') {
      setCurrentState('facility-assessment');
    } else {
      setCurrentState('technical-objectives');
    }
  };

  const handleAssessmentComplete = (results: FacilityAssessmentResults) => {
    setAssessmentResults(results);
    setCurrentState('assessment-results');
  };

  const handleResultsBack = () => {
    setCurrentState('facility-assessment');
  };

  const handleResultsContinue = () => {
    setCurrentState('technical-objectives');
  };

  const handleTechnicalObjectivesComplete = (objectives: TechnicalObjective[]) => {
    setTechnicalObjectives(objectives);
    if (facilityType === 'without-emis') {
      setCurrentState('emis-specs');
    } else {
      setCurrentState('without-emis-report');
    }
  };

  const handleEmisSpecsComplete = (data: EMISSpecsData) => {
    setEmisSpecsData(data);
    setCurrentState('without-emis-report');
  };

  const handleStartNew = () => {
    setUserInfo(null);
    setFacilityType(null);
    setAssessmentResults(null);
    setTechnicalObjectives([]);
    setEmisSpecsData(null);
    setCurrentState('org-info');
  };

  const renderCurrentComponent = () => {
    switch (currentState) {
      case 'org-info':
        return <OrganizationInfo onComplete={handleOrgInfoComplete} />;
      
      case 'facility-choice':
        return <FacilityChoice onChoice={handleFacilityChoice} />;
      
      case 'facility-assessment':
        return <FacilityAssessment onComplete={handleAssessmentComplete} />;
      
      case 'assessment-results':
        return assessmentResults ? (
          <AssessmentResults 
            results={assessmentResults}
            onBack={handleResultsBack}
            onContinue={handleResultsContinue}
          />
        ) : null;
      
      case 'technical-objectives':
        return <TechnicalObjectives onComplete={handleTechnicalObjectivesComplete} />;
      
      case 'emis-specs':
        return <EMISSpecifications onComplete={handleEmisSpecsComplete} />;
      
      case 'without-emis-report':
        return userInfo ? (
          <WithoutEMISReport
            userInfo={userInfo}
            facilityType={facilityType}
            assessmentResults={assessmentResults}
            technicalObjectives={technicalObjectives}
            emisSpecsData={emisSpecsData}
            onStartNew={handleStartNew}
          />
        ) : null;
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {renderCurrentComponent()}
    </div>
  );
}

export default App;