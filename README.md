## postcss-quotes

`postcss-quotes` is [PostCSS] plugin that handles single-vs-double quotation marks in your stylesheets.

### Purpose

Written with [this Stylelint rule](https://github.com/stylelint/stylelint/tree/master/src/rules/string-quotes) in mind, as some organization's linters are setup to prefer either single or double quotes around strings in stylesheets. By the way, CSS doesn't give a shit which ones you use (and even lets you omit them in cases such as `url()`), so long as you open and close a string with the same type of quote.

### Example

[PostCSS]: https://github.com/postcss/postcss

```css
/* coming soon! */
```

<!-- ```css
.foo {
    /* Input example */
}
```

```css
.foo {
    /* Output example */
}
``` -->

### Usage

```js
postcss([
  // require() other plugins you want to run before `postcss-quotes`

  require('postcss-quotes')({
    // either 'single' || 'double', defaults to single if no options provided
    quotes: 'single'
  })

  // require() other plugins you want to run after `postcss-quotes`
])
```

See [PostCSS] docs for examples for your environment.

---

*Written by [Dave Lunny](http://himynameisdave.com) in the wonderful year of 2016. Licensed under MIT 🖐*
