import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormItem = {
  title: string;
  placeholder: string;
};
type ThemeItem = { title: string; class: string };

type FormBuilderProps = {
  formItems: FormItem[];
  setIsOpen: React.Dispatch<React.SetStateAction<string>>;
  font: ThemeItem;
  color: ThemeItem;
  isOpen: string;
};

export default function Preview({
  formItems,
  setIsOpen,
  font,
  color,
  isOpen,
}: FormBuilderProps) {
  return (
    <div
      className={`fixed z-20 w-full h-full flex justify-center items-center bg-[url('/Sprinkle.svg')] bg-cover bg-no-repeat ${isOpen}`}
    >
      <Button onClick={() => setIsOpen("hidden")} className=" absolute top-5">
        Exit Preview
      </Button>
      <Card
        className={`w-[320px] md:w-[450px] lg:w-[650px] ${color.class} ${font.class}`}
      >
        <CardHeader>
          <CardTitle>Form</CardTitle>
          <CardDescription>Fill the details below</CardDescription>
        </CardHeader>
        <CardContent>
          {formItems.length > 0 && (
            <div className="grid w-full items-center gap-4">
              {formItems.map((item: FormItem, ind: number) => (
                <div key={ind} className="flex flex-col space-y-1.5">
                  <Label className="flex justify-between">{item.title}</Label>
                  <Input id="name" placeholder={item.placeholder} />
                </div>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          {formItems.length > 0 && <Button>Submit</Button>}
        </CardFooter>
      </Card>
    </div>
  );
}
