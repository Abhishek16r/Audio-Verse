import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
             Experience Audio Bliss! Elevate every note, every beat, and every lyric
            with our premium audio devices. From sleek wireless earbuds to powerful 
            speakers, indulge in music like never before at unbeatable prices and 
            save up to 60%!
          </p>
          <div className='ctas'>
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
