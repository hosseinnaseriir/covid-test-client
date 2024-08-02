import { MutationFunction, useMutation, UseMutationOptions } from "@tanstack/react-query";
import { ErrorType, ResponseErrorResponse } from "../types";
import { customInstance } from "../configs";

interface User {
    id: number;
    fullName: string;
    username: string;
    password: string;
    createdAt: string;
    updatedAt: string;
}

export interface VerifyUserPayloadType {
    username: string;
    password: string;
}

export type LoginResponse = {
    message: string;
    user: User;
    token: string;
};

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

export const getVerifyUserMutationOptions = <
    TError = ErrorType<
        ResponseErrorResponse
    >,
    TContext = unknown,
>(options?: {
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof VerifyUser>>,
        TError,
        { data: VerifyUserPayloadType },
        TContext
    >;
    request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
    Awaited<ReturnType<typeof VerifyUser>>,
    TError,
    { data: VerifyUserPayloadType },
    TContext
> => {
    const { mutation: mutationOptions, request: requestOptions } = options ?? {};

    const mutationFn: MutationFunction<
        Awaited<ReturnType<typeof VerifyUser>>,
        { data: VerifyUserPayloadType }
    > = (props) => {
        const { data } = props ?? {};

        return VerifyUser(data, requestOptions);
    };

    return { mutationFn, ...mutationOptions };
};


/**
 * Verify and login by username and password
 * @summary Verify and login by username and password
 */
export const VerifyUser = (
    VerifyUserPayload: VerifyUserPayloadType,
    options?: SecondParameter<typeof customInstance>
) => {
    return customInstance<LoginResponse>(
        {
            url: `/auth/validate`,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: VerifyUserPayload,
        },
        options
    );
};


/**
 * @summary Verify and login by username and password
 */
export const useVerifyUser = <
    TError = ErrorType<
        ResponseErrorResponse
    >,
    TContext = unknown,
>(options?: {
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof VerifyUser>>,
        TError,
        { data: VerifyUserPayloadType },
        TContext
    >;
    request?: SecondParameter<typeof customInstance>;
}) => {
    const mutationOptions =
        getVerifyUserMutationOptions(options);

    return useMutation(mutationOptions);
};
