import Image from "next/image";

export default function Avatar({ additionalStyles }) {
  return (
    <div
      className={`relative h-36 w-36 rounded-full overflow-hidden m-auto ${additionalStyles}`}
    >
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