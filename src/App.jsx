import { useRef, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import GameScreen from "./pages/GameScreen";
import DevLog from "./pages/DevLog";
import Feedback from "./pages/Feedback";
import MainNav from "./components/MainNav";
import themeMusic from "./assets/audio/theme.mp3";

function App() {
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef(null);

  const handleToggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) {
      // If somehow not mounted yet, just flip the state.
      setMusicOn((prev) => !prev);
      return;
    }

    setMusicOn((prev) => {
      const next = !prev;

      if (next) {
        audio
          .play()
          .catch(() => {
            // If the browser blocks this, user can click again after interacting.
          });
      } else {
        // Pause music
        audio.pause();
      }

      return next;
    });
  };

  return (
    <>
      {/* Hidden audio used as global background music.
          File path is from /public, so /assets/... is correct. */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src={themeMusic}
        aria-hidden="true"
      />

      <HashRouter>
        <MainNav
          isMusicOn={musicOn}
          onToggleMusic={handleToggleMusic}
        />
        <main aria-label="XZSO game website">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<GameScreen />} />
            <Route path="/devlog" element={<DevLog />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </main>

        <footer className="site-footer" aria-label="Site footer">
          <p className="mb-0">
            © 2025 XZSO Team · Built with React and Three.js.
          </p>
        </footer>
        
      </HashRouter>
    </>
  );
}

export default App;
