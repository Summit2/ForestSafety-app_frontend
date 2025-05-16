import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SigninType, SigninResponse } from "@api/types";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
    endpoints: (builder) => ({
        login: builder.mutation<SigninResponse, SigninType>({
            query: (params: SigninType) => ({
                url: 'login/',
                method: 'POST',
                body: { ...params }
            }),
        }),
        logout: builder.mutation<any, void>({
            query: () => 'logout/',
        }),
    }),
});

export const {
    useLoginMutation,
    useLogoutMutation
} = userApi;