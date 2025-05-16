import React from "react";

import './BoolValue.scss';
import { Text } from "../Text/Text";
import { Checkbox } from "../Checkbox/Checkbox";

export type BoolValueType = 'text' | 'small-text' | 'text-help-link';

interface BoolValueProps {
    checked: boolean,
    name: string,
    onChange: (e: any) => void,
    onClick?: (e: any) => void,
    onMouseEnter?: (e: any) => void,
    onMouseLeave?: (e: any) => void,
    className?: string,
    textType?: BoolValueType,
}

export const BoolValue: React.FC<BoolValueProps> = ({
    checked,
    onChange,
    onClick,
    onMouseEnter,
    onMouseLeave,
    name,
    className='',
    textType='text'
}) => {

    return (
        <div className={('boolvalue ' + className + ((textType == 'small-text') ? 'boolvalue-small' : 'boolvalue-base')).trim()}>
            <Text
                color={checked ? 'base' : 'other'}
                type={textType}
                class='boolvalue-text'
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {name}
            </Text>
            <Checkbox 
                checked={checked}
                onChange={onChange}
            />
        </div>
    )
}