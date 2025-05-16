import React from "react";

import { Placemark } from "@pbe/react-yandex-maps";

import location from '@assets/icons/location/location.svg';

interface AppPlacemarkProps {
    id: number,
    name: string,
    wood: string,
    point: [number, number],
}

export const AppPlacemark: React.FC<AppPlacemarkProps> = ({
    id,
    name, wood,
    point,
}) => {

    const [ width, height ] = [ 32, 50 ];

    return (
        <Placemark
            geometry={point}
            options={{
                iconLayout: 'default#image',
                iconImageHref: location,
                iconImageSize: [width, height],
            }}
            properties={{
                hintContent: [name, wood].join(', '),
            }}
        />
    )
}