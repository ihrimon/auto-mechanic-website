import { useState } from "react";
import SharedTitle from "../../components/SharedTitle";
import { useEffect } from "react";
import ServiceCard from "../../components/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  console.log(services.length);

  return (
    <div className="min-h-screen mx-auto">
      <SharedTitle
        subtitle={"Services"}
        title={"Our Service Area"}
        text={
          "the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
        }
      />
      <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      </div>
      
    </div>
  );
};

export default Services;
