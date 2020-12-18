import routes from "../routes.js";
import User from "../models/User.js";
import Plan from "../models/Plan.js";
import thisWeek from "../week.js";

export const plans = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate("plans");
        if(user.id !== req.user.id){
            throw Error();
        } else {
            res.render("plans", { pageTitle: "Plans", user, thisWeek });
        }
    } catch(error) {
        console.log(error);
        res.render("plans", { pageTitle: "Plans", user: [], thisWeek });
    }
};

export const postUpload = async (req, res) => {
    const {
        body: { title, content, description, completed, category, year, month, date }
    } = req;
    const newPlan = await Plan.create({
        title,
        content,
        description,
        completed,
        category,
        year,
        month,
        date,
    });
    req.user.plans.push(newPlan.id);
    req.user.save();
    res.redirect(routes.plans);
};
