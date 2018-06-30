export interface Registerable {
}
export declare function Register(className: string): ClassDecorator;
export declare class RegisterService {
    static REGISTRY: Map<string, Registerable>;
    static SetType(className: string, type: Registerable): void;
    static GetType(className: string): Registerable;
}
