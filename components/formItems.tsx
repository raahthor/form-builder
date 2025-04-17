"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";

const formFields = [
  {
    title: "Full Name",
  },
  {
    title: "E-mail",
  },
  {
    title: "Address",
  },
  {
    title: "Phone",
  },
];

export function FormItems() {
  return (
    <Sidebar>
      <SidebarContent className="pt-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl border-b-2 border-black">
            Add Fields
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <ul className=" m-4">
              {formFields.map((item, ind) => (
                <li
                  key={ind}
                  className=" text-xl hover:cursor-pointer hover:opacity-80 py-2"
                  onClick={() => alert("hello")}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl border-b-2 border-black">
            Theming
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <ul className=" m-4">
              <li
                className=" text-xl hover:cursor-pointer my-1"
                onClick={() => alert("hello")}
              >
                Full Name
              </li>
              <li
                className=" text-xl hover:cursor-pointer my-1"
                onClick={() => alert("hello")}
              >
                E-mail
              </li>
            </ul>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
