import React, { useEffect, useState } from "react";
import axios from "axios";
import jobs from "../jobs.json";
import JobListing from "./JobListing";
import Spinner from "./Spinner";

const JobListings = ({ isHome = false }) => {
  const [jobsData, setjobsData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const apiUrl = isHome
      ? "http://localhost:8000/jobs/?_limit=3"
      : "http://localhost:8000/jobs/?";
    try {
      const response = await axios.get(apiUrl);
      setLoading(true);
      setjobsData(response.data);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // const jobListings = jobsData;
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Most Recent Jobs" : "Browse Jobs"}
        </h2>
        {loading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobsData.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
        {error && (
          <p className=" text-red-400  m-auto flex justify-center text-2xl font-bold">
            {error}
          </p>
        )}
      </div>
    </section>
  );
};

export default JobListings;
