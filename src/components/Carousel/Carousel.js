import React from "react";
import "antd/dist/antd.css";
import apt from "../../images/apartmentclass.jpg"
import ReactDOM from "react-dom";
import { Carousel, Radio } from "antd";
import "./Carousel.scss";

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

class PositionCarouselDemo extends React.Component {
  state = {
    dotPosition: 'top',
  };

  handlePositionChange = ({ target: { value: dotPosition } }) => this.setState({ dotPosition });
render() {
    const { dotPosition } = this.state;
    return (
      <>
      
        <Radio.Group
          onChange={this.handlePositionChange}
          value={dotPosition}
          style={{ marginBottom: 8 }}
        >
          
          <Radio.Button value="bottom">Bottom</Radio.Button>
          
          
        </Radio.Group>
        <Carousel dotPosition={dotPosition}>
        
          <div>
            <img src={apt} alt="aptclass" />
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </>
    );
  }
}

let mountNode = document.getElementById("root")

ReactDOM.render(<PositionCarouselDemo />, mountNode);

export default PositionCarouselDemo;