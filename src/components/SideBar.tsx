import { useAppSelector } from "../store/store";

const SideBar = () => {
  const isMenuOpen = useAppSelector((store) => store.isMenuOpen);

  // Early return
  if (!isMenuOpen) return null;

  return (
    <div className="rounded-md shadow p-4 h-full">
      <div className="flex flex-col">
        <span>Home</span>
        <span>Shorts</span>
        <span>Videos</span>
        <span>Live</span>
      </div>
      <div className="my-4">
        <h2 className="font-bold">Subscriptions</h2>
        <ul>
          <li>Music</li>
          <li>Games</li>
          <li>Sports</li>
          <li>Movies</li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold">Watch Later</h2>
        <ul>
          <li>Music</li>
          <li>Games</li>
          <li>Sports</li>
          <li>Movies</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
