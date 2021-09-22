import RegisterContextProvider from "../../contexts/register.context";
import StepsProvider from "../../contexts/steps.context";
import { Steps } from "./steps";

export const RegisterMenu = () => {
  return (
    <RegisterContextProvider>
      <StepsProvider>
        <Steps/>
      </StepsProvider>
    </RegisterContextProvider>
  );
};
