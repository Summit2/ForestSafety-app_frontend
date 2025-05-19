import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { polygonData as initialPolygons } from '../api/mocks/data';

interface Polygon {
  id: string;
  points: any[];
  name: string;
  tree_count: number;
}

interface PolygonState {
  polygons: Polygon[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: PolygonState = {
  // @ts-ignore
  polygons: initialPolygons,
  status: 'idle',
  error: null
};

// Асинхронный action для загрузки полигонов
export const fetchPolygons = createAsyncThunk(
  'polygons/fetchPolygons',
  async () => {
    const response = await fetch('/api/polygons/');
    if (!response.ok) throw new Error('Failed to fetch polygons');
    return await response.json();
  }
);

const polygonSlice = createSlice({
  name: 'polygons',
  initialState,
  reducers: {
    addPolygon: (state, action) => {
      state.polygons.push(action.payload);
    },
    updatePolygons: (state, action) => {
      state.polygons = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPolygons.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPolygons.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Объединяем начальные полигоны с загруженными
        state.polygons = [...initialPolygons, ...action.payload];
      })
      .addCase(fetchPolygons.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Unknown error';
      });
  }
});

export const { addPolygon, updatePolygons } = polygonSlice.actions;
export default polygonSlice.reducer;