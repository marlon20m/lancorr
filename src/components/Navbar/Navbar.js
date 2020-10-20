import React from "react";
import "antd/dist/antd.css";
import { Menu } from "antd";
import "./Navbar.scss";



const Navbar = () => (
<div>
  
    
      <div className="logo" />
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['3']}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Service</Menu.Item>
        <Menu.Item key="3">About</Menu.Item>
      </Menu>
    
    
  
  </div>
)

export default Navbar;
