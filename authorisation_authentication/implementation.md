# Passport.js – Basic Notes

**Passport.js** is authentication middleware for Node.js that helps verify users' identities during login.

## 1. Initialize Passport

```js
app.use(passport.initialize());
```

* Initializes Passport and makes it available in the Express application.
* Must be used before `passport.session()`.

## 2. Enable Passport Sessions

```js
app.use(passport.session());
```

* Maintains the user's login session across multiple requests.
* Requires session middleware, such as `express-session`, to be configured first.

## 3. Local Strategy

```js
passport.use(new LocalStrategy(User.authenticate()));
```

* Uses the Local Strategy to authenticate users with a username and password.
* `User.authenticate()` is provided by the `passport-local-mongoose` plugin.

## 4. Serialization

```js
passport.serializeUser(User.serializeUser());
```

* Stores the user's ID in the session after successful login.

## 5. Deserialization

```js
passport.deserializeUser(User.deserializeUser());
```

* Retrieves the user from the database using the stored ID and makes the user available through `req.user`.

## Required Setup

Install the required packages:

```bash
npm install passport passport-local passport-local-mongoose express-session
```

Import the packages:

```js
const passport = require("passport");
const LocalStrategy = require("passport-local");
const session = require("express-session");
```

Configure the session and Passport middleware in this order:

```js
app.use(session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
```

**Note:** `User` must be a Mongoose model with the `passport-local-mongoose` plugin applied.

## How It Works

1. **Login:** Passport checks the username and password.
2. **Serialize:** The user's ID is stored in the session.
3. **Next Request:** The session identifies the logged-in user.
4. **Deserialize:** Passport retrieves the user from the database.
5. **Access:** The user is available through `req.user`.

## Important Points

* `passport.initialize()` → Initializes Passport.
* `passport.session()` → Maintains login sessions.
* `LocalStrategy` → Authenticates using a username and password.
* `serializeUser()` → Stores the user ID in the session.
* `deserializeUser()` → Retrieves the user using the stored ID.
* `req.isAuthenticated()` → Checks whether the current request is authenticated.

**Remember:** Serialization stores the user ID; deserialization retrieves the user.
