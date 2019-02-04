var React = require('react');
var $ = require ('jquery');

/****************************  RootComp  ******************************/
module.exports.RootComp = React.createClass({
  getInitialState: function() {
    return {responseData:null};
  },
  componentDidMount:function()
  {
    let _this=this;
    $.ajax({
      url: "api/getData",
      dataType: 'json',
      type: 'GET',
      success: function(data) {
        console.log("Success");
        _this.setState({responseData:data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.log("Error...", err);
      }.bind(this)
    });
  },

  render: function() {
    console.log(this.state.responseData);
    return (
      <div>
        <h1> Assignment </h1>
        {this.props.children}
      </div>
    )
  }
});
