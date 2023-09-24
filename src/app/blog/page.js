/* eslint-disable @next/next/no-async-client-component */
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Molal from "../components/Molal";
import { Title } from "../components/Multiple";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  const products = blogs.products?.slice(0, 6);

  const handleOpenModal = (id) => {
    setSelectedBlogId(id);
    setOpenModal(true);
  };

  const handleOutSideClick = () => {
    setSelectedBlogId(null);
    setOpenModal(false);
  };

  useEffect(() => {
    if (!openModal) {
      document.documentElement.classList.remove("bg-gray-500");
    } else {
      document.documentElement.classList.add("bg-gray-500");
    }
  }, [openModal]);

  return (
    <div className="p-4 sm:ml-64">
      <div className="rounded-lg p-4 dark:border-gray-700">
        <div id="blog" className="pt-20 ">
          <div className="ms-10">
            <Title title={"BLOGS"} heading={"MY LATEST BLOGS"} />
          </div>
          <div className="flex flex-wrap justify-around">
            {products?.map((blog) => (
              <div
                onClick={() => handleOpenModal(blog.id)}
                key={blog.id}
                className="m-5 w-[400px] cursor-pointer rounded-xl bg-white shadow-md"
              >
                <Image
                  className="h-48 w-full rounded-xl"
                  src={blog.thumbnail}
                  width={200}
                  height={200}
                  alt="Blog"
                />
                <div className="px-2 py-6">
                  <div className="mb-2 text-xs font-semibold text-gray-400">
                    {blog.description}
                  </div>
                  <h2 className="mb-2 text-xl font-semibold text-gray-800">
                    {blog.description}
                  </h2>
                </div>
              </div>
            ))}
            {openModal && (
              <Molal
                openModal={openModal}
                setOpenModal={setOpenModal}
                selectedBlogId={selectedBlogId}
                products={products}
                handleOutSideClick={handleOutSideClick}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
