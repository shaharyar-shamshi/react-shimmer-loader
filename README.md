# react-shimmer-loader

`react-shimmer-loader` is a lightweight React component library for creating shimmer loading effects. Shimmer loading effects are commonly used to indicate that content is loading or placeholders are being displayed while data is being fetched.

## Installation

You can install `react-shimmer-loader` via npm or yarn:

```bash
npm install react-shimmer-loader
yarn add react-shimmer-loader
```

## Usage

To use the Shimmer component from react-shimmer-loader, simply import it into your React application and render it with the desired width, height, and optional customizations:

```
import React from 'react';
import { Shimmer } from 'react-shimmer-loader';

const MyComponent = () => {
  return (
    <div>
      <h1>Title</h1>
      <Shimmer width={200} height={20}>
        <p>Description</p>
      </Shimmer>
    </div>
  );
};

export default MyComponent;

```

## Props

The `Shimmer` component accepts the following props:

- **width** (required): Specifies the width of the shimmer effect.
- **height** (required): Specifies the height of the shimmer effect.
- **children** (required): Accepts any React node or component as children. This is typically the content you want to display with the shimmer effect.
- **backgroundColor** (optional): Specifies the background color of the shimmer effect. Default is `#f6f7f8`.
- **highlightColor** (optional): Specifies the highlight color of the shimmer effect. Default is `#eaeaea`.
- **animationDuration** (optional): Specifies the duration of the shimmer animation in seconds. Default is `1`.
- **borderRadius**(optional): Specifies the border radius of the shimmer animation can be commonly used for the circular image

## Examples

- [https://github.com/shaharyar-shamshi/shimmer-example-1] ShimmerExample is a React application that demonstrates the usage of the Shimmer component from the react-shimmer-loader library.

- [https://github.com/shaharyar-shamshi/shimmer-example-2] This is a simple React application that demonstrates the use of the Shimmer component to display a shimmer effect while fetching and loading images from Unsplash.
