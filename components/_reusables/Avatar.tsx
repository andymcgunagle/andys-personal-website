import Image from "next/image";

export default function Avatar({ additionalStyles }: AvatarProps) {
  return (
    <div
      className={`relative h-48 w-48 rounded-full overflow-hidden m-auto ${additionalStyles}`}
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

interface AvatarProps {
  additionalStyles?: string,
}
