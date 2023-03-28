import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "doublequote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
  history: {
    delay: 2000,
    maxStack: 500,
    userOnly: true,
  },
  // ImageResize: true,
};

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [coverImage, setCoverImage] = useState({});
  const [textContent, setTextContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const blogData = {
      title: title,
      cover_image: coverImage,
      content: textContent,
    };
    const blogFormData = new FormData();
    blogFormData.append("title", title);
    blogFormData.append("cover_image", coverImage);
    blogFormData.append("content", textContent);

    console.log(blogData);

    try {
      const res = await axios.post(
        "http://localhost:3333/api/blogs/",
        blogFormData
      );

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className=" w-[700px] h-[500px] px-4 flex flex-col gap-10 items-center justify-center bg-slate-400"
      >
        <h1 className="font-semibold text-2xl">Create new Blog</h1>
        <div className="w-[90%]">
          <label htmlFor="title">Title</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            className="w-full h-[40] px-4 py-2 text-xl bg-slate-300"
            id="title"
            type="text"
          />
        </div>
        <div className="w-[90%]">
          <label htmlFor="cover_image"></label>
          <input
            onChange={(e) => setCoverImage(e.target.files[0])}
            className="w-full h-[40] px-4 py-2 text-xl bg-slate-300"
            id="cover_image"
            type="file"
          />
        </div>
        <div className="w-[90%]">
          <ReactQuill
            className="w-full h-20"
            theme="snow"
            modules={modules}
            value={textContent}
            onChange={setTextContent}
          />
        </div>
        <div className="mt-5">
          <button className="w-60 h-10 px-4 py-2 bg-green-400">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default NewBlog;
