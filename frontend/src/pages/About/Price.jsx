import React from "react";

const Price = () => {
  return (
    <div className="price-area section-border-bottom pb-40 pt-60">
      <div className="row justify-content-between title-margin mb-45">
        <div className="col-xl-6 col-lg-5 col-md-4 col-sm-12 col-12 d-flex align-items-center">
          <div className="title">
            <h2 className="position-relative pl-25">Pricing Plans</h2>
          </div>
        </div>
        <div className="col-xl-6 col-lg-7 col-md-8 col-sm-12 col-12 text-right">
          <div className="title-content text-right">
            <p className="text-left">
              Eva cididunt ut labore et dolor magna antiqua.Ut ad enum ad dolor
              sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>

      <div className="row price-wrapper justify-content-center">
        {/* Hourly Plan */}
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-12">
          <div className="single-price white-bg shadow-hover transition3 border-radius12 pl-45 pr-45 pt-45 pb-50 mb-30">
            <div className="price-table-header pb-22">
              <h4 className="theme-border-bottom pb-22">Hourly</h4>
              <h5 className="theme-color f-400">
                <span className="rate pr-12">$129</span> / Per Hour
              </h5>
            </div>
            <ul className="price-list mt-25 mb-30">
              <li className="d-flex align-items-center">
                <span className="theme-color d-inline-block text-center">
                  <i className="far fa-check"></i>
                </span>
                <p className="mb-0 ml-20">Ancididunt ut labore et dolore</p>
              </li>
              <li className="d-flex align-items-center">
                <span className="theme-color d-inline-block text-center">
                  <i className="far fa-check"></i>
                </span>
                <p className="mb-0 ml-20">Magna aliqua. Ut enim ad</p>
              </li>
              <li className="d-flex align-items-center">
                <span className="theme-color d-inline-block text-center">
                  <i className="far fa-check"></i>
                </span>
                <p className="mb-0 ml-20">Dinim veniam, quis nostrud</p>
              </li>
              <li className="d-flex align-items-center">
                <span className="secondary-color3 disable d-block text-center">
                  <i className="far fa-times"></i>
                </span>
                <p className="mb-0 ml-20">Exercitation ullamco laboris</p>
              </li>
              <li className="d-flex align-items-center">
                <span className="secondary-color3 disable d-inline-block text-center">
                  <i className="far fa-times"></i>
                </span>
                <p className="mb-0 ml-20">Nisi ut aliquip ex ea commodo</p>
              </li>
            </ul>
            <div className="my-btn d-inline-block">
              <a href="#" className="btn theme-bg text-capitalize f-700">
                Sign Up
              </a>
            </div>
          </div>
        </div>

        {/* Project Base Plan */}
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-12">
          <div className="single-price white-bg shadow-hover transition3 border-radius12 pl-45 pr-45 pt-45 pb-50 mb-30">
            <div className="price-table-header pb-22">
              <h4 className="theme-border-bottom pb-22">Project Base</h4>
              <h5 className="theme-color f-400">
                <span className="rate pr-12">$499</span> / Per Project
              </h5>
            </div>
            <ul className="price-list mt-25 mb-30">
              <li className="d-flex align-items-center">
                <span className="theme-color d-inline-block text-center">
                  <i className="far fa-check"></i>
                </span>
                <p className="mb-0 ml-20">Ancididunt ut labore et dolore</p>
              </li>
              <li className="d-flex align-items-center">
                <span className="theme-color d-inline-block text-center">
                  <i className="far fa-check"></i>
                </span>
                <p className="mb-0 ml-20">Magna aliqua. Ut enim ad</p>
              </li>
              <li className="d-flex align-items-center">
                <span className="theme-color d-inline-block text-center">
                  <i className="far fa-check"></i>
                </span>
                <p className="mb-0 ml-20">Dinim veniam, quis nostrud</p>
              </li>
              <li className="d-flex align-items-center">
                <span className="theme-color d-inline-block text-center">
                  <i className="far fa-check"></i>
                </span>
                <p className="mb-0 ml-20">Exercitation ullamco laboris</p>
              </li>
              <li className="d-flex align-items-center">
                <span className="secondary-color3 disable d-inline-block text-center">
                  <i className="far fa-times"></i>
                </span>
                <p className="mb-0 ml-20">Nisi ut aliquip ex ea commodo</p>
              </li>
            </ul>
            <div className="my-btn d-inline-block">
              <a href="#" className="btn theme-bg text-capitalize f-700">
                Sign Up
              </a>
            </div>
          </div>
        </div>

        {/* Full Time Plan */}
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-12">
          <div className="single-price white-bg shadow-hover transition3 border-radius12 pl-45 pr-45 pt-45 pb-50 mb-30">
            <div className="price-table-header pb-22">
              <h4 className="theme-border-bottom pb-22">Full Time</h4>
              <h5 className="theme-color f-400">
                <span className="rate pr-12">$2999</span> / Per Month
              </h5>
            </div>
            <ul className="price-list mt-25 mb-30">
              <li className="d-flex align-items-center">
                <span className="theme-color d-inline-block text-center">
                  <i className="far fa-check"></i>
                </span>
                <p className="mb-0 ml-20">Ancididunt ut labore et dolore</p>
              </li>
              <li className="d-flex align-items-center">
                <span className="theme-color d-inline-block text-center">
                  <i className="far fa-check"></i>
                </span>
                <p className="mb-0 ml-20">Magna aliqua. Ut enim ad</p>
              </li>
              <li className="d-flex align-items-center">
                <span className="theme-color d-inline-block text-center">
                  <i className="far fa-check"></i>
                </span>
                <p className="mb-0 ml-20">Dinim veniam, quis nostrud</p>
              </li>
              <li className="d-flex align-items-center">
                <span className="theme-color d-inline-block text-center">
                  <i className="far fa-check"></i>
                </span>
                <p className="mb-0 ml-20">Exercitation ullamco laboris</p>
              </li>
              <li className="d-flex align-items-center">
                <span className="theme-color d-inline-block text-center">
                  <i className="far fa-check"></i>
                </span>
                <p className="mb-0 ml-20">Nisi ut aliquip ex ea commodo</p>
              </li>
            </ul>
            <div className="my-btn d-inline-block">
              <a href="#" className="btn theme-bg text-capitalize f-700">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
