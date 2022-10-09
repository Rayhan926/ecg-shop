import dynamic from 'next/dynamic';

const VideoPlayer = dynamic(() => import('./components/VideoPlayer'), {
  ssr: false,
});
const Home = () => {
  return (
    <div className="h-full">
      <VideoPlayer />
    </div>
  );
};

export default Home;
