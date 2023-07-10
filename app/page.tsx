import client from "@/tina/__generated__/client"

import { PageComponent } from "@/components/app/page"

export default async function Page() {
  const result = await client.queries.pageAndNav({ relativePath: "home.md" })
  return <PageComponent {...result} />
}
