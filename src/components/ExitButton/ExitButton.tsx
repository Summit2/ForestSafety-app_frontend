import React from "react";

import exit from '../../assets/icons/exit.svg';
import { IconButton } from "../IconButton/IconButton";

import { useLogoutMutation } from "../../api/paths/userApi";
import { deleteToken } from "../../store/features/user";
import { useAppDispatch } from "../../store/hooks";

import { useNavigate } from "react-router-dom";

interface ExitButtonProps {
    size?: 'big' | 'small',
}

export const ExitButton: React.FC<ExitButtonProps> = ({
    size='big'
}) => {

    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const [ logout ] = useLogoutMutation();

    const logoutFunction = () => {
        logout()
        .then((res) => {
            dispatch(deleteToken());
            navigate('/login');
        });
    }

    return (
        <IconButton
            size={size}
            src={exit}
            alt='Выход'
            onClick={logoutFunction}
        />
    )
}