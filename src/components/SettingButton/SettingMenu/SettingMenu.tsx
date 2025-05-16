import React from "react";
import './SettingMenu.scss';
import { Text } from "../../Text/Text";

export const SettingMenu: React.FC = () => {

    const settingPoints = [
        {
            name: 'добавить полигон',
            callback: () => {

            }
        }
    ];

    return (
        <div className="setting-menu box-shadow-bottom">
            {settingPoints.map((point) => {
                return (
                    <Text
                        type='text-help-link'
                        color='base'
                        onClick={() => { point.callback() }}
                    >
                        {point.name}
                    </Text>
                )
            })}
        </div>
    )
}