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
  { title: "Red", class: "bg-red-200" },
  { title: "Green", class: "bg-green-200" },
  { title: "Blue", class: "bg-blue-300" },
  { title: "Yellow", class: "bg-yellow-300" },
  { title: "Indigo", class: "bg-indigo-300" },
];
type FormItemsProps = {
  setFont: React.Dispatch<React.SetStateAction<ThemeItems>>;
  setColor: React.Dispatch<React.SetStateAction<ThemeItems>>;
};

export default function Theme({ setFont, setColor }: FormItemsProps) {
  return (
    <>
      <h3 className="ml-2 mt-2 text-lg font-semibold">Font Settings</h3>
      <ul className=" mx-4">
        {fonts.map((item, ind) => (
          <li
            key={ind}
            className={` text-base hover:cursor-pointer hover:opacity-80 px-3 my-2 border-2 rounded-lg bg-gray-200 ${item.class}`}
            onClick={() => setFont({ title: item.title, class: item.class })}
          >
            {item.title}
          </li>
        ))}
      </ul>
      <h3 className="ml-2 mt-2 text-lg font-semibold">Color Settings</h3>
      <ul className=" mx-4">
        {colors.map((item, ind) => (
          <li
            key={ind}
            className={` text-base hover:cursor-pointer hover:opacity-80 px-3 my-2 border-2 rounded-lg ${item.class}`}
            onClick={() => setColor({ title: item.title, class: item.class })}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </>
  );
}
