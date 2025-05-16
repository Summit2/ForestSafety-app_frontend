import React, { useEffect, useState } from "react";

import './AboutPage.scss';

import { Text } from "@components/base";
import { Button } from "@components/buttons";

import { useGetPolygonQuery } from "@api/paths/polygonApi";
import { PolygonType } from "@api/types";
import { AreaModeProps } from "@api/types";

import { usePDF } from 'react-to-pdf';

export const AboutPage: React.FC<AreaModeProps> = ({ areaId }) => {

    const { data = { polygon: {} as PolygonType }, isFetching } = useGetPolygonQuery(areaId);
    const [ updatedPoints, setPoints ] = useState<Array<{ x: number, y: number }>>([]);

    useEffect(() => {
        if (!isFetching && data.polygon.points) {
            setPoints(data.polygon.points
                .map((point) => { return({ x: point[0], y: point[1] })}));
        }
    }, [data]);

    const { toPDF, targetRef } = usePDF({ filename: 'polygon.pdf' });

    return (
        <div className='aboutpage'>
            <div 
                className='aboutpage-report'
                ref={targetRef}
            >
                <Text tag='div' type='bold-text'>
                    Число деревьев: {isFetching ? 'загрузка...' : data.polygon.points.length + (data.polygon.tree_count || 0)}
                </Text>
                <Text tag='div' color='gray'>
                    Точки полигона
                </Text>
                <div className='aboutpage-points'>
                    {updatedPoints && updatedPoints.map((point, index) => {
                        return (
                            <div 
                                key={[point.x, point.y, index].join('-')}
                                className='aboutpage-points-unit'
                            >
                                <Text type='bold-text'>{point.x}</Text>
                                <Text type='bold-text'>{point.y}</Text>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Button
                buttonType='blue' buttonSize='small' buttonLine='line'
                onClick={() => toPDF()}
            >
                Скачать pdf-отчёт
            </Button>
        </div>
    )
}