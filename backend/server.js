import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userModal from "./Modal/userModal.js";
import blogModal from "./Modal/blogModal.js";
import subscriberModal from "./Modal/subscriberModal.js";

// app config

const app = express();
const port = process.env.PORT || 9000;

// middleware

app.use(express.json());
app.use(cors());

// mongodb config

const connection__url =
  "mongodb+srv://admin:HZGUiPTU2E-C!5S@cluster0.turqt.mongodb.net/blog_db?retryWrites=true&w=majority";

mongoose.connect(connection__url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// api endpoints

app.get("/", (req, res) => {
  res.send("api started");
});

app.get("/api/v1/findAllBlogs", (req, res) => {
  blogModal.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/api/v1/createBlog", (req, res) => {
  blogModal.create(req.body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.post("/api/v1/deleteBlog", (req, res) => {
  let blog__id = req.body.id;
  blogModal.findByIdAndRemove({ _id: blog__id }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/api/v1/deleteAllBlog", (req, res) => {
  blogModal.remove((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get("/api/v1/findAllSubscibers", (req, res) => {
  subscriberModal.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/api/v1/createSubscriber", (req, res) => {
  subscriberModal.create(req.body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.post("/api/v1/deleteSubscriber", (req, res) => {
  let subscriber__id = req.body.id;
  subscriberModal.findByIdAndRemove({ _id: subscriber__id }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/api/v1/deleteAllSubscribers", (req, res) => {
  subscriberModal.remove((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get("/api/v1/findAllUsers", (req, res) => {
  userModal.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get("/api/v1/findSpecificUser", (req, res) => {
  userModal.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/api/v1/createUser", (req, res) => {
  userModal.create(req.body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.post("/api/v1/deleteUser", (req, res) => {
  let user__id = req.body.id;
  userModal.findByIdAndRemove({ _id: user__id }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/api/v1/deleteAllUers", (req, res) => {
  userModal.remove((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
// listner

app.listen(port, () => {
  console.log("api working");
});
