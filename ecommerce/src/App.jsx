import Layout from "./components/common/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screen/home/Home";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
