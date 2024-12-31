import imageMe from './../../../assets/ClassicNoBG.webp'
import './HerSectionImage.css'

const HeroSectionImage = () => {
    return (
        <div>
            <img src={imageMe} alt="hero"
                 className="w-[500px] h-[500px] md:w-1000 md:h-1000 object-cover relative   md:left-14 md:top-14 brightness-95"
                 loading="eager"/>
        </div>
    )
}

export default HeroSectionImage;
