import { useContext, createContext, useState } from "react";

import { RegisterInitial } from "../pages/Register/Initial";
import { PhotoRegister } from "../pages/Register/Logo";
import { RegisterSchedule } from "../pages/Register/Schedule";
import { RegisterCategory } from "../pages/Register/RegisterCategory";

const StepsContext = createContext();

export default function StepsProvider({ children }) {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { step: 0, component: <RegisterInitial /> },
    { step: 1, component: <RegisterSchedule /> },
    { step: 2, component: <PhotoRegister /> },
    { step: 3, component: <RegisterCategory /> },
  ];

  function nextStep() {
    setCurrentStep((prevState) => prevState + 1);
  }

  function previousStep() {
    setCurrentStep((prevState) => prevState - 1);
  }

  return (
    <>
      <StepsContext.Provider
        value={{
          currentStep,
          setCurrentStep,
          nextStep,
          previousStep,
          steps
        }}
      >
        {children}
      </StepsContext.Provider>
    </>
  );
}

export function useStep() {
  const context = useContext(StepsContext);
  const { currentStep, setCurrentStep, nextStep, previousStep, steps } = context;
  return { currentStep, setCurrentStep, nextStep, previousStep, steps };
}
