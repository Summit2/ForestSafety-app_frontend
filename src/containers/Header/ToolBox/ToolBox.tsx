import React from "react";

import './ToolBox.scss';

export type ToolBoxGap = 8 | 28;

interface ToolBox {
    children?: React.ReactNode,
    gap?: ToolBoxGap,
}

export const ToolBox: React.FC<ToolBox> = ({
    children,
    gap=8,
}) => {
    return (
        <div 
            className='tool-box box-shadow-bottom'
            style={{
                gap: gap.toString() + 'px',
            }}
        >
            {children}
        </div>
    )
}