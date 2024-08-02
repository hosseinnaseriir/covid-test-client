import { MutationFunction, useMutation, UseMutationOptions } from "@tanstack/react-query";
import { ErrorType, RequestOptionsParameters, ResponseErrorResponse } from "../../types";
import { customInstance } from "../../configs";

interface User {
    id: number;
    fullName: string;
    username: string;
    password: string;
    createdAt: string;
    updatedAt: string;
}

interface RegisterUserPayloadType {
    fullName: string;
    username: string;
    password: string;
    repeatPassword: string;
}

type RegisterResponse = {
    message: string;
    user: User;
    token: string;
};


export const getRegisterUserMutationOptions = <
    TError = ErrorType<
        ResponseErrorResponse
    >,
    TContext = unknown,
>(options?: {
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof RegisterUser>>,
        TError,
        { data: RegisterUserPayloadType },
        TContext
    >;
    request?: RequestOptionsParameters<typeof customInstance>;
}): UseMutationOptions<
    Awaited<ReturnType<typeof RegisterUser>>,
    TError,
    { data: RegisterUserPayloadType },
    TContext
> => {
    const { mutation: mutationOptions, request: requestOptions } = options ?? {};

    const mutationFn: MutationFunction<
        Awaited<ReturnType<typeof RegisterUser>>,
        { data: RegisterUserPayloadType }
    > = (props) => {
        const { data } = props ?? {};

        return RegisterUser(data, requestOptions);
    };

    return { mutationFn, ...mutationOptions };
};


/**
 * Register by username and password and repeat password and fullname
 * @summary Register by username and password and repeat password and fullname
 */
export const RegisterUser = (
    RegisterUserPayload: RegisterUserPayloadType,
    options?: RequestOptionsParameters<typeof customInstance>
) => {
    return customInstance<RegisterResponse>(
        {
            url: `/auth/register`,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: RegisterUserPayload,
        },
        options
    );
};


/**
 * @summary Register by username and password and repeat password and fullname
 */
export const useRegisterUser = <
    TError = ErrorType<
        ResponseErrorResponse
    >,
    TContext = unknown,
>(options?: {
    mutation?: UseMutationOptions<
        Awaited<ReturnType<typeof RegisterUser>>,
        TError,
        { data: RegisterUserPayloadType },
        TContext
    >;
    request?: RequestOptionsParameters<typeof customInstance>;
}) => {
    const mutationOptions =
        getRegisterUserMutationOptions(options);

    return useMutation(mutationOptions);
};
