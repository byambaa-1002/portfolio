import { Input } from "../components/Input";
import { Button } from "../components/Button";

  export const Home2 = () => {
  return (
    <div className=" p-10">
      <div className="flex flex-col bg-sky-300 items-center justify-center p-10 rounded-3xl ">
        <p className="m-10 text-4xl "> Subscribe</p>
        <p className=" text-2xl">

          Sign up your email addrress to receive news and apdates 
        </p>
        <div className=" m-5 rounded-lg flex justify-center py-8 gap-2">
          <Input placeholder="First name" />
          <Input placeholder="Last name" />
          <Input placeholder="Email" />
        </div>
        <div className=" flex">
          <Button />
        </div>
      </div>
    </div>
  );
};


