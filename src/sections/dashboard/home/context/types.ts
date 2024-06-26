import { CreateWorkoutPlanValuesSend } from "../../../personal-inforations/forms/CreateTrainingProgram";

export interface HomeContextValues {
  goalValues: GoalValue[];
  createPlanValues: CreatePlanValue[];
  addPlanValues: AddPlanValue[];
  goalCompletionInfoValues: GoalCompletionInfoValue[];
  trainingCategoryValues: HomeCategoryValue[];
  nutritionCategoryValues: HomeCategoryValue[];
  aiSupportPlanValues: CreateAiSupportPlanValue[];
  personalTrainingPrograms: PersonalPropram[];
  personalNutritionPrograms: PersonalPropram[];
  aiNutritionSuggestions: aiSuggestionItem[];
  suggestionRender: (type: string) => aiSuggestionItem[];
  modalStates: ModalStates;
  handleOpenModal: (id: string) => void;
  handleCloseModal: (id: string) => void;
  axiosQueryVariables: AxiosQueryParams;
}

export type ModalStates = {
  [key: string]: boolean;
};

export interface AxiosQueryParams {
  createAiWorkoutRequest: AxiosQueryCreateAiWorkoutParams;
  getAiWorkoutsRequest: AxiosQueryGetAiWorkoutsParams;
}

export interface AxiosQueryGetAiWorkoutsParams {
  isLoading: boolean;
  mutate: () => void;
}

export interface AxiosQueryCreateAiWorkoutParams {
  isLoading: boolean;
  mutate: (variables?: CreateWorkoutPlanValuesSend) => void;
}

// Define the shape of the goalValues
export interface GoalValue {
  icon: string;
  title: string;
  value: string;
}

// Define the shape of the createPlanValues
export interface CreatePlanValue {
  icon: string;
  title: string;
  form: JSX.Element;
  modalId: string;
}

export interface AddPlanValue {
  icon: string;
  title: string;
  path: string;
}

export interface GoalCompletionInfoValue {
  title: string;
  value: string;
}

export interface HomeCategoryValue {
  img: string;
  title: string;
}

export interface CreateAiSupportPlanValue {
  id: number;
  img: string;
  title: string;
  subtitle: string;
  form: JSX.Element;
}

export interface OptionPersonalProgramDetail {
  optionId: number;
  optionImage: string;
  optionTitle: string;
  optionSubtitle: string;
  type: string;
}

export interface OptionsPersonalProgram {
  optionTitle: string;
  optionDetails: OptionPersonalProgramDetail[];
}

export interface PersonalPropram {
  programId: number;
  programTitle: string;
  img: string;
  duration: string;
  caloriesBurned: string;
  options: OptionsPersonalProgram;
}

export interface aiSuggestionItem {
  img: string;
  title: string;
  subtitle: string;
}
