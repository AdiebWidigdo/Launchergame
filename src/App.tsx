import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import PatchNotesUpdatingFinish from "./pages/patch-notes-updating-finish";
import PatchNotesUpdatingScreen from "./pages/patch-notes-updating-screen";
import PatchNotesPreparingScreen from "./pages/patch-notes-preparing-screen";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/patchnotesupdatingscreen":
        title = "";
        metaDescription = "";
        break;
      case "/patchnotespreparingscreen":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<PatchNotesUpdatingFinish />} />
      <Route
        path="/patchnotesupdatingscreen"
        element={<PatchNotesUpdatingScreen />}
      />
      <Route
        path="/patchnotespreparingscreen"
        element={<PatchNotesPreparingScreen />}
      />
    </Routes>
  );
}
export default App;
