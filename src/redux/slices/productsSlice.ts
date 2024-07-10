import axios from "axios";

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL } from "../../api/api";

import { IFeature } from "../../components/ui/featureCard/featureCard";

export interface IProductsState {
    products: IFeature[]
    isLoading: boolean,
    total: number,
    skip: number,
    limit: number
}

interface Try {
    q: string,
    skip: number
}

export const productsApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getProductsByTitle: builder.query<IProductsState, Try>({
            query: ({q, skip}) =>   `/products/search?q=${q}&limit=12&skip=${skip}`,
        }),
    }),
})

export const useGetProductsByTitle : any = productsApi.endpoints.getProductsByTitle.useQuery;

