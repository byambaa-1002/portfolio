import Kart from "../components/Kart";
import TsomIcon from "../components/icons/Tsom";

const data = [{ kontainer: "fjdjfjdfjg" }, { text: "hgjfgjf" }];
export default function Home() {
  return (
    <div>
      {data.map((oneData, index) => {
        return (
          <div>
            <Kart
              key={index}
              text={oneData.text}
              kontainer={oneData.kontainer}
            />
          </div>
        );
      })}
      <div>
        <TsomIcon />
      </div>
    </div>
  );
}
