import PropTypes from "prop-types";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <section
      className={`w-[85.625rem] flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[3.106rem] box-border max-w-full shrink-0 mt-[-0.107rem] text-center text-[2rem] text-black font-aktivgrotesk-bold mq800:pb-[2rem] mq800:box-border ${className}`}
    >
      <div className="w-[71.5rem] flex flex-row items-end justify-start gap-[7.625rem] max-w-full mq800:gap-[1.875rem] mq1125:flex-wrap mq1125:gap-[3.813rem] mq450:gap-[0.938rem]">
        <div className="flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[4.187rem] box-border min-h-[39.375rem] max-w-full mq800:pb-[2.75rem] mq800:box-border mq800:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.062rem] max-w-full">
            <div className="w-[37.375rem] flex flex-row items-start justify-start py-[0rem] px-[2.625rem] box-border max-w-full mq800:pl-[1.313rem] mq800:pr-[1.313rem] mq800:box-border">
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.687rem] max-w-full">
                <div className="w-[27.625rem] flex flex-row items-start justify-start py-[0rem] px-[2.875rem] box-border max-w-full mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
                  <img
                    className="h-[21.875rem] flex-1 relative max-w-full overflow-hidden object-cover"
                    loading="lazy"
                    alt=""
                    src="/28@2x.png"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] max-w-full">
                  <div className="w-[21.125rem] relative inline-block max-w-full mq800:text-[1.625rem] mq450:text-[1.188rem]">
                    Diverse Opportunities
                  </div>
                  <div className="self-stretch relative text-[1.25rem] font-aktivgrotesk-regular text-left mq450:text-[1rem]">
                    Bigstartups Network opens doors to a wide array of
                    opportunities, allowing individuals to explore roles in
                    startups spanning various industries and locations. This
                    diversity provides exposure to different business models,
                    cultures, and challenges, enriching one's professional
                    experience and skill set.
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[0.063rem] relative box-border z-[1] border-t-[1px] border-solid border-primary" />
          </div>
        </div>
        <img
          className="w-[21.875rem] relative max-h-full object-contain max-w-full mq1125:flex-1"
          loading="lazy"
          alt=""
          src="/23@2x.png"
        />
      </div>
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
