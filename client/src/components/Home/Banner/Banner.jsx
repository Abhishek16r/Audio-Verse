import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
          <div className="text-content">
            <h1>SALES</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aspernatur accusamus et. Cum, nisi. Placeat deserunt provident maxime sit natus ullam, corporis voluptatem, ratione quaerat nemo dicta illo unde voluptas!
                Autem accusantium quisquam, eaque voluptate, laborum temporibus dignissimos dolorem labore sint ut dolorum suscipit tenetur aliquid maxime, corrupti doloribus architecto adipisci laudantium voluptatibus exercitationem fuga obcaecati repellendus necessitatibus. Dolore, aliquam!
                Minus, labore asperiores tempora, incidunt sed magni officia distinctio numquam enim, est natus beatae iusto corporis. Aliquid sunt dolor, repudiandae laborum est recusandae iure culpa labore minima vero sed ullam?
            </p>
            <div className='ctas'>
                <div className="banner-cta">Read More</div>
                <div className="banner-cta v2">Shop Now</div>
            </div>
          </div>
          <img className="banner-img" src={BannerImg} alt="" />
        </div>
    </div>;
};

export default Banner;
