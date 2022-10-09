import CardWithImage from '@components/CardWithImage';
import CommonPageLayout from '@components/CommonPageLayout';
import Divider from '@components/Divider';

const AboutUs = () => {
  return (
    <>
      <CommonPageLayout
        bannerImgSrc="/img/about-header.png"
        pageTitle="About Us"
      >
        <h2 className="__h2">Creating an Environment that Inspires You</h2>
        <p className="__body_text mt-5">
          Earthcore Group (ECG+) is a rapidly growing, super exciting, highly
          versatile small business, serving the diverse needs of the Atlanta
          residential and light commercial/industrial community.
          <br />
          <br />
          ECG+ provides top quality design and installation/construction
          services to homeowners who want to reinvent their outdoor living
          spaces, and repair/ renovate their indoor living spaces, and to create
          seamless transitions for optimal enjoyment of the entire property.
          ECG+ also serves the specialized needs of real estate investors and
          developers with initial civil site development and remediation of
          environmentally impaired properties and structures thereby
          facilitating property transfer and redevelopment. ECG+ is a team of
          energetic, talented, and multi-disciplined professionals working
          collaboratively and tirelessly to ensure our clients’ expectations are
          exceeded on every project.
        </p>

        <Divider className="mt-12 mb-8" />

        <h2 className="__h2">What We Do</h2>

        <div className="mt-12 grid grid-cols-2 gap-5">
          <CardWithImage imgSrc="/img/residential.png" label="Residential" />
          <CardWithImage imgSrc="/img/residential.png" label="Residential" />
          <CardWithImage imgSrc="/img/residential.png" label="Residential" />
          <CardWithImage imgSrc="/img/residential.png" label="Residential" />
        </div>

        <div className="mt-[60px]">
          <h2 className="__h2">Down to the details</h2>
          <p className="mt-5 __body_text">
            Earthcore Group’s architects, engineers, and other professionals
            take pride in executing all facets of the design process with
            precision.
            <br />
            <br />
            Measure twice, cut once has been a long time mantra we live by.
            Using the latest architectural design software available, we are
            able to bring concepts to life before your eyes without having to
            move a stone.
            <br />
            <br />
            Check out the example below of the type of project files we make for
            clients upon request!
          </p>
        </div>

        <div className="mt-12 mb-8">
          <iframe
            src="https://myhub.autodesk360.com/ue283d8b2/shares/public/SH7f1edQT22b515c761ef57601e086f95852?mode=embed"
            className="w-full aspect-video"
            frameBorder={0}
            allowFullScreen={true}
          ></iframe>
        </div>

        <Divider />
        <Divider className="mb-6 mt-10" />

        <div className="flex justify-between items-center pb-12">
          <h6>Ready to start your project ?</h6>

          <button className="pr-[34px] pl-[22px] hover:pl-[34px] py-2.5 bg-black text-white flex items-center gap-3 group">
            <div className="w-0 group-hover:w-8 duration-300 h-0.5 bg-white"></div>
            GET IN TOUCH
          </button>
        </div>
      </CommonPageLayout>
    </>
  );
};

export default AboutUs;
