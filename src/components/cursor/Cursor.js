import React, {useEffect, useMemo, useState} from 'react';
import './style.scss';
import {useCursorEffect} from '../../hooks';
import {Corners} from '../../icons';
import {useSelector} from 'react-redux';

export const Cursor = () => {
    const {width, height, hover} = useSelector(state => state.cursor);
    const {x, y} = useCursorEffect();


    const renderItem = useMemo(() => Array.apply(null, {length: 4}).map((_, index) => (
        <div
            key={index}
            className={hover ? `cursor cursor-${index} cursor-${index}--hover ` : `cursor cursor-${index} `}
            style={{
                left: `${x}px`,
                top: `${y}px`,
                width: width,
                height: height,
                transition: hover ? '700ms' : '0s'
            }}>
            {Array.apply(null, {length: 4}).map((_, index) => (
                <Corners
                    width={16}
                    height={16}
                    color={'#838282'}
                    strokeWidth={1}
                    key={index}/>
            ))}

        </div>
    )), [hover, x, y]);

    return (
        <>{renderItem}</>
    );
};
