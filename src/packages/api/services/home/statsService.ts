import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { RequestOptionsParameters, ResponseErrorResponse } from '../../types';
import { customInstance } from '../../configs';

export interface Stats {
    locationId: number;
    pending: number;
    negative: number;
    positive: number;
}

type StatsResponse = Stats[];

interface StatsQueryParams {
    page: number;
    limit: number;
}

/**
 * Fetch Stats with pagination
 * @summary Fetch Stats with pagination
 */
export const fetchStats = async (
    options?: RequestOptionsParameters<typeof customInstance>
): Promise<StatsResponse> => {
    const response: StatsResponse = await customInstance(
        {
            url: `/examinations/stats/`,
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        },
        options
    );
    return response;
};

/**
 * Hook to fetch Stats with pagination
 * @summary Hook to fetch Stats with pagination
 */
export const useStats = (
    options?: Omit<UseQueryOptions<StatsResponse, ResponseErrorResponse>, 'queryKey'>
) => {
    return useQuery({
        queryKey: ['stats'],
        queryFn: fetchStats,
        ...options
    });
};
