import PropTypes from "prop-types";

const GroupComponent = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[29.563rem] left-[1.313rem] rounded-3xs box-border w-[61.063rem] flex flex-col items-start justify-start pt-[1rem] pb-[0.812rem] pr-[0rem] pl-[1.312rem] gap-[0.687rem] max-w-full z-[2] text-left text-[1.75rem] text-text-secondary font-aktivgrotesk-medium border-[1px] border-solid border-gainsboro-200 ${className}`}
    >
      <div className="w-[58.875rem] flex flex-row items-start justify-start pt-[0rem] px-[0.75rem] pb-[0.187rem] box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq825:flex-wrap">
          <div className="w-[31.813rem] flex flex-col items-start justify-start gap-[1.625rem] min-w-[31.813rem] max-w-full mq675:min-w-full mq825:flex-1">
            <div className="self-stretch flex flex-row items-start justify-start gap-[1.5rem] max-w-full mq675:flex-wrap">
              <img
                className="h-[6.25rem] w-[6.25rem] relative object-cover z-[3]"
                loading="lazy"
                alt=""
                src="/s-logo-11282-1678995799-img@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem] box-border min-w-[15.625rem] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[0.062rem]">
                    <h3 className="m-0 self-stretch relative text-inherit font-normal font-inherit z-[3] mq450:text-[1.375rem]">
                      Tech Savvy Real Estate Agent
                    </h3>
                    <div className="w-[14.688rem] relative text-[1.25rem] font-aktivgrotesk-regular text-darkslategray inline-block z-[3] mq450:text-[1rem]">
                      Sellstate Heartland Realty
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[0.312rem] text-[1.25rem] text-darkslategray font-aktivgrotesk-regular">
                    <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
                      <img
                        className="w-[0.875rem] h-[1.125rem] relative z-[3]"
                        loading="lazy"
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                    <div className="relative z-[3] mq450:text-[1rem]">
                      Overland Park , USA (Hybrid)
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="m-0 w-[13.188rem] relative text-inherit font-normal font-inherit inline-block z-[3] mq450:text-[1.375rem]">
              Job Description
            </h3>
          </div>
          <div className="w-[14.875rem] flex flex-col items-start justify-start pt-[1.562rem] px-[0rem] pb-[0rem] box-border text-[2.188rem] text-background-color font-aktivgrotesk-bold">
            <div className="self-stretch rounded-xl bg-primary flex flex-row items-start justify-start pt-[0.437rem] px-[2.562rem] pb-[0.25rem] whitespace-nowrap border-[1px] border-solid border-primary">
              <div className="h-[3.563rem] w-[14.875rem] relative rounded-xl bg-primary box-border hidden border-[1px] border-solid border-primary" />
              <div className="flex-1 relative z-[1]">View Job</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[61.063rem] h-[19.813rem] relative rounded-3xs box-border hidden max-w-full border-[1px] border-solid border-gainsboro-200" />
      <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[0.25rem] pr-[0rem] pl-[0.437rem] box-border max-w-full text-[1rem] text-black font-aktivgrotesk-regular">
        <div className="h-[3.125rem] flex-1 relative inline-block max-w-full">
          Candidate will serve as customer service executive resolving customer
          queries in line with the client and business guidelines. Individuals
          with experience in handling Inbound calls from UK customers.
        </div>
      </div>
      <div className="w-[58.188rem] h-[0.063rem] relative box-border max-w-full z-[3] border-t-[1px] border-solid border-darkgray" />
      <div className="w-[56.813rem] flex flex-row items-start justify-start py-[0rem] px-[0.75rem] box-border max-w-full text-[1.25rem]">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq825:flex-wrap">
          <div className="w-[9rem] flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border">
            <div className="self-stretch flex flex-row items-start justify-start gap-[0.5rem]">
              <div className="relative inline-block min-w-[3.063rem] z-[3] mq450:text-[1rem]">
                Date:
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] text-[1rem] text-darkgray font-aktivgrotesk-regular">
                <div className="self-stretch relative z-[3]">04/04/2023</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[0.187rem] pb-[0rem] pr-[1.562rem] pl-[0rem]">
            <div className="flex flex-row items-start justify-start gap-[0.625rem]">
              <div className="w-[5.688rem] flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem] box-border">
                <div className="self-stretch relative z-[3] mq450:text-[1rem]">
                  Job Type:
                </div>
              </div>
              <div className="rounded-21xl bg-lavender flex flex-row items-start justify-start pt-[0.187rem] px-[1.812rem] pb-[0rem] z-[3] text-[1.5rem] font-aktivgrotesk-regular">
                <div className="h-[1.938rem] w-[8.75rem] relative rounded-21xl bg-lavender hidden" />
                <div className="relative inline-block min-w-[5.063rem] z-[4] mq450:text-[1.188rem]">
                  On-site
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[0.812rem]">
            <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
              <div className="relative inline-block min-w-[4.125rem] z-[3] mq450:text-[1rem]">
                Status:
              </div>
            </div>
            <div className="rounded-21xl bg-honeydew flex flex-row items-start justify-start py-[0.25rem] pr-[3.375rem] pl-[3.5rem] z-[3] text-darkgreen font-aktivgrotesk-regular">
              <div className="h-[1.938rem] w-[12.5rem] relative rounded-21xl bg-honeydew hidden" />
              <div className="relative inline-block min-w-[5.625rem] z-[4] mq450:text-[1rem]">
                Approved
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
