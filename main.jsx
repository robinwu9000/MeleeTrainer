var App = React.createClass({
  render: function() {
    return (
      <div className="banner">
        <h1>Melee Training App</h1>
      </div>
    );
  }
})


// var Banner = React.createClass({
//   render: function() {
//     return (
//       <div>Name</div>
//     );
//   }
// });

var Timer = React.createClass({
  getInitialState: function() {
    return { seconds: 1800 };
  },

  tick: function() {
    this.setState({seconds: this.state.seconds - 1});
    if(this.state.seconds <= 0) {
      clearInterval(this.interval);
    }
  },

  start: function() {
    this.interval = setInterval(this.tick, 1000);
  },

  stop: function() {
    clearInterval(this.interval);
  },

  componentDidMount: function() {
    this.setState({seconds: this.props.seconds || this.state.seconds});
  },

  componentWillUnmount: function() {
    clearInterval(this.interval);
  },

  render: function() {
    var output = "";
    var minutes = Math.floor(this.state.seconds / 60);
    output += minutes + ":";
    var seconds = Math.floor(this.state.seconds % 60);
    output += (seconds < 10 ? '0' : '') + seconds;
    return (
      <div>
        {output} <StartStopButton parent={this}/>
      </div>
    );
  }
});

var StartStopButton = React.createClass({
  getInitialState: function() {
    return {running: false};
  },

  handleClick: function() {
    if(this.state.running) {
      this.props.parent.stop();
    } else {
      this.props.parent.start();
    }
    this.setState({running: !this.state.running});
  },

  render: function() {
    var text = this.state.running ? "Pause" : "Start";
    return (
      <button onClick={this.handleClick}>{text}</button>
    );
  }
})

ReactDOM.render(
  <Timer />,
  $("#content")[0]
)
