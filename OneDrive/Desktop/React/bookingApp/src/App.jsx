import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import appRoutes from "./appRoutes";
import ReadingRequests from "./AdminPanel/ReadingRequests";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <Router>
        <Routes>
          {appRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
