import { FeaturedIcons } from "@/components/icons"
import { Wavy } from "@/components/wavy"

const features = [
  {
    label: "LlamaLink App",
    description:
      "Our user-friendly app provides a seamless experience across devices, allowing you to connect with others effortlessly. Available on desktop, mobile, and tablet, LlamaLink keeps you connected anytime, anywhere.",
    icon: "Broadcast",
  },
  {
    label: "LlamaLink Messages",
    description:
      "Host virtual meetings, conferences, and webinars with ease using LlamaLink Meetings. Enjoy the collaborative features, such as screen sharing, file sharing, and real-time chat, all while surrounded by llama-themed goodness.",
    icon: "ChatBubbles",
  },
  {
    label: "LlamaLink Social",
    description:
      "Connect with friends, family, and colleagues through LlamaLink Social. Share updates, photos, and videos, and engage in llama-themed conversations that will make your social network experience unique and entertaining.",
    icon: "NewMessage",
  },
  {
    label: "Mission Statement",
    description:
      "To infuse joy, laughter, and connection into every video call through the charm of llamas, transforming ordinary conversations into extraordinary moments.",
    icon: "BallStar",
  },
]

export function Byline(props: {
  children: React.ReactNode
  className?: string
  fieldName?: string
}) {
  return (
    <div className={`flex w-full items-center gap-2 ${props.className}`}>
      <div className="h-2 w-full border-l border-t border-primary opacity-40" />
      <h2 className="relative whitespace-pre pb-2 text-xs font-semibold uppercase leading-7 tracking-wider text-primary">
        {props.children}
      </h2>
    </div>
  )
}

export function FeatureList() {
  return (
    <div className="relative overflow-hidden bg-muted py-24 sm:py-32">
      <Wavy className="absolute bottom-0 right-0 h-[2000px] w-[2000px] translate-x-1/2 translate-y-1/2 -rotate-45 opacity-25" />
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-left">
          <Byline>Services</Byline>
          <div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Experience video calls like never before with LlamaLink.
            </h2>
            <p className="mt-8 text-lg leading-8 text-primary">
              LlamaLink was born out of a desire to bring joy, laughter, and a
              touch of whimsy to the world of video communication. We believe
              that every conversation should be an extraordinary experience, and
              what better way to add a dash of excitement than by introducing
              llamas into the mix?
            </p>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <div className="mx-auto grid max-w-xl grid-cols-1 gap-4 md:gap-8 lg:max-w-none lg:grid-cols-2 lg:gap-12">
            {features?.map((feature, i) => {
              if (feature) {
                const iconName = (feature.icon ||
                  "BallStar") as unknown as keyof typeof FeaturedIcons
                const Icon = FeaturedIcons[iconName]
                return (
                  <div
                    key={i}
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
