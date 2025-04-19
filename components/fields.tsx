import CustomField from "./customField";

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
type FormItemsProps = {
  setFormItems: React.Dispatch<React.SetStateAction<AddFields[]>>;
};
export default function Field({ setFormItems }: FormItemsProps) {
  return (
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

      <li className="text-lg py-2 flex">
        <CustomField setFormItems={setFormItems} />
      </li>
    </ul>
  );
}
