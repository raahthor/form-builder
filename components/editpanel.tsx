import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import Field from "./fields";
import Theme from "./theme";

type ThemeItems = {
  title: string;
  class: string;
};
type AddFields = {
  title: string;
  placeholder: string;
};

type FormItemsProps = {
  setFormItems: React.Dispatch<React.SetStateAction<AddFields[]>>;
  setFont: React.Dispatch<React.SetStateAction<ThemeItems>>;
  setColor: React.Dispatch<React.SetStateAction<ThemeItems>>;
};
export function EditPanel({ setFormItems, setFont, setColor }: FormItemsProps) {
  return (
    <Sidebar>
      <SidebarContent className="pt-4">
        <SidebarGroup>
          <SidebarGroupLabel className="pb-1 text-2xl border-b-2 border-l-2 border-black">
            Add Fields
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <Field setFormItems={setFormItems} />
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="pb-1 text-2xl border-b-2 border-l-2 border-black mb-1">
            Theming
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <Theme setFont={setFont} setColor={setColor} />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
