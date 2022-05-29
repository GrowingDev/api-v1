const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.create = async (req, res) => {
  const { name } = req.body;

  try {
    const collection = await prisma.collection.create({
      data: {
        name: name,
      },
    });
    res.send(collection);
  } catch (error) {
    res.send(error);
  }
};

exports.findAll = async (req, res) => {
  const type = req.params.type;

  try {
    const collections = await prisma.collection.findMany({});
    res.send(collections);
  } catch (error) {
    res.send(error);
  }
};

exports.findOne = async (req, res) => {
  const id = req.params.id;

  try {
    const collection = await prisma.collection.findUnique({
      where: {
        id: Number(id),
      },
    });
    res.send(collection);
  } catch (error) {
    res.send(error);
  }
};

exports.update = async (req, res) => {
  const { id, name } = req.body;

  try {
    const collection = await prisma.collection.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
      },
    });
    res.send(collection);
  } catch (error) {
    res.send(error);
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const collection = await prisma.collection.delete({
      where: { id: Number(id) },
    });
    res.send(collection);
  } catch (error) {
    res.send(error);
  }
};

exports.deleteAll = async (req, res) => {};
