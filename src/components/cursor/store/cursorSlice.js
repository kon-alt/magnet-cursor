import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    width: 50,
    height: 50,
    x: 0,
    y: 0,
    hover: false
};

const cursorSlice = createSlice({
    name: 'cursor',
    initialState,
    reducers: {
        setSizeCursor: (state, action) => {
            state.width = action.payload.width;
            state.height = action.payload.height;
            state.x = action.payload.x;
            state.y = action.payload.y;
            state.hover = action.payload.hover;
        }
    }
});

export const {setSizeCursor} = cursorSlice.actions;

export default cursorSlice.reducer;
