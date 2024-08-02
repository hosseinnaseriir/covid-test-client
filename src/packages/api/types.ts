import axios, { AxiosError } from 'axios';

export type ErrorType<Error> = AxiosError<Error>;

interface FieldError {
    field: string;
    msg: string[];
}

// Represents the structure of the validation error response
export interface ValidationErrorResponse {
    error?: string;
    message?: string;
    msg?: string;
    fields?: FieldError[];
    statusCode?: number;
}
export type ResponseErrorResponse = ValidationErrorResponse


export type RequestOptionsParameters<T extends (...args: any) => any> = Parameters<T>[1];
