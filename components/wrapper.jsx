var React = require('react');
var ReactDOM = require('react-dom');
var Rb = require('react-bootstrap');
var _ = require('lodash');
var TimerMixin = require('react-timer-mixin');
(function() {
    'use strict';
    var vm = require('./viewmodel');
    module.exports = React.createClass({
        mixins: [TimerMixin],
        getInitialState: function() {
            return vm({},{type: 'init', data: this.props} );
        },
        dispatch: function(action) {
            this.setState( vm(this.state, action) );
        },
        componentDidMount: function() {
            var self = this;
            this.setInterval(function() {
              $.get("http://new.chinnnoo.xyz:8080/test/setData", function(data) {
                self.dispatch({type: 'update', data: eval("(" + data + ")")});
              });
            },1000);
            //Receive data from server.
        },
        render: function() {
            var dispatch = _.bind(this.dispatch, this);
            /* Components */
            var Monitor = require('./monitor.jsx');
            var StatusLight = require('./status-light/wrapper.jsx');
            var Col = Rb.Col;
            /* Styles */
            var style = {
              background: 'url(../images/bus.png) no-repeat',
              backgroundSize: "100% 100%",
              height: "500px",
              margin: 30
            };
            /* JSX */
            return (
                <div style={style}>
                  <div style={{height: "40%"}}></div>
                  <div style={{height: "30%"}}>
                    <Col sm={5} xs={5}>
                      <Col sm={6} smOffset={4} xs={6} xsOffset={4}>
                        <Monitor dispatch={dispatch} {...this.state} />
                      </Col>
                    </Col>
                    <Col sm={2} xs={2} style={{height: "100%"}}>
                      <div style={{height: "20%"}}></div>
                        <Col sm={12}>
                          <StatusLight status={this.state.status} />
                        </Col>
                    </Col>
                  </div>
                  <div style={{height: "30%"}}></div>

                </div>
            );
        }
    });

}());

var Wrapper = require('./wrapper.jsx');
ReactDOM.render(
    <Wrapper/>, document.getElementById("container"));
