import { toggleMenu } from "../store/appSlice";
import { useAppDispatch } from "../store/store";

const Header = () => {
  const dispatch = useAppDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <>
      <main className="grid grid-flow-col shadow-lg p-2 m-2">
        <div className="cursor-pointer col-span-2 flex flex-row">
          <svg
            onClick={toggleMenuHandler}
            className="w-10 h-10 my-5"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
          >
            <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path>
          </svg>
          <img
            className="w-30 h-20"
            alt="youtube-icon"
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          />
        </div>

        <div className="search-bar col-span-9 p-2">
          <label className="input w-2xl border border-gray-300 rounded-2xl">
            <input type="search" required placeholder="Search" />
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
          </label>
        </div>
        <div className="user-info col-span-1 w-10 h-10">
          <img
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            alt="user-icon"
          />
        </div>
      </main>
    </>
  );
};

export default Header;
