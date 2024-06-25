import PropTypes from "prop-types";

const FrameComponent8 = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[55.313rem] left-[9.938rem] rounded-3xs bg-background-color box-border w-[43.125rem] flex flex-col items-end justify-start pt-[0.187rem] pb-[0rem] pr-[2.187rem] pl-[1.625rem] max-w-full z-[1] text-center text-[1.5rem] text-black font-aktivgrotesk-medium border-[1px] border-solid border-gainsboro-200 ${className}`}
    >
      <div className="w-[43.125rem] h-[33.625rem] relative rounded-3xs bg-background-color box-border hidden max-w-full border-[1px] border-solid border-gainsboro-200" />
      <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[1.812rem] pl-[0rem] box-border max-w-full">
        <div className="flex-1 flex flex-row flex-wrap items-end justify-start gap-[1rem] max-w-full">
          <div className="flex flex-col items-start justify-end pt-[0rem] pb-[0.812rem] pr-[1.062rem] pl-[0rem]">
            <img
              className="w-[9.375rem] h-[9.375rem] relative object-contain z-[2]"
              loading="lazy"
              alt=""
              src="/111@2x.png"
            />
          </div>
          <div className="h-[11.188rem] w-[0.063rem] relative box-border z-[3] border-r-[1px] border-solid border-gainsboro-200 mq675:w-full mq675:h-[0.063rem]" />
          <div className="flex-1 flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[1.812rem] box-border min-w-[16.188rem] max-w-full shrink-0">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
              <div className="w-[14.563rem] relative inline-block z-[2] mq450:text-[1.188rem]">
                Monitor Applications
              </div>
              <div className="self-stretch h-[5.25rem] relative text-[1.25rem] font-aktivgrotesk-regular text-text-secondary text-left inline-block shrink-0 z-[2] mq450:text-[1rem]">
                Log into your Bigstartups account to monitor applications and
                manage your job listings
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[36.875rem] h-[22.188rem] relative max-w-full text-[1.25rem] text-text-secondary font-aktivgrotesk-regular">
        <div className="absolute top-[4.188rem] left-[0rem] text-right inline-block w-[24.563rem] h-[5.625rem] z-[2] mq450:text-[1rem]">
          Engage with potential candidates directly through the platform to find
          the perfect fit for your team.
        </div>
        <div className="absolute top-[15.875rem] left-[10.188rem] text-left inline-block w-[26.5rem] h-[5.625rem] z-[2] mq450:text-[1rem]">
          Consider boosting your job listing to reach even more candidates
        </div>
        <div className="absolute top-[1.938rem] left-[3rem] text-[1.5rem] font-aktivgrotesk-medium text-black z-[2] mq450:text-[1.188rem]">
          Communicate with Candidates
        </div>
        <div className="absolute top-[13.625rem] left-[10.188rem] text-[1.5rem] font-aktivgrotesk-medium text-black z-[2] mq450:text-[1.188rem]">
          Boost Your Listing
        </div>
        <img
          className="absolute top-[0.688rem] left-[27.5rem] w-[9.375rem] h-[9.375rem] object-contain z-[2]"
          loading="lazy"
          alt=""
          src="/408@2x.png"
        />
        <div className="absolute top-[0rem] left-[26.5rem] box-border w-[0.063rem] h-[11.188rem] z-[3] border-r-[1px] border-solid border-gainsboro-200" />
        <div className="absolute top-[11.063rem] left-[9.125rem] box-border w-[0.063rem] h-[11.188rem] z-[3] border-r-[1px] border-solid border-gainsboro-200" />
      </div>
    </section>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
