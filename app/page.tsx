"use client"
import FormBuilder from "@/components/formBuilder";
import { FormItems } from "@/components/formItems";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useState } from "react";

type ThemeItems = {
  title: string;
};
type AddFields = {
  title: string;
  placeholder: string;
};

export default function Home() {
  const [formItems, setFormItems] = useState<AddFields[]>([]);
  const [font, setFont] = useState<ThemeItems>({ title: "" });
  const [color, setColor] = useState<ThemeItems>({ title: "" });
  return (
    <div className="flex">
      <div>
        <SidebarProvider>
          <FormItems
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
