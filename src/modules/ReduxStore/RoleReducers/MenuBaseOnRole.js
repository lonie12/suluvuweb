import { createSlice } from "@reduxjs/toolkit";


export const MenuBaseOnRole = createSlice({
    name: 'menurole',

    initialState: {
        data: {role: 'null', token: 'null'}
    },

    reducers: {
        changeRole: (state, {payload}) => {
            state.data = payload
        },
    }
})

export const {changeRole} = MenuBaseOnRole.actions;

export default MenuBaseOnRole.reducer;