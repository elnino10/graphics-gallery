import Image from 'next/image';

const Header = () => {
    return (
        <div className='flex flex-wrap items-center justify-between px-20 xl:h-[70%] xl:w-[80%] mt-5'>
            <div className=''>
                <h1 className='text-xl'>{`HI, I'M EMMANUEL.`}<br/> <span className='font-bold'>A CREATIVE GRAPHICS DESIGNER</span></h1>
            </div>
            <div className='border rounded-lg mr-20 shadow-xl'>
                <Image src="/assets/my-image.png" width="350" height="400" alt="my-image" className='rounded-lg' />
            </div>
        </div>
    );
};

export default Header;