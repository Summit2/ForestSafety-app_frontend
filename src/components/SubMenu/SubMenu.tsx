import React, { useState } from "react";

import './SubMenu.scss';

import { MenuBlock } from "./MenuBlock/MenuBlock";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@store/hooks";
import { setParam } from "@store/features/searchParams";

type QueryType = {
    key: string,
    value: string
}

type SubMenuElement = {
    name: string,
    query: QueryType,
}

interface SubMenuProps {
    paths: Array<SubMenuElement>,
}

export const SubMenu: React.FC<SubMenuProps> = ({ paths }) => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [ selectedIndex, setIndex ] = useState(0);

    const onClick = (index: number, query: QueryType) => {
        setIndex(index);
        dispatch(setParam({
            key: query.key,
            value: query.value
        }));
    }

    return (
        <div className='sub-menu'>
            {paths.map((path, index) => {
                return (
                    <MenuBlock 
                        key={index}
                        name={path.name}
                        selected={index === selectedIndex}
                        onClick={() => { onClick(index, path.query) }}
                    />
                )
            })}
        </div>
    )
}