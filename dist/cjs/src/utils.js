"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromValidationError = exports.ContextualValidationError = exports.tryParseJSON = exports.withTimeout = exports.generateRandomSourceId = exports.caseInsensitiveEnum = exports.Result = void 0;
const zod_1 = require("zod");
const zod_validation_error_1 = require("zod-validation-error");
class Result {
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
exports.Result = Result;
const caseInsensitiveEnum = (values) => zod_1.z.preprocess(e => (typeof e === 'string' ? e.toUpperCase() : e), zod_1.z.enum(values));
exports.caseInsensitiveEnum = caseInsensitiveEnum;
const generateRandomSourceId = () => `sender-${Math.ceil(Math.random() * 10e5)}`;
exports.generateRandomSourceId = generateRandomSourceId;
const withTimeout = ({ timeout = 3000, onTimeout = () => { }, timeoutError = new Error('timed out') }) => (p) => Promise.race([
    p,
    new Promise((_, reject) => {
        setTimeout(() => {
            onTimeout();
            reject(timeoutError);
        }, timeout);
    }),
]);
exports.withTimeout = withTimeout;
const tryParseJSON = (s) => {
    try {
        const o = JSON.parse(s.toString());
        if (o && typeof o === 'object')
            return o;
    }
    catch {
        return undefined;
    }
};
exports.tryParseJSON = tryParseJSON;
class ContextualValidationError extends zod_validation_error_1.ValidationError {
    data;
    constructor(message, data, details) {
        super(message, details);
        this.data = data;
    }
}
exports.ContextualValidationError = ContextualValidationError;
const fromValidationError = (err, data) => {
    const cError = new ContextualValidationError(err.message, data, err.details);
    cError.stack = err.stack;
    return cError;
};
exports.fromValidationError = fromValidationError;
//# sourceMappingURL=utils.js.map