const router = require("express").Router();

const getInstructorsController = require("../controllers/instructors");

const { isAuthenticated } = require("../middleware/authenticate");

router.get("/", getInstructorsController.getAllInstructors);
router.get("/:id", getInstructorsController.getInstructor);
router.post("/", isAuthenticated, getInstructorsController.postInstructor);
router.put("/:id", isAuthenticated, getInstructorsController.putInstructor);
router.delete("/:id", isAuthenticated, getInstructorsController.deleteInstructor);

module.exports = router;
