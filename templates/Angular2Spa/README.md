If you see this error:

`An unhandled exception has occurred: Call to Node module failed with error: Prerendering failed because of error: Error: Cannot find module [...]\JavaScriptServices\templates\Angular2Spa\ClientApp\dist\main-server`

Check out [this issue](https://github.com/aspnet/JavaScriptServices/issues/99). Execute command `webpack --config webpack.config.vendor.js`