import routes from "../routes";

export const getJoin = (req, res) => {
    res.render("join");
}
export const postJoin = (req, res) => {
    const {
        body: { name, email, password, password2 }
    } = req
    if (password !== password2) {
        res.status(400)
        res.render("join");
    } else {
        res.redirect(routes.home)
    }
}
export const getLogin = (req, res) => res.render("login");
export const postLogin = (req, res) => {
    res.redirect(routes.home);
}
export const logout = (req, res) => {
    res.redirect(routes.home);
}
export const users = (req, res) => res.send("Users");
export const userDetail = (req, res) => res.send("fuck");
export const editProfile = (req, res) => res.render("editProfile");
export const changePassword = (req, res) => res.render("changePassword");
