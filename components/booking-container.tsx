import PropTypes from "prop-types";

const BookingContainer = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end py-[0rem] px-[0.375rem] box-border max-w-full text-left text-[1.25rem] text-black font-aktivgrotesk-medium ${className}`}
    >
      <div className="w-[86.75rem] rounded-xl bg-background-color box-border flex flex-row items-start justify-between pt-[2.375rem] pb-[1.75rem] pr-[0.75rem] pl-[1.062rem] max-w-full gap-[1.25rem] border-[1px] border-solid border-silver mq1225:flex-wrap">
        <div className="h-[16rem] w-[86.75rem] relative rounded-xl bg-background-color box-border hidden max-w-full border-[1px] border-solid border-silver" />
        <div className="w-[7.813rem] flex flex-col items-start justify-start py-[0rem] pr-[1rem] pl-[0rem] box-border gap-[0.531rem]">
          <img
            className="w-[3.125rem] h-[3.125rem] relative object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/18@2x.png"
          />
          <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.437rem]">
            <div className="relative inline-block min-w-[6.375rem] z-[1] mq450:text-[1rem]">
              Booking ID
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.437rem] text-darkslategray font-aktivgrotesk-regular">
            <div className="flex-1 relative z-[1] mq450:text-[1rem]">
              25716236
            </div>
          </div>
        </div>
        <div className="w-[32.125rem] flex flex-row items-start justify-start gap-[6.062rem] max-w-full mq450:flex-wrap mq450:gap-[1.5rem] mq750:gap-[3rem]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[0.531rem] min-w-[8.625rem]">
            <div className="flex flex-row items-start justify-start py-[0rem] px-[0.062rem]">
              <img
                className="h-[3.125rem] w-[3.125rem] relative object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/category-1@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.062rem]">
              <div className="flex-1 relative z-[1] mq450:text-[1rem]">
                Consultation Category
              </div>
            </div>
            <div className="w-[11.938rem] relative font-aktivgrotesk-regular text-darkslategray text-center inline-block z-[1] mq450:text-[1rem]">
              Startup consultation
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[0.625rem] min-w-[8.313rem] text-text-secondary font-aktivgrotesk-regular">
            <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.312rem] gap-[0.125rem] text-center text-black font-aktivgrotesk-medium">
              <img
                className="w-[3.125rem] h-[3.125rem] relative object-contain z-[1]"
                loading="lazy"
                alt=""
                src="/201@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.562rem]">
                <div className="flex-1 relative z-[1] mq450:text-[1rem]">{`Session Time & date`}</div>
              </div>
            </div>
            <div className="w-[11.688rem] flex flex-row items-start justify-start py-[0rem] px-[0.562rem] box-border text-darkslategray">
              <div className="flex-1 relative z-[1] mq450:text-[1rem]">{`Wed, May 10,2024 `}</div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.875rem] pl-[0.562rem]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.25rem]">
                <div className="flex flex-row items-start justify-start py-[0rem] px-[1.937rem]">
                  <div className="relative inline-block min-w-[7.438rem] z-[1] mq450:text-[1rem]">
                    7:00-8:00AM
                  </div>
                </div>
                <div className="self-stretch h-[0.063rem] relative box-border z-[1] border-t-[1px] border-solid border-gainsboro-200" />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[4.625rem] pl-[4.375rem]">
              <div className="relative inline-block min-w-[3.75rem] z-[1] mq450:text-[1rem]">
                01 Hrs
              </div>
            </div>
          </div>
        </div>
        <div className="w-[32rem] flex flex-col items-start justify-start gap-[0.125rem] max-w-full">
          <img
            className="w-[3.125rem] h-[3.125rem] relative object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/17@2x.png"
          />
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.562rem] box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start gap-[3.312rem] max-w-full mq450:flex-wrap mq750:gap-[1.625rem]">
              <div className="flex flex-col items-start justify-start gap-[0.375rem]">
                <div className="w-[8.938rem] relative inline-block z-[1] mq450:text-[1rem]">
                  Booking Status
                </div>
                <div className="rounded-21xl bg-lavender flex flex-row items-start justify-start pt-[0.562rem] px-[1.312rem] pb-[0.5rem] z-[1] text-[1.375rem] text-darkslateblue font-aktivgrotesk-regular">
                  <div className="h-[2.688rem] w-[9.375rem] relative rounded-21xl bg-lavender hidden" />
                  <div className="relative inline-block min-w-[6.688rem] z-[1] mq450:text-[1.125rem]">
                    Confirmed
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem] box-border min-w-[12.188rem] text-[1.5rem] text-primary">
                <div className="self-stretch rounded-21xl bg-background-color flex flex-row items-start justify-start pt-[0.625rem] px-[4.75rem] pb-[0.687rem] whitespace-nowrap z-[1] border-[2px] border-solid border-primary mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
                  <div className="h-[3.438rem] w-[18.75rem] relative rounded-21xl bg-background-color box-border hidden border-[2px] border-solid border-primary" />
                  <div className="flex-1 relative z-[2]">Join Session</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

BookingContainer.propTypes = {
  className: PropTypes.string,
};

export default BookingContainer;
