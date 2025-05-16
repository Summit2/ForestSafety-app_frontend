import React from "react";

import './MenuContentHeader.scss';

import { MapMode } from "./MapMode";
import { AreaMode } from "./AreaMode";
import { ManyModesProps } from "@api/types";

export const MenuContentHeader: React.FC<ManyModesProps> = ({ areaId }) => {

    return (
        <div className='menu-content-header'>
            {!areaId ?
            <MapMode />
            :
            <AreaMode />
            }
        </div>
    )
}