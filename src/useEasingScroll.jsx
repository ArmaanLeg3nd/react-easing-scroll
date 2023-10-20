import { useEffect } from 'react';

function easeInSine(t, b, c, d) {
  return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b;
}

function easeOutSine(t, b, c, d) {
  return c * Math.sin((t / d) * (Math.PI / 2)) + b;
}

function easeInOutSine(t, b, c, d) {
  return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b;
}

function easeInCubic(t, b, c, d) {
  return c * Math.pow(t / d, 3) + b;
}

function easeOutCubic(t, b, c, d) {
  return c * (Math.pow(t / d - 1, 3) + 1) + b;
}

function easeInOutCubic(t, b, c, d) {
  if ((t /= d / 2) < 1) return (c / 2) * Math.pow(t, 3) + b;
  return (c / 2) * (Math.pow(t - 2, 3) + 2) + b;
}

function easeInQuint(t, b, c, d) {
  return c * (t /= d) * t * t * t * t + b;
}

function easeOutQuint(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
}

function easeInOutQuint(t, b, c, d) {
  if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t * t + b;
  return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b;
}

function easeInCirc(t, b, c, d) {
  return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
}

function easeOutCirc(t, b, c, d) {
  return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
}

function easeInOutCirc(t, b, c, d) {
  if ((t /= d / 2) < 1) return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b;
  return (c / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
}

function easeInElastic(t, b, c, d) {
  if (t == 0) return b;
  if ((t /= d) == 1) return b + c;
  let p = d * 0.3;
  let a = c;
  let s = p / 4;
  return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
}

function easeOutElastic(t, b, c, d) {
  if (t == 0) return b;
  if ((t /= d) == 1) return b + c;
  let p = d * 0.3;
  let a = c;
  let s = p / 4;
  return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
}

function easeInOutElastic(t, b, c, d) {
  if (t == 0) return b;
  if ((t /= d / 2) == 2) return b + c;
  let p = d * (0.3 * 1.5);
  let a = c;
  let s = p / 4;
  if (t < 1) return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
  return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
}

function easeInQuad(t, b, c, d) {
  return c * (t /= d) * t + b;
}

function easeOutQuad(t, b, c, d) {
  return -c * (t /= d) * (t - 2) + b;
}

function easeInOutQuad(t, b, c, d) {
  if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
  return (-c / 2) * ((--t) * (t - 2) - 1) + b;
}

function easeInQuart(t, b, c, d) {
  return c * (t /= d) * t * t * t + b;
}

function easeOutQuart(t, b, c, d) {
  return -c * ((t = t / d - 1) * t * t * t - 1) + b;
}

function easeInOutQuart(t, b, c, d) {
  if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t + b;
  return (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
}

function easeInExpo(t, b, c, d) {
  return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
}

function easeOutExpo(t, b, c, d) {
  return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
}

function easeInOutExpo(t, b, c, d) {
  if (t == 0) return b;
  if (t == d) return b + c;
  if ((t /= d / 2) < 1) return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
  return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
}

function easeInBack(t, b, c, d, s) {
  if (s == undefined) s = 1.70158;
  return c * (t /= d) * t * ((s + 1) * t - s) + b;
}

function easeOutBack(t, b, c, d, s) {
  if (s == undefined) s = 1.70158;
  return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
}

function easeInOutBack(t, b, c, d, s) {
  if (s === undefined) s = 1.70158;
  if ((t /= d / 2) < 1) return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
  return (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
}

function easeInBounce(t, b, c, d) {
  return c - easeOutBounce(d - t, 0, c, d) + b;
}

function easeOutBounce(t, b, c, d) {
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

function easeInOutBounce(t, b, c, d) {
  if (t < d / 2) return easeInBounce(t * 2, 0, c, d) * 0.5 + b;
  return easeOutBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
}

function easeSmooth(t, b, c, d) {
  return c * (t / d) + b;
}

function useEasingScroll(easingFunctionName, duration, className) {
  useEffect(() => {
    const scroll = (e) => {
      e.preventDefault();

      const targetId = e.target.getAttribute('href');
      if (targetId) {
        const targetElement = document.getElementById(targetId.substring(1));

        if (targetElement) {
          const startScroll = window.scrollY;
          const offsetTop = targetElement.getBoundingClientRect().top + startScroll;
          // Use the provided duration, or a default value if not provided
          const animationDuration = duration || 1500;

          // Choose the easing function based on the provided name, or use easeInOutExpo as a default
          const easingFunction = getEasingFunction(easingFunctionName);

          let start;
          function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const scrollPosition = easingFunction(progress, startScroll, offsetTop - startScroll, animationDuration);
            
            window.scroll(0, scrollPosition);

            if (progress < animationDuration) {
              requestAnimationFrame(step);
            } else {
              window.scroll(0, offsetTop);
            }
          }

          requestAnimationFrame(step);
        }
      }
    };

    const links = document.querySelectorAll(`a.${className}`);

    links.forEach((link) => {
      link.addEventListener('click', scroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', scroll);
      });
    };
  }, [easingFunctionName, duration, className]);
}

// Function to get the easing function based on the name
function getEasingFunction(easingFunctionName) {
  const easingFunctions = {
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
    easeSmooth
  };

  const selectedEasingFunction = easingFunctions[easingFunctionName];

  if (!selectedEasingFunction) {
    throw new Error(`No easing function '${easingFunctionName}' is present. Refer to the Docs for all easing functions.`);
  }

  return selectedEasingFunction;
}

export default useEasingScroll;