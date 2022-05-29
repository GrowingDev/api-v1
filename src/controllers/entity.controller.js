const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.create = async (req, res) => {
  const {
    customer_type,
    taxId,
    uId,
    eori,
    business_homepage,
    business_phone,
    contact,
    company,
    billing_address,
    shipping_address,
  } = req.body;
  console.log(req.body);
  try {
    const entity = await prisma.entity.create({
      data: {
        customer_type,
        taxId,
        uId,
        eori,
        company,
        business_homepage,
        business_phone,
        contact: {
          create: {
            gender: contact.gender,
            title: contact.title,
            pre_name: contact.pre_name,
            last_name: contact.last_name,
            phone_01: contact.phone_01,
            phone_02: contact.phone_02,
            mail: contact.mail,
          },
        },
        shipping_address: {
          create: {
            name: shipping_address.name,
            street: shipping_address.street,
            street_nr: shipping_address.street_nr,
            extension: shipping_address.extension,
            post_code: shipping_address.post_code,
            city: shipping_address.city,
            country: shipping_address.country,
          },
        },
        billing_address: {
          create: {
            name: billing_address.name,
            street: billing_address.street,
            street_nr: billing_address.street_nr,
            extension: billing_address.extension,
            post_code: billing_address.post_code,
            city: billing_address.city,
            country: billing_address.country,
          },
        },
      },
    });
    res.send(entity);
  } catch (error) {
    res.send(error);
  }
};

exports.findAll = (req, res) => {};

exports.findAllWhere = async (req, res) => {
  const type = req.params.type;

  try {
    const entitys = await prisma.entity.findMany({
      where: {
        customer_type: type,
      },
      include: {
        contact: true,
        billing_address: true,
        shipping_address: true,
      },
    });
    res.send(entitys);
  } catch (error) {
    res.send(error);
  }
};

exports.findOne = async (req, res) => {
  const id = req.params.id;

  try {
    const entity = await prisma.entity.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        contact: true,
        billing_address: true,
        shipping_address: true,
      },
    });
    res.send(entity);
  } catch (error) {
    res.send(error);
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;
  const {
    customer_type,
    taxId,
    uId,
    eori,
    business_homepage,
    business_phone,
    contact,
    company,
    billing_address,
    shipping_address,
  } = req.body;

  try {
    const entity = await prisma.entity.update({
      where: {
        id: Number(id),
      },
      data: {
        customer_type,
        taxId,
        uId,
        eori,
        company,
        business_homepage,
        business_phone,
        contact: {
          update: {
            title: contact.title,
            gender: contact.gender,
            pre_name: contact.pre_name,
            last_name: contact.last_name,
            phone_01: contact.phone_01,
            phone_02: contact.phone_02,
            mail: contact.mail,
          },
        },
        billing_address: {
          update: {
            name: billing_address.name,
            street: billing_address.street,
            street_nr: billing_address.street_nr,
            extension: billing_address.extension,
            post_code: billing_address.post_code,
            city: billing_address.city,
            country: billing_address.country,
          },
        },
        shipping_address: {
          update: {
            name: shipping_address.name,
            street: shipping_address.street,
            street_nr: shipping_address.street_nr,
            extension: shipping_address.extension,
            post_code: shipping_address.post_code,
            city: shipping_address.city,
            country: shipping_address.country,
          },
        },
      },
    });
    res.send(entity);
  } catch (error) {
    res.send(error);
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const entity = await prisma.entity.delete({ where: { id: Number(id) } });
    res.send(entity);
  } catch (error) {
    res.send(error);
  }
};

exports.deleteAll = (req, res) => {};
