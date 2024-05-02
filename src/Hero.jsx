import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-center">
            <div className="hero-title">
                <h1>Contentful CMS</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugit animi saepe nemo delectus dolorem illum, optio et tempore corrupti voluptatem debitis tenetur recusandae atque beatae ratione perferendis possimus repudiandae.</p>
            </div>
            <div className="img-container">
                <img src={heroImg} alt="woman and the browser"  className='img'/>
            </div>
        </div>
    </section>
  )
}
export default Hero