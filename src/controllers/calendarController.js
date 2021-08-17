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
