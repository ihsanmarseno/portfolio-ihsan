import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import FullProjects from "./pages/FullProjects";
import App1 from "./App1";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<App1 />} />
        <Route path="/projects" element={<FullProjects />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;