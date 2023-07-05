import client from "@/tina/__generated__/client"

import { BlogPageComponent } from "@/components/app/blog-page"

export default async function BlogPage({
  params,
}: {
  params: { slug: string }
}) {
  const result = await client.queries.post({
    relativePath: `${params.slug}.md`,
  })
  return <BlogPageComponent {...result} />
}
