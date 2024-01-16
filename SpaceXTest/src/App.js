import Launches from "./components/Launches";
import Rockets from "./components/Rockets";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Rockets />} />
        <Route path="/launches/:rocketId/:rocketName" element={<Launches />} />
      </Routes>
    </Router>
  );
}
export default App;
