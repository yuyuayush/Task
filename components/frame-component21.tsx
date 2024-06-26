import { useMemo } from "react";
import PropTypes from "prop-types";
export interface FCP {
  className:string,
  min?:string,
  propPadding?:string,
  propGap?:string,
  propPadding1?:string,
  propMinWidth?:string,
}
const FrameComponent2 = ({
  className = "",
  min,
  propPadding,
  propGap,
  propPadding1,
  propMinWidth,
}:FCP) => {
  const sessionIconStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const iconContainerStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const minutesLabelStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const minStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`flex flex-col items-start justify-start pt-[0.687rem] pb-[0rem] pr-[0.562rem] pl-[0rem] text-left text-[1.5rem] text-darkslategray font-aktivgrotesk-regular ${className}`}
      style={sessionIconStyle}
    >
      <div
        className="flex flex-row items-start justify-start gap-[1.062rem]"
        style={iconContainerStyle}
      >
        <img
          className="h-[3.75rem] w-[3.75rem] relative overflow-hidden shrink-0"
          alt=""
          src="/letsiconstimelight1.svg"
        />
        <div
          className="flex flex-col items-start justify-start pt-[0.687rem] px-[0rem] pb-[0rem]"
          style={minutesLabelStyle}
        >
          <div
            className="relative inline-block min-w-[4.625rem] mq450:text-[1.188rem]"
            style={minStyle}
          >
            {min}
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  min: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propGap: PropTypes.any,
  propPadding1: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default FrameComponent2;
