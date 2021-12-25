import React, {useRef} from 'react';
import './style.scss';
import {useCursorEffect} from '../../hooks';

export const Head = ({title}) => {
    let refElem = useRef(null);
    const {mouseOverHandle, mouseOutHandle} = useCursorEffect();

    return (
        <div className="title-wrapper">
            <h1
                ref={refElem}
                onMouseOver={() => mouseOverHandle(refElem)}
                onMouseOut={mouseOutHandle}
                className={'title'}>{title}</h1>
        </div>
    );
};
