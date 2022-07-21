const express = require("express");

const morgan = require("morgan");

//  db
const db = require("./utils/database");

const app = express();
// listen for requests
const port = 3000;

// register view engine
app.set("view engine", "ejs");

// middleware & static files
app.use(express.static("public"));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Jack went to road",
      snippet:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, odit",
    },
    {
      title: "Leyla went to road",
      snippet:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, odit",
    },
    {
      title: "Mario went to road",
      snippet:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, odit",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create Blogs" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

app.listen(port, () => console.log(`Server listening on ${port}`));
