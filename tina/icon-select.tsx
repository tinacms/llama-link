import React from "react"
import * as Popover from "@radix-ui/react-popover"
import { TrashIcon } from "lucide-react"
import { wrapFieldsWithMeta } from "tinacms"

import { FeaturedIcons } from "../components/icons"

export const IconSelector = wrapFieldsWithMeta((props) => {
  const iconName = props.input.value as unknown as keyof typeof FeaturedIcons
  const ActiveIcon = FeaturedIcons[iconName] || null

  return (
    <Popover.Root>
      <Popover.Trigger className="group relative h-24 w-24 rounded-sm border border-gray-200 bg-white shadow-sm focus:ring-2">
        <button
          onClick={(e) => {
            e.preventDefault()
            // e.stopPropagation()
            props.input.onChange("")
          }}
          className="absolute right-1 top-1 opacity-0 transition-opacity group-hover:opacity-100"
        >
          <TrashIcon className="h-4 w-4 text-red-500" />
        </button>
        {ActiveIcon && <ActiveIcon />}
      </Popover.Trigger>
      <Popover.Anchor />
      <Popover.Portal>
        <Popover.Content
          style={{ zIndex: 10000 }}
          align="start"
          className="ring-opacity/5 -mr-1 mt-1 flex flex-col justify-between rounded-md bg-white py-1 shadow-lg"
        >
          <div className="grid w-full grid-cols-4 gap-1 p-3">
            {Object.entries(FeaturedIcons).map(([key, Icon]) => {
              return (
                <button
                  className="h-16 w-16 rounded-sm"
                  onClick={() => {
                    props.input.onChange(key)
                  }}
                >
                  <Icon />
                </button>
              )
            })}
          </div>
          <div className="block w-full p-3">
            <Popover.Close className="block w-full rounded-sm  border border-gray-800 px-4 py-3 shadow-lg">
              Close
            </Popover.Close>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}) as any
