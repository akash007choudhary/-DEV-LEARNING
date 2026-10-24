# Stateful and Stateless Protocols

## 1. State

**State** is information about a user or interaction that is maintained over time.

**Example:** Remembering that a user is logged in while navigating between pages.

## 2. Stateless Protocol

A stateless protocol does not inherently remember previous requests. Each request is handled independently.

**Example:** HTTP

* The server does not automatically remember previous requests.
* Each request must contain the information required to process it.
* It is generally easier to scale because requests can be handled independently.

## 3. Stateful Protocol

A stateful protocol maintains information about an ongoing interaction or connection.

**Examples:** TCP connections and WebSocket connections.

* The system maintains connection or interaction state.
* Previous communication can affect the current interaction.
* The system may need resources to maintain the state.



For example:

1. A user logs in.
2. The server verifies the login credentials.
3. The user requests another page.
4. HTTP does not automatically tell the server that this user has already logged in.

To remember the user across requests, a web application can use **cookies, sessions, or authentication tokens**.

## 5. How Does the Server Remember a User?



# Express-Session, Cookies and HTTP

## 1. HTTP is Stateless

HTTP does not automatically remember previous requests. Every request is treated independently. To maintain login status across requests, we use **sessions and cookies**.

## 2. What is Express-Session?

`express-session` is Express.js middleware that creates and manages user sessions. It stores session data on the server and sends a session ID to the browser through a cookie.

a single browser and many tabs is considerd as a single session but same comoputer pe dushre browser or alag computer pe then diffrnet sesson consideer hota 

## 3. How Does Express-Session Work?

1. **Login:** The user submits login credentials.
2. **Session Creation:** The server verifies the credentials and creates a session containing user information.
3. **Session ID:** The server sends the session ID to the browser in a cookie.
4. **Next Request:** The browser automatically sends the cookie with subsequent matching requests.
5. **Session Retrieval:** The server uses the session ID to find the corresponding session data.
6. **User Identification:** The server identifies the logged-in user and responds accordingly.

## 4. Where Are Session ID and Data Stored?

| Session ID                        | Session Data                             |
| --------------------------------- | ---------------------------------------- |
| Stored in a cookie in the browser | Stored on the server                     |
| Identifies the session            | Contains information such as the user ID |
| Sent with subsequent requests     | Retrieved using the session ID           |

### Why Not Store All Session Data in a Cookie?

* Cookies are stored on the client side and can be accessed or modified by the client.
* Storing sensitive session data in a cookie can create security risks.
* Storing only the session ID reduces the amount of information exposed to the client.

## 5. Why Isn't Session Data Always Stored in a Database?

Session data does not have to be permanent. It may be stored in server memory or a session store.

* **MemoryStore:** Stores sessions in server memory. Data can be lost when the server restarts.
* **Database or Redis:** Can store sessions persistently or share them across multiple servers.

**Important:** HTTP being stateless does not mean session data cannot be stored in a database. The storage method depends on the application's requirements.

## 6. Complete Flow

```text
Browser                     Express Server
   |                              |
   |------ Login Request -------->|
   |                              | Verify credentials
   |                              | Create session
   |<----- Session ID Cookie -----|
   |                              |
   |------ Next Request --------->|
   |       Cookie attached        |
   |                              | Find session data
   |                              | Identify user
   |<--------- Response ----------|
```

### MemoryStore is the default storage system used by express-session to store session data in the server's memory (RAM).

### Why Not Use MemoryStore in Production?
Session data is lost when the server restarts.
It can consume increasing amounts of RAM as sessions accumulate.
It is not designed for production applications or multiple server instances.