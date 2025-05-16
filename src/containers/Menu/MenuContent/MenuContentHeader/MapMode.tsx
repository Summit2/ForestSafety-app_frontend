import React from "react";

import { Text } from "@components/base";
import { Button } from "@components/buttons";
import { ShowAllButton } from "../ShowAllButton/ShowAllButton";

import { useAppSelector, useAppDispatch } from "@store/hooks";
import { setParam } from "@store/features/searchParams";

export const MapMode: React.FC = () => {

    const { menuPolygonListVisible } = useAppSelector((state) => state.app);
    const dispatch = useAppDispatch();

    const getVisibleAreas = () => {
        return menuPolygonListVisible
            .filter((polygon) => polygon.polygonVisible === true).length;
    }

    const goToAddMode = () => {
        dispatch(setParam({
            key: 'menu',
            value: 'add'
        }));
    }

    return (
        <>
            <div className='menu-content-header-tools'>
                <Text tag='div' type='small-text' color='other'>
                    Видимые участки: {getVisibleAreas()}
                </Text>
                <ShowAllButton />
                <Button
                    buttonType='blue' buttonLine='line' buttonSize='small'
                    onClick={goToAddMode}
                >
                    Добавить полигон
                </Button>
            </div>
        </>
    )
}