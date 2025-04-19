"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type AddFields = {
  title: string;
  placeholder: string;
};
type FormItemsProps = {
  setFormItems: React.Dispatch<React.SetStateAction<AddFields[]>>;
};

export default function CustomField({ setFormItems }: FormItemsProps) {
  const [input, setInput] = useState<string>("");

  function handleChange(e: any) {
    setInput(e.target.value);
  }
  function handleClick() {
    setFormItems((prev) => [
      ...prev,
      {
        title: input,
        placeholder: `Enter your ${input}`,
      },
    ]);
    setInput("");
  }
  return (
    <>
      <Input
        className="h-8 rounded-r-none"
        placeholder="Add custom field"
        onChange={handleChange}
        value={input}
      ></Input>
      <Button onClick={handleClick} className="h-8 w-10 rounded-l-none">
        ✓
      </Button>
    </>
  );
}
