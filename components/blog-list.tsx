import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Wavy } from "@/components/wavy"

const authors = [
  {
    name: "Michelle Artis",
    imageUrl: "/authors/author-1.jpeg",
  },
  {
    name: "Adam Bennett",
    imageUrl: "/authors/author-2.jpeg",
  },
  {
    name: "Amy Kloeber",
    imageUrl: "/authors/author-3.jpeg",
  },
  {
    name: "Ben Benson",
    imageUrl: "/authors/author-4.jpeg",
  },
  {
    name: "Arthur Cash",
    imageUrl: "/authors/author-5.jpeg",
  },
  {
    name: "James Zeus",
    imageUrl: "/authors/author-6.jpeg",
  },
  {
    name: "Michael Normand",
    imageUrl: "/authors/author-7.jpeg",
  },
  {
    name: "Derek Barber",
    imageUrl: "/authors/author-8.jpeg",
  },
]

export const posts = [
  {
    title: "Introducing LlamaLink Social",
    slug: "introducing-llama-link",
    image: "/ssspot.svg",
    description:
      "We believe that communication should be fun, engaging, and memorable. With LlamaLink, you can enjoy video calls that not only serve their purpose but also bring a smile to your face and create lasting memories. Join us on this llama-filled adventure and experience video calling like never before.",
    author: authors[3],
  },
  {
    title: "Lorem Ipsum Dolor Met",
    slug: "inspired-interface",
    image: "/cccoil.svg",
    description:
      "Llama-Inspired Interface: We've reimagined the video call interface to incorporate playful llama elements. From llama-themed backgrounds and stickers to llama-inspired emoticons, every call becomes a delightful experience that sparks joy.",
    author: authors[2],
  },
  {
    title: "Lorem Ipsum Dolor Met",
    slug: "seamless-connection",
    image: "/gggyrate.svg",
    description:
      "Seamless Connection: LlamaLink ensures crystal-clear audio and high-definition video quality, providing a seamless connection between users. Say goodbye to buffering and dropped calls, and immerse yourself in smooth, uninterrupted conversations",
    author: authors[3],
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quam metus, condimentum ut bibendum",
    slug: "magic-filters",
    image: "/ttten.svg",
    description:
      "Llama Magic Filters: Add a touch of magic to your video calls with our unique Llama Magic Filters. Transform yourself into a regal llama, a cute baby llama, or even a rainbow llama, bringing fun and laughter to your conversations.",
    author: authors[4],
  },
  {
    title: "Duis accumsan justo diam, eu convallis",
    image: "/rrreflection.svg",
    slug: "call-themes",
    description:
      "Llama Call Themes: Express your personality and set the mood with our range of Llama Call Themes. Whether it's a professional meeting, a virtual party, or a casual catch-up, choose from a variety of llama-themed backgrounds and animations to enhance your video calls",
    author: authors[5],
  },
]

