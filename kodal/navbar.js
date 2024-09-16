import react from "react";
import React from "react";
import reactDOM from "react-dom";

const Navbar = () => {
  return (
    <div className="menu-area navbar-fixed-top rtl">
      <div className="container">
        <div className="row">
          {/* Navigation starts */}
          <div className="col-md-12">
            <div className="mainmenu">
              <div className="navbar navbar-nobg">
                <div className="navbar-header">
                  <a className="navbar-brand" href="#">
                    <span>النخبة الصيانة </span>الغسالات والثلاجات والتكييف
                  </a>
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>

                <div className="navbar-collapse collapse">
                  <nav>
                    <ul className="nav navbar-nav navbar-right">
                      <li className="active">
                        <a className="smooth_scroll" href="#slider">
                          الرئيسية
                        </a>
                      </li>
                      <li>
                        <a className="smooth_scroll" href="#service">
                          الماركات
                        </a>
                      </li>
                      <li>
                        <a className="smooth_scroll" href="#about">
                          من نحن
                        </a>
                      </li>
                      <li>
                        <a className="smooth_scroll" href="#work">
                          خدماتنا
                        </a>
                      </li>
                      <li>
                        <a className="smooth_scroll" href="#testimonial">
                          تواصل معنا
                        </a>
                      </li>
                      <li>
                        <a className="smooth_scroll" href="#contact">
                          {/* Include SVG here if needed */}
                          {/* For now, removing the invalid SVG */}
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          {/* Navigation ends */}
        </div>
      </div>
    </div>
  );
};

reactDOM.render(<Navbar />, document.getElementById("root"));
