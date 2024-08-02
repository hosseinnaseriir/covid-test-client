import { useQuery, UseQueryOptions, QueryFunctionContext } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { RequestOptionsParameters, ResponseErrorResponse } from '../../types';
import { customInstance } from '../../configs';

export interface Examination {
    id: number;
    date: string;
    locationId: number;
    result: string;
}

interface ExaminationsResponse {
    data: Examination[];
    total: number;
    page: number;
    limit: number;
}

interface ExaminationsQueryParams {
    page: number;
    limit: number;
}

/**
 * Fetch examinations with pagination
 * @summary Fetch examinations with pagination
 */
export const fetchExaminations = async (
    params: ExaminationsQueryParams,
    options?: RequestOptionsParameters<typeof customInstance>
): Promise<ExaminationsResponse> => {
    const response: ExaminationsResponse = await customInstance(
        {
            url: `/examinations`,
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            params,
        },
        options
    );
    return response;
};

/**
 * Hook to fetch examinations with pagination
 * @summary Hook to fetch examinations with pagination
 */
export const useExaminations = (
    params: ExaminationsQueryParams,
    options?: Omit<UseQueryOptions<ExaminationsResponse, ResponseErrorResponse>, 'queryKey'>
) => {
    if (params.page < 1) params.page = 1;
    return useQuery({
        queryKey: ['examinations', params.limit, params.page],
        queryFn: () => fetchExaminations(params),
        ...options
    });
};
