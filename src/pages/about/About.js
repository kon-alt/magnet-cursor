import React, {useRef} from 'react';
import {Head} from '../../components/head';
import './style.scss';
import {useCursorEffect} from '../../hooks';

export const About = () => {
    let refElem = useRef(null);
    const {mouseOverHandle, mouseOutHandle} = useCursorEffect();
    return (
        <div>
            <Head title="О нас что то интересное"/>
            <div
                className="typography" ref={refElem}
                onMouseOver={() => mouseOverHandle(refElem)}
                onMouseOut={mouseOutHandle}>
                <p>
                    Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более
                    менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных
                    выступлений в домашних условиях. При создании генератора мы использовали небезизвестный
                    универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений
                    в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового
                    восприятия.
                </p>
            </div>
        </div>
    );
};

