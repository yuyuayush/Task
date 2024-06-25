import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[0rem] left-[0.063rem] rounded-t-xl rounded-b-none bg-darkslategray w-full flex flex-col items-center justify-start pt-[1.5rem] px-[1.25rem] pb-[0rem] box-border gap-[0.25rem] max-w-full z-[1] text-center text-[3.75rem] text-background-color font-aktivgrotesk-black ${className}`}
    >
      <div className="w-[63.5rem] h-[16.438rem] relative rounded-t-xl rounded-b-none bg-darkslategray hidden max-w-full" />
      <div className="w-[22.875rem] flex flex-col items-start justify-start gap-[0.562rem] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem]">
          <img
            className="h-[6.25rem] w-[6.25rem] relative object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/152@2x.png"
          />
        </div>
        <h1 className="m-0 self-stretch h-[4.688rem] relative text-inherit font-normal font-inherit inline-block z-[2] mq450:text-[2.25rem] mq825:text-[3rem]">
          Job is LIve
        </h1>
      </div>
      <div className="w-[22.875rem] flex flex-row items-start justify-start py-[0rem] pr-[1.187rem] pl-[1.25rem] box-border max-w-full text-left text-[1.75rem] font-aktivgrotesk-regular">
        <h3 className="m-0 h-[3.313rem] flex-1 relative text-inherit font-normal font-inherit inline-block max-w-full z-[2] mq450:text-[1.375rem]">
          Your Job Posting is Live!
        </h3>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
