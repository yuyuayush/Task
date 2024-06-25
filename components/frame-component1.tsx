import ContentCell from "./content-cell";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-[0rem] pb-[26.062rem] pr-[0.812rem] pl-[0rem] box-border max-w-full text-left text-[3.75rem] text-background-color font-aktivgrotesk-black lg:pb-[11rem] lg:box-border mq750:pb-[7.125rem] mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[2.187rem] max-w-full mq750:gap-[1.063rem]">
        <div className="self-stretch rounded-t-xl rounded-b-none bg-darkslategray flex flex-col items-center justify-start pt-[2.625rem] px-[1.25rem] pb-[0.875rem] box-border gap-[0.5rem] max-w-full z-[1]">
          <div className="w-[63.563rem] h-[16.563rem] relative rounded-t-xl rounded-b-none bg-darkslategray hidden max-w-full" />
          <div className="w-[44.188rem] flex flex-row items-start justify-center py-[0rem] pr-[0rem] pl-[0.125rem] box-border max-w-full">
            <img
              className="h-[5.813rem] w-[5.813rem] relative object-cover z-[2]"
              loading="lazy"
              alt=""
              src="/15@2x.png"
            />
          </div>
          <div className="w-[44.125rem] flex flex-col items-start justify-start max-w-full">
            <h1 className="m-0 self-stretch h-[4.688rem] relative text-inherit font-normal font-inherit inline-block z-[2] mq450:text-[2.25rem] mq1050:text-[3rem]">
              In Spotlight This Month
            </h1>
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[2.562rem] box-border max-w-full text-[1.75rem] font-aktivgrotesk-regular">
              <h3 className="m-0 flex-1 relative text-inherit font-normal font-inherit inline-block max-w-full z-[2] mq450:text-[1.375rem]">{`Discover This Month’s Featured Videos & Articles`}</h3>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[2.375rem] pl-[2.062rem] box-border max-w-full text-[1.25rem] text-black font-inter">
          <div className="flex-1 flex flex-col items-start justify-start gap-[2.187rem] max-w-full mq750:gap-[1.063rem]">
            <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[3.687rem] pr-[0rem] pl-[0.375rem] box-border max-w-full text-[2.5rem] font-aktivgrotesk-bold">
              <div className="flex-1 flex flex-col items-start justify-start gap-[2.187rem] max-w-full mq750:gap-[1.063rem]">
                <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[1.312rem]">
                  <h1 className="m-0 w-[19.813rem] relative text-inherit font-normal font-inherit inline-block z-[1] mq450:text-[1.5rem] mq1050:text-[2rem]">{`Spotlight Videos `}</h1>
                </div>
                <div className="self-stretch relative text-[1.25rem] font-aktivgrotesk-regular text-center z-[1] mq450:text-[1rem]">{`We are thrilled to present a special of featuring your Startup, Product & Members , Explore about startups, products & member of our community who is making waves in the industry by our featured videos, podcasts, interviews, stories and articles in our spotlight section.`}</div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end pt-[0rem] px-[0.937rem] pb-[4.5rem] box-border max-w-full">
              <div className="w-[28.375rem] flex flex-col items-start justify-start gap-[0.125rem] max-w-full">
                <div className="w-[19.5rem] flex flex-row items-start justify-start py-[0rem] px-[1.562rem] box-border">
                  <div className="h-[2.063rem] flex-1 relative font-medium inline-block z-[1] mq450:text-[1rem]">
                    Buisness consulting
                  </div>
                </div>
                <h3 className="m-0 self-stretch relative text-[1.875rem] font-bold font-inherit z-[1] mq450:text-[1.125rem] mq1050:text-[1.5rem]">
                  The Future of AI Writing: What do you want to know
                </h3>
              </div>
            </div>
            <div className="w-[33.813rem] flex flex-row items-start justify-start pt-[0rem] px-[1.437rem] pb-[3.562rem] box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[1rem] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-end">
                  <div className="h-[2.063rem] w-[16.375rem] relative font-medium inline-block shrink-0 z-[1] mq450:text-[1rem]">
                    Buisness consulting
                  </div>
                </div>
                <h3 className="m-0 w-[28.375rem] relative text-[1.875rem] font-bold font-inherit text-right inline-block max-w-full z-[1] mq450:text-[1.125rem] mq1050:text-[1.5rem]">
                  The Future of AI Writing: What do you want to know
                </h3>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end pt-[0rem] px-[1.25rem] pb-[4.5rem] box-border max-w-full">
              <div className="w-[28.375rem] flex flex-col items-start justify-start gap-[0.125rem] max-w-full">
                <div className="w-[19.5rem] flex flex-row items-start justify-start py-[0rem] px-[1.562rem] box-border">
                  <div className="h-[2.063rem] flex-1 relative font-medium inline-block z-[1] mq450:text-[1rem]">
                    Buisness consulting
                  </div>
                </div>
                <h3 className="m-0 self-stretch relative text-[1.875rem] font-bold font-inherit z-[1] mq450:text-[1.125rem] mq1050:text-[1.5rem]">
                  The Future of AI Writing: What do you want to know
                </h3>
              </div>
            </div>
            <div className="w-[33.188rem] flex flex-row items-start justify-start pt-[0rem] px-[1.125rem] pb-[4.5rem] box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[1rem] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-end">
                  <div className="h-[2.063rem] w-[16.375rem] relative font-medium inline-block shrink-0 z-[1] mq450:text-[1rem]">
                    Buisness consulting
                  </div>
                </div>
                <h3 className="m-0 w-[28.375rem] relative text-[1.875rem] font-bold font-inherit text-right inline-block max-w-full z-[1] mq450:text-[1.125rem] mq1050:text-[1.5rem]">
                  The Future of AI Writing: What do you want to know
                </h3>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[2.25rem] pr-[2.25rem] pl-[2.625rem] box-border max-w-full text-[2.5rem] font-aktivgrotesk-bold mq1050:pl-[1.313rem] mq1050:box-border">
              <div className="flex-1 flex flex-col items-start justify-start gap-[2.25rem] max-w-full mq450:gap-[1.125rem]">
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.562rem] pl-[1.625rem] box-border max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[2.687rem] max-w-full mq450:gap-[1.313rem]">
                    <div className="self-stretch h-[0.063rem] relative box-border z-[1] border-t-[1px] border-solid border-gainsboro-100" />
                    <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
                      <h1 className="m-0 w-[20.938rem] relative text-inherit font-normal font-inherit inline-block max-w-full z-[1] mq450:text-[1.5rem] mq1050:text-[2rem]">
                        Spotlight Articles
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="self-stretch relative text-[1.25rem] font-aktivgrotesk-regular z-[1] mq450:text-[1rem]">{`Explore the inspiring journey of our startups & products from its inception to its current success.`}</div>
              </div>
            </div>
            <ContentCell />
            <ContentCell propPadding="0rem 0rem 2.062rem" />
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[3.812rem] pl-[4.25rem] box-border max-w-full text-[2.188rem] text-background-color font-aktivgrotesk-bold mq1050:pl-[2.125rem] mq1050:pr-[1.875rem] mq1050:box-border">
              <div className="flex-1 flex flex-col items-start justify-start gap-[2.875rem] max-w-full mq450:gap-[1.438rem]">
                <div className="self-stretch flex flex-col items-end justify-start gap-[4.562rem] max-w-full mq450:gap-[1.125rem] mq1050:gap-[2.25rem]">
                  <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[1.562rem] box-border max-w-full">
                    <div className="w-[21.375rem] rounded-xl bg-primary flex flex-row items-start justify-start pt-[0.812rem] pb-[0.875rem] pr-[1.437rem] pl-[1.812rem] box-border whitespace-nowrap max-w-full z-[1]">
                      <div className="h-[4.313rem] w-[21.375rem] relative rounded-xl bg-primary hidden max-w-full" />
                      <div className="flex-1 relative z-[2]">
                        Feature Spotlight
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-[0.063rem] relative box-border z-[1] border-t-[1px] border-solid border-text-secondary" />
                </div>
                <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[3.937rem] box-border max-w-full text-[4rem] text-black font-aktivgrotesk-black mq750:pl-[1.938rem] mq750:box-border">
                  <h1 className="m-0 h-[3.625rem] w-[24.375rem] relative text-inherit font-normal font-inherit whitespace-pre-wrap inline-block shrink-0 max-w-full z-[3] mq450:text-[2.375rem] mq1050:text-[3.188rem]">
                    SP TLIGHT
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
