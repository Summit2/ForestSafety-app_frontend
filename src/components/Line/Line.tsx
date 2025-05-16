import React from "react";

import './Line.scss';

export type LineColorType = 'gray' | 'blue';

interface LineProps {
    width?: string,
    color?: LineColorType,
}

export const Line: React.FC<LineProps> = ({
    width='100%',
    color='gray',
}) => {
    return (
        <div 
            className={'app-line app-line-' + color} 
            style={{
                width: width,
            }}
        >
        </div>
    )
}