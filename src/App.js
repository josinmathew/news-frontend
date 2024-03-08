import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./Navigation";
import NewsOverview from "./News";
import NewsDetail from "./News/NewsDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation></Navigation>
        <Routes>
          <Route path="" exact element={<NewsOverview />} />
          <Route path="/news" element={<NewsOverview />} />
          <Route path="/news/:id" element={<NewsDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
