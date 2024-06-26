import { useMemo } from "react";
import PropTypes from "prop-types";

const ContentCell = ({ className = "", propPadding }: {className?:string, propPadding?: string }) => {
  const contentCellStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={`w-[58.063rem] flex flex-row items-start justify-start gap-[4.687rem] max-w-full text-left text-[1rem] text-black font-inter mq450:gap-[1.188rem] mq1050:flex-wrap mq1050:gap-[2.313rem] ${className}`}
      style={contentCellStyle}
    >
      <div className="flex-1 flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border min-w-[17.375rem] max-w-full mq1050:flex-1">
        <div className="self-stretch bg-background-color box-border flex flex-col items-start justify-end pt-[10.625rem] px-[0.25rem] pb-[1.062rem] gap-[0.5rem] max-w-full z-[1] border-[1px] border-solid border-darkgray">
          <div className="self-stretch h-[16.875rem] relative bg-background-color box-border hidden border-[1px] border-solid border-darkgray" />
          <div className="w-[12.625rem] flex flex-row items-start justify-start gap-[0.125rem]">
            <img
              className="h-[1.438rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.438rem] z-[2]"
              alt=""
              src="/gridiconsstory.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
              <div className="self-stretch relative font-medium z-[2]">
                Buisness consulting
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.375rem] pl-[0.187rem] box-border max-w-full text-[1.25rem]">
            <b className="flex-1 relative inline-block max-w-full z-[2] mq450:text-[1rem]">
              The Future of AI Writing: What do you want to know
            </b>
          </div>
        </div>
      </div>
      <div className="flex-[0.9766] bg-background-color box-border flex flex-col items-start justify-end pt-[10.625rem] px-[0.25rem] pb-[1.062rem] gap-[0.5rem] min-w-[17.375rem] max-w-full z-[1] border-[1px] border-solid border-darkgray mq1050:flex-1">
        <div className="self-stretch h-[16.875rem] relative bg-background-color box-border hidden border-[1px] border-solid border-darkgray" />
        <div className="w-[12.625rem] flex flex-row items-start justify-start gap-[0.125rem]">
          <img
            className="h-[1.438rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.438rem] z-[2]"
            alt=""
            src="/gridiconsstory.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
            <div className="self-stretch relative font-medium z-[2]">
              Buisness consulting
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.375rem] pl-[0.187rem] box-border max-w-full text-[1.25rem]">
          <b className="flex-1 relative inline-block max-w-full z-[2] mq450:text-[1rem]">
            The Future of AI Writing: What do you want to know
          </b>
        </div>
      </div>
    </div>
  );
};

ContentCell.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.oneOfType,
};

export default ContentCell;
