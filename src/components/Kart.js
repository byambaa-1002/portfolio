import TsomIcon from "./icons/Tsom";

const Kart = (props) => {
  const { kontainer } = props;
  return (
    <div className="w-[530px] h-[533px] border-spacing-1">
      <div className="flex ">
        <p>Play Score</p>
        <TsomIcon />
      </div>
      <p>Hidden in the middle of text</p>
      <div>
        <div>John Cena</div>
        <div>John Cena</div>
        <div>John Cena</div>
      </div>

      <button className=" rounded-xl bg-green-500">Reset</button>
    </div>
  );
};
export default Kart;
