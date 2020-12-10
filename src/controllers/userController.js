import routes from "../routes.js";

export const home = (req, res) => res.render("home", { pageTitle: "Home" });

export const postLogin = (req, res) => {
    console.log(req.body)
    res.redirect(routes.home);
};

export const postJoin = (req, res) => {
    const {
        body: { id, email, password, password2 }
    } = req;
    if (password !== password2) {
        res.status(400);
    } else {
        // To do : Register User
        // To do : Log user in
        res.redirect(routes.home);
    }
};

export const logout = (req, res) => res.render("logout", { pageTitle: "Logout" });
export const users = (req, res) => res.render("users", { pageTitle: "User" });
export const editProfile = (req, res) => res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) => res.render("changePassword", { pageTitle: "change Password" });
