import { BlogPageComponent } from "@/components/app/blog-page"

export default async function BlogPage({
  params,
}: {
  params: { slug: string }
}) {
  return <BlogPageComponent />
}
