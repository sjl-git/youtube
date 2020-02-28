import routes from "./routes";

export const localsMiddleware = (req, res, newxt) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    newxt();
}