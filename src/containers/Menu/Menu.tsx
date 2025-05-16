import React from "react";

import './Menu.scss';

import { Line } from "@components/base";

import { MenuOther } from "./MenuOther/MenuOther";
import { MenuHeader } from "./MenuHeader/MenuHeader";
import { MenuContent } from "./MenuContent/MenuContent";

import { useAppSelector } from "@store/hooks";
import { getAreaId } from "@store/features/searchParams";

export const Menu: React.FC = () => {

    const { searchParams } = useAppSelector((state) => state.searchParams);
    const areaId = getAreaId(searchParams);

    return (
        <div className='menu box-shadow-right'>
            <MenuOther areaId={areaId} />
            <MenuHeader areaId={areaId} />
            {!areaId && <Line />}
            <MenuContent areaId={areaId} />
        </div>
    )
}