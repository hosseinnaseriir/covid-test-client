import axios, { AxiosError } from 'axios';

export type ErrorType<Error> = AxiosError<Error>;

export interface ResponseErrorResponse {
    error?: string;
}


export type RequestOptionsParameters<T extends (...args: any) => any> = Parameters<T>[1];
