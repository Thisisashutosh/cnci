import Employee from "../models/Employee.js";

export const upload = async (req, res) => {
  try {
     // Query the database to get the total count of Employee documents
     const totalEmployees = await Employee.countDocuments();

     // Calculate the report number
     const reportNumber = `E${(totalEmployees + 1).toString().padStart(9, "0")}`;

    const newPost = new Employee({
      ...req.body,
      createdAt: new Date().toISOString(),
      reportNumber: reportNumber,
    });

    await newPost.save();
    res
      .status(200)
      .json({ status: "success", message: "Bill submitted successfully", reportNumber });
  } catch (error) {
    res.status(409).json({ status: "error", message: "Something went wrong" });
  }
};

export const getDetails = async (req, res) => {
  try {
    const { phone } = req.query; // Use req.query to access query parameters

    // Check if 'phone' is not provided or is an empty string
    if (!phone) {
      return res.json({ status: "error", message: "Phone number is required" });
    }

    if (phone.length != 10) {
      return res.json({
        status: "error",
        message: "Please enter a valid number",
      });
    }

    const employeeData = await Employee.find({ phone });

    if (!employeeData || employeeData.length === 0)
      res.json({ status: "error", message: "Sorry! No data found" });
    else res.status(200).json(employeeData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
