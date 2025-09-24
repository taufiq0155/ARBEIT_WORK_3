// MoreAbout.jsx
const MoreAbout = () => {
  return (
    <div className="more-about-area border-b border-gray-200 mt-16 pb-4">
      <div className="row flex justify-between items-center mb-11">
        <div className="col flex items-center pr-0">
          <div className="title">
            <h2 className="relative pl-6 text-2xl font-bold">More About Me</h2>
          </div>
        </div>
        <div className="col text-right">
          <div className="title-content text-right">
            <p className="text-left text-gray-600">
              Eva cididunt ut labore et dolor magna antiqua.Ut ad enum ad dolor
              sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>

      <div className="more-about-wrapper">
        <div className="row flex items-start border-t border-gray-200 pb-9">
          {/* Knowledge Section */}
          <div className="col pr-4">
            <h3 className="font-normal mb-7 text-lg font-semibold">
              Knowledge
            </h3>
            <ul className="single-more-about mb-5">
              {[
                "Domain Registration",
                "Search Engine Optimization",
                "Keyword Research",
                "Email Collection",
                "Lead Generation",
                "Article Writing",
                "Data Entry",
                "Architectural Drawing",
              ].map((item, index) => (
                <li key={index} className="mb-4 font-bold text-gray-800">
                  <span className="text-blue-500 pr-2">
                    <i className="far fa-check"></i>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Software Section */}
          <div className="col pr-4">
            <h3 className="font-normal mb-7 text-lg font-semibold">
              Tools & Software
            </h3>
            <ul className="single-more-about mb-5">
              {[
                "ChatGPT",
                "Midjourney",
                "Jasper",
                "Google Gemini",
                "Microsoft Office",
                "Google Business Suites",
                "AWS Clouds",
                "Slack",
              ].map((item, index) => (
                <li key={index} className="mb-4 font-bold text-gray-800">
                  <span className="text-blue-500 pr-2">
                    <i className="far fa-long-arrow-right"></i>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Hobby & Interests Section */}
          <div className="col pr-4">
            <h3 className="font-normal mb-7 text-lg font-semibold">
              Hobby & Interests
            </h3>
            <ul className="single-more-about mb-5">
              {[
                "Musics",
                "Travelling",
                "Watching Movies",
                "Reading Books",
                "Skill Development",
                "Scuba Diving",
                "Trekking & Hiking",
                "Teaching",
              ].map((item, index) => (
                <li key={index} className="mb-4 font-bold text-gray-800">
                  <span className="text-blue-500 pr-2">
                    <i className="fas fa-heart"></i>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreAbout;
