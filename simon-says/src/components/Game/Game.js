import React from 'react';
import { Row, Col, Button } from "react-bootstrap";
import Help from './Help'



class Game extends React.Component {
    state = {
        displayHelp: false
    }
    toggleHelp = () => {
        this.setState({
            displayHelp: !this.state.displayHelp
        })
    }
  render() {
    return (
      <div className="welcomeTo">
        Welcome to Simon Says Game
        <Row>
          <Col>
            <Button onClick= {this.toggleHelp}id="howToPlay">
              {this.state.displayHelp === false ? "How To Play" : "Hide"}
            </Button>
            {this.state.displayHelp === true ? <Help/> : null}
    
          </Col>
          <div className="fullCircle">
            <Col>
              <div className="quarterTopLeftCircle"></div>

              <div className="quarterBottomLeftCircle"></div>
            </Col>
          </div>
          <Col>
            <div className="quarterTopRightCircle"></div>
            <div className="quarterBottomRightCircle"></div>
          </Col>
          <div>
            <Button id="startGame">Start Game</Button>
          </div>
        </Row>
      </div>
    );
  }
}
export default Game
