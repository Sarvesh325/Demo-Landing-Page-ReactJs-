import React from "react";
function Footer() {
  return (
    <>
      <div className="container-fluid  ">
        {/* <!-- Footer --> */}
        <footer className="text-center text-lg-start bg-light text-muted ">
          {/* <!-- Section: Social media --> */}
          <hr />
          {/* <!-- Section: Social media --> */}

          {/* <!-- Section: as  --> */}
          <section className="">
            <div className="container text-center text-md-start mt-5">
              {/* <!-- Grid row --> */}
              <div className="row mt-3">
                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* <!-- Content --> */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>
                    Company Name
                  </h6>
                  <p>
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* <!-- as --> */}
                  <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Angular
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      React
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Vue
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Laravel
                    </a>
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* <!-- as --> */}
                  <h6 className="text-uppercase fw-bold mb-4">Useful as</h6>
                  <p>
                    <a to="/" className="text-reset">
                      Home
                    </a>
                  </p>
                  <p>
                    <a to="#!" className="text-reset">
                      Contact
                    </a>
                  </p>
                  <p>
                    <a to="#!" className="text-reset">
                      About
                    </a>
                  </p>
                  <p>
                    <a to="#!" className="text-reset">
                      Github
                    </a>
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* <!-- as --> */}
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <i className="fas fa-home me-3"></i> 2/4,Jyoti
                    Garden,Saswad-412301
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3"></i>
                    sarveshbhagwat@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3"></i> +918459213357
                  </p>
                  <p>
                    <i className="fas fa-print me-3"></i> +918421232892
                  </p>
                </div>
                {/* <!-- Grid column --> */}
              </div>
              {/* <!-- Grid row --> */}
            </div>
          </section>
          {/* <!-- Section: as  --> */}

          {/* <!-- Copyright --> */}
          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            © 2023 Copyright
            <a
              className="text-reset fw-bold"
              href="https://mdbootstrap.com/"
            ></a>
          </div>
          {/* <!-- Copyright --> */}
        </footer>
        {/* <!-- Footer --> */}
      </div>
    </>
  );
}

export default Footer;
