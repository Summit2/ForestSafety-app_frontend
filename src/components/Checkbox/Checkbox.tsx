import React, { useState } from "react";

import './Checkbox.scss';
import check from '../../assets/icons/check/check15.svg';

export const Checkbox: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
    ...props
}) => {

    const getcheckedClass = (checkedValue: boolean | undefined) => {
        if (checkedValue) {
            return 'map-checked';
        }

        return 'map-unchecked';
    }

    return (
        <label
            className={('map-checkbox ' + 
                        props.className + ' ' + 
                        getcheckedClass(props.checked)).trim()}
        >
            {props.checked ? 
                <img src={check} alt='checked' />
                : <></>
            }
            <input 
                type='checkbox'
                className='map-checkbox-input'
                {...props}
            />
        </label>
    )
}