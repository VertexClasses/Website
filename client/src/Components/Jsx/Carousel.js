
import imagesForCarousel from "./imagesForCarousel";
import ImageSlider from "./ImageSlider";
 
const Carousel = () => {
    return (
        <div>
            <ImageSlider images={imagesForCarousel} />
        </div>
    )
}
 
export default Carousel;