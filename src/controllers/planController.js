import routes from "../routes.js";
import User from "../models/User.js";
import Plan from "../models/Plan.js";

export const plans = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate("plans");
        res.render("plans", { pageTitle: "Plans", user });
    } catch(error) {
        const user = User.findById(req.user.id).populate("plans");
        console.log(error);
        res.render("plans", { pageTitle: "Plans", user: [] });
    }
};

export const postUpload = async (req, res) => {
    const {
        body: { title, content, completed, category }
    } = req;
    const newPlan = await Plan.create({
        title,
        content,
        completed,
        category,
    });
    req.user.plans.push(newPlan.id);
    req.user.save();
    res.redirect(routes.plans);
};
