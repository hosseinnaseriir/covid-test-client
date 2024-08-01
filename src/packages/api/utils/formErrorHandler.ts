// import { FieldPath, FieldValues, UseFormSetError } from 'react-hook-form';

// import { ErrorType } from '@api';
// import { lowerFirstLetter } from '@helpers/stringHelpers';
// import { toaster } from '@system/components';

// export type FieldErrorType = {
//   validationErrors?: Array<{
//     message?: string;
//     property?: string;
//   }>;
//   error?: {
//     message?: string;
//     property?: string;
//   };
// };

// export const formErrorHandler = <U extends FieldValues>({
//   err,
//   setError,
// }: {
//   err: ErrorType<FieldErrorType | unknown>;
//   setError: UseFormSetError<U>;
// }) => {
//   const errorData = err.response?.data as FieldErrorType;
//   const validationErrors =
//     errorData?.validationErrors as FieldErrorType['validationErrors'];
//   const commonError = errorData?.error;
//   switch (err.response?.status) {
//     case 400:
//     case 422:
//       if (Array.isArray(validationErrors)) {
//         validationErrors.map((error) => {
//           const property = lowerFirstLetter(error.property!);
//           setError(property as FieldPath<U>, {
//             message: error.message,
//           });
//         });
//       }
//       toaster.error('Please fill the form fields carefully!');
//       break;
//     default:
//       if (typeof commonError === 'string') {
//         toaster.error(commonError);
//       }
//   }
// };
