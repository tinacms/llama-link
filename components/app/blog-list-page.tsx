import { BlogList } from "@/components/blog-list"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"

export function BlogIndexPageComponent() {
  return (
    <>
      <SiteHeader />
      <div className="bg-muted">
        <div className="container flex flex-col gap-8 py-8">
          <BlogList />
        </div>
      </div>
      <Footer />
    </>
  )
}
