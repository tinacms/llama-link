"use client"

import { PageQuery } from "@/tina/__generated__/types"
import { useTina } from "tinacms/dist/react"

import { FeaturedReading } from "@/components/blog-list"
import { FeatureList } from "@/components/features"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"
import { WelcomeHero } from "@/components/welcome-hero"

export function PageComponent(props: {
  data: PageQuery
  variables: {
    relativePath: string
  }
  query: string
}) {
  const { data } = useTina(props)

  return (
    <>
      <SiteHeader />
      {data.page.blocks?.map((block, i) => {
        switch (block?.__typename) {
          case "PageBlocksWelcomeHero": {
            return <WelcomeHero key={i} {...block} />
          }
          case "PageBlocksFeatureList": {
            return <FeatureList key={i} {...block} />
          }
        }
      })}
      <FeaturedReading />
      <Footer />
    </>
  )
}
