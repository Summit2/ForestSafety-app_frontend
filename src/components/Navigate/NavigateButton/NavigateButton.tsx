import React from "react";

import './NavigateButton.scss';
import arrow from '../../../assets/icons/navigate/arrow.svg';

import { useAppDispatch } from "../../../store/hooks";
import { updateLatitude, updateLongitude } from "../../../store/features/map";

export type NavigateButtonType = 'top' | 'bottom' | 'left' | 'right';

interface NavigateButtonProps {
    type: NavigateButtonType,
}

export const NavigateButton: React.FC<NavigateButtonProps> = ({
    type,
}) => {

    const dispatch = useAppDispatch();
    const navigateStep = 0.0002;

    const changeCenter = (e: any) => {
        if (type === 'bottom') {
            dispatch(updateLatitude(-navigateStep));
            return;
        }
        if (type === 'top') {
            dispatch(updateLatitude(navigateStep));
            return;
        }
        if (type === 'left') {
            dispatch(updateLongitude(-navigateStep));
            return;
        }
        if (type === 'right') {
            dispatch(updateLongitude(navigateStep));
            return;
        }
    }

    return (
        <button 
            className={'navigatebutton ' + 'navigatebutton-' + type}
            onClick={changeCenter}
        >
            <img src={arrow} alt='arrow' />
        </button>
    )
}