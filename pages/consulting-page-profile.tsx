import FrameComponent5 from "../components/frame-component5";
import FrameComponent6 from "../components/frame-component6";
import FrameComponent7 from "../components/frame-component7";

const ConsultingPageProfile = () => {
  return (
    <div className="w-full relative bg-background-color overflow-hidden flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[325.687rem] box-border gap-[4.125rem] leading-[normal] tracking-[normal] text-left text-[1.875rem] text-black font-aktivgrotesk-bold mq450:gap-[1rem] mq750:gap-[2.063rem]">
      <FrameComponent5 />
      <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[2.562rem] pl-[2.875rem] box-border max-w-full mq750:pl-[1.438rem] mq750:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[2.125rem] max-w-full mq750:gap-[1.063rem]">
          <div className="w-[17.563rem] flex flex-row items-start justify-start py-[0rem] px-[1.5rem] box-border">
            <div className="h-[3.188rem] flex-1 relative inline-block mq450:text-[1.125rem] mq750:text-[1.5rem]">
              Available Slots
            </div>
          </div>
          <FrameComponent6 />
          <FrameComponent7 />
          <div className="w-[81.688rem] flex flex-col items-end justify-start gap-[3.125rem] max-w-full text-[1.5rem] text-background-color font-aktivgrotesk-medium mq750:gap-[1.563rem]">
            <div className="w-[78.625rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
              <div className="w-[18.75rem] rounded-21xl bg-primary flex flex-row items-start justify-end pt-[0.812rem] px-[2.937rem] pb-[0.875rem] box-border whitespace-nowrap mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
                <div className="h-[3.438rem] w-[18.75rem] relative rounded-21xl bg-primary hidden" />
                <div className="w-[12.313rem] relative inline-block z-[1]">
                  Preceed Payment
                </div>
              </div>
            </div>
            <div className="self-stretch h-[0.125rem] relative box-border border-t-[2px] border-solid border-gainsboro-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultingPageProfile;
