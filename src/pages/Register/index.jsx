import { RegisterInitial } from "./Initial";
import RegisterContextProvider from "../../contexts/register.context";

export const RegisterMenu = () => {
    return (
        <RegisterContextProvider>
            <RegisterInitial />
        </RegisterContextProvider >
    )
}
