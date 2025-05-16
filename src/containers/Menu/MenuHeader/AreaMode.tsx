import React from "react";

import { Text } from "@components/base";
import { useGetPolygonQuery } from "@api/paths/polygonApi";
import { AreaModeProps } from "@api/types";

export const AreaMode: React.FC<AreaModeProps> = ({ areaId }) => {

    const { data } = useGetPolygonQuery(areaId);

    return (
        <Text tag='div' type='h3'>
            {data?.polygon.name || 'Загрузка...'}
        </Text>
    )
}