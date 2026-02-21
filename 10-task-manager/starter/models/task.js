const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
  //only these status will be add to our database
  name: {
    type: String,
    required: [true, "Please Provide A Name For Your Task."],
    maxLength: [20, "Maximum Character is 20"],
    trim:true,
    // validate: {
    //   validator: async function (name) {
    //     const count = await this.constructor.countDocuments({ name: name });
    //     return count === 0; // یعنی اگر قبلاً وجود داشته باشه → false
    //   },
    //   message: 'You Have Already this Task.'
    // }
  
  },
  completed: {
    type: Boolean,
    default: false,
  },
});
// All SchemaTypes have the built-in required validator. The required validator uses the SchemaType's checkRequired() function to determine if the value satisfies the required validator.
// Numbers have min and max validators.
// Strings have enum, match, minLength, and maxLength validators.
//enum => just be a element of a array [banana, asghar]
//match معمولا برای اعتبارسنجی رشته‌ها مثل ایمیل، شماره تلفن، کد ملی و ... استفاده میشه.
//validate validate توی Mongoose Schema انعطاف‌پذیرترین روشه چون می‌ذاره شرط دلخواه خودت رو بنویسی.


module.exports = mongoose.model("Task", taskSchema);
