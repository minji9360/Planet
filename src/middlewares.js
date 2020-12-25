import routes from "./routes.js";

export const localsMiddleware = (req, res, next) => {
	res.locals.siteName = "Planet";
	res.locals.routes = routes;
	res.locals.user = req.user || null;
	next();
};

export const onlyPublic = (req, res, next) => {
	if (req.user) {
		res.redirect(routes.plans);
	} else {
		next();
	}
};

export const onlyPrivate = (req, res, next) => {
	if (req.user) {
		next();
	} else {
		res.redirect(routes.home);
	}
};