export function FeaturedReading() {
  return (
    <div className="relative">
      <div className="absolute inset-0 overflow-hidden">
        <Wavy className="absolute inset-0 opacity-10" />
      </div>
      <div className="relative -my-12 mx-auto aspect-square max-w-7xl rounded-lg py-24 shadow-lg shadow-muted sm:aspect-video sm:py-32">
        <div className="absolute inset-0 rounded-lg bg-card p-8">
          <div className="absolute inset-5 overflow-hidden rounded-md bg-blend-multiply">
            <Image
              fill={true}
              className="object-cover"
              alt=""
              src={"/ssspot.svg"}
            />
            <div
              className={`absolute inset-0 bg-gray-600 opacity-30 mix-blend-multiply dark:opacity-40`}
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="absolute right-12 top-12 sm:bottom-16 sm:right-16 sm:top-auto">
          <div className="relative h-12 w-12 overflow-hidden rounded-full ring-4 ring-card sm:h-32 sm:w-32 md:ring-8">
            <Image
              fill={true}
              className="object-cover"
              alt={""}
              src={"/authors/author-6.jpeg"}
            />
          </div>
        </div>
        <div className="absolute bottom-5 left-5 p-6 sm:w-2/3 sm:p-12 md:w-1/2">
          <h2 className="md:text-md relative mt-4 inline-block border border-white px-2 py-1 text-sm font-bold uppercase tracking-widest text-white">
            Latest
          </h2>
          <h2 className="relative mt-4 text-3xl font-bold text-white md:text-3xl xl:text-5xl">
            Duis accumsan justo diam, eu convallis
          </h2>
          <p className="mt-4 hidden text-lg leading-8 text-white lg:block">
            {`Llama Call Themes: Express your personality and set the mood with our range of Llama Call Themes. Whether it's a professional meeting, a virtual party, or a casual catch-up, choose from a variety of llama-themed backgrounds and animations to enhance your video calls`}
          </p>
          <div className="mt-3 flex">
            <Link
              href={``}
              className="text-sm font-semibold leading-6 text-white"
              aria-describedby="featured-post"
            >
              Read more<span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-24" />
    </div>
  )
}
export function FeaturedReadingAlt({ hasLink }: { hasLink?: boolean }) {
  const post = posts[0]
  return (
    <div className="grid-rows-12 mx-auto grid grid-cols-1 overflow-hidden rounded-lg bg-card shadow-md lg:grid-cols-12 lg:grid-rows-1">
      <div className="relative col-span-6  px-4 py-8 sm:px-12 sm:py-16 lg:col-span-5 lg:min-h-[400px]">
        <h2
          id="featured-post"
          className="relative text-2xl font-bold text-card-foreground md:text-3xl"
        >
          <span className="relative">{post.title}</span>
        </h2>
        <p className="mt-8 text-lg leading-8 text-primary">
          {post.description}
        </p>
        {hasLink ? (
          <Link
            href={`/blog/${post.slug}`}
            className="mt-8 inline-flex w-16 items-center justify-between text-base font-semibold leading-6 text-card-foreground"
          >
            <span className="">Read</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        ) : (
          <div className="h-8" />
        )}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <Wavy className="absolute bottom-0 right-0 h-[700px] w-[700px] translate-x-1/2 translate-y-1/2 -rotate-45 opacity-10" />
        </div>
        <div className="absolute inset-x-0 bottom-0 z-10 flex translate-y-1/2 justify-center lg:bottom-16 lg:left-auto lg:right-0 lg:translate-x-1/2">
          <div className="relative h-20 w-20 overflow-hidden rounded-full ring-4 ring-card sm:h-24 sm:w-24 md:ring-8">
            <Image
              fill={true}
              sizes="200px"
              className="object-cover"
              alt={post.author?.name || ""}
              src={post.author?.imageUrl || ""}
            />
          </div>
        </div>
      </div>
      <div className="relative col-span-6 aspect-[4/2] lg:col-span-7 lg:aspect-auto">
        <Image
          fill={true}
          className="object-cover"
          alt=""
          src={post.image || ""}
        />
      </div>
    </div>
  )
}

export function BlogList() {
  return (
    <>
      <FeaturedReadingAlt hasLink={true} />
      <div className="grid gap-8 bg-muted lg:grid-cols-3">
        <div className="order-1 col-span-2 grid grid-cols-1 gap-8 bg-muted lg:-order-1 lg:grid-cols-2">
          {posts
            .filter((_, i) => i !== 0)
            .map((post, i) => {
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={`grid grid-cols-1 overflow-hidden rounded-lg bg-card shadow-md`}
                >
                  <div className="relative col-span-1 px-8 pb-16 pt-8">
                    <h2
                      id="featured-post"
                      className="relative line-clamp-2 text-2xl font-bold text-card-foreground"
                    >
                      {post.title}
                    </h2>
                    <p className="mt-8 line-clamp-2 text-lg leading-8 text-primary">
                      {post.description}
                    </p>
                    <div className="absolute inset-x-0 bottom-0 z-10 flex translate-y-1/2 justify-center">
                      <div className="relative h-20 w-20 overflow-hidden rounded-full ring-4 ring-card md:ring-8">
                        <Image
                          fill={true}
                          className="object-cover"
                          alt=""
                          src={post.author?.imageUrl || ""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative min-h-[150px]">
                    <Image
                      fill={true}
                      className="absolute inset-0 object-cover"
                      alt=""
                      src={post.image || ""}
                    />
                  </div>
                </Link>
              )
            })}
        </div>
        <div className="relative col-span-2 lg:col-span-1">
          <div className="sticky top-24 z-10 flex items-center justify-center rounded-lg bg-pink-600 px-4 pb-24 pt-12 shadow-md dark:bg-card sm:px-12">
            <div className="relative z-10">
              <h3 className="mb-4 text-3xl font-bold text-card dark:text-primary lg:mb-12 lg:text-3xl">
                Subscribe to our newsletter
              </h3>
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input className="bg-card" type="email" placeholder="Email" />
                <Button type="submit">Subscribe</Button>
              </div>
            </div>
            <div className="absolute inset-0 overflow-hidden dark:opacity-70">
              <Wavy className="absolute right-0 top-0 h-[700px] w-[700px] -translate-y-1/2 translate-x-1/2 rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
