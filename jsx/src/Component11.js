import React, { Component } from 'react';

class Component11 extends Component {

    render() {
        var s = "axxf"
        return (
            <div>
              {
                  s.length > 5?
                  <b>{s}</b>:
                  s
              }
              
            </div>
        );
    }
}

export default Component11
