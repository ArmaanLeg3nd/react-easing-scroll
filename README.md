<h1 align='center'>React Easing Scroll</h1>

<div align='center'>

[![npm](https://img.shields.io/npm/v/react-easing-scroll?style=for-the-badge&logo=npm&logoColor=red&labelColor=black)](https://www.npmjs.com/package/react-easing-scroll) 
[![npm](https://img.shields.io/npm/dt/react-easing-scroll?style=for-the-badge&logo=npm&logoColor=black&labelColor=white&color=black)](https://www.npmjs.com/package/react-easing-scroll)
[![Package quality](https://packagequality.com/shield/react-easing-scroll.svg?style=for-the-badge)](https://packagequality.com/#?package=react-easing-scroll)
[![NPM](https://img.shields.io/npm/l/react-easing-scroll?style=for-the-badge&logo=npm&logoColor=white&labelColor=red&color=white)](https://github.com/ArmaanLeg3nd/react-easing-scroll/blob/main/LICENSE)


</div>
<p align='center'>
	Custom React hook for seamless scroll animations with over 30 animations for fragment-identifier based navigation<br>
	Check it out on the NPM website: <a href="https://www.npmjs.com/package/react-easing-scroll">react-easing-scroll</a>
	
### Install

```js
$ npm install react-easing-scroll
```
or

```
$ yarn add react-easing-scroll
```

<br>

### Run

```js
$ npm install
$ npm test
$ npm start
```

or

```js
$ yarn
$ yarn test
$ yarn start

```
<br>

### Examples

Checkout the Live examples


> [Basic](https://codesandbox.io/s/react-easing-scroll-example-c287tr?file=/src/App.js)

> [Code](https://github.com/ArmaanLeg3nd/react-easing-scroll/tree/main/examples/src/App.js)

<br>

### Usage

```js
import React from 'react';
import useEasingScroll from "react-easing-scroll";
function App(){

    useEasingScroll('easeOutExpo', 1500, 'easeScrollMe');
    //Calling the hook useEasingScroll, with the easing effect 'easeOutExpo' to be applied
    //when it is scrolling to the target, the scrolling duration must be 1500 milliseconds,
    //and the scrolling will only activate when the target is linked to a hyperlink which
    //has className - 'easeScrollMe'.

  // Rendering the component's JSX.
  return (
  <div>
    {/* Hyperlinks that scroll towards their target element instead of navigating 
    through the default fragment identifier navigation using <a> tag, because of
    the className "easeScrollMe" that is passed to useEasingScroll as a parameter*/}

    <a href="#target3" className="easeScrollMe">TRES</a>

    <a href="#target2" className="easeScrollMe">DUO</a>

    <a href="#target1" className="easeScrollMe">UNUS</a>

    {/* Hyperlinks that DON'T scroll towards their target element and instead 
    navigate using the default fragment identifier navigation using <a> tag,
    because of the absence of the className "easeScrollMe" that is passed to 
    useEasingScroll as a parameter */}

    <a href="#target3">TRES</a>

    <a href="#target2">DUO</a>

    <a href="#target1">UNUS</a>

    {/* Sections that act as scroll targets */}
    <section id="target1">
        Hello World 1!
    </section>

    <section id="target2">
        Hello World 2!
    </section>

    <section id="target3">
        Hello World 3!
    </section>

  </div>
);

};

export default App;


```
<br>

### Parameters

<table>
<tr style="font-weight: bold">
<td>
Parameter no.
</td>
<td>
Requirement
</td>
<td>
Effect
</td>
</tr>
<tr>
<td>
1
</td>
<td>
Required
</td>
<td>
Easing effect name
</td>
</tr>

<tr>
<td>
2
</td>
<td>
Required
</td>
<td>
Duration (in milliseconds)
</td>
</tr>

<tr>
<td>
3
</td>
<td>
Required
</td>
<td>
Hyperlink classname to which, based on the same classname, the particular ease effect is applied
</td>
</tr>

<tr>
<td>
4
</td>
<td>
Optional
</td>
<td>
Overshoot controller - In the easeInBack, easeOutBack and easeInOutBack easings, the amount of overshoot increases the higher this number is. If nothing is passed as the parameter, default value will be used(1.70158). For other easings, won't affect anything even if a value is passed.
</td>
</tr>
</table>
<br>

### Full example

```js
import useEasingScroll from "react-easing-scroll";

function App(){
    useEasingScroll('easeInBack', 1500, 'exampleClassScroll', 4.2);
    return(
        <div>
            <a href="#example1" className="exampleClassScroll">Scroll!</a>
            <div id="example1">
                Hello World!
            </div>
        </div>
    );
}

```
<br>

### List of currently available animations:

```
linear
	- Constant speed, and no acceleration or deceleration.

easeInSine 
	- Starts with zero initial speed and features gradual acceleration.

easeOutSine 
	- Starts with high initial speed and features gradual deceleration.

easeInOutSine 
	- Starts with zero initial and final speeds, with smooth acceleration and deceleration.

easeInCubic 
	- Starts with zero initial speed and exhibits gentle acceleration.

easeOutCubic 
	- Starts with high initial speed and demonstrates gentle deceleration.

easeInOutCubic 
	- Starts with zero initial and final speeds, with gentle acceleration and deceleration.

easeInQuint 
	- Starts with zero initial speed and displays gradual acceleration.

easeOutQuint 
	- Starts with high initial speed and shows gradual deceleration.

easeInOutQuint 
	- Starts with zero initial and final speeds, with gradual acceleration and deceleration.

easeInCirc 
	- Starts with zero initial speed, with a slight increase in acceleration.

easeOutCirc 
	- Starts with high initial speed and rapidly decreases acceleration.

easeInOutCirc 
	- Starts with zero initial and final speeds, with a gradual change in acceleration.

easeInElastic 
	- Varies, typically starts with zero initial speed and features a bouncy acceleration.

easeOutElastic 
	- Varies, typically ends with zero initial speed and exhibits bouncy deceleration.

easeInOutElastic 
	- Varies, starts and ends with zero speed, with oscillatory acceleration and deceleration.

easeInQuad 
	- Starts with zero initial speed and demonstrates moderate acceleration.

easeOutQuad 
	- Starts with high initial speed and exhibits moderate deceleration.

easeInOutQuad 
	- Starts with zero initial and final speeds, with moderate acceleration	and deceleration.

easeInQuart 
	- Starts with zero initial speed and displays strong acceleration.

easeOutQuart 
	- Starts with high initial speed and shows strong deceleration.

easeInOutQuart 
	- Starts with zero initial and final speeds, with strong acceleration and deceleration.

easeInExpo 
	- Starts with extremely low initial speed and rapidly increases acceleration.

easeOutExpo 
	- Starts with high initial speed and rapidly decreases acceleration.

easeInOutExpo 
	- Starts with extremely low initial and final speeds, with rapid acceleration and deceleration.

easeInBack 
	- Starts with zero initial speed and features gradual acceleration with a slight overshoot.

easeOutBack 
	- Starts with high initial speed and exhibits gradual deceleration with a slight overshoot.

easeInOutBack 
	- Starts with zero initial and final speeds, with gradual change in acceleration and a slight overshoot.

easeInBounce 
	- Starts with zero initial speed and bouncy motion at the beginning.

easeOutBounce 
	- Starts with high initial speed and exhibits bouncy deceleration at the end.

easeInOutBounce 
	- Starts with zero initial and final speeds, with bouncy motion at the start and end.
```

All the easing effects except linear can be found at [easings.net](http://easings.net/)

<!-- #### Changelog
- [See the CHANGELOG](./CHANGELOG.md) -->
