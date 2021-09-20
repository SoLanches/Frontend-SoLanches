import { RegisterInitial } from "./Initial";
import RegisterContextProvider from "../../contexts/register.context";
import { PhotoRegister } from "./Logo";
import { RegisterSchedule } from "./Schedule";

export const RegisterMenu = () => {
    return (
        <RegisterContextProvider>
            <RegisterInitial />
            <RegisterSchedule/>
            <PhotoRegister />
        </RegisterContextProvider >
    )
}
