import User from "../models/User.js";
import thisWeek from "../week.js";

export const calendar = async (req, res) => {
	try {
		const user = await User.findById(req.user._id)
			.populate({ path: "plans", populate: { path: "feedback" } })
			.populate("sentence");

		if (user.id !== req.user.id) {
			throw Error();
		} else {
			res.render("calendar", { pageTitle: "Calendar", user, thisWeek });
		}
	} catch (error) {
		console.log(error);
		res.render("calendar", { pageTitle: "Calendar", user: [], thisWeek });
	}
};

export const calendarPlan = async (req, res) => {
	console.log("controller1 calendarPlan")
	console.log("controller2 calendarPlan", req)
	try {
		console.log("TEST2")
		console.log("TEST3", req)
		const user = await User.findById(req.user._id)
			.populate({ path: "plans", populate: { path: "feedback" } })
			.populate("sentence");
		res.render("plans", { pageTitle: "Plans", user: [], thisWeek });
		// const am = await User.findById(req.user._id).populate({
		// 	path: "plans",
		// 	select: { time: "am" },
		// 	populate: { path: "feedback" },
		// });
		// if (user.id !== req.user.id) {
		// 	throw Error();
		// } else {
		// 	console.log(am);
		// 	res.render("plans", { pageTitle: "Plans", user, am, thisWeek });
		// }
	} catch (error) {
		console.log(error);
		res.render("plans", { pageTitle: "Plans", user: [], thisWeek });
	}
};
