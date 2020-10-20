import React from 'react';
import './App.scss';
import { Layout }from "antd";
import Navbar from "./components/Navbar/Navbar"
import PositionCarouselDemo from "./components/Carousel/Carousel"

const { Header, Footer } = Layout;



function App() {
  return (
   <div>
    <Header>
    <Layout className="layout">
    <Navbar />
    <PositionCarouselDemo />
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  </Header>
   </div>
  );
}

export default App;
