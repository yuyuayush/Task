import { FC, useMemo } from "react";
import PropTypes from "prop-types";
import { FCP } from "./frame-component21";
interface FrameComponent3Props {
  className?: string;

  /** Style props */
  propPadding?: string | number;
  propBackgroundColor?: string;
  propBackgroundColor1?: string;
  propPadding1?: string | number;
}
const FrameComponent3:FC<FrameComponent3Props> = ({
  className = "",
  propPadding,
  propBackgroundColor,
  propBackgroundColor1,
  propPadding1,
}) => {
  const morningSlotsStyle = useMemo(() => {
    return {
      padding: propPadding,
      backgroundColor: propBackgroundColor,
    };
  }, [propPadding, propBackgroundColor]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const afternoonSlotsStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[2.187rem] min-w-[7.313rem] text-left text-[1.25rem] text-primary font-aktivgrotesk-medium ${className}`}
    >
      <div
        className="self-stretch rounded-3xs bg-background-color flex flex-row items-start justify-start py-[1.5rem] pr-[1.625rem] pl-[1.75rem] whitespace-nowrap border-[1px] border-solid border-primary"
        style={morningSlotsStyle}
      >
        <div
          className="h-[4.75rem] w-[11.25rem] relative rounded-3xs bg-background-color box-border hidden border-[1px] border-solid border-primary"
          style={rectangleDivStyle}
        />
        <div className="relative inline-block min-w-[7.75rem] z-[1]">
          7:00-8:00 AM
        </div>
      </div>
      <div
        className="self-stretch rounded-3xs bg-background-color flex flex-row items-start justify-start py-[1.5rem] pr-[1.625rem] pl-[1.75rem] whitespace-nowrap border-[1px] border-solid border-primary"
        style={afternoonSlotsStyle}
      >
        <div className="h-[4.75rem] w-[11.25rem] relative rounded-3xs bg-background-color box-border hidden border-[1px] border-solid border-primary" />
        <div className="relative inline-block min-w-[7.75rem] z-[1]">
          7:00-8:00 AM
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propBackgroundColor1: PropTypes.any,
  propPadding1: PropTypes.any,
};

export default FrameComponent3;
