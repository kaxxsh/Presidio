import { Long } from "mongodb";
import { badRequest } from "../error/index.js";
import Teacher from "../model/TeacherSchema.js";

const allTeacher = async (req, res, next) => {
  try {
    const data = await Teacher.find(req.query);
    if (data.length === 0) throw new badRequest("no data found");
    res.status(200).json({ message: "data found" }, data);
  } catch (error) {
    next(error);
  }
};
const addTeacher = async (req, res, next) => {
  try {
    const data = await Teacher.findOne({ teachername: req.body.teachername });
    console.log(data);
    if (data) throw new badRequest("user already available");
    await Teacher.create(req.body);
    res.status(200).json({ message: "Teacher added Successfully" });
  } catch (error) {
    next(error);
  }
};
const getTeacher = async (req, res, next) => {
  try {
    const data = await Teacher.findById(req.params.id);
    if (!data) throw new badRequest("Teacher not found");
    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};
const updateTeacher = async (req, res, next) => {
  try {
    const data = await Teacher.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!data) throw new badRequest("Not updated");
    res.status(200).json({ message: "success" });
  } catch (error) {
    next(error);
  }
};
const deleteTeacher = async (req, res, next) => {
  try {
    const data = await Teacher.findByIdAndDelete(req.params.id);
    if (!data) throw new badRequest("Not Deleted");
    res.status(200).json({ message: "success" });
  } catch (error) {
    next(error);
  }
};

export { allTeacher, addTeacher, getTeacher, updateTeacher, deleteTeacher };
