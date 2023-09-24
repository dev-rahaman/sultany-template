import Image from "next/image";
import OutsideClickHandler from "./OutsideClickHandler";

const ServicesModal = ({ openModal, handleOutSideClick }) => {
  if (!openModal) {
    return null;
  }

  return (
    <OutsideClickHandler handleOutSideClick={handleOutSideClick}>
      <div className="fixed left-0 right-0 top-0 z-50  bg-gray-800 bg-opacity-50">
        <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white shadow-md dark:bg-gray-700">
          <div className="flex justify-end">
            <button
              onClick={handleOutSideClick}
              className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                class="h-3 w-3"
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
          <div className="custom-scrollbar  h-[300px] w-[400px] overflow-y-auto lg:h-[500px] lg:w-[700px] ">
            {/* <div className="px-6 space-y-6">
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
            </div> */}
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default ServicesModal;
