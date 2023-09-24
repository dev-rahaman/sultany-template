import React from "react";

const Map = () => {
  return (
    <div className="p-4 sm:ml-64">
      <div className="rounded-lg p-4 dark:border-gray-700">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.297073729152!2d91.25961567532562!3d23.413633478901634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375381a52f096163%3A0x473c4efd418d3da7!2sKanesh%20Tala%20High%20School!5e0!3m2!1sen!2sbd!4v1694181216642!5m2!1sen!2sbd"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="h-[300px] w-full lg:h-[450px]"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
