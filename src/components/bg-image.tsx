import Image from "next/image";

export const BGImage = () => (
  <div className={"absolute -z-10 w-full h-screen"}>
    <div className={"absolute top-0 left-0 w-full h-full blur-xl z-0"}>
      <Image
          src={"/1.jpeg"}
          layout="fill"
          quality={100}
          objectFit={"cover blur-xl"}
          alt={"bg"}
      />
    </div>
    </div>
    );
