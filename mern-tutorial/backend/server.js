const express = require ('express');

const app = express ();
const PORT = 5000;
const cors = require ('cors');

app.use (cors ());

app.use (express.json ());
app.use (express.urlencoded ({extended: false}));

const url = 'mongodb://localhost:27017/mongooseBlog';

const db = require ('./models');
const {SingleBlog} = db;

db.mongoose
  .connect (url, {useNewUrlParser: true})
  .then (() => {
    console.log (`Connected with mongodb ${url}`);
  })
  .catch (err => {
    console.log (err);
  });

app.post ('/create-new-blog', async (req, res) => {
  let data = {
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
  };

  try {
    const blog = new SingleBlog (data);
    const result = await blog.save ();
    console.log (result);
    res.send ({message: 'Successfully created Blog!'});
  } catch (err) {
    console.log (err);
    res.send (err);
  }
});

app.get ('/get-all-blogs', async (req, res) => {
  try {
    const result = await SingleBlog.find ({});

    console.log (result);
    res.send (result);
  } catch (err) {
    console.log (err);
    res.send (err);
  }
});

app.listen (PORT, () => {
  console.log (`Server is listening on ${PORT}`);
});
