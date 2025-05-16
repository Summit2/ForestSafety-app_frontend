import React, { useState } from "react";

import './Input.scss';
import '../Text/Text.scss';

import search from '../../assets/icons/input/search.svg';
import visible from '../../assets/icons/input/visible.svg';
import unvisible from '../../assets/icons/input/unvisible.svg';

type InputType = 'base' | 'search' | 'password';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    inputType?: InputType,
}

export const Input: React.FC<InputProps> = ({
    children='',
    inputType='base',
    ...props
}) => {

    const [ isVisible, setVisible ] = useState(false);
    const inputClass = (inputType + '-input ' + 'text ' + props.className).trim();

    if (inputType == 'base') {
        return (
            <input
                className={inputClass}
                {...props}
            />
        )
    }

    if (inputType == 'search') {
        return (
            <div className={inputClass}>
                <img src={search} className='search-icon' />
                <input
                    {...props}
                />
            </div>
        )
    }

    return (
        <div className={inputClass}>
            <input
                type={isVisible ? 'text' : 'password'}
                {...props}
            />
            <img
                className='password-input-icon' 
                src={isVisible ? visible : unvisible}
                onClick={(e) => { setVisible(!isVisible); }} 
            />
        </div>
    )
}