import Image from "next/legacy/image";

export const BGImage = () => (
  <div className={"absolute -z-10 w-full h-full"}>
    <div className={"absolute top-0 left-0 w-full h-full  z-0"}>
      <Image
        src={"/1.jpeg"}
        layout="fill"
        quality={100}
        objectFit={"cover"}
        className={"blur-xl"}
        alt={"bg"}
      />
    </div>
  </div>
);
