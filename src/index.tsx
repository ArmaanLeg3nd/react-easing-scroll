import { useEffect } from "react";

type EasingFunction = (
  t: number,
  b: number,
  c: number,
  d: number,
  s?: number
) => number;

function easeInSine(t: number, b: number, c: number, d: number): number {
  return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b;
}

function easeOutSine(t: number, b: number, c: number, d: number): number {
  return c * Math.sin((t / d) * (Math.PI / 2)) + b;
}

function easeInOutSine(t: number, b: number, c: number, d: number): number {
  return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b;
}

function easeInCubic(t: number, b: number, c: number, d: number): number {
  return c * Math.pow(t / d, 3) + b;
}

function easeOutCubic(t: number, b: number, c: number, d: number): number {
  return c * (Math.pow(t / d - 1, 3) + 1) + b;
}

function easeInOutCubic(t: number, b: number, c: number, d: number): number {
  if ((t /= d / 2) < 1) return (c / 2) * Math.pow(t, 3) + b;
  return (c / 2) * (Math.pow(t - 2, 3) + 2) + b;
}

function easeInQuint(t: number, b: number, c: number, d: number): number {
  return c * (t /= d) * t * t * t * t + b;
}

function easeOutQuint(t: number, b: number, c: number, d: number): number {
  return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
}

function easeInOutQuint(t: number, b: number, c: number, d: number): number {
  if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t * t + b;
  return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b;
}

function easeInCirc(t: number, b: number, c: number, d: number): number {
  return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
}

function easeOutCirc(t: number, b: number, c: number, d: number): number {
  return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
}

function easeInOutCirc(t: number, b: number, c: number, d: number): number {
  if ((t /= d / 2) < 1) return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b;
  return (c / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
}

function easeInElastic(t: number, b: number, c: number, d: number): number {
  if (t === 0) return b;
  if ((t /= d) === 1) return b + c;
  let p: number = d * 0.3;
  let a: number = c;
  let s: number = p / 4;
  return (
    -(
      a *
      Math.pow(2, 10 * (t -= 1)) *
      Math.sin(((t * d - s) * (2 * Math.PI)) / p)
    ) + b
  );
}

function easeOutElastic(t: number, b: number, c: number, d: number): number {
  if (t === 0) return b;
  if ((t /= d) === 1) return b + c;
  let p: number = d * 0.3;
  let a: number = c;
  let s: number = p / 4;
  return (
    a * Math.pow(2, -10 * t) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) +
    c +
    b
  );
}

function easeInOutElastic(t: number, b: number, c: number, d: number): number {
  if (t === 0) return b;
  if ((t /= d / 2) === 2) return b + c;
  let p: number = d * (0.3 * 1.5);
  let a: number = c;
  let s: number = p / 4;
  if (t < 1)
    return (
      -0.5 *
        (a *
          Math.pow(2, 10 * (t -= 1)) *
          Math.sin(((t * d - s) * (2 * Math.PI)) / p)) +
      b
    );
  return (
    a *
      Math.pow(2, -10 * (t -= 1)) *
      Math.sin(((t * d - s) * (2 * Math.PI)) / p) *
      0.5 +
    c +
    b
  );
}

function easeInQuad(t: number, b: number, c: number, d: number): number {
  return c * (t /= d) * t + b;
}

function easeOutQuad(t: number, b: number, c: number, d: number): number {
  return -c * (t /= d) * (t - 2) + b;
}

function easeInOutQuad(t: number, b: number, c: number, d: number): number {
  if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
  return (-c / 2) * (--t * (t - 2) - 1) + b;
}

function easeInQuart(t: number, b: number, c: number, d: number): number {
  return c * (t /= d) * t * t * t + b;
}

function easeOutQuart(t: number, b: number, c: number, d: number): number {
  return -c * ((t = t / d - 1) * t * t * t - 1) + b;
}

