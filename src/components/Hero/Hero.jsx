"use client";


export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24">
      <div className="mx-auto w-[92%] max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-lime-300 bg-lime-100/60 px-4 py-2 text-sm">
            <div className="h-2 w-2 rounded-full bg-lime-500"></div>
            Available for Internship
          </div>

          <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl leading-tight">
            {/* Building Digital */}
            From Ideas
            <br />
            {/* Experiences with */}
            to Scalable
            <br />
            <span className="text-lime-500">
              Products.
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-neutral-600">

            {/* I'm Thushar Shetty, a Full Stack Developer passionate
            about building scalable web applications and solving
            real-world problems with code. */}
            Computer Science Student
            focused on building
            modern web applications
            and solving real-world
            problems.
          </p>

        </div>


        <div className="flex justify-center mt-20">

          <div className="relative h-[650px] w-[500px]">
            <div className="absolute inset-0 rounded-[50px] bg-lime-100 opacity-70 blur-3xl" />
          </div>


        </div>

      </div>

    </section>
  );
}