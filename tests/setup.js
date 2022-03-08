// const JS = require("jsdom");

// const dom = new JS.JSDOM();
// global.document = dom.window.document;
// global.window = dom.window;

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useLayoutEffect: jest.requireActual("react").useEffect,
}));

if (typeof window !== "undefined") {
  global.window.resizeTo = (width, height) => {
    global.window.innerWidth = width || global.window.innerWidth;
    global.window.innerHeight = height || global.window.innerHeight;
    global.window.dispatchEvent(new Event("resize"));
  };
  global.window.scrollTo = () => {};

  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: query.includes("max-width"),
      media: query,
      onchange: null,
      /** @deprecated */
      addListener: jest.fn(),
      /** @deprecated */
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
}

// The built-in requestAnimationFrame and cancelAnimationFrame not working with jest.runFakeTimes()
// https://github.com/facebook/jest/issues/5147
global.requestAnimationFrame = function (cb) {
  return setTimeout(cb, 0);
};

global.cancelAnimationFrame = function (cb) {
  return clearTimeout(cb, 0);
};

// 解决 Enzyme react 版本问题： https://stackoverflow.com/questions/46435558/could-not-find-declaration-file-for-enzyme-adapter-react-16
const Enzyme = require("enzyme");

// const Adapter = require('enzyme-adapter-react-16') // eslint-disable-line import/no-extraneous-dependencies,import/no-unresolved
const Adapter = require("@wojtekmaj/enzyme-adapter-react-17");

Enzyme.configure({ adapter: new Adapter() });

Element.prototype.getContext = () => {
  return {};
};

Element.prototype.getBoundingClientRect = jest.fn(() => ({
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
}));
