import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { RequestOptionsParameters, ResponseErrorResponse } from '../../types';
import { customInstance } from '@api/configs';

export interface User {
    id: number;
    fullName: string;
    username: string;
    createdAt: string;
    updatedAt: string;
}

type UserResponse = { user: User };


/**
 * Fetch User 
 * @summary Fetch User 
 */
export const fetchUser = async (
    options?: RequestOptionsParameters<typeof customInstance>
): Promise<UserResponse> => {
    const response: UserResponse = await customInstance(
        {
            url: `/auth/me/`,
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        },
        options
    );
    return response;
};

/**
 * Hook to fetch User 
 * @summary Hook to fetch User 
 */
export const useUser = (
    options?: Omit<UseQueryOptions<UserResponse, ResponseErrorResponse>, 'queryKey'>
) => {
    return useQuery({
        queryKey: ['User'],
        queryFn: fetchUser,
        ...options
    });
};
