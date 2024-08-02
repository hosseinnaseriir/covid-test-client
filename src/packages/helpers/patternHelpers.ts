const PATTERNS = {
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
} as const;

type PatternKeys = keyof typeof PATTERNS;

export const createRegex = (type: PatternKeys): RegExp => PATTERNS[type];