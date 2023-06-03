const express = require("express");
const Project = require("../models/project.model");

const app = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const { page } = req.query;
    const pageNumber = parseInt(page) || 1;

    const limit = 8;
    const skip = (pageNumber - 1) * limit;

    const projects = await Project.find().skip(skip).limit(limit);

    res.status(200).send({
      page: pageNumber,
      perPage: limit,
      total: projects.length,
      data: projects,
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/sort/:sortBy", async (req, res) => {
  try {
    const sortBy = req.params.sortBy;
    const validFields = [
      "priority",
      "updatedAt",
      "startDate",
      "endDate",
      "status",
    ];
    if (!validFields.includes(sortBy)) {
      return res.status(400).send({ error: "Invalid sort field" });
    }
    const sortOption = { [sortBy]: 1 };
    
    const projects = await Project.find().sort(sortOption);
    res.status(200).send(projects);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/search/:query", async (req, res) => {
  try {
    const keywords = req.params.query;
    const query = {
      $or: [
        { title: { $regex: keywords, $options: "i" } },
        { location: { $regex: keywords, $options: "i" } },
        { category: { $regex: keywords, $options: "i" } },
        { status: { $regex: keywords, $options: "i" } },
        { departmen: { $regex: keywords, $options: "i" } },
        { divison: { $regex: keywords, $options: "i" } },
        { type: { $regex: keywords, $options: "i" } },
        { priority: { $regex: keywords, $options: "i" } },
        { reason: { $regex: keywords, $options: "i" } },
      ],
    };
    const projects = await Project.find(query);

    res.status(200).send(projects);
  } catch (err) {
    res.status(500).send({ error: "An error occurred" });
  }
});

app.post("/new-project", async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).send({
      success: true,
      message: "Project saved successfull",
      project: project,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

app.put("/update-status/:id", async (req, res) => {
  const id = req.params.id;
  const status = req.body.status;
  try {
    await Project.findOneAndUpdate(
      { _id: id },
      { status: status, updatedAt: Date.now() }
    );
    res.status(200).send({
      success: true,
      message: "project updated successfully",
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
