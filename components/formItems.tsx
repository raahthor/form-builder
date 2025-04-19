import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";

type ThemeItems = {
  title: string;
  class: string;
};
type AddFields = {
  title: string;
  placeholder: string;
};
const formFields: AddFields[] = [
  { title: "Full Name", placeholder: "Enter your name" },
  { title: "E-mail", placeholder: "Enter your E-mail" },
  { title: "Address", placeholder: "Enter your address" },
  { title: "Phone", placeholder: "Enter your phone number" },
];
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
  setFormItems: React.Dispatch<React.SetStateAction<AddFields[]>>;
  setFont: React.Dispatch<React.SetStateAction<ThemeItems>>;
  setColor: React.Dispatch<React.SetStateAction<ThemeItems>>;
};
export function FormItems({ setFormItems, setFont, setColor }: FormItemsProps) {
  return (
    <Sidebar>
      <SidebarContent className="pt-4">
        <SidebarGroup>
          <SidebarGroupLabel className="pb-1 text-2xl border-b-2 border-l-2 border-black">
            Add Fields
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <ul className=" m-4">
              {formFields.map((item, ind) => (
                <li
                  key={ind}
                  className=" text-lg hover:cursor-pointer hover:opacity-80 py-2"
                  onClick={() =>
                    setFormItems((prev) => [
                      ...prev,
                      {
                        title: item.title,
                        placeholder: item.placeholder,
                      },
                    ])
                  }
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="pb-1 text-2xl border-b-2 border-l-2 border-black mb-1">
            Theming
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <h3 className="ml-2 mt-2 text-xl font-semibold">Fonts</h3>
            <ul className=" mx-4">
              {fonts.map((item, ind) => (
                <li
                  key={ind}
                  className=" text-lg hover:cursor-pointer hover:opacity-80 py-2"
                  onClick={() =>
                    setFont({ title: item.title, class: item.class })
                  }
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
                  onClick={() =>
                    setColor({ title: item.title, class: item.class })
                  }
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
