import { useState } from "react";
import { herolist } from "../../assets/data/data";
import { BodyOne, Caption, Title } from "../common/CustomComponents";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute bottom-0 bg-black text-white left-96 lg:left-1/2 slider-btn"
      onClick={onClick}
    >
      <button className="next">
        <MdKeyboardArrowRight size={50} />
      </button>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute bottom-0 bg-white text-primary left-96 lg:left-[46.5%] border-[1px] border-black slider-btn z-10"
      onClick={onClick}
    >
      <button className="next">
        <MdKeyboardArrowLeft size={50} />
      </button>
    </div>
  );
}

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <section
        className="h-[50vh] lg:h-[90vh] mt-20  relative z-1
      "
      >
        <Slider {...settings}>
          {herolist.map((item) => (
            <HeroItem
              key={item.id}
              title={item.title}
              description={item.description}
              prices={item.price}
              colors={item.color}
              image={item.image}
            />
          ))}
        </Slider>
      </section>
    </div>
  );
};

export const HeroItem = ({ title, description, prices, colors, image }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0].value);

  const [selectedPrice, setSelectedPrice] = useState(
    prices.find((price) => price.color === colors[0].value)
  );

  const handleColorClick = (color) => {
    const newSelectedPrice = prices.find((price) => price.color === color);
    setSelectedColor(color);
    setSelectedPrice(newSelectedPrice);
  };
  return (
    <>
      <section className="content flex justify-between lg:px-16 h-[50vh] lg:h-[90vh] relative z-20">
        <div className="left w-1/2 p-8 lg:p-32 lg:py-64">
          <Title
            level={1}
            className="leading-none font-medium md-text-3xl lg:text-[70px] lg:leading-snug"
          >
            {title}
          </Title>
          <BodyOne>{description}</BodyOne>

          <div className="flex  items-start gap-8 my-5">
            <div>
              <Caption>Prices</Caption>
              <div className="mt-3">
                <Title level={5}>${selectedPrice.value.toFixed(2)}</Title>
              </div>
            </div>
            <div>
              <Caption>Colors</Caption>
              <div className="flex items-start  justify-center gap-3 my-5">
                {colors.map((color, i) => (
                  <div
                    key={i}
                    onClick={() => handleColorClick(color.value)}
                    className={`w-4 h-4 rounded-full cursor-pointer border-gray-300 ${
                      selectedColor === color.value ? "selected" : ""
                    }`}
                    style={{ backgroundColor: color.value }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <button className="primary-btn uppercase">View Details</button>
            <button className="secondary-btn uppercase">View Shop</button>
          </div>
        </div>
        <div className="right bg-white p-5 w-1/2 h-full flex justify-center items-center relative z-50">
          <img
            src={image}
            alt="Products-hero"
            className="h-[60vh] w-full object-contain"
          />
        </div>
        <div className="lg:bg-black lg:h-[90vh] lg:absolute lg:top-0 lg:right-0 lg:w-1/3 lg:-z-10"></div>
      </section>
    </>
  );
};

export const Banner = () => {
  <>
    <div className="py-20 container flex flex-col lg:flex-row items-center gap-5">
      <div>
        <BannerCard
          title="Wooden Water Bottles"
          desc="UP TO 60% OFF"
          cover="./images/hero/product1-1.png"
        />
        <BannerCard title="" desc="" cover="./images/hero/product2.png" />
        <BannerCard title="" desc="" cover="./images/hero/product3.png" />
      </div>
    </div>
  </>;
};

const BannerCard = ({ title, desc, cover, className, classSecond }) => {
  return (
    <>
      <div className="w-full h-full relative">
        <img src={cover} alt="" />
        <div
          className={`${
            className
              ? "absolute bottom-0 p-8 w-full"
              : "flex absolute bottom-0 p-8 w-full"
          }${className && classSecond ? "left-0 lg:left-48 top-0 w-96" : ""}`}
        >
          <div>
            <Title level={2}>{title}</Title>
            <p className="text-lg font-normal leading-none">{desc} </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

HeroItem.propTypes = {
  title: PropTypes.isRequired,
  description: PropTypes.isRequired,
  prices: PropTypes.isRequired,
  colors: PropTypes.isRequired,
  image: PropTypes.isRequired,
};
