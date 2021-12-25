import React from 'react';

export const Corners = (
    {
        color = 'red',
        width = 16,
        height = 16,
        strokeWidth = 2
    }
) => {
    return (
        <svg width={width} height={height} viewBox={`0 0 ${12} ${12}`} fill="none"
             xmlns="http://www.w3.org/2000/svg" className="corner-img ng-star-inserted">
            <path d="M15.6992 1H0.999219V15.7" stroke={color}
                  strokeWidth={strokeWidth} className="corner-img-path"/>
        </svg>
    );
};
