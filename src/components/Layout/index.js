import React from "react";
import SideBar from "../SideBar";
import { Outlet } from "react-router-dom";
import './index.scss';

const Layout = () => {
  return (
    <div className="App">
      <SideBar /> {/* Sidebar component */}
      <div className="page">
        {/* Custom HTML tags */}
        <span className="tags top-tags">&lt;body&gt;</span>
        <div className="content">
          {/* Outlet will render child components like Home here */}
          <Outlet />
        </div>
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  );
}

export default Layout;