import React from "react";

import './TreeIcon.scss';

import { Text } from "../../Text/Text";

interface TreeIconProps {
    wood: string,
}

export const TreeIcon: React.FC<TreeIconProps> = ({
    wood,
}) => {
    return (
        <div 
            className='tree-icon'
            title={wood}
        >
            <Text type='h3' color='inherit'>{wood.charAt(0)}</Text>
        </div>
    )
}