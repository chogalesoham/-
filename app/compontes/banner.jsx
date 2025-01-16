const Banner = ({ params }) => {
  const url = params?.url;
  const lastSegment = url.split("/").pop();

  return (
    <div
      className=" w-full h-[200px] bg-black flex items-center justify-center relative"
      style={{
        backgroundImage: `url("https://i.pinimg.com/originals/5a/db/ab/5adbab0f59c33d100b0670f135fe3202.jpg")`,
        backgroundSize: "content",
      }}
    >
      <h1 className=" text-4xl font-bold text-white z-10">{lastSegment}</h1>
      <div className=" bg-black opacity-50 absolute inset-0"></div>
    </div>
  );
};

export default Banner;
