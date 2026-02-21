const express = require("express");
const router = express.Router();

const {
  getPeople,
  addPerson,
  editPerson,
  removePerson,
} = require("../controller/controller");

// router.get("/", getPeople);
// router.post("/",addPerson );
// router.put(":id",editPerson);
// router.delete("/:id",removePerson );

router.route("/").get(getPeople).post(addPerson);
router.route("/:id").put(editPerson).delete(removePerson)

module.exports = router;
