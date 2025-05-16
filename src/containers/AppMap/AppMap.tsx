import React, { useRef, useEffect } from "react";

import './AppMap.scss';
import { Map } from "@pbe/react-yandex-maps";
import { AppPolygon } from "@containers/AppPolygon/AppPolygon";
import { PolygonType } from "@api/types";

import { useGetPolygonsQuery } from "@api/paths/polygonApi";
import { changeState } from "@store/features/map";
import { hiddenMenu, showMenu } from "@store/features/app";
import { setParam, deleteParam, getAreaId } from "@store/features/searchParams";
import { useAppDispatch, useAppSelector } from "@store/hooks";

interface AppMapProps {
    width?: string,
    height?: string,
}

export const AppMap: React.FC<AppMapProps> = ({
    width='100vw',
    height='100vh',
}) => {

const dispatch = useAppDispatch();

    const { data = {polygons: []} } = useGetPolygonsQuery();

    const map = useRef<ymaps.Map | undefined>(undefined);
    const mapStore = useAppSelector((state) => state.map);
    const { menuPolygonListVisible } = useAppSelector((state) => state.app);
    const mapState = {
        center: mapStore.center,
        zoom: mapStore.zoom
    }

    const { searchParams } = useAppSelector((state) => state.searchParams);
    const areaId = getAreaId(searchParams);

    useEffect(() => {
        if (map.current) {
            switch (mapStore.clickEvent) {
                case 'INC ZOOM':
                    map.current.setZoom(mapStore.zoom + 1, { duration: mapStore.duration });
                    return;
                case 'DEC ZOOM':
                    map.current.setZoom(mapStore.zoom - 1, { duration: mapStore.duration });
                    return;
                case 'GO TO POLYGON':
                    if (mapStore.goToPolygonEventId) {
                        const index = data.polygons
                            .map((element) => Number(element.id)).indexOf(Number(mapStore.goToPolygonEventId));
                        if (index !== -1) {
                            goToPolygon(data.polygons[index]);
                        }
                    }
                    return;
                case 'NONE':
                    dispatch(changeState({
                        zoom: map.current.getZoom(),
                        center: map.current.getCenter(),
                    }));
                    return;
                default:
                    return;
            }
        }
    }, [map, mapStore.clickEvent, data]);

    const changeMapState = () => {
        if (map.current) {
            dispatch(changeState({
                zoom: map.current.getZoom(),
                center: map.current.getCenter(),
            }));
        }
    }

    const goToPolygon = (polygon: PolygonType) => {
        if (map.current) {
            dispatch(setParam({ key: 'area', value: polygon.id.toString() }));
            dispatch(deleteParam('menu'));
            dispatch(showMenu());
            const arrayX = polygon.points.map((element) => element[0]);
            const arrayY = polygon.points.map((element) => element[1]);
            const minX = Math.min(...arrayX);
            const maxX = Math.max(...arrayX);
            const minY = Math.min(...arrayY);
            const maxY = Math.max(...arrayY);
            map.current.setBounds([[minX, minY], [maxX, maxY]], {
                checkZoomRange: true,
                duration: mapStore.duration,
            });
        }
    }

    const getPolygonIndexById = (polygonId: number | undefined) => {
        if (!polygonId) {
            throw new Error('id области не определен')    
        }

        const index = data.polygons.map((polygon) => Number(polygon.id)).indexOf(polygonId);
        if (index !== -1) {
            return index;
        }

        throw new Error('Области с таким id не существует');
    }

    return (
        <div className='app-map'>
            <Map 
                instanceRef={map}
                onActionend={() => { changeMapState(); }}
                onClick={() => { dispatch(hiddenMenu()); }}
                state={mapState}
                width={width}
                height={height}
                className='app-map-inner'
                // для вывода подсказок и названий
                modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
            >
                {!areaId ? 
                    data.polygons.map((polygon, index) => {
                        const visibleIndex = menuPolygonListVisible
                            .map((element) => Number(element.polygonId)).indexOf(Number(polygon.id));
                        if (visibleIndex !== -1 && 
                            menuPolygonListVisible[visibleIndex].polygonVisible) {
                            return (
                                <AppPolygon
                                    key={index}
                                    polygon={polygon}
                                    enterStatus={menuPolygonListVisible[visibleIndex].polygonEnter}
                                    onClick={() => { goToPolygon(polygon); }}
                                />
                            )
                        }
                        return (
                            <span key={index} ></span>
                        )
                    })
                : areaId && menuPolygonListVisible.length !== 0 &&
                    [0].map((value) => {
                        const polygonIndex = getPolygonIndexById(areaId);

                        return (
                            <AppPolygon
                                key={value}
                                polygon={data.polygons[polygonIndex]}
                                enterStatus={menuPolygonListVisible[polygonIndex].polygonEnter}
                                onClick={() => { goToPolygon(data.polygons[polygonIndex]) }}
                            />
                        )
                    })
                }
            </Map>
        </div>
    )
}