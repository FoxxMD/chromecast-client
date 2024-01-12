/// <reference types="node" />
import { z } from 'zod';
import * as zod from 'zod';
import { ValidationError } from 'zod-validation-error';
export declare class Result<T, E = Error> {
    private value;
    private constructor();
    static Ok: <T_1>(value: T_1) => Result<T_1, never>;
    static Err: <E_1>(error: E_1) => Result<never, E_1>;
    static map: <T_1, U>(mapper: (e: T_1) => U) => <E_1>(r: Result<T_1, E_1>) => Result<U, E_1>;
    static flatMap: <U, T_1, E_1>(mapper: (e: T_1) => Result<U, E_1>) => (r: Result<T_1, E_1>) => Result<U, E_1>;
    static unwrapWithErr: <T_1, E_1>(r: Result<T_1, E_1>) => {
        isOk: true;
        value: T_1;
    } | {
        isOk: false;
        value: E_1;
    };
    static unwrapAndThrow: <T_1, E_1>(r: Result<T_1, E_1>) => T_1;
    map: <U>(mapper: (e: T) => U) => Result<U, E>;
    flatMap: <U>(mapper: (e: T) => Result<U, E>) => Result<U, E>;
    unwrapWithErr(): {
        isOk: true;
        value: T;
    } | {
        isOk: false;
        value: E;
    };
    unwrapAndThrow(): T;
}
export declare const caseInsensitiveEnum: <U extends string, T extends [U, ...U[]]>(values: T) => z.ZodEffects<z.ZodEnum<z.Writeable<T>>, z.Writeable<T>[number], unknown>;
export declare const generateRandomSourceId: () => string;
export declare const withTimeout: ({ timeout, onTimeout, timeoutError }: {
    timeout?: number | undefined;
    onTimeout?: (() => void) | undefined;
    timeoutError?: Error | undefined;
}) => <T>(p: Promise<T>) => Promise<Awaited<T>>;
export declare const tryParseJSON: (s: string | Buffer) => MaybeJson;
type MaybeJson = Record<string, unknown> | undefined;
export declare class ContextualValidationError extends ValidationError {
    data: MaybeJson | string;
    constructor(message: string, data: MaybeJson | string, details?: Array<zod.ZodIssue> | undefined);
}
export declare const fromValidationError: (err: ValidationError, data: MaybeJson | string) => ContextualValidationError;
export {};
