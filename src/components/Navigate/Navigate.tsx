import React from "react";

import './Navigate.scss';
import { NavigateButton } from "./NavigateButton/NavigateButton";

export const Navigate: React.FC = () => {
    return (
        <div className='navigate'>
            <div className='navigate-shadow'>
                <div className='navigate-shadow-hblock component-shadow'></div>
                <div className='navigate-shadow-vblock component-shadow'></div>
            </div>

            <div className='navigate-form'>
                <div className='navigate-form-block'>
                    <div></div>
                    <NavigateButton type='top' />
                    <div></div>
                </div>
                <div className='navigate-form-block navigate-form-middle'>
                    <div><NavigateButton type='left' /></div>
                    <div></div>
                    <div><NavigateButton type='right' /></div>
                </div>
                <div className='navigate-form-block'>
                    <div></div>
                    <NavigateButton type='bottom' />
                    <div></div>
                </div>
            </div>
        </div>
    )
}