import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] pb-[6.418rem] pr-[1.25rem] pl-[6.562rem] box-border max-w-full shrink-0 mt-[-0.107rem] text-center text-[2rem] text-black font-aktivgrotesk-bold mq1350:pl-[3.25rem] mq1350:box-border mq800:pl-[1.625rem] mq800:pb-[4.188rem] mq800:box-border ${className}`}
    >
      <div className="w-[70.938rem] flex flex-row items-start justify-center gap-[6.125rem] max-w-full mq800:gap-[1.5rem] mq1125:flex-wrap mq1125:gap-[3.063rem]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[2.75rem] min-w-[23.75rem] max-w-full mq800:gap-[1.375rem] mq800:min-w-full">
          <div className="w-[31.938rem] flex flex-row items-start justify-start py-[0rem] px-[3.937rem] box-border max-w-full mq800:pl-[1.938rem] mq800:pr-[1.938rem] mq800:box-border">
            <img
              className="h-[19.438rem] flex-1 relative max-w-full overflow-hidden object-cover"
              loading="lazy"
              alt=""
              src="/2@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.187rem] max-w-full">
            <div className="self-stretch relative mq800:text-[1.625rem] mq450:text-[1.188rem]">
              xposure to Cutting-Edge Technologies
            </div>
            <div className="w-[34.438rem] flex flex-row items-start justify-start py-[0rem] px-[3.062rem] box-border max-w-full text-[1rem] font-aktivgrotesk-regular mq800:pl-[1.5rem] mq800:pr-[1.5rem] mq800:box-border">
              <div className="flex-1 relative inline-block max-w-full">
                Work on projects that leverage the latest technologies and
                trends, giving you hands-on experience with tools and platforms
                shaping the future of business.
              </div>
            </div>
          </div>
        </div>
        <div className="w-[28.313rem] flex flex-col items-start justify-start gap-[2.812rem] min-w-[28.313rem] max-w-full mq800:min-w-full mq1125:flex-1 mq450:gap-[1.375rem]">
          <div className="w-[27.563rem] flex flex-row items-start justify-start py-[0rem] px-[1.75rem] box-border max-w-full">
            <img
              className="h-[19.063rem] flex-1 relative max-w-full overflow-hidden object-cover"
              loading="lazy"
              alt=""
              src="/29@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-col items-end justify-start gap-[0.625rem] max-w-full">
            <div className="w-[27.188rem] flex flex-row items-start justify-end py-[0rem] px-[1.125rem] box-border max-w-full">
              <div className="flex-1 relative inline-block max-w-full mq800:text-[1.625rem] mq450:text-[1.188rem]">
                Networking Opportunities
              </div>
            </div>
            <div className="self-stretch h-[4.75rem] relative text-[1rem] leading-[1.15rem] font-aktivgrotesk-regular inline-block min-h-[4.75rem]">
              {" "}
              Connect with like-minded students and professionals passionate
              about innovation and entrepreneurship. Build lasting relationships
              that can open doors to future collaborations and opportunities.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
