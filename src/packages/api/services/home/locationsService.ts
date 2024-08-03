import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { RequestOptionsParameters, ResponseErrorResponse } from '../../types';
import { customInstance } from '../../configs';



export type LocationsResponse = number[];

/**
 * Fetch Locations 
 * @summary Fetch Locations 
 */
export const fetchLocations = async (
    options?: RequestOptionsParameters<typeof customInstance>
): Promise<LocationsResponse> => {
    const response: LocationsResponse = await customInstance(
        {
            url: `/examinations/locations/`,
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        },
        options
    );
    return response;
};

/**
 * Hook to fetch examinations locations
 * @summary Hook to fetch examinations locations
 */
export const useLocations = (
    options?: Omit<UseQueryOptions<LocationsResponse, ResponseErrorResponse>, 'queryKey'>
) => {
    return useQuery({
        queryKey: ['locations'],
        queryFn: fetchLocations,
        ...options
    });
};
