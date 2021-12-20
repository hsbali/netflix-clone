import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import ContentDetailPage from "./routes/ContentDetailPage";
import HomePage from "./routes/HomePage";

const App = () => {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:contentType/:id" element={<ContentDetailPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
    </>
  );
};

export default App;
