import FrameComponent2 from "./frame-component2";
import FrameComponent3 from "./frame-component3";
import PropTypes from "prop-types";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end pt-[0rem] px-[0rem] pb-[2.812rem] box-border max-w-full text-left text-[1.25rem] text-darkslategray font-aktivgrotesk-medium mq450:pb-[1.813rem] mq450:box-border ${className}`}
    >
      <div className="w-[81.688rem] flex flex-col items-end justify-start gap-[2.125rem] max-w-full mq750:gap-[1.063rem]">
        <div className="w-[80.563rem] flex flex-row items-start justify-end py-[0rem] px-[0.375rem] box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-center gap-[2.625rem] max-w-full lg:flex-wrap mq750:gap-[1.313rem]">
            <FrameComponent2 min="30 min" />
            <FrameComponent3 />
            <div className="flex-1 flex flex-col items-start justify-start gap-[2.187rem] min-w-[7.313rem] text-primary">
              <div className="self-stretch rounded-3xs bg-background-color flex flex-row items-start justify-start pt-[1.375rem] px-[1.687rem] pb-[1.625rem] whitespace-nowrap border-[1px] border-solid border-primary">
                <div className="h-[4.75rem] w-[11.25rem] relative rounded-3xs bg-background-color box-border hidden border-[1px] border-solid border-primary" />
                <div className="relative inline-block min-w-[7.75rem] z-[1]">
                  7:00-8:00 AM
                </div>
              </div>
              <div className="self-stretch rounded-3xs bg-whitesmoke-200 flex flex-row items-start justify-start pt-[1.5rem] px-[1.75rem] pb-[1.75rem] whitespace-nowrap text-darkslategray">
                <div className="h-[4.75rem] w-[11.25rem] relative rounded-3xs bg-whitesmoke-200 hidden" />
                <div className="relative inline-block min-w-[7.75rem] z-[1]">
                  7:00-8:00 AM
                </div>
              </div>
            </div>
            <FrameComponent3
              propPadding="1.5rem 1.5rem 1.5rem 1.875rem"
              propBackgroundColor="#fff"
              propBackgroundColor1="#fff"
              propPadding1="1.5rem 1.5rem 1.5rem 1.875rem"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[2.187rem] min-w-[7.625rem]">
              <div className="self-stretch rounded-3xs bg-whitesmoke-200 flex flex-row items-start justify-start pt-[1.812rem] pb-[1.437rem] pr-[1.937rem] pl-[2rem] whitespace-nowrap">
                <div className="h-[4.75rem] w-[11.688rem] relative rounded-3xs bg-whitesmoke-200 hidden" />
                <div className="relative inline-block min-w-[7.75rem] z-[1]">
                  7:00-8:00 AM
                </div>
              </div>
              <div className="self-stretch rounded-3xs bg-whitesmoke-200 flex flex-row items-start justify-start pt-[1.812rem] pb-[1.437rem] pr-[1.937rem] pl-[2rem] whitespace-nowrap">
                <div className="h-[4.75rem] w-[11.688rem] relative rounded-3xs bg-whitesmoke-200 hidden" />
                <div className="relative inline-block min-w-[7.75rem] z-[1]">
                  7:00-8:00 AM
                </div>
              </div>
            </div>
            <FrameComponent3
              propPadding="1.375rem 1.687rem 1.625rem"
              propBackgroundColor="#ffeded"
              propBackgroundColor1="#ffeded"
              propPadding1="1.375rem 1.687rem 1.625rem"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.187rem] max-w-full text-primary">
          <div className="self-stretch h-[0.125rem] relative box-border border-t-[2px] border-solid border-whitesmoke-200" />
          <div className="w-[54.625rem] flex flex-row items-start justify-start py-[0rem] px-[1.5rem] box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start py-[0rem] pr-[0.125rem] pl-[0rem] box-border gap-[2.5rem] max-w-full mq450:gap-[1.25rem] mq1050:flex-wrap">
              <FrameComponent2
                min="01 hour"
                propPadding="0.5rem 0rem 0rem"
                propGap="0.812rem"
                propPadding1="0.875rem 0rem 0rem"
                propMinWidth="5.313rem"
              />
              <div className="flex-[0.7126] rounded-3xs bg-background-color box-border flex flex-row items-start justify-start py-[1.5rem] pr-[1.625rem] pl-[1.75rem] min-w-[7.313rem] whitespace-nowrap border-[1px] border-solid border-primary mq450:flex-1">
                <div className="h-[4.75rem] w-[11.25rem] relative rounded-3xs bg-background-color box-border hidden border-[1px] border-solid border-primary" />
                <div className="relative inline-block min-w-[7.75rem] z-[1]">
                  7:00-8:00 AM
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start py-[0rem] pr-[0.375rem] pl-[0rem] box-border min-w-[7.563rem]">
                <div className="self-stretch rounded-3xs bg-background-color flex flex-row items-start justify-start pt-[1.375rem] px-[1rem] pb-[1.625rem] whitespace-nowrap border-[1px] border-solid border-primary">
                  <div className="h-[4.75rem] w-[11.25rem] relative rounded-3xs bg-background-color box-border hidden border-[1px] border-solid border-primary" />
                  <div className="flex-1 relative z-[1]">10:00-11:00 PM</div>
                </div>
              </div>
              <div className="flex-[0.7126] rounded-3xs bg-whitesmoke-200 flex flex-row items-start justify-start pt-[1.5rem] px-[1.75rem] pb-[1.75rem] box-border min-w-[7.313rem] whitespace-nowrap text-darkslategray mq450:flex-1">
                <div className="h-[4.75rem] w-[11.25rem] relative rounded-3xs bg-whitesmoke-200 hidden" />
                <div className="relative inline-block min-w-[7.75rem] z-[1]">
                  7:00-8:00 AM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
