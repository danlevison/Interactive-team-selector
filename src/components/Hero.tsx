type HeroProps = {
  title: string;
  description: string;
};

function Hero({ title, description }: HeroProps) {
  return (
    <section className="hero-content">
      <h1 className="title">{title}</h1>
      <p>{description}</p>
    </section>
  );
}

export default Hero;
