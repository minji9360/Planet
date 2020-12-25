import express from "express";
import {
	home,
	postLogin,
	postJoin,
	logout,
} from "../controllers/userController.js";
import {
	changePassword,
	editProfile,
	users,
} from "../controllers/userController.js";
import { onlyPublic, onlyPrivate } from "../middlewares.js";
import routes from "../routes.js";

const userRouter = express.Router();

userRouter.get(routes.home, onlyPublic, home);
userRouter.post(routes.login, onlyPublic, postLogin);
userRouter.post(routes.join, onlyPublic, postJoin, postLogin);
userRouter.get(routes.logout, onlyPrivate, logout);
userRouter.get(routes.users, onlyPrivate, users);
userRouter.get(routes.editProfile, onlyPrivate, editProfile);
userRouter.get(routes.changePassword, onlyPrivate, changePassword);

export default userRouter;
