import dynamic from 'next/dynamic';

const VideoPlayer = dynamic(() => import('./components/VideoPlayer'), {
  ssr: false,
});
const Home = () => {
  return (
    <div className="grow flex flex-col">
      <VideoPlayer />
    </div>
  );
};

export default Home;
