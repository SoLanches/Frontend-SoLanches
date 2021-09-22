import { RegisterInitial } from "./Initial";
import { PhotoRegister } from "./Logo";
import { RegisterSchedule } from "./Schedule";
import { RegisterCategory } from "./RegisterCategory";

import RegisterContextProvider from "../../contexts/register.context";
import StepsProvider, { useStep } from "../../contexts/steps.context";
import { useEffect } from "react";

export const Steps = () => {
  const { currentStep, steps } = useStep();

  return <>{steps[currentStep].component}</>;
};
