import React from "react";

import './MenuContent.scss';

import { MenuContentHeader } from "./MenuContentHeader/MenuContentHeader";
import { MapMode } from "./MapMode";
import { AreaMode } from "./AreaMode/AreaMode";
import { AddMode } from "./AddMode";

import { useAppSelector } from "@store/hooks";
import { getStringParam } from "@store/features/searchParams";
import { ManyModesProps } from "@api/types";

export const MenuContent: React.FC<ManyModesProps> = ({ areaId }) => {
    
    const { searchParams } = useAppSelector((state) => state.searchParams);
    const mode = getStringParam(searchParams, 'menu');

    return (
        <div className='menu-content'>
            {mode !== 'add' ?
                <>
                <MenuContentHeader areaId={areaId} />
                {!areaId ?
                <MapMode />
                :
                <AreaMode areaId={areaId} />
                }
                </>
            :
            <AddMode />
            }
        </div>
    )
}