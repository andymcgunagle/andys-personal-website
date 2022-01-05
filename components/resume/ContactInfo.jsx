import IconAndText from "./IconAndText.jsx";

export default function ContactInfo() {
  return (
    <div className="flex flex-col items-center justify-evenly md:flex-row gap-4 w-full">
      <IconAndText icon="place" text="San Diego, CA" />
      <IconAndText icon="email" text="amcgunagle@gmail.com" />
      <IconAndText icon="phone" text="(707) 490-8131" />
    </div>
  );
};