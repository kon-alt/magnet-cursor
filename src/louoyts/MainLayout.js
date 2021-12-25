import React from 'react';
import './style.scss';
import {Cursor} from '../components/cursor';
import {Navigation} from '../components/navigation';

export const MainLayout = ({children}) => {
    return (
        <div className="wrapper">
            <header className="header-wrapper">
                <Navigation/>
            </header>
            {children}
            <Cursor/>
        </div>
    );
};
