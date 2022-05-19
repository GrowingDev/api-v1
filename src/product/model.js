const mockData = [
  {
    id: 0,
    productId: "10000",
    collection: "Creator",
    furniture: "Schwarz chrom",
    inlay: "black",
    etui: "alpaca leder",
    package: "alpaca leder",
    size: "90mm/42mm",
    weight: "700 Gramm",
    price: 300,
    images: [
      { title: "etui", url: "10000-etui" },
      { title: "clip", url: "10001-front" },
      { title: "package", url: "10001-package" },
    ],
  },
  {
    id: 1,
    productId: "10001",
    collection: "Firefighter",
    furniture: "Schwarz chrom",
    inlay: "black",
    etui: "alpaca leder",
    package: "alpaca leder",
    size: "90mm/42mm",
    weight: "700 Gramm",
    price: 300,
    images: [
      { title: "etui", url: "10001-etui" },
      { title: "clip", url: "10001-front" },

      { title: "package", url: "10001-package" },
    ],
  },
  {
    id: 2,
    productId: "10002",
    collection: "Firefighter",
    furniture: "Schwarz chrom",
    inlay: "black",
    etui: "alpaca leder",
    package: "alpaca leder",
    size: "90mm/42mm",
    weight: "700 Gramm",
    price: 300,
    images: [
      { title: "etui", url: "10001-etui" },
      { title: "clip", url: "10001-front" },
      { title: "package", url: "10001-package" },
    ],
  },
  {
    id: 3,
    productId: "10003",
    collection: "Firefighter",
    furniture: "Schwarz chrom",
    inlay: "black",
    etui: "alpaca leder",
    package: "alpaca leder",
    size: "90mm/42mm",
    weight: "700 Gramm",
    price: 300,
    images: [
      { title: "etui", url: "10001-etui" },
      { title: "clip", url: "10001-front" },
      { title: "package", url: "10001-package" },
    ],
  },
  {
    id: 4,
    productId: "10004",
    collection: "Firefighter",
    furniture: "Schwarz chrom",
    inlay: "black",
    etui: "alpaca leder",
    package: "alpaca leder",
    size: "90mm/42mm",
    weight: "700 Gramm",
    price: 300,
    images: [
      { title: "etui", url: "10001-etui" },
      { title: "clip", url: "10001-front" },
      { title: "package", url: "10001-package" },
    ],
  },
  {
    id: 5,
    productId: "10005",
    collection: "Firefighter",
    furniture: "Schwarz chrom",
    inlay: "black",
    etui: "alpaca leder",
    package: "alpaca leder",
    size: "90mm/42mm",
    weight: "700 Gramm",
    price: 300,
    images: [
      { title: "etui", url: "10001-etui" },
      { title: "clip", url: "10001-front" },
      { title: "package", url: "10001-package" },
    ],
  },
  {
    id: 6,
    productId: "10006",
    collection: "Firefighter",
    furniture: "Schwarz chrom",
    inlay: "black",
    etui: "alpaca leder",
    package: "alpaca leder",
    size: "90mm/42mm",
    weight: "700 Gramm",
    price: 300,
    images: [
      { title: "etui", url: "10001-etui" },
      { title: "clip", url: "10001-front" },
      { title: "package", url: "10001-package" },
    ],
  },
  {
    id: 7,
    productId: "10007",
    collection: "Firefighter",
    furniture: "Schwarz chrom",
    inlay: "black",
    etui: "alpaca leder",
    package: "alpaca leder",
    size: "90mm/42mm",
    weight: "700 Gramm",
    price: 300,
    images: [
      { title: "etui", url: "10001-etui" },
      { title: "clip", url: "10001-front" },
      { title: "package", url: "10001-package" },
    ],
  },
  {
    id: 8,
    productId: "10008",
    collection: "Firefighter",
    furniture: "Schwarz chrom",
    inlay: "black",
    etui: "alpaca leder",
    package: "alpaca leder",
    size: "90mm/42mm",
    weight: "700 Gramm",
    price: 300,
    images: [
      { title: "etui", url: "10001-etui" },
      { title: "clip", url: "10001-front" },
      { title: "package", url: "10001-package" },
    ],
  },
  {
    id: 9,
    productId: "10009",
    collection: "Firefighter",
    furniture: "Schwarz chrom",
    inlay: "black",
    etui: "alpaca leder",
    package: "alpaca leder",
    size: "90mm/42mm",
    weight: "700 Gramm",
    price: 300,
    images: [
      { title: "etui", url: "10001-etui" },
      { title: "clip", url: "10001-front" },
      { title: "package", url: "10001-package" },
    ],
  },
  {
    id: 0,
    productId: "20001",
    collection: "Maritim",
    furniture: "Schwarz chrom",
    inlay: "black",
    etui: "alpaca leder",
    package: "alpaca leder",
    size: "90mm/42mm",
    weight: "700 Gramm",
    price: 300,
    images: [
      { title: "etui", url: "10001-etui" },
      { title: "clip", url: "10001-front" },
      { title: "package", url: "10001-package" },
    ],
  },
  {
    id: 1,
    productId: "20002",
    collection: "Maritim",
    furniture: "Schwarz chrom",
    inlay: "black",
    etui: "alpaca leder",
    package: "alpaca leder",
    size: "90mm/42mm",
    weight: "700 Gramm",
    price: 300,
    images: [
      { title: "etui", url: "10001-etui" },
      { title: "clip", url: "10001-front" },
      { title: "package", url: "10001-package" },
    ],
  },
  {
    id: 2,
    productId: "20003",
    collection: "Maritim",
    furniture: "Schwarz chrom",
    inlay: "black",
    etui: "alpaca leder",
    package: "alpaca leder",
    size: "90mm/42mm",
    weight: "700 Gramm",
    price: 300,
    images: [
      { title: "etui", url: "10001-etui" },
      { title: "clip", url: "10001-front" },
      { title: "package", url: "10001-package" },
    ],
  },
  {
    id: 3,
    productId: "20004",
    collection: "Maritim",
    furniture: "Schwarz chrom",
    inlay: "black",
    etui: "alpaca leder",
    package: "alpaca leder",
    size: "90mm/42mm",
    weight: "700 Gramm",
    price: 300,
    images: [
      { title: "etui", url: "10001-etui" },
      { title: "clip", url: "10001-front" },
      { title: "package", url: "10001-package" },
    ],
  },
  {
    id: 4,
    productId: "20005",
    collection: "Maritim",
    furniture: "Schwarz chrom",
    inlay: "black",
    etui: "alpaca leder",
    package: "alpaca leder",
    size: "90mm/42mm",
    weight: "700 Gramm",
    price: 300,
    images: [
      { title: "etui", url: "10001-etui" },
      { title: "clip", url: "10001-front" },
      { title: "package", url: "10001-package" },
    ],
  },
  {
    id: 5,
    productId: "20006",
    collection: "Maritim",
    furniture: "Schwarz chrom",
    inlay: "black",
    etui: "alpaca leder",
    package: "alpaca leder",
    size: "90mm/42mm",
    weight: "700 Gramm",
    price: 300,
    images: [
      { title: "etui", url: "10001-etui" },
      { title: "clip", url: "10001-front" },
      { title: "package", url: "10001-package" },
    ],
  },
  {
    id: 6,
    productId: "20007",
    collection: "Maritim",
    furniture: "Schwarz chrom",
    inlay: "black",
    etui: "alpaca leder",
    package: "alpaca leder",
    size: "90mm/42mm",
    weight: "700 Gramm",
    price: 300,
    images: [
      { title: "etui", url: "10001-etui" },
      { title: "clip", url: "10001-front" },
      { title: "package", url: "10001-package" },
    ],
  },
  {
    id: 7,
    productId: "20008",
    collection: "Maritim",
    furniture: "Schwarz chrom",
    inlay: "black",
    etui: "alpaca leder",
    package: "alpaca leder",
    size: "90mm/42mm",
    weight: "700 Gramm",
    price: 300,
    images: [
      { title: "etui", url: "10001-etui" },
      { title: "clip", url: "10001-front" },
      { title: "package", url: "10001-package" },
    ],
  },
  {
    id: 8,
    productId: "20009",
    collection: "Maritim",
    furniture: "Schwarz chrom",
    inlay: "black",
    etui: "alpaca leder",
    package: "alpaca leder",
    size: "90mm/42mm",
    weight: "700 Gramm",
    price: 300,
    images: [
      { title: "etui", url: "10001-etui" },
      { title: "clip", url: "10001-front" },
      { title: "package", url: "10001-package" },
    ],
  },
];
function getAll() {
  return new Promise((resolve, reject) => {
    try {
      const result = mockData;
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}
function getOne(id) {
  return new Promise((resolve, reject) => {
    try {
      console.log(id);
      const result = mockData.find((item) => item.productId === id);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}
function getByCollection(id) {
  return new Promise((resolve, reject) => {
    try {
      const result = mockData.filter((item) => item.collection === id);
      console.log(result);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
  getAll,
  get: getOne,
  getByCollection,
};
