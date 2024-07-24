"use client";

export function Header() {
  return <>
  <div className="ft_navi_main_wrapper float_left">
    <div className="ft_menu_wrapper">
      <div className="rp_mobail_menu_main_wrapper">
        <div className="row">
          <div className=" col-sm-12 col-12">
            <div id="toggle">
              <a href="#">
                <i className="fa fa-bars" />
                <span>menu</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <div className="ft_logo_wrapper">
      <a href="index.html">
        <img src="/images/inner/logo.png" alt="logo" />
      </a>
    </div>
    <div className="ft_right_wrapper">
      <ul>
        <li>
          <div className="hs_btn_wrapper d-none d-sm-none d-md-block d-lg-block d-xl-block">
            <ul>
              <li>
                <a href="contact_us.html">contact</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>

  </>;
}