import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // const [first, setfirst] = useState("");
  const Arr_words = ["accurate", "authentic", "reliable"];
  const [index, setIndex] = useState(0);
  const [word, setWord] = useState("");
  const [animate, setAnimate] = useState(false);
  const [ShowForm, setShowForm] = useState(false);

  useEffect(() => {
    const time = setInterval(() => {
      setAnimate(true); // Trigger animation before changing the word
      setTimeout(() => {
        setIndex((a) => (a + 1) % Arr_words.length);
        setAnimate(false); // End animation after the word has changed
      }, 1000); // Adjust this duration to match your CSS transition timing
    }, 2000);
    return () => {
      clearInterval(time);
    };
  }, []);

  useEffect(() => {
    setWord(Arr_words[index]);
  }, [index]);

  const handlefeeback = () => {
    setShowForm(true);
  };
  return (
    <div>
      {/* feedback form */}
      {/* {ShowForm && (
        <form>
          <div className=" space-y-12 h-screen">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Contact Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Please provide your email and phone number, and let us know your
                complaint.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="complain"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Complaint
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="complain"
                      name="complain"
                      rows={4}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Please describe your complaint in detail.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </form>
      )} */}
      {/* feedback form ends*/}

      <div
        className="relative w-full h-60 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0.99), rgba(0, 0, 0, 0)), url('lab.jpg')",
        }}
      >
        <div className="absolute top-5 left-0 ml-20 mt-3 text-2xl -rotate-3 max-w-md text-white">
          We will provide{" "}
          <b
            className={`text-3xl px-2 duration-500 ${
              animate ? "animate-spin" : ""
            }`}
          >
            {word}
          </b>
          results in no time
        </div>
      </div>
      {/* top pic and rotating text above*/}
      {/* below is gifs and more   */}
      <div
        className="relative w-full h-dvh bg-cover"
        style={{ backgroundImage: "" }}
      >
        <div className="absolute ml-10 mt-80">
          <Link to={"/"}>
            <button className=" bg-red-300 w-36 py-1  justify-center rounded">
              Contact Us
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-end ">
          <div className="py-4 bg-red-100 w-96 flex mx-10 rounded-xl justify-center my-10">
            <h1>book an appointment</h1>
          </div>
          <div className="py-4 bg-red-100 w-96 flex mx-10 rounded-xl justify-center my-10">
            <h1>View your Reports</h1>
          </div>
          <div className="py-4 bg-red-100 w-96 flex mx-10 rounded-xl justify-center my-10">
            <Link to={"#"} onClick={handlefeeback}>
              <h1>Post Your Feedback</h1>
            </Link>
          </div>
        </div>
        {ShowForm && (
          <form className="mt-4 bg-white p-4 rounded-md shadow-md ">
            <div className="space-y-8">
              <div>
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Contact Information
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Please provide your email and phone number, and let us know
                  your complaint.
                </p>

                <div className="mt-4 grid grid-cols-1 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Phone Number
                    </label>
                    <div className="mt-2">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="complain"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Complaint
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="complain"
                        name="complain"
                        rows={4}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={""}
                      />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      Please describe your complaint in detail.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Home;
