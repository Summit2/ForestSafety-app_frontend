import React from "react";

import { ScrollBox } from "@containers/ScrollBox/ScrollBox";
import { PolygonList } from "./PolygonList/PolygonList";

export const MapMode: React.FC = () => {
    return (
        <ScrollBox>
            <PolygonList />
        </ScrollBox>
    )
}