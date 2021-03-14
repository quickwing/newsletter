import "./styles.css";
import Bg from "./Bg";
import Bodypage from "./Bodypage";
import { useState } from "react";

export default function App() {
  const [opa, setOpa] = useState(1);
  return (
    <div
      className="App"
      onScroll={() => {
        var bodypageel = document.getElementsByClassName("pagebody")[0];
        var bodyrect = bodypageel.getBoundingClientRect();
        setOpa(bodyrect.top / window.innerHeight + 0.5);
        console.log(opa);
      }}
    >
      <Bg opa={opa} />
      <Bodypage />
    </div>
  );
}
