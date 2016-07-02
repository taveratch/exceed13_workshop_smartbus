var React = require('react');
var Rb = require('react-bootstrap');
(function() {
    'use strict';
    var vm = require('../viewmodel');
    module.exports = React.createClass({
        render: function() {
            var status = this.props.status;
            var path = '../../images/';
            /* Styles */
            var style = {
              backgroundColor: "#FFF",
              borderRadius: 1000,
              height: 25
            };
            var colStyle = {
              textAlign: "center"
            };
            /* Components */
            var Light = require('./light.jsx');
            var Col = Rb.Col;
            /* JSX */
            return (
                <div style={style}>
                    <Col xs={4} sm={4} style={colStyle}>
                      <Light url={vm.isStatus(status,'red') ? path+'red.png' : path+'gray.png' }/> {/* Red light */}
                    </Col>
                    <Col xs={4} sm={4} style={colStyle}>
                      <Light url={vm.isStatus(status,'yellow') ? path+'yellow.png' : path+'gray.png' }/> {/* Red light */}
                    </Col>
                    <Col xs={4} sm={4} style={colStyle}>
                      <Light url={vm.isStatus(status,'green') ? path+'green.png' : path+'gray.png' }/> {/* Red light */}
                    </Col>
                </div>
            );
        }
    });

}());
