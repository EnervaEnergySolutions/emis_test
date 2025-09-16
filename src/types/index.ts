export interface UserInfo {
  appId: string;
  orgName: string;
  orgType: string;
  siteAddress: string;
  attendeeNames: string[];
}

export interface TechnicalObjective {
  id: string;
  text: string;
  checked: boolean;
  reductionPercentage?: string;
}

export interface SubmeterRow {
  id: string;
  meterName: string;
  parameter: string;
  interval: string;
  minutes?: string;
  comments: string;
}

export interface FacilityAssessmentAnswer {
  questionId: string;
  value: string | number;
  score: number;
}

export interface AssessmentSection {
  id: string;
  title: string;
  totalScore: number;
  maxScore: number;
  percentage: number;
}

export interface SpiderChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
  }[];
}

export interface FacilityAssessmentResults {
  sections: AssessmentSection[];
  totalScore: number;
  maxTotalScore: number;
  overallPercentage: number;
  recommendations: QuestionRecommendation[];
}

export interface QuestionRecommendation {
  questionTitle: string;
  selectedAnswer: string;
  selectedAnswerDescription?: string;
  conditionalNextStep?: string;
  score: number;
}

export interface EMISSpecsData {
  [key: string]: any;
  submeterRows?: SubmeterRow[];
}