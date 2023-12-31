type EasingFunction = (t: number, b: number, c: number, d: number, s?: number) => number;
declare function easeInSine(t: number, b: number, c: number, d: number): number;
declare function easeOutSine(t: number, b: number, c: number, d: number): number;
declare function easeInOutSine(t: number, b: number, c: number, d: number): number;
declare function easeInCubic(t: number, b: number, c: number, d: number): number;
declare function easeOutCubic(t: number, b: number, c: number, d: number): number;
declare function easeInOutCubic(t: number, b: number, c: number, d: number): number;
declare function easeInQuint(t: number, b: number, c: number, d: number): number;
declare function easeOutQuint(t: number, b: number, c: number, d: number): number;
declare function easeInOutQuint(t: number, b: number, c: number, d: number): number;
declare function easeInCirc(t: number, b: number, c: number, d: number): number;
declare function easeOutCirc(t: number, b: number, c: number, d: number): number;
declare function easeInOutCirc(t: number, b: number, c: number, d: number): number;
declare function easeInElastic(t: number, b: number, c: number, d: number): number;
declare function easeOutElastic(t: number, b: number, c: number, d: number): number;
declare function easeInOutElastic(t: number, b: number, c: number, d: number): number;
declare function easeInQuad(t: number, b: number, c: number, d: number): number;
declare function easeOutQuad(t: number, b: number, c: number, d: number): number;
declare function easeInOutQuad(t: number, b: number, c: number, d: number): number;
declare function easeInQuart(t: number, b: number, c: number, d: number): number;
declare function easeOutQuart(t: number, b: number, c: number, d: number): number;
declare function easeInOutQuart(t: number, b: number, c: number, d: number): number;
declare function easeInExpo(t: number, b: number, c: number, d: number): number;
declare function easeOutExpo(t: number, b: number, c: number, d: number): number;
declare function easeInOutExpo(t: number, b: number, c: number, d: number): number;
declare function easeInBack(t: number, b: number, c: number, d: number, s?: number): number;
declare function easeOutBack(t: number, b: number, c: number, d: number, s?: number): number;
declare function easeInOutBack(t: number, b: number, c: number, d: number, s?: number): number;
declare function easeInBounce(t: number, b: number, c: number, d: number): number;
declare function easeOutBounce(t: number, b: number, c: number, d: number): number;
declare function easeInOutBounce(t: number, b: number, c: number, d: number): number;
declare function linear(t: number, b: number, c: number, d: number): number;
declare function step(timestamp: number, start: number | undefined, startScroll: number, offsetTop: number, animationDuration: number, easingFunction: EasingFunction, OvershootAmount: number | undefined): void;
declare function useEasingScroll(easingFunctionName: string, duration: number, className: string, OvershootAmount?: number): void;
declare function setupEventListeners(className: string, scroll: (e: Event) => void): void;
declare function cleanupEventListeners(className: string, scroll: (e: Event) => void): void;
declare function getEasingFunction(easingFunctionName: string): EasingFunction;
export declare const easingFunctions: {
    easeInSine: typeof easeInSine;
    easeOutSine: typeof easeOutSine;
    easeInOutSine: typeof easeInOutSine;
    easeInCubic: typeof easeInCubic;
    easeOutCubic: typeof easeOutCubic;
    easeInOutCubic: typeof easeInOutCubic;
    easeInQuint: typeof easeInQuint;
    easeOutQuint: typeof easeOutQuint;
    easeInOutQuint: typeof easeInOutQuint;
    easeInCirc: typeof easeInCirc;
    easeOutCirc: typeof easeOutCirc;
    easeInOutCirc: typeof easeInOutCirc;
    easeInElastic: typeof easeInElastic;
    easeOutElastic: typeof easeOutElastic;
    easeInOutElastic: typeof easeInOutElastic;
    easeInQuad: typeof easeInQuad;
    easeOutQuad: typeof easeOutQuad;
    easeInOutQuad: typeof easeInOutQuad;
    easeInQuart: typeof easeInQuart;
    easeOutQuart: typeof easeOutQuart;
    easeInOutQuart: typeof easeInOutQuart;
    easeInExpo: typeof easeInExpo;
    easeOutExpo: typeof easeOutExpo;
    easeInOutExpo: typeof easeInOutExpo;
    easeInBack: typeof easeInBack;
    easeOutBack: typeof easeOutBack;
    easeInOutBack: typeof easeInOutBack;
    easeInBounce: typeof easeInBounce;
    easeOutBounce: typeof easeOutBounce;
    easeInOutBounce: typeof easeInOutBounce;
    linear: typeof linear;
};
export { step, getEasingFunction, setupEventListeners, cleanupEventListeners };
export default useEasingScroll;
