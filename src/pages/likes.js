import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import "tailwindcss/tailwind.css";
import Layout from "@/Layout";
import { createLike } from "@/services/likesApi";

const Likes = () => {
  const [likeData, setLikeData] = useState({
    photo_id: "",
    user_id: "",
  });

  const handleChange = (e) => {
    setLikeData({
      ...likeData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { photo_id, user_id } = likeData;
    try {
      const response = await createLike({
        photo_id,
        user_id,
      });
      console.log("Liked photo!", response.data);
      setLikeData({
        user_id: "",
        photo_id: "",
      });
    } catch (error) {
      console.error("Like failed:", error);
    }
  };

  return (
    <Layout className="flex items-center justify-center h-full">
      <div className="bg-white p-8 rounded shadow-md max-w-md">
        <h1 className="text-2xl font-bold mb-4">Like Photo</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="photo_id"
              className="block text-sm font-semibold mb-2"
            >
              Photo ID
            </label>
            <input
              id="photo_id"
              type="text"
              name="photo_id"
              value={likeData.photo_id}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <input type="hidden" name="user_id" value={likeData.user_id} />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
          >
            <FontAwesomeIcon icon={faThumbsUp} className="mr-2" />
            Like
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Likes;
