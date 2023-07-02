import { PageBlocksFeatureList } from "@/tina/__generated__/types"
import { tinaField } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import { FeaturedIcons } from "@/components/icons"
import { Wavy } from "@/components/wavy"

export function Byline(props: {
  children: React.ReactNode
  className?: string
  fieldName?: string
}) {
  return (
    <div
      data-tina-field={props.fieldName}
      className={`flex w-full items-center gap-2 ${props.className}`}
    >
      <div className="h-2 w-full border-l border-t border-primary opacity-40" />
      <h2 className="relative whitespace-pre pb-2 text-xs font-semibold uppercase leading-7 tracking-wider text-primary">
        {props.children}
      </h2>
    </div>
  )
}

export function FeatureList(props: PageBlocksFeatureList) {
  return (
    <div className="relative overflow-hidden bg-muted py-24 sm:py-32">
      <Wavy className="absolute bottom-0 right-0 h-[2000px] w-[2000px] translate-x-1/2 translate-y-1/2 -rotate-45 opacity-25" />
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-left">
          <Byline fieldName={tinaField(props, "byline")}>{props.byline}</Byline>
          <div data-tina-field={tinaField(props, "message")}>
            <TinaMarkdown
              content={props.message}
              components={{
                h2: (props) => (
                  <h2
                    className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl"
                    {...props}
                  />
                ),
                p: (props) => (
                  <p
                    className="mt-8 text-lg leading-8 text-primary"
                    {...props}
                  />
                ),
              }}
            />
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <div className="mx-auto grid max-w-xl grid-cols-1 gap-4 md:gap-8 lg:max-w-none lg:grid-cols-2 lg:gap-12">
            {props.features?.map((feature, i) => {
              if (feature) {
                const iconName = (feature.icon ||
                  "BallStar") as unknown as keyof typeof FeaturedIcons
                const Icon = FeaturedIcons[iconName]
                return (
                  <div
                    key={i}
                    data-tina-field={tinaField(feature)}
                    className="relative box-border flex flex-col gap-4 overflow-hidden rounded-xl border bg-card p-4 text-primary no-underline dark:border-neutral-800 md:p-16"
                  >
                    <div className="relative -m-2 flex h-16 w-16 items-center justify-center rounded-lg">
                      <Icon />
                    </div>
                    <div>
                      <div className="text-base font-bold leading-7 text-primary">
                        {feature.label}
                      </div>
                      <div className="mt-2 text-base leading-7 text-primary">
                        {feature.description}
                      </div>
                    </div>
                  </div>
                )
              } else {
                return null
              }
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
