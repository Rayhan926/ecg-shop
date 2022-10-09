const VideoPlayer = () => {
  return (
    <>
      <video
        src="/videos/ECG.mp4"
        muted
        autoPlay
        playsInline
        loop
        className="w-full h-full object-cover"
      ></video>
    </>
  );
};

export default VideoPlayer;
