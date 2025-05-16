import React from "react";

import './IconButton.scss';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    src: string,
    alt: string,
    size?: 'big' | '30size' | 'small',
}

export const IconButton: React.FC<IconButtonProps> = ({
    src,
    alt,
    size='big',
    ...props
}) => {
    return (
        <button
            className={'icon-button-' + size}
            {...props}
        >
            <img src={src} alt={alt} />
        </button>
    )
}