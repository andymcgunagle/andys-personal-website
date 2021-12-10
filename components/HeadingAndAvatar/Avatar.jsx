import Image from "next/image";

export default function Avatar() {
  return (
    <div className="relative h-36 w-36 rounded-full overflow-hidden m-auto">
      <Image
        src="/andy-mcgunagle.jpeg"
        alt="Photo of Andy McGunagle"
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  );
};