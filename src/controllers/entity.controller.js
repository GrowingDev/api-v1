const db = require("../models");
const Entity = db.entity;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    console.log(req.body.title)
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const newEntity = {
    title: req.body.title,
  };

  Entity.create(newEntity)
  .then(data => {
      res.send(data)
  })
  .catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while creating the Entity."
      })
  })
};

exports.findAll = (req, res) => {
    Entity.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Entitys."
        });
      });
  };

exports.findOne = (req, res) => {
    const id = req.params.id;
    Entity.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Entity with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Entity with id=" + id
        });
      });
  };

exports.update = (req, res) => {
    const id = req.params.id;
    Entity.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Entity was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Entity with id=${id}. Maybe Tutorial was not found or req.body is empty!`
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
  Entity.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Entity was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Entity with id=${id}. Maybe Entity was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Entity with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
    Entity.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Entitys were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Entitys."
        });
      });
  };