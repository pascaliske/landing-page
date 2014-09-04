# landing-page

The '_landing-page_-plugin' is a very simple image slider built with jQuery. See the steps below for the installation. There are also several options to customize the slider. See also my [Demo](http://dev.pascal-iske.de/demos/landing-page/) of the slider.


## Installation

- Download and unzip the latest version of the [plugin](https://github.com/pascaliske/landing-page/archive/master.zip)

- Include the latest version of jQuery (see [Google Developers](https://developers.google.com/speed/libraries/devguide#jquery) for cdn-version)

- Include the CSS-Stylesheet file  and the JavaScript file of the landing-page in the header of your HTML-file:
```html
<link rel="stylesheet" type="text/css" href="landing-page/landing.min.css">
<script type="text/javascript" src="landing-page/landing.min.js"></script>
```

- Prepare a simple HTML element (such as a `div` tag) with an id `#landing` and the attributes `data-title` and `data-subtitle`:
```html
<div id="landing" data-title="Pascal Iske" data-subtitle="Frontend and Web Developement"></div>
```
>The plugin includes itself in the prepared `div` element. Other types of HTML tags such as `section`, `header`, etc are also possible. You can style this element with your own css.

- Include the following Javascript and replace **#landing** with the id of the element you've prepared in the previous step and **#wrapper** with the container of your site. This container is needed for fade in after the landing element is removed! So if you don't have an container around your site please make on.

>**Attention:** The landing #element must not be inside this container!

```javascript
$(document).ready(function() {
	$("#landing").landing({
		wrapper: '#wrapper'
	});
});
```
>Don't forget the `<script>` tag around the Javascript code! ;)

I recommend to include this Javascript code at the bottom of the file just before the closing body tag because of performance reasons.

>If you're not sure, look at my [Demo](http://dev.pascal-iske.de/demos/landing-page/).

## Configuration

This plugin has a few options. These options are listed below with a short description. Between the `{braces}` are the possible values for the options.
```javascript
// logo
logo: true,
//locks background
lock: true,
//redirect callback
redirect: false,
//redirect url/path
redirectTo: ['path', 'home/'],
// removes element callback
remove: true,
// effect
effect: 'slide'
```
You have to write (or copy) the options into the JavaScript code from the last step of the [Installation](#installation). For every option write a new line and **don't forget the comma** at the end of each line (except the last line).
```javascript
...
$("#landing").landing({
	option_name: value,
	option_name: value,
	option_name: value,
	...
});
...
```

## Contact
If you have questions, suggestions or feature requests you can write a pull request to this repo or you can contact me with this **Email**: [info@pascal-iske.de](mailto:info@pascal-iske.de).

## License
This jQuery plugin is made with lots of love and its free of charge so you can use it on your website. Please fork this repo for your own changes. In general I would like to see my name in the credits. Thank you!
