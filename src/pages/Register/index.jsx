import { RegisterInitial } from "./Initial";
import RegisterContextProvider from "../../contexts/register.context";
import { PhotoRegister } from "./Logo";
import { RegisterSchedule } from "./Schedule";
import { RegisterCategory } from "./RegisterCategory";

export const RegisterMenu = () => {
    return (
        <RegisterContextProvider>
            <RegisterInitial />
            <RegisterSchedule />
            <PhotoRegister />
            <RegisterCategory />
        </RegisterContextProvider >
    )
}
