// import { FieldPath, FieldValues, UseFormSetError } from 'react-hook-form';

import { FieldValues, UseFormSetError } from "react-hook-form";
import { ErrorType, ResponseErrorResponse, ValidationErrorResponse } from "../types";
import toast from "react-hot-toast";

export const formErrorHandler = <U extends FieldValues>({
    ex,
    setError,
}: {
    ex: ErrorType<ValidationErrorResponse>;
    setError: UseFormSetError<U>;
}) => {
    const error = ex.response?.data as ResponseErrorResponse;
    if (error?.fields?.length) {
        error.fields?.map(field => {
            // @ts-ignore
            setError(field.field, {
                message: field.msg?.[0]
            })
        })
    } else {
        toast.error(error.message ?? "something went wrong!")
    }
}