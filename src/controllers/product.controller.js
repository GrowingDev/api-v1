const db = require("../models");
const Product = db.products;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    console.log(req.body.title)
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const newProduct = {
    title: req.body.title,
  };

  Product.create(newProduct)
  .then(data => {
      res.send(data)
  })
  .catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while creating the Product."
      })
  })
};

exports.findAll = (req, res) => {
    Product.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Products."
        });
      });
  };

exports.findOne = (req, res) => {
    const id = req.params.id;
    Product.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Product with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Product with id=" + id
        });
      });
  };

exports.update = (req, res) => {
    const id = req.params.id;
    Product.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Product was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Product with id=${id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
  };


exports.delete = (req, res) => {
  const id = req.params.id;
  Product.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Product was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Product with id=${id}. Maybe Product was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Product with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
    Product.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Products were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Products."
        });
      });
  };
