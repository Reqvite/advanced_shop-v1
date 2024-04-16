export const ErrorMessages = {
  ERROR: 'Error',
  MIN_LENGTH: ({length, label}: {length: number; label?: string}) =>
    `${label ? label : 'Minimum'} length should be ${length} characters`,
  INVALID_PHONE_FORMAT: (length?: number) => `Phone must contain ${length ? length : 12} digits`
};
