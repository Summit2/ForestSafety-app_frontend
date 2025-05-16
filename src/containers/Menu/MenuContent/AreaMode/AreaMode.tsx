import React from "react";

import { AboutPage } from "./Pages/AboutPage/AboutPage";
import { SettingsPage } from "./Pages/SettingPage/SettingsPage";
import { ScrollBox } from "@containers/ScrollBox/ScrollBox";

import { AreaModeProps } from "@api/types";

import { useAppSelector } from "@store/hooks";
import { getStringParam } from "@store/features/searchParams";

export const AreaMode: React.FC<AreaModeProps> = ({ areaId }) => {

    const { searchParams } = useAppSelector((state) => state.searchParams);
    const mode = getStringParam(searchParams, 'menu');

    return (
        <div className='menu-content-areamode'>
            <ScrollBox>
                {mode === 'none' || mode === 'about' ?
                <AboutPage areaId={areaId} />
                : mode === 'settings' &&
                <SettingsPage areaId={areaId} />
                }
            </ScrollBox>
        </div>
    )
}