"use client"

import { PageAndNavQuery, PageQuery } from "@/tina/__generated__/types"
import { useTina } from "tinacms/dist/react"

import { FeaturedReading } from "@/components/blog-list"
import { FeatureList } from "@/components/features"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"
import { WelcomeHero } from "@/components/welcome-hero"

export function PageComponent(props: {
  data: PageAndNavQuery
  variables: {
    relativePath: string
  }
  query: string
}) {
  const { data } = useTina(props)

  return (
    <>
      <SiteHeader {...data.nav} />
      {data.page.blocks?.map((block, i) => {
        switch (block?.__typename) {
          case "PageBlocksWelcomeHero": {
            return <WelcomeHero key={i} {...block} />
          }
          case "PageBlocksFeatureList": {
            return <FeatureList key={i} {...block} />
          }
          case "PageBlocksFeaturedReading": {
            // @ts-ignore
            return <FeaturedReading key={i} {...block} />
          }
        }
      })}
      <Footer />
    </>
  )
}
