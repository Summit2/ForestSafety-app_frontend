import React from "react";

import './MenuButton.scss';

import { useAppDispatch } from "@store/hooks";
import { changeMenuVisible } from "@store/features/app";

import menu from '@assets/icons/header/menu.svg';

export type MenuButtonSizeType = 'big' | 'small';

interface MenuButtonProps {
    size?: MenuButtonSizeType,
}

export const MenuButton: React.FC<MenuButtonProps> = ({
    size='small',
}) => {

    const dispatch = useAppDispatch();
    const menuButtonSizeClass = (size === 'small') ? 'menu-small' : '';

    return (
        <button 
            className={menuButtonSizeClass}
            onClick={() => { dispatch(changeMenuVisible()); }}
        >
            <img src={menu} alt='menu' />
        </button>
    )
}