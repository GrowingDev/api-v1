const db = require("../models");
const Print = db.prints;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    console.log(req.body.title)
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const newPrint = {
    title: req.body.title,
  };

  Print.create(newPrint)
  .then(data => {
      res.send(data)
  })
  .catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while creating the Print."
      })
  })
};

exports.findAll = (req, res) => {
    Print.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Prints."
        });
      });
  };

exports.findOne = (req, res) => {
    const id = req.params.id;
    Print.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Print with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Print with id=" + id
        });
      });
  };

exports.update = (req, res) => {
    const id = req.params.id;
    Print.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Print was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Print with id=${id}. Maybe Tutorial was not found or req.body is empty!`
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
  Print.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Print was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Print with id=${id}. Maybe Print was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Print with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
    Print.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Prints were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Prints."
        });
      });
  };
