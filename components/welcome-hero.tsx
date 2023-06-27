import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { IconList } from "@/components/icons"

const links = [
  { label: "Get started", link: "/", style: "button" },
  { label: "Learn more", link: "/learn", style: "simple" },
]

export function WelcomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 mx-auto h-full w-full max-w-[1600px]">
        <IconWrapper />
      </div>
      <div className="relative flex flex-col items-center gap-2 py-24">
        <div className="px-4 py-8 text-center">
          <h1 className="mx-auto text-5xl font-extrabold leading-tight tracking-tighter text-primary md:text-7xl">
            Talk to llama,
            <br />
            Share the{" "}
            <span className="bg-gradient-to-b from-blue-300 to-pink-600 bg-clip-text text-transparent">
              drama
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-[700px] px-2 text-center text-xl text-muted-foreground">
            Connect, Communicate, and Create Memorable Moments with Llama Video
            Calls
          </p>
        </div>
        <div className="flex gap-5 py-12">
          {links?.map((link) => {
            switch (link?.style) {
              case "button": {
                return (
                  <Link key={link.link} href={link.link || ""}>
                    <Button size="lg">{link.label}</Button>
                  </Link>
                )
              }
              case "simple": {
                return (
                  <Link key={link.link} href={link?.link || ""}>
                    <Button size="lg" variant={"ghost"}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                )
              }
            }
          })}
        </div>
      </div>
    </section>
  )
}

const IconWrapper = () => {
  const icons: {
    position: string
    size: keyof typeof sizes
  }[] = [
    {
      position: "top-[5%] left-[5%]",
      size: "xs",
    },
    {
      position: "top-[65%] left-[5%]",
      size: "xs",
    },
    {
      position: "top-[10%] left-[10%]",
      size: "md",
    },
    {
      position: "top-[40%] left-[10%]",
      size: "sm",
    },
    {
      position: "top-[80%] left-[10%]",
      size: "md",
    },
    {
      position: "top-[45%] left-[15%]",
      size: "3xl",
    },
    {
      position: "top-[85%] left-[15%]",
      size: "xl",
    },
    {
      position: "top-[20%] left-[20%]",
      size: "lg",
    },
    {
      position: "top-[75%] left-[25%]",
      size: "xl",
    },
    {
      position: "top-[60%] left-[30%]",
      size: "xs",
    },
    {
      position: "top-[5%] left-[35%]",
      size: "lg",
    },
    {
      position: "top-[90%] left-[40%]",
      size: "md",
    },
    {
      position: "top-[80%] left-[50%]",
      size: "lg",
    },
    {
      position: "top-[15%] left-[55%]",
      size: "sm",
    },
    {
      position: "top-[5%] left-[60%]",
      size: "xs",
    },
    {
      position: "top-[90%] left-[65%]",
      size: "2xl",
    },
    {
      position: "top-[20%] left-[70%]",
      size: "3xl",
    },
    {
      position: "top-[75%] left-[75%]",
      size: "sm",
    },
    {
      position: "top-[40%] left-[80%]",
      size: "2xl",
    },
    {
      position: "top-[63%] left-[85%]",
      size: "md",
    },
    {
      position: "top-[65%] left-[85%]",
      size: "md",
    },
    {
      position: "top-[40%] left-[90%]",
      size: "sm",
    },
    {
      position: "top-[10%] left-[90%]",
      size: "xl",
    },
    {
      position: "top-[80%] left-[90%]",
      size: "xl",
    },
  ]

  const sizes = {
    xs: "h-8 w-8",
    sm: "h-12 w-12",
    md: "h-16 w-16",
    lg: "h-20 w-20",
    xl: "h-24 w-24",
    "2xl": "h-28 w-28",
    "3xl": "h-32 w-32",
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-10 md:opacity-40">
      {icons.map((icon, i) => {
        const Icon = IconList[i] || IconList[0]
        return (
          <div
            key={icon.position}
            className={`ease absolute duration-200 ${icon.position}`}
          >
            <div className={`${sizes[icon.size]}`}>
              <Icon />
            </div>
          </div>
        )
      })}
    </div>
  )
}
