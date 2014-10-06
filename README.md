# grunt-ui-docs

> Styleguide Generator for UI Components.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-cssdocs --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-cssdocs');
```

## The "ui_docs" task

### Usage
In your project's Gruntfile, add a section named `ui_docs` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  ui_docs: {
    mydocs: {
      title: 'css-docs',
      docsPath: 'docs/styleguide/',
      docsAssetsPath: 'assets/', // relative to docsPath
      docsUIDocsAssetsPath: 'css-docs/', // relative to docsAssetsPath
      templatePath: path.join(__dirname, '../template/'),

      rawAssetsDir: 'assets/',
      extrasPath: 'docs/extras/',

      js: {
          rawDir: 'js/', // relative to rawAssetsDir
          validExtensions: ['.js', '.coffe'],
          ignore: ['**/vendor/**', '**/vendor-setup/**']
      },
      css: {
          rawDir: 'scss/', // relative to rawAssetsDir
          validExtensions: ['.scss', '.css', '.sass', '.styl', '.less'],
          ignore: ['**/bourbon/**'],
          builtFilePath: 'assets/css/built.css',
          outputDir: 'css/' // relative to rawAssetsDir
      }
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
