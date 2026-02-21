const Task = require("../models/task");
const asyncWrapper = require("../middleware/AsyncWrapper");
const {createCustomError} = require('../errors/custom-error')
// Model.deleteMany();
// Model.deleteOne();
// Model.find();
// Model.findById();
// Model.findByIdAndDelete();
// Model.findByIdAndRemove();
// Model.findByIdAndUpdate();
// Model.findOne();
// Model.findOneAndDelete();
// Model.findOneAndReplace();
// Model.findOneAndUpdate();
// Model.replaceOne();
// Model.updateMany();
// Model.updateOne();

// const getAllTasks = async (req, res) => {
//   try {
//     const tasks = await Task.find({}); // {}filter object
//     res.status(200).json({ tasks });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({}); // {}filter object
  res.status(200).json({ tasks });
});

const getSingleTasks = asyncWrapper(async (req, res,next) => {
  const task = await Task.findOne({ _id: req.params.id });
  // const task = await Task.find({_id:req.params.id})
  // const task = await Task.findById(req.params.id)

  if (!task) {
    // const error = new Error("Not Found")
    // error.status = 404
    // const error = new CustomAPIError("Not Found",404)
    return next(createCustomError("Not Found",404))

  }
  res.status(200).json({ task });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const editTask = asyncWrapper(async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id },
    req.body, //{ name: name, completed: completed } چون بحث  creat هست همون چیزای مشخص و فقط آپدیت میکنه => فقط و فقط در صورتی که ران ولیدیتور ترو باشه
    { new: true, runValidators: true } //Option
  );
  //deleteOne() فقط داده رو پاک می‌کنه. (جوابش فقط میگه چندتا پاک شدن)
  // findOneAndDelete() هم داده رو پاک می‌کنه و هم کل سند حذف‌شده رو برمی‌گردونه تا بتونی ازش استفاده کنی.
  res.status(200).json({ task });
});

const removeTask = asyncWrapper(async (req, res) => {
  const task = await Task.findOneAndDelete({ _id: req.params.id });
  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  getSingleTasks,
  createTask,
  editTask,
  removeTask,
};
