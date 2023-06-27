import Image from "next/image"

import { FeaturedReadingAlt, posts } from "@/components/blog-list"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"

export function BlogPageComponent() {
  return (
    <>
      <SiteHeader />
      <div className="relative bg-muted">
        <div className="container relative z-10 flex flex-col py-8">
          <FeaturedReadingAlt />
        </div>
        <div className="absolute -inset-24 blur-lg">
          <Image
            fill={true}
            className="object-cover"
            alt=""
            src={posts[0].image || ""}
          />
        </div>
      </div>
      <div className="relative bg-muted py-8 lg:py-24">
        <div className="mx-auto max-w-5xl px-8">
          <div className="prose max-w-none dark:prose-invert">
            <div>
              <h3>
                {`Llama Call Themes: Express your personality and set the mood
                with our range of Llama Call Themes. Whether it's a professional
                meeting, a virtual party, or a casual catch-up, choose from a
                variety of llama-themed backgrounds and animations to enhance
                your video calls`}
              </h3>
              <p>
                {`Llama Call Themes: Express your personality and set the mood
                with our range of Llama Call Themes. Whether it's a professional
                meeting, a virtual party, or a casual catch-up, choose from a
                variety of llama-themed backgrounds and animations to enhance
                your video calls`}
              </p>
              <p>
                {`Llama Call Themes: Express your personality and set the mood
                with our range of Llama Call Themes. Whether it's a professional
                meeting, a virtual party, or a casual catch-up, choose from a
                variety of llama-themed backgrounds and animations to enhance
                your video calls`}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
