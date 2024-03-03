import Slider from './slider';
const data = [
    {
        id: 1,
        image: '/bg-dao.png'
    },
    {
        id: 2,
        image: '/bg-mai.jpg'
    }
];
const Banner = () => {
    return (
        <div>
            <Slider>
                {data.map((item) => (
                    <div
                        key={item.id}
                        className='bg-cover bg-center flex-shrink-0 w-full bg-no-repeat'
                        style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;
