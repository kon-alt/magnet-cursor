import React, {useRef, useState} from 'react';
import btc from '../../images/btc.png';
import './style.scss';
import {Corners} from '../../icons';
import {useDispatch} from 'react-redux';
import {setSizeCursor} from '../cursor/store/cursorSlice';
import {useCursorEffect} from '../../hooks';

export const CircleBig = () => {
    let refElem = useRef(null);
    const {mouseOverHandle, mouseOutHandle} = useCursorEffect();

    return (
        <div
            className="circle-big"
            ref={refElem}
            onMouseOver={() => mouseOverHandle(refElem)}
            onMouseOut={mouseOutHandle}>
            <img src={btc} alt={'icon'}/>
            <div className="circle-big-corners">
                {Array.apply(null, {length: 4}).map((_, index) => (
                    <Corners key={index}/>
                ))}
            </div>
        </div>
    );
};
