import { z } from 'zod';
import { ValidationError } from 'zod-validation-error';
export class Result {
    value;
    constructor(value) {
        this.value = value;
    }
    static Ok = (value) => new Result({ isOk: true, value });
    static Err = (error) => new Result({ isOk: false, value: error });
    static map = (mapper) => (r) => r.map(mapper);
    static flatMap = (mapper) => (r) => r.flatMap(mapper);
    static unwrapWithErr = (r) => r.unwrapWithErr();
    static unwrapAndThrow = (r) => r.unwrapAndThrow();
    map = (mapper) => this.value.isOk ? new Result({ isOk: true, value: mapper(this.value.value) }) : new Result(this.value);
    flatMap = (mapper) => this.value.isOk ? mapper(this.value.value) : Result.Err(this.value.value);
    unwrapWithErr() {
        return this.value;
    }
    unwrapAndThrow() {
        if (!this.value.isOk)
            throw this.value.value;
        return this.value.value;
    }
}
export const caseInsensitiveEnum = (values) => z.preprocess(e => (typeof e === 'string' ? e.toUpperCase() : e), z.enum(values));
export const generateRandomSourceId = () => `sender-${Math.ceil(Math.random() * 10e5)}`;
export const withTimeout = ({ timeout = 3000, onTimeout = () => { }, timeoutError = new Error('timed out') }) => (p) => Promise.race([
    p,
    new Promise((_, reject) => {
        setTimeout(() => {
            onTimeout();
            reject(timeoutError);
        }, timeout);
    }),
]);
export const tryParseJSON = (s) => {
    try {
        const o = JSON.parse(s.toString());
        if (o && typeof o === 'object')
            return o;
    }
    catch {
        return undefined;
    }
};
export class ContextualValidationError extends ValidationError {
    data;
    constructor(message, data, details) {
        super(message, details);
        this.data = data;
    }
}
export const fromValidationError = (err, data) => {
    const cError = new ContextualValidationError(err.message, data, err.details);
    cError.stack = err.stack;
    return cError;
};
//# sourceMappingURL=utils.js.map