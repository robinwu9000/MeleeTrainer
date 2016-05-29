var App = React.createClass({
  render: function() {
    return (
      <div className="banner">
        <h1>some shit.</h1>
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

  componentDidMount: function() {
    this.setState({seconds: this.props.seconds || this.state.seconds});
    this.interval = setInterval(this.tick, 200);
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
      <div>{output}</div>
    );
  }
});

ReactDOM.render(
  <Timer />,
  $("#content")[0]
)
