const Reference = () => {
  const references = [
    {
      id: 1,
      name: "Sarah Jeferssion",
      company: "eThemeStudio",
      image: "images/resume/client-img1.jpg",
      socialLinks: [
        { icon: "fab fa-facebook-f", href: "#" },
        { icon: "fab fa-linkedin-in", href: "#" },
        { icon: "fab fa-instagram", href: "#" },
      ],
    },
    {
      id: 2,
      name: "Peter Parker",
      company: "Computers",
      image: "images/resume/client-img2.jpg",
      socialLinks: [
        { icon: "fab fa-facebook-f", href: "#" },
        { icon: "fab fa-linkedin-in", href: "#" },
        { icon: "fab fa-instagram", href: "#" },
      ],
    },
    {
      id: 3,
      name: "Tom Moody",
      company: "YourHive",
      image: "images/resume/client-img3.jpg",
      socialLinks: [
        { icon: "fab fa-facebook-f", href: "#" },
        { icon: "fab fa-linkedin-in", href: "#" },
        { icon: "fab fa-instagram", href: "#" },
      ],
    },
    {
      id: 4,
      name: "Anatolia Eva",
      company: "Dhaka University",
      image: "images/resume/client-img4.jpg",
      socialLinks: [
        { icon: "fab fa-facebook-f", href: "#" },
        { icon: "fab fa-linkedin-in", href: "#" },
        { icon: "fab fa-instagram", href: "#" },
      ],
    },
  ];

  return (
    <div className="team-area mt-16">
      {/* Title Section */}
      <div className="flex flex-wrap justify-between items-center title-margin mb-12">
        <div className="w-full lg:w-6/12 xl:w-6/12 pr-0 flex items-center mb-4 lg:mb-0">
          <div className="title">
            <h2 className="relative pl-6 text-2xl lg:text-3xl font-bold">
              References & Recognition
            </h2>
          </div>
        </div>
        <div className="w-full lg:w-6/12 xl:w-6/12 text-right">
          <div className="title-content text-right">
            <p className="text-left text-gray-600">
              Eva cididunt ut labore et dolor magna antiqua.Ut ad enum ad dolor
              sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>

      {/* References Grid */}
      <div className="team-wrapper">
        <div className="flex flex-wrap items-start border-t border-gray-200 pt-8 gap-y-8">
          {references.map((reference) => (
            <div
              key={reference.id}
              className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 px-4"
            >
              <div className="single-team relative group">
                <div className="team-img overflow-hidden rounded-xl transition-all duration-500 relative">
                  <img
                    className="w-full z-10 group-hover:scale-110 transition-transform duration-500"
                    src={reference.image}
                    alt={reference.name}
                  />
                  <ul className="social-link text-center absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {reference.socialLinks.map((social, index) => (
                      <li key={index} className="inline-block">
                        <a
                          className="text-center px-3 py-2 inline-block bg-white text-gray-700 rounded-full mx-1 transition-all duration-300 hover:bg-blue-500 hover:text-white"
                          href={social.href}
                        >
                          <i className={social.icon}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="team-content text-center mt-5">
                  <h4 className="font-semibold text-lg mb-1">
                    {reference.name}
                  </h4>
                  <span className="text-gray-600">{reference.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reference;
