
const mockData = [
  {
    id: "10001",
    title: "Firefighter",
  },
  {
    id: "10002",
    title: "Maritim",
  },
];

function getAll() {
  return new Promise((resolve,reject)=> {
    try {
      const result = mockData
      resolve(result);
    } catch (error) {
      reject(error);
    }
  })
}
function getOne(id){
  return new Promise((resolve, reject)=> {
    try {
      const result = mockData.filter(item => item.id === id);
      console.log(result)
      resolve(result);
    } catch (error) {
      reject(error);
    }
  })
}


module.exports = {
  getAll,
  get: getOne,

};
