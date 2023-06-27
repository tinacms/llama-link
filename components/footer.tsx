import React from "react"

import { SecondaryMenu } from "@/components/site-header"

export function Footer() {
  const year = React.useMemo(() => new Date().getFullYear(), [])
  return (
    <footer className="">
      <div className="mx-auto max-w-7xl px-4 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center md:justify-start">
          <SecondaryMenu />
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-primary">
            &copy; {year} LlamaLink, Inc
          </p>
        </div>
      </div>
    </footer>
  )
}
