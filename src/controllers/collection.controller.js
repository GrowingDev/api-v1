const db = require("../models");
const Collection = db.collection;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    console.log(req.body.title)
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const newCollection = {
    title: req.body.title,
  };

  Collection.create(newCollection)
  .then(data => {
      res.send(data)
  })
  .catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while creating the Collection."
      })
  })
};

exports.findAll = (req, res) => {
    Collection.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving collections."
        });
      });
  };

exports.findOne = (req, res) => {
    const id = req.params.id;
    Collection.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Collection with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Collection with id=" + id
        });
      });
  };

exports.update = (req, res) => {
    const id = req.params.id;
    Collection.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Collection was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Collection with id=${id}. Maybe Tutorial was not found or req.body is empty!`
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
  Collection.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Collection was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Collection with id=${id}. Maybe Collection was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Collection with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
    Collection.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Collections were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all collections."
        });
      });
  };
