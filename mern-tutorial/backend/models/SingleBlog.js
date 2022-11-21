const mongoose = require ('mongoose');

const SingleBlog = new mongoose.Schema (
  {
    title: {
      type: String,
    },
    category: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model ('SingleBlog', SingleBlog);
