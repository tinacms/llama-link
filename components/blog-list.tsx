import Image from "next/image"
import Link from "next/link"
import {
  PageBlocksFeaturedReading,
  PostConnectionQuery,
  PostQuery,
} from "@/tina/__generated__/types"
import { ArrowRight } from "lucide-react"
import { tinaField } from "tinacms/dist/react"

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

export function FeaturedReading(props: PageBlocksFeaturedReading) {
  return (
    <div className="relative">
      <div className="absolute inset-0 overflow-hidden">
        <Wavy className="absolute inset-0 opacity-10" />
      </div>
      <div
        data-tina-field={tinaField(props, "featuredPost")}
        className="relative -my-12 mx-auto aspect-square max-w-7xl rounded-lg py-24 shadow-lg shadow-muted sm:aspect-video sm:py-32"
      >
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
              src={props.featuredPost?.author?.image || ""}
            />
          </div>
        </div>
        <div className="absolute bottom-5 left-5 p-6 sm:w-2/3 sm:p-12 md:w-1/2">
          <h2
            data-tina-field={tinaField(props, "label")}
            className="md:text-md relative mt-4 inline-block border border-white px-2 py-1 text-sm font-bold uppercase tracking-widest text-white"
          >
            {props.label}
          </h2>
          <h2 className="relative mt-4 text-3xl font-bold text-white md:text-3xl xl:text-5xl">
            {props.featuredPost?.title}
          </h2>
          <p className="mt-4 hidden text-lg leading-8 text-white lg:block">
            {props.featuredPost?.description}
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
export function FeaturedReadingAlt({
  post,
  hasLink,
}: {
  post: PostQuery["post"]
  hasLink?: boolean
}) {
  return (
    <div className="grid-rows-12 mx-auto grid grid-cols-1 overflow-hidden rounded-lg bg-card shadow-md lg:grid-cols-12 lg:grid-rows-1">
      <div className="relative col-span-6  px-4 py-8 sm:px-12 sm:py-16 lg:col-span-5 lg:min-h-[400px]">
        <h2
          id="featured-post"
          className="relative text-2xl font-bold text-card-foreground md:text-3xl"
          data-tina-field={tinaField(post, "title")}
        >
          <span className="relative">{post.title}</span>
        </h2>
        <p
          data-tina-field={tinaField(post, "description")}
          className="mt-8 text-lg leading-8 text-primary"
        >
          {post.description}
        </p>
        {hasLink ? (
          <Link
            href={`/blog/${post._sys.breadcrumbs.join("/")}`}
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
          <div
            data-tina-field={tinaField(post, "author")}
            className="relative h-20 w-20 overflow-hidden rounded-full ring-4 ring-card sm:h-24 sm:w-24 md:ring-8"
          >
            <Image
              fill={true}
              sizes="200px"
              className="object-cover"
              alt={post.author?.name || ""}
              src={post.author?.image || ""}
            />
          </div>
        </div>
      </div>
      <div
        data-tina-field={tinaField(post, "image")}
        className="relative col-span-6 aspect-[4/2] lg:col-span-7 lg:aspect-auto"
      >
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

export function BlogList(props: PostConnectionQuery) {
  const posts = props.postConnection.edges
  const featuredPost = posts && posts[0]?.node
  if (!featuredPost) {
    return null
  }
  return (
    <>
      <FeaturedReadingAlt hasLink={true} post={featuredPost} />
      <div className="grid gap-8 bg-muted lg:grid-cols-3">
        <div className="order-1 col-span-2 grid grid-cols-1 gap-8 bg-muted lg:-order-1 lg:grid-cols-2">
          {posts
            .filter((_, i) => i !== 0)
            .map((edge, i) => {
              const post = edge?.node
              if (!post) {
                return null
              }
              return (
                <Link
                  key={post._sys.breadcrumbs.join("/")}
                  href={`/blog/${post._sys.breadcrumbs.join("/")}`}
                  className={`grid grid-cols-1 overflow-hidden rounded-lg bg-card shadow-md`}
                >
                  <div className="relative col-span-1 px-8 pb-16 pt-8">
                    <h2
                      data-tina-field={tinaField(post, "title")}
                      id="featured-post"
                      className="relative line-clamp-2 text-2xl font-bold text-card-foreground"
                    >
                      {post.title}
                    </h2>
                    <p
                      data-tina-field={tinaField(post, "description")}
                      className="mt-8 line-clamp-2 text-lg leading-8 text-primary"
                    >
                      {post.description}
                    </p>
                    <div className="absolute inset-x-0 bottom-0 z-10 flex translate-y-1/2 justify-center">
                      <div
                        data-tina-field={
                          post.author && tinaField(post.author, "image")
                        }
                        className="relative h-20 w-20 overflow-hidden rounded-full ring-4 ring-card md:ring-8"
                      >
                        <Image
                          fill={true}
                          className="object-cover"
                          alt=""
                          src={post.author?.image || ""}
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
