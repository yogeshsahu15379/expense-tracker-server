import users from "../models/users.js";
import user from "../models/users.js";

export const getAllUsers = async (req, res) => {
  try {
    const getUser = await user.find({});
    res.status(200).json(getUser);
  } catch (error) {
    console.log("user not found", error);
    res.status(500).json({ massage: "server error" });
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const getUser = await user.findById(id);
    res.status(200).json(getUser);
  } catch (error) {
    console.log("server error", error);
    res.status(500).json({ massage: "server error" });
  }
};

export const createUser = async (req, res) => {
  const { firstName, lastName, address, gender, email, password, expenseId } =
    req.body;
  try {
    if (firstName && lastName && gender && email && password && expenseId) {
      const user = new users({ ...req.body });
      await user.save();
      return res.status(200).json(user);
    }
    return res.status(400).json({ massage: "invalid inputs" });
  } catch (error) {
    console.log("user not created", error);
    res.status(500).json({ massage: "user naot created" });
  }
  // console.log("req.params",req.body);
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await user.findOneAndDelete(id);

    res.status(200).json(deletedUser);
  } catch (error) {
    console.log("user not deleted", error);
    res.status(400).json({ massage: "user not deleted" });
  }
};

export const userLogin = async (req, res) => {
  let getUser;
  const { email, password } = req.body;
  console.log(req.body);
  console.log("email", email, " password ", password);
  try {
    if (email && password) {
      getUser = await user.findOne({ email, password });
    //   console.log("getUser", getUser);
      if (getUser) {
        res.status(200).json(getUser);
      } else {
        res.status(400).json({ massage: "invailid user" });
      }
    }
  } catch (error) {
    console.log("invailid user", error);
    res.status(400).json({ massage: "invailid user" });
  }
};
