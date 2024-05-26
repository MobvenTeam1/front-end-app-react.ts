import { PersonalValue } from "../values";
import { RHFMultiSelect } from "./RHFMultiSelect";
import { RHFSingleSelect } from "./RHFSingleSelect";
import { RHFTextfield } from "./RHFTextfield";

export const renderFormElement = (showStep: PersonalValue) => {
  switch (showStep?.selectType) {
    case 0:
      return (
        <RHFSingleSelect
          name={showStep.name}
          options={showStep.options || []}
        />
      );
    case 1:
      return (
        <RHFMultiSelect name={showStep.name} options={showStep.options || []} />
      );
    case 2:
      return (
        <RHFTextfield
          name={showStep.name}
          type={showStep.type || "text"}
          label={showStep.label}
          placeholder={showStep.placeholder}
        />
      );
    default:
      return null;
  }
};
