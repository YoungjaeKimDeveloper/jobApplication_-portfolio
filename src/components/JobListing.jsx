import React, { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobListing = ({ job }) => {
  const [showFullDescroption, setshowFullDescroption] = useState(true);
  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.location}</div>
          <h3 className="text-xl font-bold">
            {job.title.slice(0, 25) + "..."}
          </h3>
        </div>

        <div className=" text-indigo-500 hover:text-indigo-600 mb-5 ">
          <button onClick={() => setshowFullDescroption((prev) => !prev)}>
            {showFullDescroption ? "Less" : "More"}
          </button>
        </div>

        <h3 className="text-indigo-500 mb-2">
          <p>{job.salary}</p>
        </h3>

        <div className="border border-gray-100 mb-5">
          {showFullDescroption
            ? job.description
            : job.description.substring(0, 125) + "..."}
        </div>

        <div className="flex flex-col lg:flex-row justify-between mb-4 ">
          <div className="text-orange-700 mb-3 flex ">
            <FaMapMarker className=" mr-2" />
            {job.type}
          </div>

          <Link
            to={`/jobs/${job.id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
