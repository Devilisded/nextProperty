import {
  IconArrowRight,
  IconHome,
  IconLogin,
  IconPlus,
} from "@tabler/icons-react";
import Link from "next/link";
const Navbar = () => {
  return (
    <header
      className="main-header"
      style={{ background: "rgba(254,254,254,0.5)" }}
    >
      <div className="container-fluid ">
        <div className="header-block">
          <div className="header-left">
            <Link href="/">
              <span className="logo">
                <img src="/images/logo.png" alt="logo" />
              </span>
            </Link>
          </div>
          <div className="header-center">
            <div className="main-search">
              <div id="highlightsearchdiv">
                <div className="form-group"></div>
              </div>
            </div>
          </div>
          <div className="header-right">
            <Link href="/allproperties">
              <div className="d-flex justify-content-center align-items-center gap-2 btn btn-primary">
                <IconHome className="sidebar-faicon" />
                <div>
                  View <span className="d-none d-md-inline">Properties</span>
                </div>
              </div>
            </Link>
            <Link href="/addproperty">
              <span className="add" title="List Property">
                <span>
                  <IconPlus className="sidebar-faicon" />
                </span>
                List Property<span className="blink">Free</span>
              </span>
            </Link>
            {/* {!currentUser ? ( */}
            <Link href="/login">
              <span className="login" title="Login">
                Login
                <span>
                  <IconLogin className="sidebar-faicon" />
                </span>
              </span>
            </Link>
            {/* ) : (
            <Link href="/user/dashboard">
              <span className="login" title="Dashboard">
                Dashboard
                <IconArrowRight />
              </span>
            </Link>
            )} */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
