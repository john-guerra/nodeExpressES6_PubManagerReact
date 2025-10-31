import express from "express";

import myDB from "../db/myMongoDB.js";

const router = express.Router();

/* GET home page. */
router.get("/publications", async function (req, res) {
  console.log("Get /publications route called");
  const page = req.query.page ? +req.query.page : 1;
  const result = await myDB.getPublications({}, { page });
  res.json(result);
});

export default router;
