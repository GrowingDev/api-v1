const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.create = async (req, res) => {
  const { orderId, printId, front, back } = req.body;

  try {
    const print = await prisma.print.create({
      data: {
        orderId,
        front,
        back,
      },
    });

    res.send(print);
  } catch (error) {
    res.send(error);
  }
};

exports.findAll = async (req, res) => {
  const type = req.params.type;

  try {
    const prints = await prisma.print.findMany({});
    res.send(prints);
  } catch (error) {
    res.send(error);
  }
};

exports.findOne = async (req, res) => {
  const id = req.params.id;

  try {
    const print = await prisma.print.findUnique({
      where: {
        id: Number(id),
      },
    });
    res.send(print);
  } catch (error) {
    res.send(error);
  }
};

exports.update = async (req, res) => {
  const {id, orderId, front, back } = req.body;
  console.log(req.body);
  try {
    const print = await prisma.print.update({
      where: {
        id: Number(id),
      },
      data: {
        orderId,
        front,
        back,
      },
    });
    console.log(print);
    res.send(print);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const print = await prisma.print.delete({
      where: { id: Number(id) },
    });
    res.send(print);
  } catch (error) {
    res.send(error);
  }
};

exports.deleteAll = async (req, res) => {};
