# Angular Material Progressbar Directive v1.0

This directive let you create a progressbar if you're using angular material framework.
I hope this will save you a couple of minutes.
Dont forget to copy the css and also set the value after DOM has been loaded.

## Dependencies
None



Load this directive with the following code:
```html
<script type="text/javascript" src="angular-material-slider.js"></script>
```

Add a dependency to the module in your own module.
```js
var app = angular.module('ModuleName', ['angular-material-slider']);
```

Use the directive in your HTML files with the following code:
```html
<m-progress-bar flex layout="column" cur-val="{{val}}" caption="percent" center-caption="true"></m-progress-bar>
```

### Parameters
- cur-val (number: required)
- center-caption (boolean: optional)
	center the text on top?
- caption (string: optional)
	the text on top
- largePercentText (boolean: optional)


Take a look at index.html or [here](https://sonith.github.io/angular-material-progressbar/) for a demo.


## License
You may use it however you want.
If you can, then leave the comment in js file as it is.