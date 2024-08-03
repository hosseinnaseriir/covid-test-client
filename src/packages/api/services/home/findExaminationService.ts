import { useQuery, UseQueryOptions, QueryFunctionContext } from '@tanstack/react-query';
import { RequestOptionsParameters, ResponseErrorResponse } from '../../types';
import { customInstance } from '../../configs';

export interface Examination {
    id: number;
    date: string;
    locationId: number;
    result: string;
}

export interface FindExaminationsResponse {
    data: Examination[];
    total: number;
    page: number;
    limit: number;
}

interface FindExaminationsQueryParams {
    page: number;
    limit: number;
    locationId?: number;
}

/**
 * Fetch Findexaminations with pagination
 * @summary Fetch Findexaminations with pagination
 */
export const fetchFindExaminations = async (
    { locationId, ...params }: FindExaminationsQueryParams,
    options?: RequestOptionsParameters<typeof customInstance>
): Promise<FindExaminationsResponse> => {
    const response: FindExaminationsResponse = await customInstance(
        {
            url: `/examinations/find/${locationId}`,
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            params,
        },
        options
    );
    return response;
};

/**
 * Hook to fetch Findexaminations with pagination
 * @summary Hook to fetch Findexaminations with pagination
 */
export const useFindExaminations = (
    params: FindExaminationsQueryParams,
    options?: Omit<UseQueryOptions<FindExaminationsResponse, ResponseErrorResponse>, 'queryKey'>
) => {
    if (params.page < 1) params.page = 1;

    return useQuery({
        queryKey: ['Findexaminations', params.limit, params.page, params.locationId],
        queryFn: () => fetchFindExaminations(params),
        ...options
    });
};
