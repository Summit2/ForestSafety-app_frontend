import React, { useState } from "react";

import setting from '../../assets/icons/setting.svg';
import { IconButton } from "../IconButton/IconButton";
import { SettingMenu } from "./SettingMenu/SettingMenu";

interface SettingButtonProps {
    size?: 'big' | 'small',
}

export const SettingButton: React.FC<SettingButtonProps> = ({
    size='big'
}) => {

    const [visible, setVisible] = useState(false);

    return (
        <>
            <IconButton
                size={size} 
                src={setting}
                alt='Настройки'
                onClick={() => { setVisible(!visible) }}
            />
            {visible && <SettingMenu />}
        </>
    )
}