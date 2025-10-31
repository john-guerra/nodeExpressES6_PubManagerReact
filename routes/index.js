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

//Implement the remaining CRUD routes here (Create, Read by ID, Update, Delete)
router.post("/publications/create", async (req, res) => {
  const newPub = req.body;
  console.log("Create publication:", newPub);
  await myDB.addPublication(newPub);
  res.status(201).json({ message: "Publication created", publication: newPub });
});

export default router;
