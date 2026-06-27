import React from 'react'
import Button from '@/components/ui/Button'
import { stats } from '@/data'

export default function HeroContent() {
  return (
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
          <div className="mt-10 flex gap-4 items-center flex-wrap ">
            <Button size="lg">
              View Projects
            </Button>
            <Button  variant="secondary" size="lg">
               Contact Me
            </Button>
          </div>
          <div className="mt-12 flex flex-wrap gap-12">
            {stats.map((stat,index)=>{
              return(
                <div key={index}  className="flex flex-col gap-4">
                  <h1 className="text-3xl md:text-4xl font-medium tracking-tight">{stat.value}</h1>
                  <p className="text-[var(--secondary)] ">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>

  )
}
