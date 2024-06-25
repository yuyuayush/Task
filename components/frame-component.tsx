import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[4.125rem] pb-[11.375rem] box-border max-w-full text-left text-[1.875rem] text-black font-aktivgrotesk-medium mq450:pb-[7.375rem] mq450:box-border mq1050:pl-[2.063rem] mq1050:pr-[2.063rem] mq1050:box-border ${className}`}
    >
      <div className="w-[53.375rem] flex flex-col items-end justify-start gap-[3.25rem] max-w-full mq450:gap-[1.625rem]">
        <div className="self-stretch flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch flex flex-row items-start justify-end py-[0rem] px-[3.937rem] box-border max-w-full mq1050:pl-[1.938rem] mq1050:pr-[1.938rem] mq1050:box-border">
            <h3 className="m-0 h-[3.25rem] w-[40.813rem] relative text-inherit font-normal font-inherit inline-block shrink-0 max-w-full z-[1] mq450:text-[1.125rem] mq1050:text-[1.5rem]">
              Get startups Featured in BigStartups Spotlight
            </h3>
          </div>
          <div className="self-stretch relative text-[1.25rem] font-aktivgrotesk-regular text-center z-[2] mq450:text-[1rem]">
            Feature your founders, startups, and products through engaging
            videos and articles in our Spotlight Section, maximizing your
            exposure and credibility.
          </div>
        </div>
        <div className="w-[48.813rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-[2.188rem] text-background-color font-aktivgrotesk-bold">
          <div className="w-[18.188rem] rounded-xl bg-primary flex flex-row items-start justify-start pt-[0.875rem] px-[2.312rem] pb-[0.812rem] box-border whitespace-nowrap z-[1]">
            <div className="h-[4.313rem] w-[18.188rem] relative rounded-xl bg-primary hidden" />
            <div className="flex-1 relative z-[2]">Get Featured</div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
