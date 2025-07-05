import SideBar from "./SideBar";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="flex flex-row">
      <SideBar />
      <section className="p-4">
        <h2>Button list</h2>
        <VideoContainer />
      </section>
    </div>
  );
};

export default MainContainer;
