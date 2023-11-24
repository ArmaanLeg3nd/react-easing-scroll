const { JSDOM } = require('jsdom');
const raf = require('raf');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
global.document = jsdom.window.document;
global.window = jsdom.window;
global.navigator = {
  userAgent: 'node.js',
};

// Mock requestAnimationFrame
global.requestAnimationFrame = jest.fn((callback) => {
  return raf(callback);
});

global.cancelAnimationFrame = (id) => {
  raf.cancel(id);
};

// Mock window.scroll
global.window.scroll = jest.fn((x, y) => {
  console.log(`Mocked scroll: x=${x}, y=${y}`);
});

// Additional polyfills
global.window.HTMLElement.prototype.scrollIntoView = jest.fn();

// Set up intersection observer mock
global.window.IntersectionObserver = class IntersectionObserver {
  observe() {
    // Do nothing
  }

  unobserve() {
    // Do nothing
  }
};

// Set up matchMedia mock
global.window.matchMedia = () => ({
  matches: false,
  addListener: () => {},
  removeListener: () => {},
});
