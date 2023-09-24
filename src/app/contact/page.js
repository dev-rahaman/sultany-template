import { Title } from "../components/Multiple";
import ContactForm from "../components/contactForm";

const Contact = () => {
  return (
    <div className="p-4 sm:ml-64">
      <div className="rounded-lg p-4 dark:border-gray-700">
        <div className="bg-[#16193a] text-white">
          <div id="contact" className="flex flex-wrap items-center p-2">
            <div className="mt-5 lg:w-1/2">
              <div className="ms-10">
                <Title title={"CONTACT ME"} heading={"Get in touch"} />
              </div>
              <div className="ms-10">
                <p>
                  I`m currently available to take on new projects, so feel free
                  to send me a message about anything that you want to run past
                  me. You can contact anytime at 24/7
                </p>
                <div className="-2 mt-6 border-s-4 border-yellow-400">
                  <p className="ms-2 font-semibold">
                    <a href="tel:+770224440505">+77 022 444 05 05</a>
                  </p>
                  <p className="ms-2 font-semibold">
                    <a href="mailto:support@elisc.com">support@elisc.com</a>
                  </p>
                  <p className="ms-2 font-semibold">
                    Ave Street Avenue, New York
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full pt-10 lg:w-1/2">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
