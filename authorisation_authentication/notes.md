## 1. Authentication

**Authentication** is the process of verifying the identity of a user.

It checks **who you are** using a username, password, OTP, etc.

**Example:** Logging into Instagram using your username and password.

## 2. Authorisation

**Authorisation** is the process of checking what a user is allowed to access or do.

It checks **what you are allowed to do**.

**Example:** Only an admin can delete users or manage other users' accounts.

**Remember:** Authentication = Identity |
 Authorisation = Permission


## storing passwords 
we dont store passwrods as it is in database , we use a hashed format of the password and for that we use a hashing fcntion 
 
 we do like these 2 things in a entrry level 

## 1. Signup (Registration)

**Signup** is the process of creating a new account on a website or application.

The user enters details such as name, email, and password to register.

**Example:** Creating a new Instagram account using your email and password.

## 2. Login

**Login** is the process of accessing an existing account by providing the required credentials, such as an email and password.

**Example:** Entering your email and password to access your Instagram account.


## so while we signup like eamil , userid are stored as it is ;but the password is passed into a hashing function and that generates the hashes form of teh password 

## but the main thinsg is hwo it is login , as we type our password and then its agian passed into the hasing function and then it alwasy generaete steh same hash form of teh password if we give corrcet password so them its checekd and we get to login


## Characteristics of Hashed Data

1. **Fixed Length:** A hash function produces a hash value of a fixed length for a given algorithm.

2. **One-Way Process:** It is practically difficult to recover the original data from its hash value.

3. **Deterministic:** The same input always produces the same hash value using the same algorithm.

4. **Avalanche Effect:** A small change in the input can produce a very different hash value.

5. **slow  Computation:** Hash values must be generated slwoly so to avoid brutforec attacks .

6. **Collision Resistance:** It should be difficult to find two different inputs that produce the same hash value.


### Salting

Salting is a security technique in which a unique, random value called a salt is added to a password before hashing it.

**Why is salting used?**
Prevents identical passwords from producing identical stored hashes.
Makes precomputed attacks, such as rainbow table attacks, harder.
Improves password security.



// Passport uses sessions to remember an authenticated user across multiple requests, so the user doesn't need to log in again on every page.


