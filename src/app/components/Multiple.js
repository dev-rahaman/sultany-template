export const Title = ({ title, heading }) => {
  return (
    <div>
      <div className="mb-10">
        <h2 className="lg:text-md">-{title}</h2>
        <h2 className="text-2xl font-extrabold lg:text-5xl">{heading}</h2>
      </div>
    </div>
  );
};

export const Button = ({ buttonText }) => {
  return (
    <button className="me-4 rounded-md border border-[] bg-[#130f49] p-3  font-bold text-[#fff] hover:bg-[#2b618d] hover:text-white">
      {buttonText}
    </button>
  );
};
