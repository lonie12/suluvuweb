import { createSlice } from "@reduxjs/toolkit";


export const subMenuSelectedSlice = createSlice({
    name: 'submenu',

    initialState: {
        data: {menu: 'null', submenu: 'null', status: false}
    },

    reducers: {
        changeMenuSubMenu: (state, {payload}) => {
            state.data = payload
        },
    }
})

export const {changeMenuSubMenu} = subMenuSelectedSlice.actions;

export default subMenuSelectedSlice.reducer;