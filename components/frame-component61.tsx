import PropTypes from "prop-types";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] pb-[2.25rem] pr-[1.25rem] pl-[4.875rem] box-border max-w-full text-left text-[1.875rem] text-primary font-aktivgrotesk-regular lg:pl-[2.438rem] lg:box-border ${className}`}
    >
      <div className="w-[71.938rem] flex flex-col items-end justify-start gap-[1.562rem] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[2.937rem] max-w-full mq750:gap-[1.438rem]">
          <div className="w-[66.938rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
            <div className="w-[51.063rem] rounded-3xs bg-whitesmoke-100 flex flex-row items-start justify-start pt-[0.375rem] px-[0.625rem] pb-[0.312rem] box-border gap-[5.25rem] max-w-full mq450:gap-[1.313rem] mq750:gap-[2.625rem] mq1050:flex-wrap">
              <div className="h-[5.313rem] w-[51.063rem] relative rounded-3xs bg-whitesmoke-100 hidden max-w-full" />
              <div className="w-[24.5rem] rounded-3xs bg-mistyrose flex flex-row items-start justify-start pt-[1.062rem] pb-[1.375rem] pr-[4rem] pl-[4.437rem] box-border whitespace-nowrap max-w-full z-[1] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
                <div className="h-[4.625rem] w-[24.5rem] relative rounded-3xs bg-mistyrose hidden max-w-full" />
                <div className="flex-1 relative z-[2]">Startup Consulting</div>
              </div>
              <div className="w-[15.438rem] flex flex-col items-start justify-start pt-[1.062rem] px-[0rem] pb-[0rem] box-border text-text-secondary">
                <div className="self-stretch relative z-[1] mq450:text-[1.125rem] mq750:text-[1.5rem]">
                  Career Consulting
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-end justify-between gap-[1.25rem] text-[1.5rem] text-black font-aktivgrotesk-medium mq1050:flex-wrap mq1050:justify-center">
            <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.312rem]">
              <img
                className="w-[5rem] h-[5rem] relative"
                alt=""
                src="/group-228.svg"
              />
            </div>
            <div className="w-[12.875rem] flex flex-col items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border gap-[0.625rem]">
              <div className="flex flex-row items-start justify-start py-[0rem] px-[2.187rem]">
                <div className="relative inline-block min-w-[4.188rem] mq450:text-[1.188rem]">
                  Today
                </div>
              </div>
              <div className="w-[9.438rem] h-[2.188rem] relative font-aktivgrotesk-regular text-mediumblue inline-block shrink-0 mq450:text-[1.188rem]">
                08 Available
              </div>
            </div>
            <div className="w-[10.125rem] flex flex-col items-start justify-end pt-[0rem] pb-[0.062rem] pr-[0.687rem] pl-[0rem] box-border">
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
                <div className="flex flex-row items-start justify-start py-[0rem] px-[0.437rem]">
                  <div className="relative inline-block min-w-[7.063rem] mq450:text-[1.188rem]">
                    Tomorrow
                  </div>
                </div>
                <div className="self-stretch h-[2.188rem] relative font-aktivgrotesk-regular text-mediumblue inline-block shrink-0 mq450:text-[1.188rem]">
                  06 Available
                </div>
              </div>
            </div>
            <div className="w-[9.438rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.062rem] box-border">
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.562rem]">
                <div className="flex flex-row items-start justify-start py-[0rem] px-[0.75rem]">
                  <div className="relative inline-block min-w-[6.813rem] mq450:text-[1.188rem]">
                    Sat 1,May
                  </div>
                </div>
                <div className="self-stretch h-[2.188rem] relative font-aktivgrotesk-regular text-mediumblue inline-block shrink-0 mq450:text-[1.188rem]">
                  06 Available
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.625rem]">
              <img
                className="w-[5rem] h-[5rem] relative"
                alt=""
                src="/group-227.svg"
              />
            </div>
          </div>
        </div>
        <div className="w-[70.25rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <div className="h-[0.5rem] w-[58.75rem] relative bg-whitesmoke-200 max-w-full">
            <div className="absolute top-[0rem] left-[0rem] bg-whitesmoke-200 w-full h-full hidden" />
            <div className="absolute top-[0rem] left-[0rem] bg-primary w-[18.813rem] h-[0.5rem] z-[1]" />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
