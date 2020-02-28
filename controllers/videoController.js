import { videos } from "../db"

export const home = (req, res) => {

    res.render("home", { pageTitle: "Home", videos });
};
export const search = (req, res) => {
    const { query: { term: searchingBy } } = req;
    console.log(searchingBy)
    return res.render("search", { pageTitle: "Search", searchingBy, videos });
};
export const getUpload = (req, res) =>
    res.render("upload", { pageTitle: "Upload" });

export const postUpload = (req, res) => {
    const {
        body: { file, title, description }
    } = req;
    // To Do: Upload and save video
    res.redirect(routes.videoDetail(324393));
};

export const videoDetail = (req, res) => res.send("Video Detail");
export const editVideo = (req, res) => res.render("editVideo");
export const deleteVideo = (req, res) => res.send("Delete Video");