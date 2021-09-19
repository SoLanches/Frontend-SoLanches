import { RegisterInitial } from "./Initial";
import RegisterContextProvider from "../../contexts/register.context";
import { PhotoRegister } from "./Logo";

export const RegisterMenu = () => {
    return (
        <RegisterContextProvider>
            <RegisterInitial />
            <PhotoRegister />
        </RegisterContextProvider >
    )
}
