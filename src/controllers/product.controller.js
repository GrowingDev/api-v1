const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
exports.addProductComponent = async (req, res) => {
  const { articleId, title, description, amount, productId,price } = req.body;
  try {
    const data = await prisma.productComponent.create({
      data: {
        articleId,
        title,
        description,
        amount,
        price,
        productId: Number(productId),
      },
    });
    console.log(data)
    res.send(data);
  } catch (error) {
    console.log(error)
    res.send(error);
  }
};
exports.getProductComponents = async (req, res) => {
  const id = req.params.id;

  const components = await prisma.productComponent.findMany({
    where: {
      productId: Number(id),
    },
  });
  console.log(components)
  res.send(components);
};
exports.updateProductComponent = async (req, res) => {
  const id = req.params.id
  const {amount} = req.body;

  const components = await prisma.productComponent.update({
    where: {
      id: Number(id),
    },
    data:{
      amount:amount
    }
  });
  console.log(components)
  res.send(components);
};
exports.deleteProductComponent = async (req, res) => {
  const id = req.params.id;
  try {
    const component = await prisma.productComponent.delete({
      where: { id: Number(id) },
    });
    res.send(component);
  } catch (error) {
    res.send(error);
  }
};

exports.create = async (req, res) => {
  const {
    name,
    collection,
    furniture,
    inlay,
    etui,
    box,
    size,
    weight,
    ean,
    eori,
    price_b2c,
    price_b2b,
    calculation,
    img_urls,
    productComponents,
  } = req.body;

  try {

    const product = await prisma.product.create({
      data: {
        name,
        collection,
        furniture,
        inlay,
        etui,
        box,
        size,
        weight,
        ean,
        eori,
        price_b2c,
        price_b2b,
        calculation: {
          create: {
            completition: Number(calculation.completition),
            boxing: Number(calculation.boxing),
            logistic: Number(calculation.logistic),
            license: Number(calculation.license),
          },
        },
        img_urls: {
          create: {
            front: img_urls.front,
            back: img_urls.back,
            etui: img_urls.etui,
            box: img_urls.box,
          },
        },
      },
    });
    console.log(product);
    res.send(product);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

exports.findAll = async (req, res) => {
  try {
    const products = await prisma.product.findMany({});
    res.send(products);
  } catch (error) {
    res.send(error);
  }
};

exports.findOne = async (req, res) => {
  const id = req.params.id;

  try {
    const product = await prisma.product.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        calculation: true,
        img_urls: true,
        productComponents: true,
      },
    });
    res.send(product);
  } catch (error) {
    res.send(error);
  }
};

exports.update = async (req, res) => {
  const {
    id,
    name,
    collection,
    furniture,
    inlay,
    etui,
    box,
    size,
    weight,
    ean,
    eori,
    price_b2c,
    price_b2b,
    calculation,
    img_urls,
    productComponents,
  } = req.body;

  try {
    const data = await prisma.product.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        collection,
        furniture,
        inlay,
        etui,
        box,
        size,
        weight,
        ean,
        eori,
        price_b2c,
        price_b2b,
        calculation: {
          update: {
            completition: Number(calculation.completition),
            boxing: Number(calculation.boxing),
            logistic: Number(calculation.logistic),
            license: Number(calculation.license),
          },
        },
        img_urls: {
          update: {
            front: img_urls.front,
            back: img_urls.back,
            etui: img_urls.etui,
            box: img_urls.box,
          },
        },
      },
    });
    console.log(data);
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await prisma.product.delete({
      where: { id: Number(id) },
    });
    res.send(product);
  } catch (error) {
    res.send(error);
  }
};

exports.deleteAll = async (req, res) => {};
