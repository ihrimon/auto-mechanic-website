
const ServiceCard = ({service}) => {
    const {img, title, price} = service;
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img
        className="w-full h-48 object-cover"
        src={img}
        alt="Service"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold text-gray-600">${price}</p>
          <span className="text-gray-500 hover:text-gray-800 transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
