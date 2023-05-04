import Graphic from "./Graphic";

const GraphicsGallery = ({graphics}) => {
    return (
        <div className='bg-gray-200 w-[80%] flex items-center justify-center flex-wrap my-10'>
            {graphics.map(graphic => <Graphic key={graphic.id} src={graphic.src} />)}
            
        </div>
    );
};

export default GraphicsGallery;