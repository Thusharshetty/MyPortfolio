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
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque qui cum accusamus nam exercitationem. Quae debitis, tempora, corporis molestias omnis obcaecati minima numquam praesentium sunt, voluptate laudantium cupiditate nostrum amet?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugiat id cumque veniam error excepturi sed earum, voluptatum architecto dolores rerum blanditiis provident cum tempore facilis velit tempora molestias dolore!
      </div>

    </section>
  );
}