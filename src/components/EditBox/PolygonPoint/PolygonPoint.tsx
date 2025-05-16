import React from "react";
import './PolygonPoint.scss';

import { Input } from "@components/base";
import { Button } from "@components/buttons";

interface PolygonPointProps {
    pointIndex: number,
    x: number,
    y: number,
    setX: (x: number) => void,
    setY: (y: number) => void,
    addNewPoint: (index: number) => void,
    deletePoint: () => void,
    type?: 'base' | 'first'
}

export const  PolygonPoint: React.FC<PolygonPointProps> = ({
    pointIndex,
    x, y,
    setX, setY, addNewPoint, deletePoint,
    type='base'
}) => {

    const generateNumber = (str: string) => {
        const result = Number(str);
        if (Number.isNaN(result)) {
            return 0;
        }
        return result;
    }

    return (
        <div className="polygon-point">
            <Input
                type='number'
                value={x}
                onChange={(e) => setX(generateNumber(e.target.value))}
                placeholder="0"
            />
            <Input
                type='number'
                value={y}
                onChange={(e) => setY(generateNumber(e.target.value))}
                placeholder="0"
            />
            <Button
                buttonType='blue' buttonSize='small' buttonLine='line'
                style={{ fontWeight: 'bold' }}
                onClick={() => { addNewPoint(pointIndex + 1) }}
            >
                ↓
            </Button>
            {type == 'first' &&
            <Button
                buttonType='blue' buttonSize='small' buttonLine='line'
                style={{ fontWeight: 'bold' }}
                onClick={() => { addNewPoint(0) }}
            >
                ↑
            </Button>       
            }
            <Button
                buttonType='accent' buttonSize='small' buttonLine='line'
                onClick={() => { deletePoint() }}
            >
                удалить
            </Button>
        </div>
    )
}