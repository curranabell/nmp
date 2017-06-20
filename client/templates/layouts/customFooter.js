import React, { Component } from "react";
import { registerComponent, getComponent } from "/imports/plugins/core/layout/lib/components";

    class customFooter extends Component {
      render () {

        const footerStyles = {
          color: '#000',
          paddingTop: 30,
          paddingBottom: 30,
          justifyContent: 'center',
        };

        const containerStyles = {
            backgroundColor: '#efefef',
            display: 'flex',
            flexWrap: 'wrap',
        };

        const imgStyles = {
          paddingTop: 10,
        };

        return (
          <div className="container-fluid" style={ containerStyles }>
            <div className="container-fluid">
              <div className="row" style={ footerStyles }>
                <div className="col-sm-4">
                  <h3>COMPANY:</h3>
                  <p>HOME</p>
                  <p>ABOUT</p>
                </div>

                <div className="col-sm-4">
                  <h3>CONTACT:</h3>
                  <p>CONTACT @ NATURALMEDICINEPHARMACY.COM</p>
                  <p>KILAUEA, HAWAII 96754 USA</p>
                </div>

                <div className="col-sm-4">
                  <img src="https://s3-us-west-2.amazonaws.com/nmp-media/nmp-logo.png" style={ imgStyles }/>
                </div>
              </div>
            </div>
          </div>
      );
    }
  }

// Register react component.
// Now MyComponent can be accessed anywhere on the client with the name "my-react-component"
registerComponent({
  name: "customFooter",
  component: customFooter
});

export default customFooter;
