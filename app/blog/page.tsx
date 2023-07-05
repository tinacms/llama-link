import client from "@/tina/__generated__/client"

import { BlogIndexPageComponent } from "@/components/app/blog-list-page"

export default async function BlogIndexPage() {
  const result = await client.queries.postConnection()
  return <BlogIndexPageComponent {...result} />
}
