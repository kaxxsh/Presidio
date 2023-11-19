import { badRequest } from "../error/index.js";
import Student from "../model/StudentSchema.js";

// Get all Students or filter based on query parameters
// route: http://localhost:3000/api/v1
const allStudent = async (req, res, next) => {
  try {
    const data = await Student.find(req.query);
    if (data.length === 0)
      return res.status(200).json({ message: "no data found" });
    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};

// Add a new Student
// route: http://localhost:3000/api/v1
const addStudent = async (req, res, next) => {
  try {
    var total = 0,
      nosub = 0;
    req.body.subjects.map((i) => {
      (total += i.mark), (nosub = nosub + 1);
    });
    let percentage = total / nosub;
    let grade;
    if (percentage >= 90) {
      grade = "A+";
    } else if (percentage >= 80 && percentage < 90) {
      grade = "A";
    } else if (percentage >= 70 && percentage < 80) {
      grade = "B";
    } else if (percentage >= 60 && percentage < 70) {
      grade = "C";
    } else if (percentage >= 50 && percentage < 60) {
      grade = "A";
    } else {
      grade = "F";
    }
    req.body.percentage = percentage;
    req.body.grade = grade;
    const data = await Student.findOne({ studentname: req.body.studentname });
    if (data) throw new badRequest("user already available");
    await Student.create(req.body);
    res.status(200).json({ message: "Student added Successfully" });
  } catch (error) {
    next(error);
  }
};

// Get a Student by ID
// route: http://localhost:3000/api/v1/:id
const getStudent = async (req, res, next) => {
  try {
    const data = await Student.findById(req.params.id);
    if (!data) return res.status(200).json({ message: "no data found" });
    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};

// Update a Student by ID
// route: http://localhost:3000/api/v1/:id
const updateStudent = async (req, res, next) => {
  try {
    const data = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!data) throw new badRequest("Not updated");
    res.status(200).json({ message: "success" });
  } catch (error) {
    next(error);
  }
};

// Delete a Student by ID
// route: http://localhost:3000/api/v1/:id
const deleteStudent = async (req, res, next) => {
  try {
    const data = await Student.findByIdAndDelete(req.params.id);
    if (!data) throw new badRequest("Not Deleted");
    res.status(200).json({ message: "success" });
  } catch (error) {
    next(error);
  }
};

const getAveragepercentageclass = async (req, res, next) => {
  try {
    const Class = Number(req.params.class);
    const data = await Student.aggregate([
      {
        $match: { class: Class },
      },
      {
        $group: {
          _id: null,
          averagepercentage: { $avg: "$percentage" },
        },
      },
    ]);

    if (data.length === 0) {
      throw new badRequest("No data found for the class");
    }

    res.status(200).json({ averagepercentage: data[0].averagepercentage });
  } catch (error) {
    next(error);
  }
};

const getAveragemarkofstudent = async (req, res, next) => {
  const Name = req.params.name;
  try {
    const data = await Student.aggregate([
      {
        $match: { studentname: Name },
      },
      {
        $unwind: "$subjects",
      },
      {
        $group: {
          _id: null,
          averagemark: { $avg: "$subjects.mark" },
        },
      },
    ]);
    if (data.length === 0) {
      throw new badRequest("No data found for the student");
    }

    res.status(200).json({ averagemark: data[0].averagemark });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export {
  allStudent,
  addStudent,
  getStudent,
  updateStudent,
  deleteStudent,
  getAveragepercentageclass,
  getAveragemarkofstudent,
};
