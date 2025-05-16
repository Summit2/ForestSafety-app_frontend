import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type polygonVisibleType = {
    polygonId: number,
    polygonName: string,
    polygonVisible: boolean,
    polygonEnter: boolean,
};

type polygonDataType = {
    id: number,
    name: string,
}

interface AppState {
    menuVisible: boolean,
    menuPolygonListVisible: Array<polygonVisibleType>,
    postMode: 'BASE' | 'POST',
    areaId: undefined | number,
}

const initialState: AppState = {
    menuVisible: false,
    menuPolygonListVisible: [],
    postMode: 'BASE',
    areaId: undefined,
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        changeMenuVisible(state) {
            state.menuVisible = !state.menuVisible;
        },
        showMenu(state) {
            state.menuVisible = true;
        },
        hiddenMenu(state) {
            state.menuVisible = false;
        },
        updatePolygonList(state, action: PayloadAction<{ polygons: Array<polygonDataType> }>) {
            state.menuPolygonListVisible = [];
            action.payload.polygons.forEach((polygon) => {
                state.menuPolygonListVisible.push({
                    polygonId: Number(polygon.id),
                    polygonName: polygon.name,
                    polygonVisible: true,
                    polygonEnter: false,
                });
            });
        },
        showAllPolygons(state) {
            state.menuPolygonListVisible.forEach((_, index) => {
                state.menuPolygonListVisible[index].polygonVisible = true;
            });
        },
        changePolygonVisible(state, action: PayloadAction<{ polygonId: number }>) {
            const index = state.menuPolygonListVisible
                .map((polygon) => polygon.polygonId)
                .indexOf(action.payload.polygonId);
            if (index !== -1) {
                state.menuPolygonListVisible[index].polygonVisible = !state.menuPolygonListVisible[index].polygonVisible;
                return;
            }
            throw new Error('Области с таким id не существует');
        },
        changePolygonEnterStatus(state, action: PayloadAction<{ polygonId: number, enterStatus: boolean }>) {
            const index = state.menuPolygonListVisible
                .map((polygon) => polygon.polygonId)
                .indexOf(action.payload.polygonId);
            if (index !== -1) {
                state.menuPolygonListVisible[index].polygonEnter = action.payload.enterStatus;
                return;
            }
            throw new Error('Области с таким id не существует');
        },
        addPolygonMode(state) {
            state.postMode = 'POST';
        },
        notAddPolygonMode(state) {
            state.postMode = 'BASE';
        }
    }
});

export const { 
    changeMenuVisible,
    showMenu,
    hiddenMenu,
    updatePolygonList,
    showAllPolygons,
    changePolygonVisible,
    changePolygonEnterStatus,
    addPolygonMode,
    notAddPolygonMode } = appSlice.actions;
export default appSlice.reducer;

