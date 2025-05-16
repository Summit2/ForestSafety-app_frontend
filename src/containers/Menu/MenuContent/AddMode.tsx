import React, { useState } from "react";

import { Input, Text } from "@components/base";
import { Button } from "@components/buttons";
import { EditBox } from "@components/EditBox/EditBox";

import { useAppDispatch } from "@store/hooks";
import { deleteParam } from "@store/features/searchParams";

import { useAddPolygonMutation } from "@api/paths/polygonApi";

export const AddMode: React.FC = () => {

    const [ addPolygon ] = useAddPolygonMutation();
    const [ name, setName ] = useState('');
    const [ treeCount, setTreeCount ] = useState(0);
    const [ points, setPoints ] = useState<{ x: number, y: number }[]>([{ x: 0, y: 0 }]);

    const dispatch = useAppDispatch();

    const getPolygonRequestBody = () => {
        return {
            'name': name,
            'tree_count': treeCount,
            'points': points.map((point) => [point.x, point.y])
        }
    }

    const createNewPolygon = () => {
        addPolygon({ attrs: getPolygonRequestBody() });
        dispatch(deleteParam('menu'));
    }

    return (
        <div className="menu-content-add">
            <Button
                buttonLine='line' buttonType='accent' buttonSize='small'
                onClick={() => { dispatch(deleteParam('menu')) }}
            >
                Вернуться к списку полигонов
            </Button>
            <Text class="add-text" type='bold-text'>
                Название
            </Text>
            <Input 
                placeholder="Название полигона"
                value={name}
                onChange={(e) => { setName(e.target.value) }}
            />
            <Text class="add-text" type='bold-text'>
                Число деревьев
            </Text>
            <Input 
                placeholder="Число деревьев"
                type='number'
                value={treeCount}
                onChange={(e) => { setTreeCount(Number(e.target.value)) }}
            />
            <Text class="add-text" type='bold-text'>
                Границы
            </Text>
            <EditBox points={points} setPoints={setPoints} />
            <Button onClick={createNewPolygon}>
                Добавить полигон
            </Button>
        </div>
    )
}