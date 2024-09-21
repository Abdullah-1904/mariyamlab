import { BookA, Eye, MessageCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/card";

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
  const data = [
    { id: 1, title: "Professional Team" },
    { id: 2, title: "Accuracy" },
    { id: 3, title: "Branches" },
    { id: 4, title: "Experience" },
    { id: 5, title: "Tests" },
    { id: 6, title: "Card Title 6" },
    { id: 6, title: "Card Title 7" },
    { id: 6, title: "Card Title 8" },
  ];
  return (
    <div>
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
      <div className="relative w-full h-dvh">
        <div
          className="absolute top-0 left-0 w-full  h-[70%]"
          style={{
            backgroundImage: "url('LabsTechnicianWorking.jpg')",
            opacity: 0.3,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -2, // Ensure the background is behind other content
          }}
        />
        <div className="absolute ml-10 mt-80">
          <Link to={"/"}>
            <button className=" bg-red-300 w-36 py-1  justify-center rounded">
              Contact Us
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-end ">
          <div className="py-4 bg-blue-100 w-80 flex mx-10 rounded-xl justify-center my-10">
            <BookA />
            <h1 className="ml-2">Book an appointment</h1>
          </div>
          <div className="py-4 bg-blue-100 w-80 flex mx-10 rounded-xl justify-center my-10">
            <Eye />
            <h1 className="ml-2">View your Reports</h1>
          </div>
          <div className="py-4 bg-blue-100 w-80 flex mx-10 rounded-xl justify-center my-10">
            <MessageCircle />
            <Link to={"#"} onClick={handlefeeback}>
              <h1 className="ml-2">Post Your Feedback</h1>
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
      {/*  */}
      <div className="top-0">
        <h1 className="text-4xl flex justify-center">Our Services</h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 p-4 w-screen ">
            {data.map((item) => (
              <Card key={item.id} title={item.title} className="my-4 mx-10" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
