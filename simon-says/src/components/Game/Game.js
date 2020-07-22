import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import Help from "./Help";
import Simon from "./Simon";
import GamePiece from "./GamePiece";

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      time: {},
      seconds: 1,
      displayHelp: false,
      gameStart: false,
      boop: false,
    };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs) {
    let divisorForMinutes = secs % (60 * 60);
    let minutes = Math.floor(divisorForMinutes / 60);

    let divisorForSeconds = divisorForMinutes % 60;
    let seconds = Math.ceil(divisorForSeconds);

    let obj = {
      m: minutes,
      s: seconds,
    };
    return obj;
  }

  componentDidMount() {
    let timerLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timerLeftVar });
  }

  startTimer() {
    if (this.timer === 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
    if (seconds === 0) {
      clearInterval(this.timer);
      if (this.state.boop) {
        this.stopBoopSimon();
      }
    }
  }
  // How to Play button: line 16  will be the opposite of what displayHelp is on line 9
  toggleHelp = () => {
    this.setState({
      displayHelp: !this.state.displayHelp,
    });
  };
  // pressing on the button on simonsays
  startBoopSimon = (piece, duration) => {
    console.log("Boop boop, Starting noew..." + duration);
    this.setState({ seconds: duration });
    this.startTimer();
  };

  stopBoopSimon = () => {
    console.log("stopppp boop! Stop!");
  };
  // Start Button: line 22 will be the opposite of what gameStart is on line 10
  startGame = () => {
    if (this.state.gameStart === false) {
      this.setState({
        gameStart: true,
      });
      // this.startTimer();
      this.setState({
        boop: true
      })
      this.startBoopSimon("1", "10");
      return;
    }
    this.setState({
      // gameStart: !this.state.gameStart
      countDownNumber: this.state.countDownNumber - 1,
    });
  };
  render() {
    return (
      <div className="welcomeTo">
        Welcome to Simon Says Game
        <Row>
          <Col xs={4}>
            <Button onClick={this.toggleHelp} id="howToPlay">
              {this.state.displayHelp === false ? "How To Play" : "Hide"}
            </Button>
            {this.state.displayHelp === true ? <Help /> : null}
          </Col>
          <Col xs={2}>
            <GamePiece number="1" />
            <GamePiece number="3" />
          </Col>

          <Col xs={2}>
            <GamePiece number="2" />
            <GamePiece number="4" />
          </Col>
          <Col xs={4}>
            <div>
              <Button onClick={this.startGame} id="startButton">
                Start Game
              </Button>
              <Row>
                {/* the timer will start once startButton is pressed  */}
                {this.state.gameStart === true ? this.state.time.s : null}
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Game;
