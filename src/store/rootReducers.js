import {combineReducers} from '@reduxjs/toolkit';
import cursor from '../components/cursor/store/cursorSlice';

export const rootReducers = combineReducers({
    cursor
});
