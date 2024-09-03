import React, { Suspense } from "react";
import { Avatar } from "@mui/material";

const MyProducts = React.lazy(() => import(`./Index.js`));

const Adminpage = () => {
  return (
    <div className="subApp">
      <div className="siteMenu shadow ">
        <div className="siteMenuContainer">
          <div className="row border-bottom mb-2">
            <div className="col-sm-3 mb-3">
              <Avatar src="" />
            </div>
            <div className="col-sm-9">Owner</div>
          </div>
          <ul className="siteMenuList">
            <li>Dash Board</li>
            <li>Product Management</li>
          </ul>
        </div>
      </div>
      {/* <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav> */}
      <div className="mainPage">
        <div className="headerBar shadow">
          <h2 className="text-white">
            <strong>Illa Shop</strong>
          </h2>
        </div>
        <div className="pageContainer">
          <div className="pageCont">
            <Suspense fallback={<h1>Loading...</h1>}>
              <MyProducts />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminpage;
