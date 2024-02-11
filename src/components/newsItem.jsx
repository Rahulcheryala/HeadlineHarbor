import React, { Component } from "react";
import { Link } from "react-router-dom";
import { defaultNewsImage } from "../assets/images/images";

export class newItem extends Component {
  render() {
    let { title, description, imageURL, newsURL, author, date } = this.props;
    return (
      <div className="p-4 w-1/3 max-[1000px]:w-1/2 max-sm:w-full">
        <div className="h-full border-2 border-gray-300 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={
              !imageURL || imageURL.trim() === "" ? defaultNewsImage : imageURL
            }
            alt="blog"
          />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-black mb-3">
              {!title || title.trim() === ""
                ? "Latest Updates"
                : title.slice(0, 50) + " ..."}
            </h1>
            <p className="leading-relaxed mb-3">
              {!description || description.trim() === ""
                ? "Explore in-depth coverage of local and global news, with analysis and insights to keep you up-to-date."
                : description.slice(0, 100) + " ..."}
            </p>
            <div className="flex justify-between">
              <p className=" text-sm text-gray-500 py-4">
                {!author || author.trim() === "" ? "" : "By " + author}
              </p>
              <p className=" text-sm text-gray-500 py-4">
                {!date || date.trim() === ""
                  ? ""
                  : " On " + new Date(date).toLocaleString()}
              </p>
            </div>
            <div className="flex items-center flex-wrap">
              <Link
                className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0"
                to={newsURL}
                target="_blank"
              >
                Read More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default newItem;
