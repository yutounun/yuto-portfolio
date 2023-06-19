const React = require("react");

exports.onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      data-name="BMC-Widget"
      data-cfasync="true"
      src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
      data-id="Robin.Ich"
      data-description="Support me on Buy me a beer!"
      data-message="Good day!!"
      data-color="#FF813F"
      data-position="Right"
      data-x_margin="18"
      data-y_margin="18"
    ></script>,
  ]);
};
