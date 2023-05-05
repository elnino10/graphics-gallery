import Image from "next/image";

const Header = () => {
  return (
    <div className="flex flex-wrap items-center justify-between px-20 xl:h-[70%] xl:w-[80%] mt-5">
      <div className="sm:w-[50%]">
        <h1 className="text-xl">
          <span className="font-bold">{`HI, I'M EMMANUEL.`}</span>
          <br />{" "}
          <span className="">
            A CREATIVE GRAPHICS DESIGNER
            <br />I am an enthusiastic and innovative individual with excellent
            administrative and organizational skills.
          </span>
        </h1>
      </div>
      <div className="border rounded-lg mr-20 shadow-xl">
        <Image
          src="/assets/my-photo.png"
          width="350"
          height="400"
          alt="my-image"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Header;
