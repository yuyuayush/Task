import PropTypes from "prop-types";
import { FC } from "react";

export interface FrameComponent2Props {
  className?:string,
  min?: string;
  propPadding?: string;
  propGap?: string;
  propPadding1?: string;
  propMinWidth?: string;
}
const FrameComponent2:FC<FrameComponent2Props> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] pb-[4.856rem] pr-[1.25rem] pl-[8.562rem] box-border max-w-full shrink-0 mt-[-0.107rem] text-center text-[1.5rem] text-background-color font-aktivgrotesk-bold mq1350:pl-[4.25rem] mq1350:box-border mq800:pl-[2.125rem] mq800:pb-[3.188rem] mq800:box-border ${className}`}
    >
      <div className="w-[62.813rem] flex flex-row flex-wrap items-start justify-center gap-[6.562rem] max-w-full mq800:gap-[1.625rem] mq1125:gap-[3.25rem]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[0.187rem] min-w-[18.25rem] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[3.687rem] pl-[3.375rem] box-border max-w-full mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
            <img
              className="h-[21.063rem] flex-1 relative max-w-full overflow-hidden object-cover"
              loading="lazy"
              alt=""
              src="/5@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[3.687rem] box-border max-w-full mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
              <div className="flex-1 rounded-21xl bg-primary flex flex-row items-start justify-center pt-[0.937rem] px-[1.25rem] pb-[0.687rem] box-border whitespace-nowrap max-w-full">
                <div className="h-[3.438rem] w-[20.75rem] relative rounded-21xl bg-primary hidden max-w-full" />
                <div className="w-[9.563rem] relative inline-block z-[1]">
                  Post Projects
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.562rem] max-w-full text-left text-[1.875rem] text-black">
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[2.625rem] box-border max-w-full mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
                <div className="flex-1 relative inline-block max-w-full mq800:text-[1.5rem] mq450:text-[1.125rem]">
                  Post Freelancing Projects
                </div>
              </div>
              <div className="self-stretch relative text-[1.25rem] font-aktivgrotesk-regular text-center mq450:text-[1rem]">
                {" "}
                We provide flexible hiring options to suit your business
                requirements.
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem] box-border min-w-[18.25rem] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[4.937rem] max-w-full mq450:gap-[2.438rem]">
            <div className="w-[27.188rem] flex flex-row items-start justify-start py-[0rem] px-[3.062rem] box-border max-w-full mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
              <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
                <img
                  className="h-[21.063rem] flex-1 relative max-w-full overflow-hidden object-cover"
                  loading="lazy"
                  alt=""
                  src="/6@2x.png"
                />
                <div className="w-[20.75rem] !m-[0] absolute right-[-0.312rem] bottom-[-3.312rem] rounded-21xl bg-primary flex flex-row items-start justify-start pt-[0.937rem] px-[1.812rem] pb-[0.687rem] box-border whitespace-nowrap max-w-full z-[1]">
                  <div className="h-[3.438rem] w-[20.75rem] relative rounded-21xl bg-primary hidden max-w-full" />
                  <div className="flex-1 relative z-[2]">{`Post Jobs & Internships`}</div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.312rem] max-w-full text-left text-[1.875rem] text-black">
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[4rem] pl-[3.937rem] box-border max-w-full mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
                <div className="flex-1 relative inline-block max-w-full mq800:text-[1.5rem] mq450:text-[1.125rem]">{`Post Jobs & Internship`}</div>
              </div>
              <div className="self-stretch relative text-[1.25rem] font-aktivgrotesk-regular text-center mq450:text-[1rem]">
                With Bigstartups Network, there are no regional barriers. Expand
                your horizons and connect with talent beyond borders.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
