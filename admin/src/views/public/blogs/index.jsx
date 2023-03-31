import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  function handlePrevious() {
    setCurrentPage((p) => {
      if (p === 1) return p;
      return p - 1;
    });
  }

  function handleNext() {
    setCurrentPage((p) => {
      if (p === totalPages) return p;
      if (totalPages === 0) return 1;
      return p + 1;
    });
  }

  const handleDelete = (id) => {
    const res = axios.delete(`http://localhost:3333/api/blogs/${id}`);
    console.log(res);
  };

  useEffect(() => {
    const getBlogs = async () => {
      const res = await axios.get(
        `http://localhost:3333/api/blogs?page=${currentPage}`
      );
      setBlogs(res.data.payload);
      setTotalPages(res.data.pagination.totalPages);
    };
    getBlogs();
  }, [currentPage]);

  console.log(blogs);
  if (!blogs) {
    return <h1>Loading ...</h1>;
  }

  return (
    <div>
      <Link to={"/new_blog"} className="bg-teal-600 py-2 px-6">
        Add New Blog
      </Link>
      <h1 className="m-2">Blogs</h1>
      {/* BLOG LIST */}
      <div className="px-4">
        {blogs.length > 0 &&
          blogs.map((blog, index) => {
            return (
              <div
                className="bg-green-100 mb-2 px-6 py2 w-[full] h-[100px] flex flex-row"
                key={index}
              >
                {/* Image */}
                <img
                  className="w-25 h-25 mr-5 "
                  src={
                    blog.cover_image
                      ? "http://localhost:3333/" + blog.cover_image
                      : "https://i.pravatar.cc/400?img=39"
                  }
                  alt="image"
                />

                {/* details */}
                <div className="w-2/3">
                  <p>{blog.cover_image}</p>
                  <p>{blog.title}</p>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="px-4 py-2 bg-red-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
      </div>
      {/* BLOG LIST */}
      {/* PAGINATION */}
      <div className="flex bg-slate-200">
        Page: {currentPage}
        <br />
        Total Pages: {totalPages}
        <br />
        <button
          className={`${
            currentPage === 1 ? "bg-slate-400" : "bg-slate-600 "
          } px-2 py-1 text-white  mr-2`}
          disabled={currentPage === 1}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          className={`${
            currentPage === totalPages ? "bg-slate-400" : "bg-slate-600 "
          } px-2 py-1 text-white  mr-2`}
          disabled={currentPage === totalPages}
          onClick={handleNext}
        >
          Next
        </button>
        <select
          value={currentPage}
          onChange={(event) => {
            setPage(event.target.value);
          }}
        >
          {Array(totalPages)
            .fill(null)
            .map((_, index) => {
              return <option key={index}>{index + 1}</option>;
            })}
        </select>
      </div>
      {/* PAGINATION */}
    </div>
  );
};

export default Blogs;
