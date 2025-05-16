import React from "react";

import './MenuHeader.scss';

import { MapMode } from "./MapMode";
import { AreaMode } from "./AreaMode";
import { ManyModesProps } from "@api/types";

export const MenuHeader: React.FC<ManyModesProps> = ({ areaId }) => {

    return (
        <div className='menu-header'>
            {!areaId ?
            <MapMode />
            :
            <AreaMode areaId={areaId} />
            }
        </div>
    )
}