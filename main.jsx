var App = React.createClass({
  render: function() {
    return (
      <div className="banner">
        <h1>some shit.</h1>
      </div>
    );
  }
})

ReactDOM.render(
  <App />,
  $("#content")[0]
)
