import Banner from "../compontes/banner";
import Sound from "../compontes/sound";

const SoundSystem = () => {
  return (
    <div>
      <Banner params={{ url: "/Sound System" }} />
      <Sound />
    </div>
  );
};

export default SoundSystem;
