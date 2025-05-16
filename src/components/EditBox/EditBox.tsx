import React from "react";
import './EditBox.scss';

import { PolygonPoint } from "./PolygonPoint/PolygonPoint";

interface EditBoxProps {
    points: { x: number, y: number}[],
    setPoints: ( points: { x: number, y: number}[] ) => void
}

export const EditBox: React.FC<EditBoxProps> = ({
    points, setPoints
}) => {

    return (
        <div className="edit-box">
            {points.map((updatePoint, index) => {
                return (
                    <PolygonPoint 
                        key={['point', index].join('-')}
                        pointIndex={index}
                        type={index == 0 ? 'first' : 'base'}
                        x={updatePoint.x} 
                        y={updatePoint.y}
                        setX={(x) => {
                            points[index].x = x;
                            setPoints([ ...points ]);
                        }}
                        setY={(y) => {
                            points[index].y = y;
                            setPoints([ ...points ]);
                        }}
                        addNewPoint={(index) => {
                            points.splice(index, 0, {
                                x: 0, y: 0
                            });
                            setPoints([ ...points ]);
                        }}
                        deletePoint={() => {
                            points.splice(index, 1);
                            setPoints([ ...points ]);
                        }}
                    />
                )
            })}
        </div>
    )
}