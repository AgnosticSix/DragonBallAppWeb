import PropTypes from "prop-types";
import { Carousel } from "primereact/carousel";
import "./carrousel.css";

export const CarouselCustom = ({
  items,
  numVisible,
  numScroll,
  responsiveOptions,
  itemTemplate,
  circular,
  autoplayInterval
}) => {
  return (
    <div className="carouselCustom">
      <Carousel
        value={ items }
        numVisible={ numVisible || 1 }
        numScroll={ numScroll || 1 }
        responsiveOptions={ responsiveOptions || [] }
        itemTemplate={ itemTemplate }
        circular={ circular }
        autoplayInterval={ autoplayInterval }
      />
    </div>
  );
};

CarouselCustom.propTypes = {
  items: PropTypes.array.isRequired,
  numVisible: PropTypes.number,
  numScroll: PropTypes.number,
  responsiveOptions: PropTypes.array,
  itemTemplate: PropTypes.func.isRequired,
  circular: PropTypes.bool,
  autoplayInterval: PropTypes.number
};
