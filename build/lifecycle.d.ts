import React from "react";
export type LifecyclePhase = "mount" | "update" | "unmount" | "layout-mount";
export interface LifecycleOptions {
    transition?: boolean;
    strict?: boolean;
}
export interface LifecycleObject {
    mount?: () => void | (() => void);
    layoutMount?: () => void | (() => void);
    update?: () => void | (() => void);
    unmount?: () => void;
}
export declare function useLifecycleEffect(phase: LifecyclePhase, effect: () => void | (() => void), deps?: React.DependencyList, options?: LifecycleOptions): void;
export declare function useLifecycle(lifecycle: LifecycleObject, deps?: React.DependencyList, options?: LifecycleOptions): void;
export declare function useMount(effect: () => void | (() => void), options?: LifecycleOptions): void;
export declare function useLayoutMount(effect: () => void | (() => void), options?: LifecycleOptions): void;
export declare function useUpdate(effect: () => void | (() => void), deps: React.DependencyList, options?: LifecycleOptions): void;
export declare function useUnmount(effect: () => void): void;
export declare function usePrevious<T>(value: T): T;
export declare function useDidMount(effect: () => void): void;
