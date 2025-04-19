type ThemeItems = {
  title: string;
  class: string;
};
const fonts: ThemeItems[] = [
  { title: "Default", class: "" },
  { title: "Sans-serif", class: "font-sans" },
  { title: "Serif", class: "font-serif" },
  { title: "Monospace", class: "font-mono" },
];
const colors: ThemeItems[] = [
  { title: "Default", class: "bg-white" },
  { title: "Red", class: "bg-red-300" },
  { title: "Green", class: "bg-green-400" },
  { title: "Blue", class: "bg-blue-300" },
  { title: "Yellow", class: "bg-yellow-400" },
  { title: "Indigo", class: "bg-indigo-300" },
];
type FormItemsProps = {
  setFont: React.Dispatch<React.SetStateAction<ThemeItems>>;
  setColor: React.Dispatch<React.SetStateAction<ThemeItems>>;
};

export default function Theme({ setFont, setColor }: FormItemsProps) {
  return (
    <>
      <h3 className="ml-2 mt-2 text-xl font-semibold">Fonts</h3>
      <ul className=" mx-4">
        {fonts.map((item, ind) => (
          <li
            key={ind}
            className=" text-lg hover:cursor-pointer hover:opacity-80 py-2"
            onClick={() => setFont({ title: item.title, class: item.class })}
          >
            {item.title}
          </li>
        ))}
      </ul>
      <h3 className="ml-2 mt-2 text-xl font-semibold">Colors</h3>
      <ul className=" mx-4">
        {colors.map((item, ind) => (
          <li
            key={ind}
            className=" text-lg hover:cursor-pointer hover:opacity-80 py-2"
            onClick={() => setColor({ title: item.title, class: item.class })}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </>
  );
}
