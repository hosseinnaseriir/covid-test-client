import axios, { AxiosError } from 'axios';

export type ErrorType<Error> = AxiosError<Error>;

export interface ResponseErrorResponse {
    error?: string;
}


