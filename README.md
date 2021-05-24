# Bumble Styleguide Visual Helpers

## Available tools

**[Work in progress](#to-do)**: This is a list of visual components, which can help with most regular test-cases.

It is a React UI based list of components with zero dependencies (build based on consumer setup) for visual regression tests.

For easier work with different devices / media-queries we introduced several components:

* `StyleguidePlaceholder` returns mockup of component with provided parameters
* `StyleguideCell` returns component and its `legend`
* `StyleguideDeviceFrame` returns one of predefined frames, based on mobile device aspect-ratio
* `StyleguideDeviceGroup` returns set of predefined frames, based on mobile device aspect-ratio
* `getImageUrl` returns static image mockup src with provided parameters - as inlined image or as image from [placeholder.com](https://placeholder.com)

```js

import { getImageUrl } from '@bumble/styleguide-visual-helpers';

```

## How to define fonts-sizes for placeholders / legends for all tools

Now we can setup consistent font-sizes via config

this is example of how to setup these settings in config:

```js
module.exports = {
    // part of config
    legendFontSize: 25,

    placeholderFontSize: 30,
};
```

If you would prefer to setup individualy font-sizes - you can do it for each instance of component.
