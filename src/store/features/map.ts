import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { NumberRange } from "@utils/numberRange";

interface MapState {
    zoom: NumberRange<9, 22>,
    center: [number, number],
    duration: number,
    clickEvent: 'INC ZOOM' | 'DEC ZOOM' | 'GO TO POLYGON' | 'NONE',
    goToPolygonEventId: number | undefined,
}

const initialState: MapState = {
    zoom: 20,
    center: [56.11015539044307, 38.37248815474842],
    duration: 500,
    clickEvent: 'NONE',
    goToPolygonEventId: undefined,
}

const mapSlice = createSlice({
    name: 'map',
    initialState,
    reducers: {
        // первые две функции здесь - это функции при нажатии на кнопки изменения масштаба
        // в этом случае нужно менять не сам zoom, а обозначить событие
        // так как для плавного изменения масштаба нужно вызвать внутреннюю функцию карты
        incrementZoom(state) {
            if (state.zoom < 21) {
                state.clickEvent = 'INC ZOOM';
            }
        },
        decrementZoom(state) {
            if (state.zoom > 9) {
                state.clickEvent = 'DEC ZOOM';
            }
        },
        goToPolygon(state, action: PayloadAction<number>) {
            state.clickEvent = 'GO TO POLYGON';
            state.goToPolygonEventId = action.payload;
        },
        updateZoom(state, action: PayloadAction<number>) {
            const newZoom = state.zoom + action.payload;
            if (newZoom < 9) {
                state.zoom = 9;
            } else if (newZoom > 21) {
                state.zoom = 21;
            } else {
                state.zoom = newZoom as NumberRange<9, 18>;
            }
            state.clickEvent = 'NONE';
        },
        changeZoom(state, action: PayloadAction<number>) {
            const newZoom = action.payload;
            if (newZoom < 9) {
                state.zoom = 9;
            } else if (newZoom > 21) {
                state.zoom = 21;
            } else {
                state.zoom = newZoom as NumberRange<9, 18>;
            }
            state.clickEvent = 'NONE';
        },
        updateLatitude(state, action: PayloadAction<number>) {
            state.center[0] += action.payload;
        },
        updateLongitude(state, action: PayloadAction<number>) {
            state.center[1] += action.payload;
        },
        changeState(state, action: PayloadAction<{zoom: number, center: Array<number>}>) {
            state.center[0] = action.payload.center[0];
            state.center[1] = action.payload.center[1];
            state.zoom = action.payload.zoom as NumberRange<9, 22>;
            state.clickEvent = 'NONE';
            state.goToPolygonEventId = undefined;
        },
    },
})

export const { 
    incrementZoom, 
    decrementZoom, 
    goToPolygon,
    updateZoom, 
    changeZoom,
    updateLatitude,
    updateLongitude,
    changeState } = mapSlice.actions;
export default mapSlice.reducer;