import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setSizeCursor} from '../components/cursor/store/cursorSlice';

export const useCursorEffect = () => {
    const {x, y, hover} = useSelector(state => state.cursor);
    const [mousePosition, setMousePosition] = useState({x, y});
    const dispatch = useDispatch()

    useEffect(() => {
        const mouseHandler = (event) => {
            const {clientX, clientY} = event;
            hover
                ? setMousePosition({x: x, y: y})
                : setMousePosition({x: clientX, y: clientY});
        };

        document.addEventListener('mousemove', mouseHandler);

        return () => document.removeEventListener('mousemove', mouseHandler);
    }, [hover]);

    const generateNewPosition = (element) => {
        const {top, left} = element.current.getBoundingClientRect();
        const {clientWidth, clientHeight} = element.current;
        const posY = top + clientHeight / 2;
        const posX = left + clientWidth / 2;

        return {
            clientWidth,
            clientHeight,
            posY,
            posX
        };
    };

    const mouseOverHandle = (refElem) => {
        const {clientWidth, clientHeight, posX, posY} = generateNewPosition(refElem);
        dispatch(setSizeCursor({width: clientWidth, height: clientHeight, x: posX, y: posY, hover: true}));
    };

    const mouseOutHandle = (e) => {
        const {clientX, clientY} = e;
        dispatch(setSizeCursor({width: 50, height: 50, x: clientX, y: clientY, hover: false}));
    };

    return {
        ...mousePosition,
        generateNewPosition,
        mouseOverHandle,
        mouseOutHandle
    };
};
