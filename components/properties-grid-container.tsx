import PropertyCard from "./property-card";
import PropTypes from "prop-types";

const PropertiesGridContainer = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-start justify-center ${className}`}
    >
      <div className="flex-1 flex flex-row flex-wrap items-start justify-center gap-[8px]">
        <PropertyCard
          imageDimensions="/property-image@2x.png"
          dimensionText="/ellipse-1@2x.png"
          propFlex="unset"
          propMinWidth="unset"
          propWidth="350px"
        />
        <PropertyCard
          imageDimensions="/property-image1@2x.png"
          dimensionText="/ellipse-1@2x.png"
          propFlex="unset"
          propMinWidth="unset"
          propWidth="350px"
        />
        <PropertyCard
          imageDimensions="/property-image2@2x.png"
          dimensionText="/ellipse-1@2x.png"
          propFlex="unset"
          propMinWidth="unset"
          propWidth="350px"
        />
        <PropertyCard
          imageDimensions="/property-image3@2x.png"
          dimensionText="/ellipse-1@2x.png"
          propFlex="unset"
          propMinWidth="unset"
          propWidth="350px"
        />
        <PropertyCard
          imageDimensions="/property-image@2x.png"
          dimensionText="/ellipse-1@2x.png"
          propFlex="unset"
          propMinWidth="unset"
          propWidth="350px"
        />
        <PropertyCard
          imageDimensions="/property-image4@2x.png"
          dimensionText="/ellipse-11@2x.png"
          propFlex="unset"
          propMinWidth="unset"
          propWidth="350px"
        />
        <PropertyCard
          imageDimensions="/property-image5@2x.png"
          dimensionText="/ellipse-11@2x.png"
          propFlex="unset"
          propMinWidth="unset"
          propWidth="350px"
        />
        <PropertyCard
          imageDimensions="/property-image6@2x.png"
          dimensionText="/ellipse-11@2x.png"
          propFlex="unset"
          propMinWidth="unset"
          propWidth="350px"
        />
      </div>
    </div>
  );
};

PropertiesGridContainer.propTypes = {
  className: PropTypes.string,
};

export default PropertiesGridContainer;
