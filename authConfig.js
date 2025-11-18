import passport from "passport";
import LocalStrategy from "passport-local";
import session from "express-session";

// import crypto from "crypto";

export default function configurePassport(app) {
  const myStrategy = new LocalStrategy(function verify(username, password, cb) {
    console.log("🔑 verifying user", username);

    // TODO do proper user authentication
    if (username === "john") {
      console.log("🔐 user found:", username);
      if (password !== "secret") {
        console.log("❌ incorrect password for user:", username);
        // Option 2. Valid user but wrong password
        return cb(null, false, { message: "Incorrect username or password." });
      }
      // Option 3. Valid user and correct password
      const user = { id: 1, username: "john", name: "John Guerra" };
      return cb(null, user);
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
