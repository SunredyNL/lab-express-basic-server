const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.static("public"))
app.use(express.json())
app.use(morgan("dev"))

app.get("/", (request, response) => response.sendFile(__dirname + "/views/home.html"))
app.get("/blog", (request, response) => response.sendFile(__dirname + "/views/blog.html"))
app.get("/data/projects", (request, response) => {
    response.json(projects)
})
app.get("/data/articles", (request, response) => {
    response.json(articles)
})
app.use((request, response) => {
    response.status(404).sendFile(__dirname + "/views/not-found.html")
})
app.listen(5005, () => console.log("Test"))