import FrameComponent8 from "../components/frame-component8";
import FrameComponent4 from "../components/frame-component4";
import GroupComponent from "../components/group-component";

const JobIsLive = () => {
  return (
    <div className="w-full h-[483.125rem] relative bg-whitesmoke-100 overflow-hidden flex flex-row items-start justify-center pt-[24.937rem] px-[1.25rem] pb-[8.5rem] box-border leading-[normal] tracking-[normal] mq675:h-auto">
      <main className="h-[449.688rem] w-[63.563rem] relative rounded-xl bg-background-color max-w-full text-center text-[1.875rem] text-black font-aktivgrotesk-bold mq675:h-auto mq675:min-h-[7195]">
        <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-background-color w-full h-full hidden" />
        <FrameComponent8 />
        <FrameComponent4 />
        <h3 className="m-0 absolute top-[21.813rem] left-[24.313rem] text-inherit font-normal font-aktivgrotesk-medium inline-block w-[15rem] h-[2.875rem] z-[1] mq450:text-[1.125rem] mq825:text-[1.5rem]">
          Great News!
        </h3>
        <h3 className="m-0 absolute top-[52.375rem] left-[22.625rem] text-inherit font-normal font-inherit inline-block w-[14.5rem] h-[3.563rem] z-[1] mq450:text-[1.125rem] mq825:text-[1.5rem]">
          What’s Next?
        </h3>
        <h3 className="m-0 absolute top-[97.563rem] left-[14rem] text-inherit font-normal font-inherit inline-block w-[34.313rem] h-[3.563rem] z-[1] mq450:text-[1.125rem] mq825:text-[1.5rem]">
          Thank You for Choosing Bigstartups!
        </h3>
        <div className="absolute top-[24.688rem] left-[10.625rem] text-[1.25rem] font-aktivgrotesk-regular text-text-secondary inline-block w-[42.375rem] h-[4.75rem] z-[1] mq450:text-[1rem]">
          Your job listing is now visible to thousands of jobseekers and
          freelancers who are eager to join innovative startups like yours
        </div>
        <h3 className="m-0 absolute top-[18.813rem] left-[24rem] text-inherit font-normal font-aktivgrotesk-medium text-primary text-left inline-block w-[18.688rem] h-[2.438rem] z-[1] mq450:text-[1.125rem] mq825:text-[1.5rem]">
          Hi Shashank Rawat,
        </h3>
        <section className="absolute top-[101.625rem] left-[4.188rem] text-[1.5rem] font-aktivgrotesk-regular text-text-secondary text-center inline-block w-[55.25rem] h-[5.25rem] z-[1] mq450:text-[1.188rem]">
          We appreciate your trust in Bigstartups to help you find the perfect
          candidates. We look forward to seeing your startup grow and thrive!
        </section>
        <div className="absolute top-[66.75rem] left-[9.813rem] box-border w-[43.313rem] h-[0.063rem] z-[2] border-t-[1px] border-solid border-gainsboro-200" />
        <div className="absolute top-[77.813rem] left-[9.813rem] box-border w-[43.313rem] h-[0.063rem] z-[2] border-t-[1px] border-solid border-gainsboro-200" />
        <div className="absolute top-[91.188rem] left-[22.063rem] rounded-xl bg-background-color box-border w-[18.188rem] flex flex-row items-start justify-start pt-[0.687rem] px-[2.062rem] pb-[0.75rem] whitespace-nowrap z-[1] text-left text-[2.188rem] text-primary border-[1px] border-solid border-primary">
          <div className="h-[4.313rem] w-[18.188rem] relative rounded-xl bg-background-color box-border hidden border-[1px] border-solid border-primary" />
          <div className="flex-1 relative z-[1]">Manage Jobs</div>
        </div>
        <GroupComponent />
        <img
          className="absolute top-[79.75rem] left-[12.125rem] w-[9.375rem] h-[9.375rem] object-contain z-[2]"
          loading="lazy"
          alt=""
          src="/71@2x.png"
        />
      </main>
    </div>
  );
};

export default JobIsLive;
