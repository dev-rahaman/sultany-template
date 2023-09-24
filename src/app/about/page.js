import { Button, Title } from "../components/Multiple";

const About = () => {
  return (
    <div className="p-4 sm:ml-64">
      <div className="rounded-lg p-4 dark:border-gray-700">
        <div>
          <div
            id="about"
            className="justify-between pt-20 lg:flex lg:items-center lg:px-10"
          >
            <div className="lg:w-1/3 ">
              <Title title={"NICE TO MEET YOU!"} heading={"Jeffery"} />
              <div className="">
                <Button buttonText={"GET A PROJECT"} />
              </div>
            </div>
            <div className="lg:w-2/3">
              <p>
                Hello there! My name is Jeffrey. I am a web designer &
                developer, and I`m very passionate and dedicated to my work.
              </p>
              <p className="mt-6">
                With 20 years experience as a professional a graphic designer, I
                have acquired the skills and knowledge necessary to make your
                project a success. I enjoy every step of the design process,
                from discussion and collaboration.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 gap-y-4">
                <div>
                  <span className="inline-block ps-2 underline">AGE</span>
                  <span className="block ps-2 font-bold underline">25</span>
                </div>
                <div>
                  <span className="inline-block ps-2 underline">BORN IN</span>
                  <span className="block ps-2 font-bold underline">
                    Bangladesh
                  </span>
                </div>
                <div>
                  <span className="inline-block ps-2 underline">MAIL</span>
                  <span className="block ps-2 font-bold underline">
                    jeffrey@gmail.com
                  </span>
                </div>
                <div>
                  <span className="inline-block ps-2 underline">PHONE</span>
                  <span className="block ps-2 font-bold underline">
                    01601313258
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap justify-around gap-y-5">
            <div className="">
              <div className="cart cus mx-5 w-[350px] bg-[#2b618d]  p-10 text-center text-white lg:w-[300px]  ">
                <h2 className="text-4xl font-bold ">10+</h2>
                <h2>YEARS OF EXPERIENCE</h2>
              </div>
            </div>
            <div className="">
              <div className="cart mx-5 w-[350px] bg-[#2b618d] p-10  text-center text-white lg:w-[300px]">
                <h2 className="text-4xl font-bold ">20+</h2>
                <h2>YEARS OF EXPERIENCE</h2>
              </div>
            </div>
            <div className="">
              <div className="cart mx-5 w-[350px] bg-[#2b618d] p-10  text-center text-white lg:w-[300px]">
                <h2 className="text-4xl font-bold ">30+</h2>
                <h2>YEARS OF EXPERIENCE</h2>
              </div>
            </div>
          </div>{" "}
          <div className="mt-20">
            <div className="ms-10">
              <Title
                title={"Experience"}
                heading={"Everything about me!"}
              ></Title>
            </div>
            <div className="flex flex-wrap justify-around gap-y-5 ">
              <div className="max-w-md rounded border border-gray-200 bg-[#0f172a] p-5 text-white">
                <h2 className="font-bold text-yellow-500">-EXPERIENCE</h2>
                <h2 className="my-2 text-2xl font-bold">Web Developer</h2>
                <p>
                  Elisc is a leading web design agency with an award-winning
                  design team that creates innovative, effective websites that
                  capture your brand, improve your conversion rates, and
                  maximize your revenue to help grow your business and achieve
                  your goals.
                </p>
              </div>
              <div className="max-w-md rounded border border-gray-200 bg-[#0f172a] p-5 text-white">
                <h2 className="font-bold text-yellow-500">-EXPERIENCE</h2>
                <h2 className="my-2 text-2xl font-bold">Web Developer</h2>
                <p>
                  Elisc is a leading web design agency with an award-winning
                  design team that creates innovative, effective websites that
                  capture your brand, improve your conversion rates, and
                  maximize your revenue to help grow your business and achieve
                  your goals.
                </p>
              </div>
              <div className="max-w-md rounded border border-gray-200 bg-[#0f172a] p-5 text-white">
                <h2 className="font-bold text-yellow-500">-EXPERIENCE</h2>
                <h2 className="my-2 text-2xl font-bold">Web Developer</h2>
                <p>
                  Elisc is a leading web design agency with an award-winning
                  design team that creates innovative, effective websites that
                  capture your brand, improve your conversion rates, and
                  maximize your revenue to help grow your business and achieve
                  your goals.
                </p>
              </div>
              <div className="max-w-md rounded border border-gray-200 bg-[#0f172a] p-5 text-white">
                <h2 className="font-bold text-yellow-500">-EXPERIENCE</h2>
                <h2 className="my-2 text-2xl font-bold">Web Developer</h2>
                <p>
                  Elisc is a leading web design agency with an award-winning
                  design team that creates innovative, effective websites that
                  capture your brand, improve your conversion rates, and
                  maximize your revenue to help grow your business and achieve
                  your goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
