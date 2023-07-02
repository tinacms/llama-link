import { defineConfig } from "tinacms"

import { FeaturedIcons } from "../components/icons"
import { IconSelector } from "./icon-select"

export default defineConfig({
  branch: "",
  clientId: "",
  token: "",
  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Page",
        path: "content/pages",
        format: "md",
        ui: {
          router: (props) => {
            return "/"
          },
        },
        fields: [
          {
            name: "title",
            type: "string",
          },
          {
            name: "blocks",
            label: "Blocks",
            type: "object",
            list: true,
            templates: [
              {
                name: "welcomeHero",
                label: "Welcome Hero",
                fields: [
                  {
                    name: "message",
                    type: "rich-text",
                  },
                  {
                    name: "links",
                    label: "Links",
                    type: "object",
                    list: true,
                    fields: [
                      { type: "string", name: "link" },
                      { type: "string", name: "label" },
                      {
                        type: "string",
                        name: "style",
                        options: ["simple", "button"],
                      },
                    ],
                  },
                ],
              },
              {
                name: "featureList",
                label: "Feature List",
                fields: [
                  { name: "byline", type: "string" },
                  {
                    name: "message",
                    type: "rich-text",
                  },
                  {
                    name: "features",
                    label: "Features",
                    type: "object",
                    list: true,
                    ui: {
                      itemProps: (item) => {
                        return { label: item.label }
                      },
                      defaultItem: {
                        icon: Object.keys(FeaturedIcons)[0],
                        label: "Llama Feature",
                        description: "This is a feature",
                      },
                    },
                    fields: [
                      {
                        type: "string",
                        name: "icon",
                        options: Object.keys(FeaturedIcons),
                        ui: {
                          component: IconSelector,
                        },
                      },
                      { type: "string", name: "label" },
                      {
                        type: "string",
                        name: "description",
                        ui: {
                          component: "textarea",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
})
