import React from "react";

import './Main.scss';
import { Header } from "@containers/Header/Header";
import { AppMap } from "@containers/AppMap/AppMap";
import { MapTools } from "@containers/MapTools/MapTools";
import { Menu } from "@containers/Menu/Menu";
import { MapState } from "@containers/MapState/MapState";

import { useAppSelector } from "@store/hooks";

export const Main: React.FC = () => {

    const appStore = useAppSelector((state) => state.app);

    return (
        <div className='main-page'>
            <Header />
            <div className='main-page-content'>
                <AppMap />
                <div className='page-tools'>
                    <div className='page-tools-map-state'>
                        <MapState />
                    </div>
                    <div className={'page-tools-menu page-tools-menu-' + (appStore.menuVisible ? 'show' : 'hidden')}>
                        <Menu />
                    </div>
                    <div className='page-tools-map'>
                        <MapTools />
                    </div>
                </div>
            </div>
        </div>
    )
}