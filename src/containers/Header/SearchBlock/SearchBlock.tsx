import React, { useState, useRef, useEffect } from "react";
import './SearchBlock.scss';

import { Input, Text } from "@components/base";

import { useAppDispatch } from "@store/hooks";
import { goToPolygon } from "@store/features/map";

import { useGetSearchPolygonsMutation } from "@api/paths/polygonApi";
import { PolygonType } from "@api/types";
import { debounceFunction } from "@utils/debounce";

export const SearchBlock: React.FC = () => {

    const [ 
        getSearch, 
        { data = { polygon: {} as PolygonType } },
    ] = useGetSearchPolygonsMutation();
    const [ value, setValue ] = useState('');
    const [opened, setOpened] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    const dispatch = useAppDispatch();

    const searchFunction = debounceFunction((value: string) => {
        getSearch({ queryStr: value });
    });

    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
        if (
            ref.current && 
            !ref.current.contains(e.target as Node) && 
            (e.target as Element).id !== 'search-block-point' &&
            (e.target as Element).id !== 'search-block-input-point'
        ) {
          setOpened(false);
        }
    }
    
    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => 
            document.removeEventListener('mousedown', handleOutsideClick);
    }, []);

    return (
        <div 
            className="search-block"
            id="search-block-point"
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    getSearch({ queryStr: value });
                }
            }}
        >
            <Input 
                inputType='search' placeholder='Поиск' 
                id="search-block-input-point"
                value={value}
                onChange={(e) => { 
                    searchFunction(e.target.value);
                    setValue(e.target.value);
                    if (!opened) {
                        setOpened(true);
                    }
                }}
                onClick={() => {
                    if (value !== '') {
                        if (data?.polygon) {
                            if (!data.polygon.name) {
                                searchFunction(value);
                            } 
                        }
                        if (!opened) {
                            setOpened(true);
                        }
                    }
                }}
            />
            {value !== '' && opened &&
            <div 
                className="search-block-results box-shadow-bottom"
                ref={ref}
            >
                <Text color='gray' type='small-text'>
                    Результаты поиска
                </Text>
                {data?.polygon &&
                <Text
                    color='base' type='text-help-link'
                    onClick={() => {
                        setOpened(false);
                        dispatch(goToPolygon(data.polygon.id));
                    }}
                >
                    {data.polygon.name}
                </Text>
                }
            </div>
            }
        </div>
    )
}