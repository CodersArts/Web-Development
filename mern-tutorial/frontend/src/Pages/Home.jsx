import React, {useState} from 'react';
import './home.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Home () {
  const [title, setTitle] = useState ('');
  const [category, setCategory] = useState ('');
  const [description, setDescription] = useState ('');

  const handleTitle = e => {
    // console.log (e.target.value);
    setTitle (e.target.value);
  };

  const handleCategoryChange = e => {
    setCategory (e.target.value);
  };

  const handleDescriptionChange = e => {
    setDescription (e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault ();
    let data = {
      title: title,
      category: category,
      description: description,
    };
    // console.log (data);
    try {
      const response = await axios.post (
        'http://localhost:5000/create-new-blog',
        data
      );
      console.log (response);
      if (response) {
        setTitle ('');
        setCategory ('');
        setDescription ('');
      }
    } catch (err) {
      console.log (err);
    }
  };

  return (
    <div>
      <h1>Home</h1>
      <Link to="/blogs">All Blogs</Link>
      <form>
        <div>
          <label>Title : </label>
          <input
            className="form-control"
            type="text"
            value={title}
            onChange={handleTitle}
            placeholder="Enter blog title"
          />
        </div>
        <div>
          <label>Category : </label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter blog category"
            value={category}
            onChange={handleCategoryChange}
          />
        </div>
        <div>
          <label>Description : </label>
          <textarea
            className="form-control"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Enter blog description"
          />

        </div>
        <input
          type="submit"
          onClick={handleSubmit}
          value="Submit"
          className="primaryBtn"
        />
      </form>

    </div>
  );
}

export default Home;
