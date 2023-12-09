"use client";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function BlogForm() {
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    image: "",
  });

  const onSave = async () => {
    try {
      const response = await axios.post("/api/blogs", blog);
      toast.success(response.data.message);
      // reset blog state
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div>
        <label htmlFor="title" className="text-gray-600 text-sm">
          Title:
        </label>
        <input
          type="text"
          placeholder="Enter blog title"
          value={blog.title}
          onChange={(e) => setBlog({ ...blog, title: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="description" className="text-gray-600 text-sm">
          Description:
        </label>
        <textarea
          type="text"
          placeholder="Enter blog description"
          value={blog.description}
          onChange={(e) => setBlog({ ...blog, description: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="image" className="text-gray-600 text-sm">
          Image URL:
        </label>
        <input
          type="text"
          placeholder="Enter image url"
          value={blog.image}
          onChange={(e) => setBlog({ ...blog, image: e.target.value })}
        />
      </div>
      <div className="flex justify-end gap-8">
        <button className="btn-outlined">Cancel</button>
        <button className="btn-contained" onClick={onSave}>
          Save
        </button>
      </div>
    </div>
  );
}
