import PropTypes from "prop-types";

const ExpansionContent = ({ className = "" }) => {
  return (
    <section
      className={`w-[86.438rem] flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[1.312rem] box-border max-w-full shrink-0 mt-[-0.107rem] text-left text-[1.25rem] text-black font-aktivgrotesk-regular ${className}`}
    >
      <div className="w-[69.063rem] flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq1125:flex-wrap mq1125:justify-center">
        <div className="w-[42rem] flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem] box-border min-w-[42rem] max-w-full mq800:min-w-full mq1125:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.937rem] max-w-full mq800:gap-[0.938rem]">
            <div className="w-[34.25rem] flex flex-row items-start justify-start py-[0rem] px-[1.062rem] box-border max-w-full">
              <div className="h-[7.188rem] flex-1 relative leading-[1.4rem] inline-block min-h-[7.188rem] max-w-full mq450:text-[1rem]">
                Building relationships with individuals from different
                backgrounds and cultures not only enriches the startup's
                internal culture but also provides valuable insights and
                connections that can facilitate international growth and market
                penetration.
              </div>
            </div>
            <div className="self-stretch h-[0.063rem] relative box-border z-[1] border-t-[1px] border-solid border-primary" />
          </div>
        </div>
        <img
          className="w-[21.875rem] relative max-h-full object-cover max-w-full mq1125:flex-1"
          loading="lazy"
          alt=""
          src="/7@2x.png"
        />
      </div>
    </section>
  );
};

ExpansionContent.propTypes = {
  className: PropTypes.string,
};

export default ExpansionContent;
