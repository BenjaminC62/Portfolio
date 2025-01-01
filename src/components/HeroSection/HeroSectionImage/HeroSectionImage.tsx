import imageMe from './../../../assets/ClassicNoBG.webp'
import './HerSectionImage.css'

const HeroSectionImage = () => {
    return (
        <div>
            <img src={imageMe} alt="hero"
                 className="w-[500px] mx-auto h-[500px] lg:w-[500px] lg:h-[500px] xl:w-1000 xl:h-1000 object-cover relative md:w-[500px] md:h-[500px]  xl:left-14 xl:top-14 brightness-95 pointer-events-none"
                 loading="eager"/>
        </div>
    )
}

export default HeroSectionImage;
