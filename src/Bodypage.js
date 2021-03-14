import Bodycontent from "./Bodycontent";
import { mydata } from "./mydata";

export default function Bodypage({ bodyoffset }) {
  return (
    <div className="pagebody">
      <h1>{mydata.title}</h1>
      <h2>{mydata.date}</h2>
      <Bodycontent />
    </div>
  );
}
