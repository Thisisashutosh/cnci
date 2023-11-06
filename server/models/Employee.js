import mongoose from "mongoose";

const employeeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  bioID: {
    type: String,
    required: true,
  },
  residingBuilding: {
    type: String,
    required: true,
  },
  room: {
    type: String,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  remarks: {
    type: String,
    required: true,
  },
  selection: {
    type: String,
    required: true,
  },
  extraData: {
    type: [String],
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  reportNumber: {
    type: String,
    required: true,
  },
});

const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;
