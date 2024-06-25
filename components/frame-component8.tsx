import PropTypes from "prop-types";

const FrameComponent8 = ({ className = "" }) => {
  return (
    <section
      className={`flex flex-row items-start justify-start pt-[0rem] px-[4.812rem] pb-[1.668rem] box-border max-w-full shrink-0 mt-[-0.107rem] text-left text-[3rem] text-black font-aktivgrotesk-xbold mq1350:pl-[2.375rem] mq1350:pr-[2.375rem] mq1350:box-border ${className}`}
    >
      <div className="flex flex-row items-end justify-start [row-gap:20px] max-w-full mq1350:flex-wrap">
        <div className="w-[40.5rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[9.187rem] box-border min-w-[40.5rem] min-h-[24.375rem] max-w-full mq1350:flex-1 mq1125:min-w-full mq450:pb-[6rem] mq450:box-border">
          <div className="w-[47.75rem] flex flex-col items-start justify-start gap-[1.687rem] shrink-0 max-w-[118%]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.812rem] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.062rem] box-border max-w-full">
                <h3 className="m-0 flex-1 relative text-inherit font-normal font-inherit inline-block max-w-full mq800:text-[2.375rem] mq450:text-[1.813rem]">
                  WORK WITH STARTUPS
                </h3>
              </div>
              <div className="w-[35.875rem] h-[4.313rem] relative text-[1.25rem] leading-[1.4rem] font-aktivgrotesk-regular inline-block min-h-[4.313rem] max-w-full mq450:text-[1rem]">
                we're dedicated to bridging the gap between aspiring students
                and innovative startups, creating opportunities that know no
                boundaries
              </div>
            </div>
            <div className="w-[27.938rem] flex flex-row items-start justify-start py-[0rem] px-[0.062rem] box-border max-w-full text-[2rem] text-background-color font-aktivgrotesk-medium">
              <div className="flex-1 rounded-21xl bg-primary flex flex-row items-start justify-center pt-[1.187rem] pb-[1.125rem] pr-[1.25rem] pl-[1.437rem] box-border max-w-full">
                <div className="h-[4.688rem] w-[27.813rem] relative rounded-21xl bg-primary hidden max-w-full" />
                <div className="relative inline-block min-w-[6.25rem] z-[1] mq800:text-[1.625rem] mq450:text-[1.188rem]">
                  Button
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="w-[36.063rem] relative max-h-full object-cover shrink-0 max-w-full z-[1] mq1350:flex-1"
          loading="lazy"
          alt=""
          src="/untitled-design-1-3@2x.png"
        />
      </div>
    </section>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
