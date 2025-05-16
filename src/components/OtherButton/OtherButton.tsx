import React from "react";

import { IconButton } from "../IconButton/IconButton";

import other from '../../assets/icons/other.svg';

export const OtherButton: React.FC = () => {
    return (
        <IconButton
            src={other}
            alt='О приложении'
            size='30size'
        />
    )
}