import express from "express";
import passport from "passport";

const router = express.Router();

router.post(
  "/login/password",
  passport.authenticate("local", {
    successRedirect: "/?msg='User authenticated successfully'",
    failureRedirect: "/login?msg='Error authenticating user'",
  })
);

router.get("/getUser", (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ user: req.user });
  } else {
    res.status(401).json({ error: "User not authenticated" });
  }
});

router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/?msg='User logged out successfully'");
  });
});

export default router;
