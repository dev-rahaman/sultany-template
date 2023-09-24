import Image from "next/image";
import OutsideClickHandler from "./OutsideClickHandler";

const Molal = ({ selectedBlogId, openModal, handleOutSideClick, products }) => {
  if (!openModal) {
    return null;
  }

  const id = selectedBlogId;
  const modalData = products.find((item) => id === item.id);

  return (
    <OutsideClickHandler handleOutSideClick={handleOutSideClick}>
      <div className="fixed top-0 left-0 right-0 z-50  bg-gray-800 bg-opacity-50">
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-md dark:bg-gray-700">
          <div className="flex justify-end">
            <button
              onClick={handleOutSideClick}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          <div className="lg:w-[700px]  w-[400px] lg:h-[500px] h-[300px] overflow-y-auto custom-scrollbar ">
            <div className="px-6 space-y-6">
              <Image
                className="lg:h-[300px] lg:w-[700px] rounded-xl"
                src={modalData.thumbnail}
                width={700}
                height={400}
                alt="Blog"
              />
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {modalData.description}
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Price: {modalData.price}
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Discount Percentage: {modalData.discountPercentage}
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {modalData.description}
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Price: {modalData.price}
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Discount Percentage: {modalData.discountPercentage}
              </p>
            </div>
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default Molal;
