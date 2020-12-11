import passport from "passport";
import routes from "../routes.js";
import User from "../models/User.js";

export const home = (req, res) => res.render("home", { pageTitle: "Home" });

export const postLogin = passport.authenticate("local", {
    failureRedirect: routes.home,
    successRedirect: routes.plans
  });

export const postJoin = async (req, res, next) => {
    const {
        body: { id, email, password, password2 }
    } = req;
    if (password !== password2) {
        res.status(400);
    } else {
        try {
            const user = await User({
                id,
                email
            })
            await User.register(user, password);
            next();
        } catch (error) {
            console.log(error);
            res.redirect(routes.home);
        }
    }
};

export const logout = (req, res) => res.render("logout", { pageTitle: "Logout" });
export const users = (req, res) => res.render("users", { pageTitle: "User" });
export const editProfile = (req, res) => res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) => res.render("changePassword", { pageTitle: "change Password" });
