import React from "react";

import './MenuOther.scss';
import { Button, OtherButton } from "@components/buttons";

import { useAppDispatch } from "@store/hooks";
import { deleteParam } from "@store/features/searchParams";
import { useNavigate } from "react-router-dom";
import { ManyModesProps } from "@api/types";

export const MenuOther: React.FC<ManyModesProps> = ({ areaId }) => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const goToMapMode = () => {
        navigate('/');
        dispatch(deleteParam('area'));
        dispatch(deleteParam('menu'));
    }

    return (
        <div className='menu-other'>
            <div className='menu-other-space' ></div>
            {areaId &&
            <Button
                buttonType='accent' buttonLine='line'
                onClick={goToMapMode}
            >
                Прекратить просмотр
            </Button>
            }    
        </div>
    )
}