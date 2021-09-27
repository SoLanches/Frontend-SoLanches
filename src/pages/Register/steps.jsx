import { useStep } from "../../contexts/steps.context";

export const Steps = () => {
  const { currentStep, steps } = useStep();
  return <>{steps[currentStep].component}</>;
};
