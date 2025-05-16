import React from "react";

import { Polyline } from "@pbe/react-yandex-maps";
import { Polygon } from "@pbe/react-yandex-maps";
import { PolygonType } from "@api/types";

import { changePolygonEnterStatus } from "@store/features/app";
import { getAreaId } from "@store/features/searchParams";
import { useAppSelector, useAppDispatch } from "@store/hooks";

interface AppPolygonProps {
    polygon: PolygonType,
    enterStatus: boolean,
    onClick: (e: any) => void,
}

export const AppPolygon: React.FC<AppPolygonProps> = ({
    polygon,
    enterStatus,
    onClick,
}) => {

    const leaveStroke = 3;
    const enterStroke = 5;
    const areaStroke = 2;

    const dispatch = useAppDispatch();
    const { searchParams } = useAppSelector((state) => state.searchParams);
    const areaId = getAreaId(searchParams);

    const isPolygonMode = () => {
        return (areaId && areaId === Number(polygon.id));
    }

    const polygonOptions = {
        fillColor: isPolygonMode() ? 'rgba(164, 85, 201, 0.0)' 
            : 'rgba(164, 85, 201, 0.2)',
    }

    const lineOptions = {
        strokeColor: '#A455C9',
        strokeWidth: isPolygonMode() ? areaStroke :
            enterStatus ? enterStroke : leaveStroke,
        strokeStyle: 'solid',
    }

    const changeEnterStatus = (value: boolean) => {
        dispatch(changePolygonEnterStatus({
            polygonId: Number(polygon.id),
            enterStatus: value
        }));
    }

    return (
        <>
            {!areaId ?
                <Polygon
                    options={{ ...polygonOptions, ...lineOptions, }}
                    geometry={[polygon.points]}
                    properties={{ hintContent: polygon.name, }}
                    onClick={onClick}
                    onMouseEnter={() => { changeEnterStatus(true); }}
                    onMouseLeave={() => { changeEnterStatus(false); }}
                />
            : (areaId && areaId === Number(polygon.id)) &&
                <>
                    <Polyline 
                        options={{ ...polygonOptions, ...lineOptions, }}
                        geometry={[...polygon.points, polygon.points[0]]}
                    />
                </>
            }
        </>
    )
}