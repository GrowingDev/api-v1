const model = require("./model");

function listAction(req, res) {
  model.getAll().then(
    (collections) => {
      res.json(collections);
    },
    (error) => res.json(error)
  );
}
function detailAction(req, res) {
  model.get(req.params.id).then(
    (collection) => {
      res.json(collection);
    },
    (error) => res.status(500).json(error)
  );
}
module.exports = {
  listAction,
  detailAction,
};
