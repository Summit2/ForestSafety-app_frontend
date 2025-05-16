import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PolygonType } from '@api/types';

export const polygonApi = createApi({
    reducerPath: 'polygonApi',
    tagTypes: [
        'Polygon', 
        'Polygons', 
        'Add-Polygons', 
        'Delete-Polygons',
        'Change-Polygons'
    ],
    baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
    endpoints: (builder) => ({
        getPolygons: builder.query<{ polygons: Array<PolygonType>}, void>({
            query: () => 'polygons/',
            providesTags: ['Polygons', 'Add-Polygons', 'Change-Polygons', 'Delete-Polygons']
        }),
        getSearchPolygons: builder.mutation<{ polygon: PolygonType}, { queryStr: string }>({
            query: (params) => ({
                url: `polygons/search?query=${params.queryStr}`,
                method: 'GET',
            }),
        }),
        getPolygon: builder.query<{ polygon: PolygonType }, number>({
            query: (id) => `polygons/${id}`,
            providesTags: ['Polygon'],
        }),
        updatePolygon: builder.mutation<PolygonType, { id: number, attrs: any }>({
            query: (params) => ({
                url: `polygons/${params.id}`,
                method: 'PATCH',
                body: { ...params.attrs }
            }),
            invalidatesTags: ['Polygon', 'Polygons', 'Change-Polygons']
        }),
        deletePolygon: builder.mutation<PolygonType, { id: number }>({
            query: (params) => ({
                url: `polygons/${params.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Polygon', 'Polygons', 'Delete-Polygons']
        }),
        addPolygon: builder.mutation<PolygonType, { attrs: any }>({
            query: (params) => ({
                url: `polygons`,
                method: 'POST',
                body: { ...params.attrs }
            }),
            invalidatesTags: ['Polygon', 'Polygons', 'Add-Polygons']
        }),
    }),
});


export const {
    useGetPolygonsQuery,
    useGetPolygonQuery,
    useGetSearchPolygonsMutation,
    useUpdatePolygonMutation,
    useDeletePolygonMutation,
    useAddPolygonMutation
} = polygonApi;