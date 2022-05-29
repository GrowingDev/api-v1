const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.create = async (req, res) => {
  const {
    name,
    description,
    article_type,
    supplier,
    supplier_id,
    ean,
    price,
    marge,
    total,
  } = req.body;

  try {
    const article = await prisma.article.create({
      data: {
        name: name,
        description: description,
        article_type: article_type,
        supplier: supplier,
        supplier_id: supplier_id,
        ean: ean,
        price: Number(price),
        marge: Number(marge),
        total: Number(total),
      },
    });
    console.log(article);
    res.send(article);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

exports.findAll = async (req, res) => {
  try {
    const articles = await prisma.article.findMany({});
    res.send(articles);
  } catch (error) {
    res.send(error);
  }
};

exports.findOne = async (req, res) => {
  const id = req.params.id;

  try {
    const article = await prisma.article.findUnique({
      where: {
        id: Number(id),
      },

    });
    res.send(article);
  } catch (error) {
    res.send(error);
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;
  const {
    name,
    description,
    article_type,
    supplier,
    supplier_id,
    ean,
    price,
    marge,
    total,
  } = req.body;

  try {
    const article = await prisma.article.update({
      where: {
        id: Number(id),
      },
      data: {
        name: name,
        description: description,
        article_type: article_type,
        supplier: supplier,
        supplier_id: supplier_id,
        ean: ean,
        price: Number(price),
        marge: Number(marge),
        total: Number(total),
      },
    });

    res.send(article);
  } catch (error) {
    res.send(error);
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const article = await prisma.article.delete({ where: { id: Number(id) } });
    res.send(article);
  } catch (error) {
    res.send(error);
  }
};

exports.deleteAll = (req, res) => {};
