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
      <a href="/">
        <img src="/images/wasquehal/logoRSC.png" alt="logo" style={{ width: "80px", height: "80px" }} className="img-responsive" />
      </a>
    </div>
    <div className="ft_right_wrapper">
      <ul>
        <li>
            <a href="/contact" className="btn btn-primary pl-4 pr-4">
              Contact
            </a>
        </li>
      </ul>
    </div>
  </div>

  </>;
}