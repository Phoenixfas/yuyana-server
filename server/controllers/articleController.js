// article controller
const Article = require("../models/Article");
const marked = require("marked");
const createDomPurify = require("dompurify");
const { JSDOM } = require("jsdom");
const dompurify = createDomPurify(new JSDOM().window);

// get all articles
exports.getArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(200).send({ all_articles: articles });
  } catch (err) {
    console.log(err);
    res.status(404).send({ message: "Articles not found" });
  }
};

// get article by id
exports.getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    res.status(200).send({ article: article });
  } catch (err) {
    console.log(err);
    res.status(404).send({ message: "Article not found" });
  }
};

// create article
exports.createArticle = async (req, res) => {
  const { title, image, snippet, markdown } = req.body;
  const sanitizedHtml = dompurify.sanitize(marked.parse(markdown));

  if (!title || !image || !snippet) {
    return res.status(400).send({ message: "Please fill all fields" });
  } else {
    try {
      const article = await Article.create({
        title,
        image,
        snippet,
        markdown,
        sanitizedHtml,
      });
      res.status(201).send({ new_article: article });
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: "Article not created" });
    }
  }
};

// update article
exports.updateArticle = async (req, res) => {
  const { title, image, snippet, markdown } = req.body;
  const sanitizedHtml = dompurify.sanitize(marked.parse(markdown));

  if (!title || !image || !snippet) {
    return res.status(400).send({ message: "Please fill all fields" });
  } else {
    try {
      const article = await Article.findByIdAndUpdate(req.params.id, {
        title,
        image,
        snippet,
        markdown,
        sanitizedHtml,
      });
      res.status(201).send({ updated_article: article });
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: "Article not updated" });
    }
  }
};

// delete article
exports.deleteArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndDelete(req.params.id);
    res.status(200).send({ deleted_article: article });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: "Article not deleted" });
  }
};
