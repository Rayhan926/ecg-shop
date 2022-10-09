import dynamic from 'next/dynamic';

const VideoPlayer = dynamic(() => import('./components/VideoPlayer'), {
  ssr: false,
});
const Home = () => {
  return (
    <div className="grow flex flex-col relative">
      <VideoPlayer />
      <div className="flex flex-col justify-center items-center text-center absolute w-full h-full bg-[#292929]/30 text-white">
        <p className="w-[315px] border-b border-white pb-[18px]">
          Restoring Atlanta
        </p>
        <h1 className="mt-5 mb-[40px] text-[40px] font-primary font-bold">
          One Project At A Time
        </h1>

        <button className="outline-none bg-white pr-[30px] pl-[18px] hover:pl-[30px] py-4 text-black flex items-center gap-3 group">
          <div className="w-0 group-hover:w-10 duration-300 h-0.5 bg-black"></div>
          Discover Our Process
        </button>
      </div>
    </div>
  );
};

export default Home;
