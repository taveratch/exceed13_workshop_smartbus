var React = require('react');
(function() {
  'use strict';

    module.exports = React.createClass({
      render: function() {
        var style = {
          display: "block",
          marginLeft: "auto",
          marginRight: "auto"
        };
        return (
          <div style={style}>
            <img src={this.props.url}></img>
          </div>
        );
      }
    });

}());
