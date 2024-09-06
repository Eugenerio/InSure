import Image from "next/image";

export const BGImage = () => (
    <div className={"absolute -z-10 w-full h-screen"}>
        <Image
            src={"/3.png"}
            layout="fill"
            quality={100}
            objectFit={"cover"}
            alt={"bg"}
        />
    </div>
)