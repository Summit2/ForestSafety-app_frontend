import React from "react";

import './MenuBlock.scss';

import { Text } from "../../Text/Text";
import { Line } from "../../Line/Line";

interface MenuBlockProps {
    name: string,
    selected: boolean,
    onClick: (e: any) => void,
}

export const MenuBlock: React.FC<MenuBlockProps> = ({
    name,
    selected,
    onClick,
}) => {
    return (
        <div 
            className='menublock'
            onClick={onClick}
        >
            <Text tag='div' class='menublock-text'>{name}</Text>
            <Line color={selected ? 'blue' : 'gray'} />
        </div>
    )
}