import { User } from "../models/user.model.js";
import fs from "fs";

const userExist = async (req, res, next) => {
  const username = req.body.username;
  const email = req.body.email;
  const avatarLocalPath = req.files?.avatar[0]?.path;
  let coverImageLocalPath;

  if (
    req.files &&
    Array.isArray(req.files.coverImage) &&
    req.files.coverImage.length > 0
  ) {
    coverImageLocalPath = req.files.coverImage[0].path;
  }
  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (existedUser) {
    fs.unlinkSync(avatarLocalPath);
    fs.unlinkSync(coverImageLocalPath);
    res.status(409).json({
      message: "User Already Exists",
    });
  }
  next();
};

export { userExist };
