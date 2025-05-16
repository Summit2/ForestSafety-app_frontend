import React from "react";

import './ScrollBox.scss';

interface ScrollBoxProps {
    children: React.ReactNode,
}

export const ScrollBox: React.FC<ScrollBoxProps> = ({
    children,
}) => {
    return (
        <div className='scroll-box'>
            <div className='scroll-box-content'>
                {children}
            </div>
            <div className='scroll-box-gradient'></div>
        </div>
    )
}