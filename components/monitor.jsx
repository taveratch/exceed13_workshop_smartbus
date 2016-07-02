var React = require('react');
var Rb = require('react-bootstrap');

(function() {
    'use strict';
    var vm = require('./viewmodel.js');
    var calculateTotal = vm.calculateTotal;
    module.exports = React.createClass({
        render: function() {
            /* Components */
            var Display = require('./display.jsx');
            var Row = Rb.Row;
            var Col = Rb.Col;

            /* Styles */
            /* JSX */
            return (
                <div>
                    <Row style={{marginBottom: 16}}>
                          <Col xs={6} style={{paddingRight: 8}}>
                              <Display title="IN" value={this.props.incoming.value}/> {/*In coming people*/}
                          </Col>
                          <Col xs={6} style={{paddingLeft: 8}}>
                              <Display title="OUT" value={this.props.outgoing.value}/> {/*Out going people*/}
                          </Col>
                    </Row>
                    <Row>
                      <Col xs={12}>
                          <Display title="TOTAL" value={calculateTotal(this.props.incoming, this.props.outgoing)}/> {/*Total*/}
                      </Col>
                    </Row>

                </div>
            );
        }
    });

}());
