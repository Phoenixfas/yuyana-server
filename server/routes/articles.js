// posts route
const express = require("express");
const router = express.Router();
const {
  getArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
} = require("../controllers/articleController");

// get all articles
router.get("/", getArticles);

// get article by id
router.get("/:id", getArticleById);

// create article
router.post("/", createArticle);

// update article
router.put("/:id", updateArticle);

// delete article
router.delete("/:id", deleteArticle);

// export router
module.exports = router;
