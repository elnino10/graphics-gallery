import Image from "next/image";

const Graphics = ({ src }) => {
  return (
    <div className="m-5 h-auto w-auto flex items-center">
      <Image src={src} width="300" height="400" alt="" className="border shadow-lg rounded-lg" />
    </div>
  );
};

export default Graphics;
