import passport from "passport";
import LocalStrategy from "passport-local";
import session from "express-session";

// import crypto from "crypto";

const users = [
  {
    id: 1,
    username: "john",
    name: "John Guerra",
    // In a real application, never store passwords in plain text!
    // Use proper hashing and salting mechanisms.
    password: "secret",
  },
  {
    id: 2,
    username: "alexis",
    name: "Alexis Sanchez",
    // In a real application, never store passwords in plain text!
    // Use proper hashing and salting mechanisms.
    password: "sanchez",
  },
];

export default function configurePassport(app) {
  const myStrategy = new LocalStrategy(function verify(username, password, cb) {
    console.log("🔑 verifying user", username);

    // TODO do proper user authentication
    const foundUser = users.find((u) => u.username === username);
    if (foundUser) {
      console.log("🔐 user found:", username);
      if (password !== foundUser.password) {
        console.log("❌ incorrect password for user:", username);
        // Option 2. Valid user but wrong password
        return cb(null, false, { message: "Incorrect username or password." });
      }

      delete foundUser.password; // Remove password before storing in session
      // Option 3. Valid user and correct password
      return cb(null, foundUser);
    } else {
      // Option 1. Invalid user or error
      const err = "Incorrect username or password.";
      return cb(err);
    }
  });

  console.log("🔐 Configuring passport authentication strategy");
  passport.use(myStrategy);

  passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
      cb(null, { id: user.id, username: user.username, name: user.name });
    });
  });

  passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
      return cb(null, user);
    });
  });

  console.log("🔐 Configuring passport session handling");
  app.use(
    session({
      secret: "change it! (says John)!@#$!@#$",
      resave: false,
      saveUninitialized: false,
    })
  );
  app.use(passport.authenticate("session"));
}
