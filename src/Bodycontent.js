import { mydata } from "./mydata";

export default function Bodycontent() {
  return (
    <>
      {mydata.content.map((item) => (
        <div>
          <h3>{item.subtitle}</h3>
          <>
            {item.parag.map((parag) => (
              <p>{parag}</p>
            ))}
          </>
        </div>
      ))}
    </>
  );
}
