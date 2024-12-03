const router = require("express").Router();

const getCoursesController = require("../controllers/courses");

const { isAuthenticated } = require("../middleware/authenticate");

router.get("/", getCoursesController.getAllCourses);
router.get("/:id", getCoursesController.getCourse);
router.post("/", isAuthenticated, getCoursesController.postCourse);
router.put("/:id", isAuthenticated, getCoursesController.putCourse);
router.delete("/:id", isAuthenticated, getCoursesController.deleteCourse);

module.exports = router;
