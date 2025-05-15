import User from "../model/User.js";

export const addUser = async (req, res) => {
  try {
    let exist = await User.findOne({ sub: req.body.sub });

    if (exist) {
      // console.log("User already exists", exist);
      return res.status(400).json({ message: "User already exists" });
    }
    const user = req.body;
    const newUser = new User(user);
    await newUser.save();
    // console.log("User added successfully", newUser);
    return res.status(200).json({ message: "User added successfully" });
  } catch (error) {
    // console.error("Error adding user:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    // console.log("Users fetched successfully", users);
    return res.status(200).json(users);
  } catch (error) {
    // console.error("Error fetching users:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
