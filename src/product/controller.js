const res = require("express/lib/response");
const model = require("./model");

function listAction(req, res) {
  model.getAll().then(
    (products) => {

      res.json(products);
    },
    (error) => res.status(500).json(error)
  );
}
function detailAction(req, res) {
  model.get(req.params.id).then(
    (product) => {


      res.json(product);
    },
    (error) => res.status(500).json(error)
  );
}
function filterAction(req, res) {
  model.getByCollection(req.params.id).then(
    (products) => {

      res.json(products);
    },
    (error) => res.status(500).json(error)
  );
}
module.exports = {
  listAction,
  detailAction,
  filterAction
};
