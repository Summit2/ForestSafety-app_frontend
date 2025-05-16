import React from "react";

import { Text } from "@components/base";

import { useGetPolygonsQuery } from "@api/paths/polygonApi";

export const MapMode: React.FC = () => {

    const { data = { polygons: [] } } = useGetPolygonsQuery();

    return (
        <>
            <Text tag='div' type='h3'>Все участки</Text>
            <Text tag='div' type='h1'>{data.polygons.length}</Text>
        </>
    )
}