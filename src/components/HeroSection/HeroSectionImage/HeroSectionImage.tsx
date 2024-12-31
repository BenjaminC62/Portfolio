import imageMe from './../../../assets/ClassicNoBG.webp'
import './HerSectionImage.css'

const HeroSectionImage = () => {
    return (
        <div>
            <img src={imageMe} alt="hero"
                 className="w-1000 h-1000 object-cover relative left-14 top-14 brightness-95" loading="eager"/>
        </div>
    )
}

export default HeroSectionImage;
