import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";

const DailySpotlightMonthly = () => {
  return (
    <div className="w-full relative bg-whitesmoke-100 overflow-hidden flex flex-row items-start justify-center pt-[24.937rem] pb-[15.437rem] pr-[1.25rem] pl-[2rem] box-border leading-[normal] tracking-[normal]">
      <main className="w-[64.375rem] flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[197.25rem] box-border relative gap-[6.125rem] max-w-full text-left text-[1.25rem] text-black font-aktivgrotesk-bold lg:pb-[54.125rem] lg:box-border mq450:pb-[22.875rem] mq450:box-border mq750:gap-[1.5rem] mq1050:gap-[3.063rem] mq1050:pb-[35.188rem] mq1050:box-border">
        <FrameComponent1 />
        <FrameComponent />
        <section className="w-[61.875rem] flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[12.812rem] box-border gap-[0.625rem] min-h-[16.375rem] max-w-full text-left text-[1.25rem] text-black font-aktivgrotesk-bold">
          <div className="w-[60.188rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
            <div className="w-[49.313rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full mq750:flex-wrap">
              <div className="w-[6.75rem] flex flex-col items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border">
                <div className="w-[4.875rem] relative inline-block z-[1] mq450:text-[1rem]">
                  Podcast
                </div>
              </div>
              <div className="w-[6.313rem] relative inline-block z-[1] mq450:text-[1rem]">
                Interviews
              </div>
              <div className="w-[9.125rem] relative inline-block z-[1] mq450:text-[1rem]">
                Startup Stories
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[2.562rem] max-w-full text-center font-aktivgrotesk-regular mq750:gap-[1.25rem] mq1050:flex-wrap">
            <div className="flex-[0.9503] flex flex-col items-start justify-start py-[0rem] pr-[1rem] pl-[0rem] box-border min-w-[13.063rem] max-w-full mq1050:flex-1">
              <div className="self-stretch relative z-[1] mq450:text-[1rem]">
                Share your journey and insights
              </div>
            </div>
            <div className="w-[15.875rem] relative inline-block shrink-0 z-[1] mq450:text-[1rem]">
              Highlight your startup story
            </div>
            <div className="flex-1 relative inline-block min-w-[13.5rem] max-w-full z-[1] mq450:text-[1rem] mq1050:flex-1">
              Showcasing your achievements
            </div>
          </div>
        </section>
        <div className="w-[62.063rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <div className="w-[38.813rem] flex flex-row flex-wrap items-start justify-start gap-[4.75rem] max-w-full mq450:gap-[1.188rem] mq750:gap-[2.375rem]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[0.812rem] min-w-[11.438rem]">
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[4.312rem] pl-[4.25rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
                <div className="flex-1 relative z-[1] mq450:text-[1rem]">
                  Feature Videos
                </div>
              </div>
              <div className="self-stretch relative font-aktivgrotesk-regular text-center z-[1] mq450:text-[1rem]">
                Feature your brand videos
              </div>
            </div>
            <div className="w-[16.5rem] flex flex-col items-start justify-start gap-[0.812rem]">
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[3.312rem] pl-[3.625rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
                <div className="flex-1 relative z-[1] mq450:text-[1rem]">
                  Feature Articles
                </div>
              </div>
              <div className="self-stretch relative font-aktivgrotesk-regular text-center z-[1] mq450:text-[1rem]">
                Feature your brand articles
              </div>
            </div>
          </div>
        </div>
        <section className="w-[63.563rem] flex flex-row items-start justify-end py-[0rem] px-[3.187rem] box-border max-w-full text-center text-[1.875rem] text-black font-aktivgrotesk-bold mq1050:pl-[1.563rem] mq1050:pr-[1.563rem] mq1050:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[3.125rem] max-w-full mq450:gap-[1.563rem]">
            <h3 className="m-0 self-stretch relative text-inherit font-normal font-inherit z-[1] mq450:text-[1.125rem] mq1050:text-[1.5rem]">
              Thank you for being a part of our community. We’re excited to see
              your startup grow and thrive.
            </h3>
            <div className="w-[53.938rem] flex flex-row items-start justify-start py-[0rem] px-[3.937rem] box-border max-w-full text-[1.25rem] font-aktivgrotesk-regular mq1050:pl-[1.938rem] mq1050:pr-[1.938rem] mq1050:box-border">
              <div className="flex-1 relative inline-block max-w-full z-[1] mq450:text-[1rem]">
                Join our community on social media to stay updated with the
                latest news, tips, and success stories from fellow
                entrepreneurs.
              </div>
            </div>
          </div>
        </section>
        <section className="w-[63.563rem] h-full absolute !m-[0] top-[0rem] bottom-[0rem] left-[0.063rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-background-color w-full h-full" />
          <img
            className="absolute top-[34.125rem] left-[31.938rem] w-[1.438rem] h-[1.438rem] overflow-hidden z-[2]"
            alt=""
            src="/gridiconsstory1.svg"
          />
          <img
            className="absolute top-[60.813rem] left-[31.625rem] w-[1.438rem] h-[1.438rem] overflow-hidden z-[2]"
            alt=""
            src="/gridiconsstory1.svg"
          />
          <img
            className="absolute top-[47.5rem] left-[30.813rem] w-[1.438rem] h-[1.438rem] overflow-hidden z-[2]"
            alt=""
            src="/gridiconsstory1.svg"
          />
          <img
            className="absolute top-[74.188rem] left-[30.5rem] w-[1.438rem] h-[1.438rem] overflow-hidden z-[2]"
            alt=""
            src="/gridiconsstory1.svg"
          />
          <div className="absolute top-[33.563rem] left-[4.563rem] w-[26.625rem] h-[10.563rem] bg-[url('/at-cover-24433-1711457971-img800@2x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
            <img
              className="absolute top-[0rem] left-[0rem] w-full h-full object-cover hidden"
              alt=""
              src="/at-cover-24433-1711457971-img800@2x.png"
            />
            <img
              className="absolute top-[3.25rem] left-[11.125rem] w-[3.75rem] h-[3.75rem] z-[2]"
              loading="lazy"
              alt=""
              src="/group-4.svg"
            />
          </div>
          <div className="absolute top-[60.25rem] left-[4.25rem] w-[26.625rem] h-[10.563rem] bg-[url('/at-cover-24433-1711457971-img800@2x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
            <img
              className="absolute top-[0rem] left-[0rem] w-full h-full object-cover hidden"
              alt=""
              src="/at-cover-24433-1711457971-img800@2x.png"
            />
            <img
              className="absolute top-[3.25rem] left-[11.125rem] w-[3.75rem] h-[3.75rem] z-[2]"
              loading="lazy"
              alt=""
              src="/group-4.svg"
            />
          </div>
          <div className="absolute top-[47.5rem] left-[33.75rem] w-[26.625rem] h-[10.563rem] bg-[url('/at-cover-24433-1711457971-img800@2x.png')] bg-cover bg-no-repeat bg-[top] z-[2]">
            <img
              className="absolute top-[0rem] left-[0rem] w-full h-full object-cover hidden"
              alt=""
              src="/at-cover-24433-1711457971-img800@2x.png"
            />
            <img
              className="absolute top-[3.375rem] left-[13.438rem] w-[3.75rem] h-[3.75rem] z-[3]"
              loading="lazy"
              alt=""
              src="/group-4.svg"
            />
          </div>
          <div className="absolute top-[74.188rem] left-[33.438rem] w-[26.625rem] h-[10.563rem] bg-[url('/at-cover-24433-1711457971-img800@2x.png')] bg-cover bg-no-repeat bg-[top] z-[2]">
            <img
              className="absolute top-[0rem] left-[0rem] w-full h-full object-cover hidden"
              alt=""
              src="/at-cover-24433-1711457971-img800@2x.png"
            />
            <img
              className="absolute top-[3.375rem] left-[13.438rem] w-[3.75rem] h-[3.75rem] z-[3]"
              loading="lazy"
              alt=""
              src="/group-4.svg"
            />
          </div>
          <img
            className="absolute top-[102.125rem] left-[33.375rem] w-[26.688rem] h-[10.625rem] object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/at-cover-24480-1712641546-img800@2x.png"
          />
          <img
            className="absolute top-[121.438rem] left-[33.375rem] w-[26.688rem] h-[10.625rem] object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/at-cover-24480-1712641546-img800@2x.png"
          />
          <img
            className="absolute top-[102.375rem] left-[2rem] w-[26.688rem] h-[10.625rem] object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/at-cover-24480-1712641546-img800@2x.png"
          />
          <img
            className="absolute top-[121.688rem] left-[2rem] w-[26.688rem] h-[10.625rem] object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/at-cover-24480-1712641546-img800@2x.png"
          />
          <img
            className="absolute top-[207.688rem] left-[2.875rem] w-[18.75rem] h-[12.5rem] object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/13@2x.png"
          />
          <img
            className="absolute top-[207.688rem] left-[23.688rem] w-[18.75rem] h-[12.5rem] object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/14@2x.png"
          />
          <img
            className="absolute top-[229.75rem] left-[35.188rem] w-[18.75rem] h-[12.5rem] object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/10@2x.png"
          />
          <img
            className="absolute top-[230rem] left-[13.25rem] w-[18.75rem] h-[12.5rem] object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/11@2x.png"
          />
          <img
            className="absolute top-[207.688rem] left-[44.563rem] w-[18.75rem] h-[12.5rem] object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/12@2x.png"
          />
          <div className="absolute top-[153.875rem] left-[24.438rem] w-[5.988rem] h-[5.988rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-background-color box-border w-full h-full z-[1] border-[0px] border-solid border-primary" />
            <div className="absolute w-[calc(100%_-_26.5px)] top-[0.8rem] right-[0.794rem] left-[0.863rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[50%] bg-primary h-[4.331rem] z-[2]" />
          </div>
          <img
            className="absolute top-[164.188rem] left-[14.188rem] w-[39.625rem] h-[22.313rem] object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/spotlight-1@2x.png"
          />
        </section>
      </main>
    </div>
  );
};

export default DailySpotlightMonthly;
