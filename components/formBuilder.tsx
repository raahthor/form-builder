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
type ThemeItem = { title: string };
type FormBuilderProps = {
  formItems: FormItem[];
  setFormItems: React.Dispatch<React.SetStateAction<FormItem[]>>;
  font: ThemeItem;
  color: ThemeItem;
};

export default function FormBuilder({
  setFormItems,
  formItems,
  font,
  color,
}: FormBuilderProps) {
  function removeField(ind: number) {
    setFormItems((prev) => prev.filter((_, index) => index !== ind));
  }
  return (
    <>
      <Card className="w-[350px] md:w-[450px] lg:w-[650px]">
        <CardHeader>
          <CardTitle>Form</CardTitle>
          <CardDescription>Add fields from the sidebar</CardDescription>
        </CardHeader>
        <CardContent>
          {formItems.length > 0 && (
            <div className="grid w-full items-center gap-4">
              {formItems.map((item: FormItem, ind: number) => (
                <div key={ind} className="flex flex-col space-y-1.5">
                  <Label className="flex justify-between">
                    {item.title}
                    <Button
                      onClick={() => removeField(ind)}
                      className="text-[12px] size-1.5 rounded-sm"
                    >
                      x
                    </Button>
                  </Label>
                  <Input id="name" placeholder={item.placeholder} />
                </div>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          {formItems.length > 0 && <Button variant={"outline"}>Preview</Button>}
          {formItems.length > 0 && <Button>Submit</Button>}
        </CardFooter>
      </Card>
    </>
  );
}
