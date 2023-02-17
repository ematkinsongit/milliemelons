import logo from "./logo.svg";
import OFSVG from "./svgs/OFSVG";
import TwitterSVG from "./svgs/TwitterSVG";
import InstaSVG from "./svgs/InstaSVG";
import "./App.css";
import SnapSVG from "./svgs/SnapSVG";
import TikTokSVG from "./svgs/TikTokSVG";
import CashappSVG from "./svgs/CashappSVG";
import VenmoSVG from "./svgs/VenmoSVG";

function App() {
  return (
    <div className="bg-purple-300 min-h-screen flex flex-col items-center">
      <h1 className="text-6xl font-display text-purple-700 text-center  ">
        Millie Melons
      </h1>
      <img src="Profile.png" className="max-w-xs h-auto rounded-full" />
      <div className="flex flex-col">
        <div className="shadow hover:bg-purple-400 m-2 w-max bg-purple-500 text-white rounded-md p-2 ">
          <a
            className="grid grid-cols-[minmax(0px,36px),minmax(0,1fr)] items-center gap-3"
            href="https://onlyfans.com/millie_melons"
          >
            <OFSVG />
            Free OnlyFans
          </a>
        </div>
        <div className="shadow hover:bg-purple-400  bg-purple-500 text-white rounded-md p-2 m-2">
          <a
            className="grid grid-cols-[minmax(0px,36px),minmax(0,1fr)] items-center gap-3"
            href="https://twitter.com/millie_melons"
          >
            <TwitterSVG />
            Twitter
          </a>
        </div>
        <div className="shadow hover:bg-purple-400  bg-purple-500 text-white rounded-md p-2 m-2">
          <a
            className="grid grid-cols-[minmax(0px,36px),minmax(0,1fr)] items-center gap-3"
            href="https://www.instagram.com/millie_melons/"
          >
            <InstaSVG />
            Instagram
          </a>
        </div>
        <div className="shadow hover:bg-purple-400  bg-purple-500 text-white rounded-md p-2 m-2">
          <a
            className="grid grid-cols-[minmax(0px,36px),minmax(0,1fr)] items-center gap-3"
            href="https://www.snapchat.com/add/millie_melons"
          >
            <SnapSVG />
            Snapchat
          </a>
        </div>
        <div className="shadow hover:bg-purple-400  bg-purple-500 text-white rounded-md p-2 m-2">
          <a
            className="grid grid-cols-[minmax(0px,36px),minmax(0,1fr)] items-center gap-3"
            href="https://www.tiktok.com/@milliemelonsxoxo?lang=en"
          >
            <TikTokSVG />
            TikTok
          </a>
        </div>
        <div className="shadow hover:bg-purple-400  bg-purple-500 text-white rounded-md p-2 m-2">
          <a
            className="grid grid-cols-[minmax(0px,36px),minmax(0,1fr)] items-center gap-3"
            href="http://cash.app/$milliemelonsxxx"
          >
            <CashappSVG />
            CashApp
          </a>
        </div>
        <div className="shadow hover:bg-purple-400  bg-purple-500 text-white rounded-md p-2 m-2">
          <a
            className="grid grid-cols-[minmax(0px,36px),minmax(0,1fr)] items-center gap-3"
            href="https://venmo.com/u/millie_melons"
          >
            <VenmoSVG />
            Venmo
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
