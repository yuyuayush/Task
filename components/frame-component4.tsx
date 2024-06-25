import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] pb-[10.231rem] pr-[1.25rem] pl-[2.312rem] box-border max-w-full shrink-0 mt-[-0.107rem] text-center text-[2rem] text-black font-aktivgrotesk-bold mq800:pb-[6.625rem] mq800:box-border ${className}`}
    >
      <div className="w-[67.063rem] flex flex-row flex-wrap items-end justify-center gap-[10.437rem] max-w-full mq800:gap-[2.625rem] mq1125:gap-[5.188rem] mq450:gap-[1.313rem]">
        <div className="flex-1 flex flex-col items-end justify-start gap-[2.875rem] min-w-[18.375rem] max-w-full mq450:gap-[1.438rem]">
          <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[1.937rem] pl-[2.312rem] box-border max-w-full">
            <img
              className="h-[17.563rem] flex-1 relative max-w-full overflow-hidden object-cover"
              loading="lazy"
              alt=""
              src="/1@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-col items-end justify-start gap-[1.125rem] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[3.875rem] pl-[4.25rem] box-border max-w-full mq450:pl-[2.125rem] mq450:pr-[1.938rem] mq450:box-border">
              <div className="flex-1 relative inline-block max-w-full mq800:text-[1.625rem] mq450:text-[1.188rem]">
                Career Advancement
              </div>
            </div>
            <div className="self-stretch relative text-[1rem] font-aktivgrotesk-regular">
              {" "}
              Position yourself for career advancement by gaining practical
              experience, expanding your professional network, and building a
              solid reputation within the startup community
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.062rem] box-border min-w-[18.375rem] max-w-full">
          <div className="self-stretch flex flex-col items-end justify-start gap-[3.875rem] max-w-full mq450:gap-[1.938rem]">
            <div className="w-[26.25rem] flex flex-row items-start justify-end py-[0rem] px-[1.187rem] box-border max-w-full">
              <img
                className="h-[21.188rem] flex-1 relative max-w-full overflow-hidden object-cover"
                alt=""
                src="/14-1@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-col items-end justify-start gap-[0.75rem] max-w-full">
              <div className="w-[27.438rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
                <div className="w-[16.563rem] relative inline-block mq800:text-[1.625rem] mq450:text-[1.188rem]">
                  Portfolio Building
                </div>
              </div>
              <div className="self-stretch h-[3.563rem] relative text-[1rem] leading-[1.15rem] font-aktivgrotesk-regular inline-block min-h-[3.563rem]">
                Build a strong portfolio of projects and experiences that
                showcase your skills and accomplishments to potential employers
                or clients.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
