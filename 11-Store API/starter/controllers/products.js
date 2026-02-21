const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const search = "a";

  const products = await Product.find({
    name: { $regex: search, $options: "i" },
  }).sort("-name price featured");
  res.json({ products });
};

const getAllProducts = async (req, res) => {
  const { featured, company, search, sort, fields, limit, page, numericFilters } =
    req.query;
  const queryObject = {};
  //filtering
  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (search) {
    queryObject.search = { $regex: search, $options: "i" };
  }
  if (numericFilters) {
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte",
    };
    const regEx = /\b(<|<=|=|>|>=)\b/g;
    let filters = numericFilters.replace(regEx, (match) => {
      return `-${operatorMap[match]}-`;
    });
    const options = ["price", "rating"];
    filters = filters.split(",").forEach((item) => {
      const [field, operator, value] = item.split("-");
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
    
  }

  console.log(queryObject);

  let result = Product.find(queryObject);

  //sorting
  if (sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("createAt");
  }
  if (fields) {
    const fieldsList = fields.split(",").join(" ");
    result = result.select(fieldsList);
  }
  const limitNum = Number(limit) || 10;
  const pageNum = Number(page) || 1;
  const skip = (pageNum - 1) * limitNum;
  result = result.skip(skip).limit(limitNum);

  const products = await result;
  res.json({ products });
};

module.exports = { getAllProductsStatic, getAllProducts };

// const getAllProducts = async (req, res) => {
//   const products = await Product.find({})

//   if (products.length === 0) {
//     // اینجا خطا نیست، فقط دیتا خالیه
//     return res.status(200).json({ products: [] })
//   }

//   // اگر خطای واقعی توی دیتابیس پیش اومد، throw کن
//   if (!products) {
//     throw new Error('Database error')
//   }

//   res.status(200).json({ products })
// }
