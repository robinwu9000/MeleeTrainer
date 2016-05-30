var App = React.createClass({
  render: function() {
    return (
      <div>
        <div id="top-banner">
          <Banner />
        </div>
        <div id="main">
          <CharacterList />
        </div>
      </div>
    );
  }
})


var Banner = React.createClass({
  render: function() {
    return (
      <ul id={"header-bar"}>
        <li id={"title"}>
          <h2>Melee Training App</h2>
        </li>
        <li id={"timer"}>
          <Timer />
        </li>
      </ul>
    );
  }
});

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

var CharacterList = React.createClass({
  chars: [{id: 1, name: "Fox"}, {id: 2, name: "Marth"},
               {id: 3, name: "Sheik"}, {id: 4, name: "Captain Falcon"},
               {id: 5, name: "Falco"}],

  render: function() {
    var charNodes = this.chars.map(function(char) {
      return(
        <Character name={char.name} key={char.id}></Character>
      );
    });

    return (
      <div className="char-list">
        {charNodes}
      </div>
    );
  }

});

var Character = React.createClass({
  handleClick: function () {
    return;
  },

  render: function() {
    return (
      <div>
        <h4>
          {this.props.name}
        </h4>
      </div>
    );
  }
});

var TechniqueList = React.createClass({
  techniques: [{tech: "Short Hop", reps: 20},
               {tech: "Fast Fall", reps: 20}],
});

ReactDOM.render(
  <App />,
  $("#content")[0]
)
