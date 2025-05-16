import React from "react";

import './MapState.scss';
import { Label } from "@components/base";

import { useAppSelector } from "@store/hooks";
import { getAreaId } from "@store/features/searchParams";

export const MapState: React.FC = () => {

    const { searchParams } = useAppSelector((state) => state.searchParams);
    const map = useAppSelector((state) => state.map);

    const areaId = getAreaId(searchParams);

    return (
        <div className="map-state box-shadow-bottom-responsive">
            {areaId &&
                <Label name='Режим просмотра области' labelColor='accent' />
            }
            <Label name={'Zoom: ' + map.zoom} labelColor='fill-blue' />
            <Label name={map.center[0].toFixed(5)} labelColor='blue' />
            <Label name={map.center[1].toFixed(5)} labelColor='blue' />
        </div>
    )
}