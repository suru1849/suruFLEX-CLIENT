import PropTypes from "prop-types";

const Slider = ({ collections }) => {
  const images = collections?.map((product) => product.image);

  const [item1, item2, item3] = images;

  return (
    <div className=" flex flex-col justify-center items-center">
      <div>
        <p className="text-3xl py-5 text-white font-bold">New Collections</p>
      </div>
      <div className="carousel max-w-[55vh]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={item1} className="" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={item2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={item3} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Slider.propTypes = {
  collections: PropTypes.array.isRequired,
};

export default Slider;
