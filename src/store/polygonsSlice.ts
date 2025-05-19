import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { polygonData as initialPolygons } from '../api/mocks/data';

export const fetchPolygonsFromAPI = createAsyncThunk(
  'polygons/fetchPolygonsFromAPI',
  async () => {
    const response = await fetch('http://127.0.0.1:5000/get_polygons/');
    const data = await response.json();
    return data; // предполагается, что это массив полигонов
  }
);

interface Polygon {
  points : any;
  name :any ;
  tree_count: number
}

interface PolygonState {
  polygons: Polygon[];
}

const initialState: PolygonState = {
  polygons: initialPolygons
};

const polygonSlice = createSlice({
  name: 'polygons',
  initialState,
  reducers: {
    addPolygon: (state, action) => {
      state.polygons.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPolygonsFromAPI.fulfilled, (state, action) => {
      state.polygons = state.polygons.concat(action.payload);
    });
  }
});

export const { addPolygon } = polygonSlice.actions;
export default polygonSlice.reducer;