function easeInOutQuart(t: number, b: number, c: number, d: number): number {
  if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t + b;
  return (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
}

function easeInExpo(t: number, b: number, c: number, d: number): number {
  return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
}

function easeOutExpo(t: number, b: number, c: number, d: number): number {
  return t == d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
}

function easeInOutExpo(t: number, b: number, c: number, d: number): number {
  if (t == 0) return b;
  if (t == d) return b + c;
  if ((t /= d / 2) < 1) return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
  return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
}

//   s: Used to control the Amount of Overshoot
function easeInBack(
  t: number,
  b: number,
  c: number,
  d: number,
  s: number = 1.70158
): number {
  return c * (t /= d) * t * ((s + 1) * t - s) + b;
}

function easeOutBack(
  t: number,
  b: number,
  c: number,
  d: number,
  s: number = 1.70158
): number {
  return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
}

function easeInOutBack(
  t: number,
  b: number,
  c: number,
  d: number,
  s: number = 1.70158
): number {
  if ((t /= d / 2) < 1)
    return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
  return (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
}

function easeInBounce(t: number, b: number, c: number, d: number): number {
  return c - easeOutBounce(d - t, 0, c, d) + b;
}

function easeOutBounce(t: number, b: number, c: number, d: number): number {
  if ((t /= d) < 1 / 2.75) {
    return c * (7.5625 * t * t) + b;
  } else if (t < 2 / 2.75) {
    return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
  } else if (t < 2.5 / 2.75) {
    return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
  } else {
    return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
  }
}

function easeInOutBounce(t: number, b: number, c: number, d: number): number {
  if (t < d / 2) return easeInBounce(t * 2, 0, c, d) * 0.5 + b;
  return easeOutBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
}

function linear(t: number, b: number, c: number, d: number): number {
  return c * (t / d) + b;
}

function step(
  timestamp: number,
  start: number | undefined,
  startScroll: number,
  offsetTop: number,
  animationDuration: number,
  easingFunction: EasingFunction,
  OvershootAmount: number | undefined
) {
  if (start === undefined) start = timestamp;
  const progress = timestamp - start;
  const scrollPosition = easingFunction(
    progress,
    startScroll,
    offsetTop - startScroll,
    animationDuration,
    OvershootAmount || 1.70158 // Provided a default value for OvershootAmount
  );

  window.scroll(0, scrollPosition);

  if (progress < animationDuration) {
    requestAnimationFrame((ts) =>
      step(
        ts,
        start,
        startScroll,
        offsetTop,
        animationDuration,
        easingFunction,
        OvershootAmount
      )
    );
  } else {
    window.scroll(0, offsetTop);
  }
}

function useEasingScroll(
  easingFunctionName: string,
  duration: number,
  className: string,
  OvershootAmount?: number
) {
  useEffect(() => {
    const currentScrollBehavior = document.documentElement.computedStyleMap().get('scroll-behavior').toString();
    document.documentElement.style.setProperty('scroll-behavior', 'auto', 'important');
    const scroll = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const targetId = target.getAttribute("href");
      if (targetId) {
        const targetElement = document.getElementById(targetId.substring(1));

        if (targetElement) {
          const startScroll = window.scrollY;
          const offsetTop =
            targetElement.getBoundingClientRect().top + startScroll;
          const animationDuration = duration;
          const easingFunction = getEasingFunction(easingFunctionName);
          let start: number | undefined;
          requestAnimationFrame((ts) =>
            step(
              ts,
              start,
              startScroll,
              offsetTop,
              animationDuration,
              easingFunction,
              OvershootAmount
            )
          );
        }
      }
    };

    const links = document.querySelectorAll(`a.${className}`);

    links.forEach((link) => {
      link.addEventListener("click", scroll);
    });

    return () => {
      document.documentElement.style.setProperty('scroll-behavior', currentScrollBehavior);
      links.forEach((link) => {
        link.removeEventListener("click", scroll);
      });
    };
  }, [easingFunctionName, duration, className]);
}

// Function to get the easing function based on the name
function getEasingFunction(easingFunctionName: string): EasingFunction {
  const easingFunctions: Record<string, EasingFunction> = {
    easeInSine,
    easeOutSine,
    easeInOutSine,
    easeInCubic,
    easeOutCubic,
    easeInOutCubic,
    easeInQuint,
    easeOutQuint,
    easeInOutQuint,
    easeInCirc,
    easeOutCirc,
    easeInOutCirc,
    easeInElastic,
    easeOutElastic,
    easeInOutElastic,
    easeInQuad,
    easeOutQuad,
    easeInOutQuad,
    easeInQuart,
    easeOutQuart,
    easeInOutQuart,
    easeInExpo,
    easeOutExpo,
    easeInOutExpo,
    easeInBack,
    easeOutBack,
    easeInOutBack,
    easeInBounce,
    easeOutBounce,
    easeInOutBounce,
    linear,
  };

  const selectedEasingFunction = easingFunctions[easingFunctionName];

  if (!selectedEasingFunction) {
    throw new Error(
      `No easing function '${easingFunctionName}' is present. Refer to the Docs for all easing functions.`
    );
  }

  return selectedEasingFunction;
}

export default useEasingScroll;
