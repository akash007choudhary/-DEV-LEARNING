# Cookies in Express.js

## 1. What Are Cookies?

Cookies are small pieces of data stored in the user's browser. The server sends cookies through an HTTP response, and the browser sends them back with subsequent matching requests.

**Uses:** Remembering preferences, maintaining sessions, and storing small amounts of client-side information.

In Express.js, `cookie-parser` middleware helps read cookies from incoming requests.

```js
const cookieParser = require("cookie-parser");
app.use(cookieParser());
```

## 2. Unsigned Cookies

Unsigned cookies are ordinary cookies that do not have a cryptographic signature.

* The client can modify their values.
* The server cannot detect modifications just by reading the cookie.
* They should not be trusted for sensitive information.

```js
res.cookie("username", "Akash");
```

To read the cookie:

```js
req.cookies.username;
```

## 3. Signed Cookies

Signed cookies include a cryptographic signature generated using a secret key. This signature helps the server detect whether the cookie's value has been modified.

* The server uses a secret key to sign the cookie.
* If the cookie's value is modified, signature verification fails.
* Signed cookies provide **integrity, not encryption**. Their values are not automatically hidden from the client.

### Example

```js
app.use(cookieParser("mysecret"));

res.cookie("username", "Akash", { signed: true });
```

To read the signed cookie:

```js
req.signedCookies.username;
```

If verification fails, the cookie will not appear as a valid value in `req.signedCookies`.

## 4. Difference Between Signed and Unsigned Cookies

| Feature              | Unsigned Cookie | Signed Cookie                       |
| -------------------- | --------------- | ----------------------------------- |
| Signature            | No              | Yes                                 |
| Detects modification | No              | Yes, through signature verification |
| Encrypted            | No              | No                                  |
| Express access       | `req.cookies`   | `req.signedCookies`                 |
| Secret key required  | No              | Yes                                 |

**Remember:** Unsigned cookies can be modified without detection. Signed cookies help detect tampering, but they do not encrypt the data. Never store passwords or other sensitive information directly in cookies.
