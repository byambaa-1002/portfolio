import Test from "@/components/Test";

const data = [
  {
    image: "Pic.png",
    text: "TOM",
  },
  {
    column: "s",
    content: "Hi, I’m Tom 👋",
    logo: "logo",
    croup: "Ulaanbaatar, Mongolia",
    actions: "k",
  },
];

export default function Home() {
  return (
    <div>
      {data.map((oneData, index) => {
        return (
          <div className="lg:max-w-lg m-auto ">
            <Test
              key={index}
              text={oneData.text}
              image={oneData.image}
              content={oneData.content}
              column={oneData.column}
              logo={oneData.logo}
              croup={oneData.croup}
              actions={oneData.actions}
            />
          </div>
        );
      })}
    </div>
  );
}
