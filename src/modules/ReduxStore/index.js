import { configureStore } from "@reduxjs/toolkit";
import MenuBaseOnRole from "./RoleReducers/MenuBaseOnRole";
import SubmenuSelected from "./StylesReducers/SubmenuSelecte";

export default configureStore({
    reducer: {
        submenu: SubmenuSelected,
        menurole: MenuBaseOnRole
    }
})