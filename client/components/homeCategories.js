import React from "react";
import { registerComponent } from "/imports/plugins/core/layout/lib/components";
import { Button } from "/imports/plugins/core/ui/client/components";

    const containerStyles = {
      margin: 50,
    };

    const categoriesStyles = {
      height: 200,
      padding: 20,
      margin: 100,
      textAlign: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)' ,
      color: '#fefefe',
    };

    const buttonStyles = {
      marginTop: 20,
      fontSize: 20,
      backgroundColor: '#00bcd4',
      color: '#fefefe',
    };

    const herbsStyles = {
      backgroundImage: "url(' https://s3-us-west-2.amazonaws.com/nmp-media/herbs.jpeg ')",
      height: 400,
    };

    const homeopathyStyles = {
      backgroundImage: "url(' https://s3-us-west-2.amazonaws.com/nmp-media/homeopathy.jpeg ')",
      height: 400,
    };

    const probioticsStyles = {
      backgroundImage: "url(' https://s3-us-west-2.amazonaws.com/nmp-media/probiotics.jpeg ')",
      height: 400,
    };

    const vitaminsStyles = {
      backgroundImage: "url(' https://s3-us-west-2.amazonaws.com/nmp-media/vitamins.png ')",
      height: 400,
    };

    const homeCategories = () => (
      <div className="container-fluid" style={containerStyles}>

        <div className="row">

          <div className="col-md-6" style={herbsStyles}>
            <div style={categoriesStyles}>
              <h1>HERBS</h1>
              <Button label="SHOP HERBS" bezelStyle="flat" style={ buttonStyles } />
            </div>
          </div>

          <div className="col-md-6" style={homeopathyStyles}>
            <div style={categoriesStyles}>
              <h1>HOMEOPATHICS</h1>
              <Button label="SHOP HOMEOPATHICS" bezelStyle="flat" style={ buttonStyles } />
            </div>
          </div>

        </div>

        <div className="row">
          <div className="col-md-6" style={probioticsStyles}>
            <div style={categoriesStyles}>
              <h1>PROBIOTICS</h1>
              <Button label="SHOP PROBIOTICS" bezelStyle="flat" style={ buttonStyles } />
            </div>
          </div>

          <div className="col-md-6" style={vitaminsStyles}>
            <div style={categoriesStyles}>
              <h1>VITAMINS</h1>
              <Button label="SHOP VITAMINS" bezelStyle="flat" style={ buttonStyles } />
            </div>
          </div>

        </div>

      </div>
    );

// Register react component.
// Now MyComponent can be accessed anywhere on the client with the name "my-react-component"
registerComponent({
  name: "home-categories",
  component: homeCategories
});

export default homeCategories;
