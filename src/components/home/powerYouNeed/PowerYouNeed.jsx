const PowerYouNeed = () => {
  const features = [
    {
      id: 1,
      title: "Competitive pricing",
      description: "As low as $1.99/hr for NVIDIA H100s",
    },
    {
      id: 2,
      title: "Only pay for what you use",
      description: "No long term commitments or lockups",
    },
    {
      id: 3,
      title: "Variety of options",
      description:
        "From H100s to 3080s, with additional models available upon request",
    },
    {
      id: 4,
      title: "Highly customizable",
      description: "Configure every option to your exact specification",
    },
  ];

  return (
    <div className="border-b border-b-[#FFFFFFB3] py-[50px] md:flex w-11/12 lg:container mx-auto text-white">
      <div className="md:w-1/2">
        <p className="text-[30px] lg:text-[40px] font-semibold mb-10 md:mb-auto">
          All the power you need
        </p>
      </div>
      <div className="md:w-1/2 mt-3">
        <div className="grid grid-cols-2 gap-3 lg:gap-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="border border-[#4A4A4A] rounded-md p-4 md:p-[14px] text-[14px] lg:text-[16px] text-white"
            >
              <p className="font-semibold mb-1">{feature.title}</p>
              <p className="text-[#8A8A8A]">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mx- lg:mx-auto mt-5 lg:mt-[48px] w-full">
          <a
            href="https://akashnet.typeform.com/to/yRwjGdqz"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center mx-auto bg-primary w-full text-[14px] lg:text-[16px] rounded-md py-[10px] lg:py-[10px]"
          >
            <span className="font-semibold">Reserve Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="34"
              viewBox="0 0 35 34"
              fill="none"
            >
              <g clipPath="url(#clip0_1209_4342)">
                <path
                  d="M14.4912 19.6389L20.5037 14.3615M20.5037 14.3615L15.5644 14.0399M20.5037 14.3615L20.182 19.3008"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24.0917 24.5156C28.2425 20.8723 28.6539 14.5541 25.0107 10.4033C21.3674 6.25259 15.0492 5.84117 10.8984 9.4844C6.74766 13.1276 6.33624 19.4459 9.97947 23.5966C13.6227 27.7474 19.941 28.1588 24.0917 24.5156Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1209_4342">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0.5625 15.8973) rotate(-41.2744)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PowerYouNeed;
