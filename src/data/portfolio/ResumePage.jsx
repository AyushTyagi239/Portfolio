import React from "react";

const ResumePage = ({ data }) => {
  return (
    <section className="min-h-screen text-white py-20">

      {/* HERO (CENTERED TEXT) */}
      <div className="px-6 text-center flex flex-col items-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">
          {data.title}
        </h1>

        <p className="text-gray-300 max-w-2xl mb-10">
          {data.description}
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex flex-wrap justify-center gap-5 mb-16">
          <a
            href={data.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 font-semibold shadow-lg hover:shadow-purple-500/40 hover:scale-105 transition-all"
          >
            View Resume
          </a>

          <a
            href={data.resumeUrl}
            download
            className="px-7 py-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:scale-105 transition-all"
          >
            Download PDF
          </a>
        </div>
      </div>

      {/* FULL-WIDTH CENTERED RESUME */}
      <div className="w-screen flex justify-center">
        <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl">
          <iframe
            src={`${data.resumeUrl}#toolbar=0`}
            title="Resume Preview"
            className="w-full h-[85vh]"
          />
        </div>
      </div>

    </section>
  );
};

export default ResumePage;
