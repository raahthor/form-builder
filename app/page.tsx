import FormBuilder from "@/components/formbuilder";
import { FormItems } from "@/components/formItems";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <div className="flex">
      <div>
        <SidebarProvider>
          <FormItems />
          <SidebarTrigger />
        </SidebarProvider>
      </div>
      <div className="flex flex-col items-center justify-center w-full relative">
        <h2 className="absolute top-2 text-2xl font-bold">Form Builder Application</h2>
        <div>
          <FormBuilder />
        </div>
      </div>
    </div>
  );
}
