If you see this error:

`An unhandled exception has occurred: Call to Node module failed with error: Prerendering failed because of error: Error: Cannot find module [...]\JavaScriptServices\templates\Angular2Spa\ClientApp\dist\main-server`

Check out [this issue](https://github.com/aspnet/JavaScriptServices/issues/99). Execute command `webpack --config webpack.config.vendor.js`

To receive auth token using REST API client, you have to send POST request to `/api/connect/token` with similar x-www-form-urlencoded body:
```
username:a@b.c //example username
password:12345 //example password
grant_type:password
scope:openid profile email phone
```

Token is stored in localStorage

For authentication, I'm using [OpenIddict](https://github.com/openiddict/openiddict-core).

[More about OpenId](http://connect2id.com/learn/openid-connect)

[More about grants, scopes and other values used in api requests](https://tools.ietf.org/html/rfc6749)

To access Controller that requires authentication, send request with `Authorization` header:
```
Authorization: Bearer [paste_token_here]
```