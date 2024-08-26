const Test = (props) => {
  const { text, image, content, column, croup, actions, logo } = props;

  return (
    <div className="">
      <div className="text-center">
        <div>
          <p className="text-black font-bold ">{text}</p>
        </div>
        <div>
          <img src={image} className="m-auto" />
        </div>
        <div>
          <p className="font-bold"> {content}</p>
        </div>
        <div>
          <p>{column}</p>
        </div>

        <div className="flex gap-3 justify-center ">
          <p>{logo}</p>
          <p>{croup}</p>
        </div>
        <div>
          <p>{actions}</p>
        </div>
      </div>
    </div>
  );
};
export default Test;
