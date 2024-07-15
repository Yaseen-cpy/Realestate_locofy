import Header from "../components/header";
import Hero from "../components/hero";
import AreaContainer from "../components/area-container";
import FeatureContainer from "../components/feature-container";
import RentPropertiesContainer from "../components/rent-properties-container";
import RentPropertiesForm from "../components/rent-properties-form";
import Form from "../components/form";
import Footer from "../components/footer";

const LandingPage = () => {
  return (
    <div className="w-full h-[5096px] relative bg-gray-white flex flex-col items-center justify-start">
      <Header pROPERTIESHref="/" />
      <Hero />
      <AreaContainer />
      <FeatureContainer />
      <RentPropertiesContainer />
      <RentPropertiesForm />
      <Form />
      <Footer />
    </div>
  );
};

export default LandingPage;
