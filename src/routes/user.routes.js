import { Router } from "express";
import {
  loginUser,
  registerUser,
  logoutUser,
} from "../controllers/userController.js";
import { upload } from "../middlewares/multer.middleware.js";
import { userExist } from "../middlewares/userExist.middleware.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  userExist,
  registerUser
);

router.route("/login").post(loginUser);

// secured routes
router.route("/logout").post(verifyJWT, logoutUser);

export default router;
