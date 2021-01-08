// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";

// Users
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Plan
const PLANS = "/plans";
const UPLOAD_PLAN = "/upload/plan";
const UPLOAD_SENTENCE = "/upload/sentence";
const DELETE_PLAN = "/:id/delete";
const EDIT_PLAN = "/:id/edit";
const CHECK_PLAN = "/:id/check";

// Calendar
const CALENDAR = "/calendar";

// Guest
const GUEST = "/guest";

const routes = {
	home: HOME,
	join: JOIN,
	login: LOGIN,
	logout: LOGOUT,
	users: USERS,
	userDetail: USER_DETAIL,
	editProfile: EDIT_PROFILE,
	changePassword: CHANGE_PASSWORD,
	plans: PLANS,
	uploadPlan: UPLOAD_PLAN,
	uploadSentence: UPLOAD_SENTENCE,
	deletePlan: (id) => {
		if (id) {
			return `/plans/${id}/delete`;
		} else {
			return DELETE_PLAN;
		}
	},
	editPlan: (id) => {
		if (id) {
			return `/plans/${id}/edit`;
		} else {
			return EDIT_PLAN;
		}
	},
	checkPlan: (id) => {
		if (id) {
			return `/plans/${id}/check`;
		} else {
			return CHECK_PLAN;
		}
	},
	calendar: CALENDAR,
	guest: GUEST,
};

export default routes;
