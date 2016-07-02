var React = require('react');
var Rb = require('react-bootstrap');

(function() {
  'use strict';

    module.exports = React.createClass({
        render: function() {
          /* Components */
          var Row = Rb.Row;
          /* Styles */
          var style = {
            backgroundColor: "#00BCD4",
            color: "#FFF",
            border: "2px solid #FFF",
            borderRadius: "6px",
            textAlign: "center",
            margin: 0,
            padding: 4
          };

          return (
            <div style={style}>
                <p  style={{margin: 0}}>{this.props.title}</p>
                <hr style={{margin: 0}}></hr>
                <h4 style={{margin: 3}}>{this.props.value}</h4>
            </div>
          );
        }
    });

}());
