const express = require("express"); //Load Express
const router = express.Router({ mergeParams: true }); //Inherit companyID param
const controller = require("../controllers/Test");

//GET tests
router.get("/", controller.test_read_all);
//GET test By Id
router.get("/:testId", controller.test_read_by_id);
//POST test Create
router.post("/", controller.test_create);
//PATCH test Update
router.patch("/:testId", controller.test_update);
//DELETE test Delete
router.delete("/:testId", controller.test_delete);

module.exports = router;
