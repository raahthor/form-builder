"use client";
import FormBuilder from "@/components/formBuilder";
import { EditPanel } from "@/components/editpanel";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useState } from "react";
import Preview from "@/components/preview";

type ThemeItems = {
  title: string;
  class: string;
};
type AddFields = {
  title: string;
  placeholder: string;
};

export default function Home() {
  
  const [formItems, setFormItems] = useState<AddFields[]>([]);
  const [font, setFont] = useState<ThemeItems>({ title: "Default", class: "" });
  const [color, setColor] = useState<ThemeItems>({ title: "Default", class: "" });
  const [isOpen, setIsOpen] = useState<string>("hidden");

  return (
    <div className="flex">
      <Preview
        setIsOpen={setIsOpen}
        formItems={formItems}
        font={font}
        color={color}
        isOpen={isOpen}
      />
      <div>
        <SidebarProvider>
          <EditPanel
            setFormItems={setFormItems}
            setFont={setFont}
            setColor={setColor}
          />
          <SidebarTrigger />
        </SidebarProvider>
      </div>
      <div className="flex flex-col items-center justify-center w-full relative">
        <h2 className="absolute top-2 text-2xl font-bold">
          Form Builder Application
        </h2>
        <div>
          <FormBuilder
            setIsOpen={setIsOpen}
            setFormItems={setFormItems}
            formItems={formItems}
            font={font}
            color={color}
          />
        </div>
      </div>
    </div>
  );
}
