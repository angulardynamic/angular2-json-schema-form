const REGISTRY = new Map<string, Registerable>();

export interface Registerable { }

export function Register(className: string): ClassDecorator {

    return function (cts: any) {
        RegisterService.SetType(className, cts);
    }
}

export class RegisterService {

    static REGISTRY = new Map<string, Registerable>();

    static SetType(className: string, type: Registerable) {
        REGISTRY.set(className, type);
    }

    static GetType(className: string): Registerable {
        return REGISTRY.get(className);
    }
}
