import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState({});

  useEffect(() => {
    const getBlogs = async () => {
      const res = await axios.get("http://localhost:3333/api/blogs");
      setBlogs(res.data.payload);
      console.log(res.data.payload);
    };
    getBlogs();
  }, []);
  return (
    <div>
      <Link to={"/new_blog"} className="bg-teal-600 py-2 px-6">
        Add New Blog
      </Link>
      {blogs.length > 0 &&
        blogs.map((blog, index) => {
          <li className=" w-full h-[100px]" key={index}>
            blog.title
          </li>;
        })}
    </div>
  );
};

export default Blogs;
