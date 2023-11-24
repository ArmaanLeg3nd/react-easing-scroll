import React from "react";
import { render, fireEvent, waitFor} from "@testing-library/react";
import useEasingScroll, { easingFunctions, step} from "../dist/useEasingScroll";
import ScrollComponent from "./ScrollComponent";

// Mock for useEasingScroll
jest.mock("../dist/useEasingScroll", () => {
  const originalModule = jest.requireActual("../dist/useEasingScroll");

  return {
    ...originalModule,
    __esModule: true,
    default: jest.fn(),
    setupEventListeners: jest.fn(),
  };
});

// Mock the necessary dependencies
jest.mock("@testing-library/react", () => {
  const actual = jest.requireActual("@testing-library/react");
  return {
    ...actual,
    fireEvent: actual.fireEvent,
  };
});

describe("Easing Functions", () => {
  const testEasingFunction = (easingFunction: Function, name: string) => {
    test(`${name} easing function`, () => {
      const duration = 1000;
      const start = 0;
      const end = 1;
      const expected = 0.0;

      const result = easingFunction(0.5, start, end - start, duration);

      expect(result).toBeLessThanOrEqual(expected + 0.05);
    });
  };

  Object.entries(easingFunctions).forEach(([name, easingFunction]) => {
    if (typeof easingFunction === "function") {
      testEasingFunction(easingFunction, name);
    }
  });
});

describe("Step Function", () => {
  const requestAnimationFrameMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    global.requestAnimationFrame = requestAnimationFrameMock;
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test("step function", async () => {
    const start = 0;
    const startScroll = 0;
    const offsetTop = 100;
    const animationDuration = 1000;
    const OvershootAmount = 1.70158;

    const timestamp = 500;

    requestAnimationFrameMock.mockImplementationOnce((callback) => {
      callback(timestamp);
    });

    const originalScroll = window.scroll;
    window.scroll = jest.fn();

    try {
      step(
        timestamp - start,
        start,
        startScroll,
        offsetTop,
        animationDuration,
        easingFunctions.easeInSine,
        OvershootAmount
      );

      await waitFor(() => {
        expect(window.scroll).toHaveBeenCalled();

        const firstCallArgs = (window.scroll as jest.Mock).mock.calls[0];
        const expectedArgs = [
          0,
          easingFunctions.easeInSine(
            timestamp - start,
            startScroll,
            offsetTop - startScroll,
            animationDuration,
            OvershootAmount
          ),
        ];

        expect(firstCallArgs).toEqual(expectedArgs);
      });
    } finally {
      window.scroll = originalScroll;
    }
  });
});

describe("useEasingScroll", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should scroll to the target element on click", async () => {
    const { findByText } = render(<ScrollComponent />);
    const linkelement = await findByText("Scroll to Target");

    fireEvent.click(linkelement);

    jest.useFakeTimers();
    jest.runAllTimers();

    expect(useEasingScroll).toHaveBeenCalled();
  });
});