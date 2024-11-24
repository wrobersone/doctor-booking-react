import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          Contact <span className="text-gray-700 font-semibold">Us</span>
        </p>
      </div>

      <div className="flex flex-col justify-center my-10 md:flex-row gap-10 mb-28 text-sm">
        <img
          className="max-w-[360px] w-full"
          src={assets.contact_image}
          alt=""
        />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600">Our Office</p>
          <p className="text-gray-500">
            54709 Williams Station <br /> Suite 350, Washington, DC USA
          </p>
          <p className="text-gray-500">
            Tel: (415) 567-0321 <br /> Email: wmrobersone@yahoo.com
          </p>

          <p className="font-semibold text-lg text-gray-600">
            Careers at Prescripto
          </p>
          <p className="text-gray-500">
            Learn More About Our Teams and Job Openings
          </p>
          <button className="border border-black px-8 py-4 text-sm rounded-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
