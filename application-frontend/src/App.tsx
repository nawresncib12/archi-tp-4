import { useState } from "react";
import "./App.css";
import HomeCard from "./components/HomeCard/HomeCard";
import LoanForm from "./components/LoanForm/LoanForm";

function App() {
  const [view, setView] = useState("home");
  return (
    <div>
      {view == "home" && <HomeCard setView={setView} />}
      {view == "loanApplication" && <LoanForm setView={setView} />}
    </div>
  );
}

export default App;
