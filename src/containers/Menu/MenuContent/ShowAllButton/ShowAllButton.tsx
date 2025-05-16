import React, { useState } from "react";

import { BoolValue } from "@components/base";

import { showAllPolygons } from "@store/features/app";
import { useAppDispatch } from "@store/hooks";

export const ShowAllButton: React.FC = () => {

    const dispatch = useAppDispatch();
    const [ showAll, setShowAll ] = useState(false);

    return (
        <BoolValue
            name='Показать все участки'
            checked={showAll}
            textType='small-text'
            onChange={() => {
                if (!showAll) {
                    dispatch(showAllPolygons());
                }
                setShowAll(!showAll);
            }}
        />
    )
}