import PropTypes from "prop-types";

const ConsultantProfile = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[2.5rem] pr-[1.437rem] pl-[1.75rem] box-border max-w-full text-left text-[1.875rem] text-black font-aktivgrotesk-medium ${className}`}
    >
      <div className="flex-1 shadow-[0px_4px_4px_rgba(252,_28,_0,_0.25)] rounded-3xs bg-background-color box-border flex flex-col items-start justify-start pt-[2rem] pb-[5.5rem] pr-[1.875rem] pl-[2rem] gap-[1.187rem] max-w-full border-[1px] border-solid border-mistyrose mq450:pt-[1.313rem] mq450:pb-[3.563rem] mq450:box-border">
        <div className="w-[86.813rem] h-[29.125rem] relative shadow-[0px_4px_4px_rgba(252,_28,_0,_0.25)] rounded-3xs bg-background-color box-border hidden max-w-full border-[1px] border-solid border-mistyrose" />
        <div className="w-[74.688rem] flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq1225:flex-wrap">
          <div className="w-[35.188rem] flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem] box-border min-w-[35.188rem] max-w-full mq750:min-w-full mq1225:flex-1">
            <div className="self-stretch flex flex-row items-start justify-start gap-[1.562rem] max-w-full mq750:flex-wrap">
              <div className="flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem] box-border min-w-[12.5rem] mq750:flex-1">
                <div className="flex flex-col items-start justify-start gap-[1.375rem]">
                  <img
                    className="w-[12.5rem] h-[12.5rem] relative rounded-[50%] object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/profile-picture@2x.png"
                  />
                  <div className="flex flex-row items-start justify-start py-[0rem] px-[2rem]">
                    <h3 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[4.625rem] z-[1] mq450:text-[1.125rem] mq750:text-[1.5rem]">
                      Skills
                    </h3>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.75rem] min-w-[13.75rem] max-w-full">
                <div className="w-[10.875rem] flex flex-col items-start justify-start">
                  <h3 className="m-0 self-stretch relative text-inherit font-normal font-inherit z-[1] mq450:text-[1.125rem] mq750:text-[1.5rem]">
                    Ridhima Sen
                  </h3>
                  <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.312rem] pl-[0.125rem] text-[1.25rem] text-darkslategray font-aktivgrotesk-regular">
                    <div className="flex-1 relative z-[2] mq450:text-[1rem]">
                      Consulting Leader
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-end justify-start gap-[0.937rem] text-[1.125rem] text-darkslategray font-aktivgrotesk-regular mq450:flex-wrap">
                  <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem]">
                    <div className="flex flex-col items-start justify-start gap-[1.5rem]">
                      <img
                        className="w-[1.25rem] h-[1.25rem] relative overflow-hidden shrink-0 z-[1]"
                        alt=""
                        src="/grommeticonsuserexpert.svg"
                      />
                      <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.062rem]">
                        <div className="h-[3.625rem] w-[1.313rem] relative">
                          <img
                            className="absolute top-[0rem] left-[0.063rem] w-[1.25rem] h-[1.25rem] overflow-hidden z-[1]"
                            alt=""
                            src="/fluentmdl2calendaryear.svg"
                          />
                          <img
                            className="absolute top-[2.375rem] left-[0rem] w-[1.25rem] h-[1.25rem] overflow-hidden z-[1]"
                            alt=""
                            src="/fluentpayment20regular.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[1.375rem] min-w-[12.25rem]">
                    <div className="w-[15.438rem] relative inline-block z-[1]">
                      Qualified in startup Consulting
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.437rem]">
                      <div className="flex-1 relative z-[1]">
                        20 Years of experience in consulting
                      </div>
                    </div>
                    <div className="w-[13rem] flex flex-row items-start justify-start py-[0rem] px-[0.5rem] box-border">
                      <div className="flex-1 relative z-[1]">
                        Consultation fee ₹1000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[32.25rem] flex flex-row items-start justify-start gap-[1.5rem] min-w-[32.25rem] max-w-full mq750:flex-wrap mq750:min-w-full mq1225:flex-1">
            <div className="h-[15.25rem] w-[0.063rem] relative box-border z-[1] border-r-[1px] border-solid border-silver mq750:w-full mq750:h-[0.063rem]" />
            <div className="flex-1 flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem] box-border min-w-[19.938rem] max-w-full">
              <div className="self-stretch flex flex-col items-end justify-start gap-[5.437rem] max-w-full mq750:gap-[2.688rem]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] max-w-full">
                  <h3 className="m-0 w-[17.188rem] relative text-inherit font-normal font-inherit inline-block z-[1] mq450:text-[1.125rem] mq750:text-[1.5rem]">
                    Consultation Prices
                  </h3>
                  <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.25rem] box-border max-w-full text-[1.25rem] text-text-secondary font-aktivgrotesk-regular">
                    <div className="flex-1 flex flex-col items-end justify-start max-w-full">
                      <div className="self-stretch flex flex-row items-start justify-start gap-[0.937rem] mq750:flex-wrap">
                        <div className="flex-1 flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border min-w-[6.813rem]">
                          <div className="self-stretch flex flex-row items-start justify-start gap-[0.625rem]">
                            <img
                              className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 z-[1]"
                              alt=""
                              src="/arcticonspriceconverter.svg"
                            />
                            <div className="flex-1 flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                              <div className="self-stretch relative z-[1] mq450:text-[1rem]">
                                30 min session
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-[0.8929] flex flex-row items-start justify-start py-[0rem] pr-[1.125rem] pl-[0rem] box-border gap-[0.5rem] min-w-[6.813rem] mq450:flex-1">
                          <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
                            <img
                              className="w-[1.25rem] h-[1.25rem] relative overflow-hidden shrink-0 z-[1]"
                              alt=""
                              src="/arcticonspriceconverter.svg"
                            />
                          </div>
                          <div className="flex-1 relative z-[1] mq450:text-[1rem]">{`01 hr session `}</div>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[0.312rem]">
                          <img
                            className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 z-[1]"
                            alt=""
                            src="/letsiconstimelight.svg"
                          />
                          <div className="relative inline-block min-w-[6.063rem] z-[1] mq450:text-[1rem]">
                            Availability
                          </div>
                        </div>
                      </div>
                      <div className="w-[29.438rem] flex flex-row items-start justify-end py-[0rem] px-[0.875rem] box-border max-w-full mt-[-0.188rem] text-black font-aktivgrotesk-bold">
                        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq450:flex-wrap">
                          <div className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem]">
                            <div className="relative inline-block min-w-[3.688rem] whitespace-nowrap z-[1] mq450:text-[1rem]">
                              ₹1000
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem]">
                            <div className="relative inline-block min-w-[3.688rem] whitespace-nowrap z-[1] mq450:text-[1rem]">
                              ₹1500
                            </div>
                          </div>
                          <div className="w-[5.063rem] relative inline-block min-w-[5.063rem] z-[1] mq450:text-[1rem]">
                            Mon-Sat
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[23.75rem] flex flex-row items-start justify-end py-[0rem] px-[2.5rem] box-border max-w-full text-background-color font-aktivgrotesk-bold">
                  <div className="flex-1 rounded-21xl bg-primary flex flex-row items-start justify-end pt-[0.562rem] px-[3.5rem] pb-[0.625rem] whitespace-nowrap z-[1] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
                    <div className="h-[3.438rem] w-[18.75rem] relative rounded-21xl bg-primary hidden" />
                    <div className="w-[9.813rem] relative inline-block shrink-0 z-[2]">
                      Book Now
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1.562rem] box-border max-w-full text-[1.25rem] text-primary font-aktivgrotesk-regular">
          <div className="flex-1 flex flex-row items-end justify-center gap-[0.875rem] max-w-full mq1225:flex-wrap">
            <div className="w-[15.25rem] rounded-21xl bg-lavenderblush box-border flex flex-row items-start justify-start pt-[0.687rem] px-[1.437rem] pb-[0.625rem] whitespace-nowrap z-[1] border-[2px] border-solid border-whitesmoke-200">
              <div className="h-[3.125rem] w-[15.25rem] relative rounded-21xl bg-lavenderblush box-border hidden border-[2px] border-solid border-whitesmoke-200" />
              <div className="flex-1 relative z-[2]">Marketing Consulting</div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start py-[0rem] pr-[0.5rem] pl-[0rem] box-border min-w-[10.25rem] mq1225:flex-1">
              <div className="self-stretch rounded-21xl bg-lavenderblush flex flex-row items-start justify-start pt-[0.687rem] px-[1.437rem] pb-[0.625rem] whitespace-nowrap z-[1] border-[2px] border-solid border-whitesmoke-200">
                <div className="h-[3.125rem] w-[15.25rem] relative rounded-21xl bg-lavenderblush box-border hidden border-[2px] border-solid border-whitesmoke-200" />
                <div className="w-[11.938rem] relative inline-block z-[2]">
                  Accounts Consulting
                </div>
              </div>
            </div>
            <div className="w-[15.25rem] rounded-21xl bg-lavenderblush box-border flex flex-row items-start justify-start pt-[0.687rem] px-[1.437rem] pb-[0.625rem] whitespace-nowrap z-[1] border-[2px] border-solid border-whitesmoke-200">
              <div className="h-[3.125rem] w-[15.25rem] relative rounded-21xl bg-lavenderblush box-border hidden border-[2px] border-solid border-whitesmoke-200" />
              <div className="w-[11.625rem] relative inline-block z-[2]">
                Buisness Consulting
              </div>
            </div>
            <div className="flex-[0.9683] flex flex-col items-start justify-end pt-[0rem] pb-[0.125rem] pr-[1rem] pl-[0rem] box-border min-w-[10.563rem] mq1225:flex-1">
              <div className="self-stretch rounded-21xl bg-lavenderblush flex flex-row items-start justify-start pt-[0.687rem] px-[1.437rem] pb-[0.625rem] whitespace-nowrap z-[1] border-[2px] border-solid border-whitesmoke-200">
                <div className="h-[3.125rem] w-[15.25rem] relative rounded-21xl bg-lavenderblush box-border hidden border-[2px] border-solid border-whitesmoke-200" />
                <div className="w-[11.625rem] relative inline-block z-[2]">
                  Buisness Consulting
                </div>
              </div>
            </div>
            <div className="w-[15.25rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem] box-border">
              <div className="self-stretch rounded-21xl bg-lavenderblush flex flex-row items-start justify-start pt-[0.687rem] px-[1.437rem] pb-[0.625rem] whitespace-nowrap z-[1] border-[2px] border-solid border-whitesmoke-200">
                <div className="h-[3.125rem] w-[15.25rem] relative rounded-21xl bg-lavenderblush box-border hidden border-[2px] border-solid border-whitesmoke-200" />
                <div className="w-[11.625rem] relative inline-block z-[2]">
                  Buisness Consulting
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ConsultantProfile.propTypes = {
  className: PropTypes.string,
};

export default ConsultantProfile;
