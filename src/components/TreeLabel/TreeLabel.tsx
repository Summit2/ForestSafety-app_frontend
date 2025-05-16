import React from "react";

import './TreeLabel.scss';

import { Text } from "../Text/Text";
import { IconButton } from "../IconButton/IconButton";

import { TreeIcon } from "./TreeIcon/TreeIcon";

import arrow from '../../assets/icons/navigate/gray-arrow.svg';

interface TreeLabelProps {
    id: number,
    name: string,
    x: number,
    y: number,
    wood: string,
}

export const TreeLabel: React.FC<TreeLabelProps> = ({
    id,
    name,
    x, y,
    wood,
}) => {
    return (
        <div className='tree-label'>
            <div className='tree-label-content'>
                <TreeIcon wood={wood} />
                <div className='tree-label-content-text'>
                    <Text type='text'>{name}</Text>
                    <Text type='small-text'>{x} {y}</Text>
                </div>
            </div>
            <IconButton 
                src={arrow}
                alt='Подробнее'
            />
        </div>
    )
}