import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import './style.scss';
import {useDispatch} from 'react-redux';
import {useCursorEffect} from '../../hooks';
import {setSizeCursor} from '../cursor/store/cursorSlice';

export const Navigation = () => {
    let refElement = useRef(null);
    let refElement2 = useRef(null);
    const {mouseOverHandle, mouseOutHandle} = useCursorEffect();
    return (
        <ul className="nav">
            <li
                ref={refElement}
                className="nav__item"
                onMouseOver={() => mouseOverHandle(refElement)}
                onMouseOut={mouseOutHandle}>
                <Link to="/" className="nav__link">Home</Link>
            </li>
            <li
                ref={refElement2}
                className="nav__item"
                onMouseOver={() => mouseOverHandle(refElement2)}
                onMouseOut={mouseOutHandle}>
                <Link to="/about" className="nav__link">About</Link>
            </li>
        </ul>
    );
};
