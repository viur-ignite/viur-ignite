# VIUR Ignite Basic Project

>The ViUR Ignite Framework is the first attempt in building a sturdy foundation for ViUR products and Mausbrand projects.<br>This CSS toolkit is the very core of ViUR Ignite. It is built upon the principles of many CSS guides and frameworks.

Use this to build your own VIUR Ignite Project.
For a detailed introduction and examples have a look at [http://ignite.viur.is](http://ignite.viur.is).

## Install
Clone this repository
```
$ git clone git@github.com:viur-ignite/viur-ignite.git
```
Change into the ViUR ignite root directory:
```
$ cd <viur-ignite root>
````
Install gulp and all dependencies:

```
$ npm install
```
Initial the project with:
```
$ gulp init
```

## Build your project
###Your Workspace ist /sources/
* HTML: Write the site in _layout.html and fill html-files in sources/html with cool content. New sites must be added in the _sites.json
* LESS: Add a less-file in sources/less and create your own elements or customize your project in the app.less and appconf.less
* JavaScript: Look at the previous point! ... You tried it with Pure CSS? OKAY, add your scripts in sources/less/app.js
* Icons: Add your own icons in sources/icons
* Images: Add your images in sources/images
* Meta: Add your favicon in sources/meta


## ... And Make it
Change back into the viur-ignite root directory:
```
$ cd <viur-ignite root>
```
And run the gulp file to compile the appengine-folder:
```
$ gulp
```
You want only compile specific parts? No Problem! Run one of the following commands:
```
$ gulp html
$ gulp js
$ gulp css
$ gulp compress
$ gulp icons
```

Look in your appengine folder and open your sites in a browser.


## Contribution guidelines
* Available for use under the GPL-3.0 license

## Who do I talk to?
* [@phneutral](https://github.com/phneutral)
* [@sveneberth](https://github.com/sveneberth)
