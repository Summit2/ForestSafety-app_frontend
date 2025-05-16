import React from 'react';

import './Button.scss';
import { Text } from '../Text/Text';

type ButtonType = 'blue' | 'white' | 'accent';
type ButtonSizeType = 'middle' | 'small';
type ButtonLineType = 'auto' | 'line';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: string,
    buttonType?: ButtonType,
    buttonSize?: ButtonSizeType,
    buttonLine?: ButtonLineType,
}

export const Button: React.FC<ButtonProps> = ({ 
    children='Кнопка',
    buttonType='blue', 
    buttonSize='middle',
    buttonLine='auto',
    ...props
}) => {

    const buttonLineClass = (buttonLine === 'auto') ? '' : '-line';
    const buttonSizeClass = (buttonLine === 'line') ? 'small' : buttonSize;
    const buttonClass = ('button ' + buttonType + buttonLineClass + '-button ' +
                            buttonSizeClass + '-button ' +
                            props.className).trim();

    return (
        <button 
            type='button'
            className={buttonClass}
            {...props}
        >
            <Text 
                color='inherit'
                type={buttonSizeClass === 'small' ? 'small-text' : 'text'}
            >
                {children}
            </Text>
        </button>
    );
}