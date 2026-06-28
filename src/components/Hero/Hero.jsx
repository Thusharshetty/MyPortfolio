"use client";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";


export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-36">
      <div className="mx-auto w-[92%] max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        <HeroContent/>
        <HeroImage/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reprehenderit consequuntur ab amet maxime voluptates, tempore quas vero architecto quam ipsa at accusamus alias velit veritatis. Quam sapiente doloremque at.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel nulla esse suscipit molestiae facilis libero eos itaque eaque aperiam t
        
      </div>

    </section>
  );
}