import type { Metadata } from "next"
import WorkGrid from "@/design-pages/WorkGrid"
import WorkHover from "@/design-pages/WorkHover"
import WorkList from "@/design-pages/WorkList"

export const metadata: Metadata = { title: "Work" }

type WorkPageProps = {
  searchParams: Promise<{ view?: string | string[] }>
}

export default async function Page({ searchParams }: WorkPageProps) {
  const view = (await searchParams).view
  const content =
    view === "list" ? (
      <WorkList />
    ) : view === "hover" ? (
      <WorkHover />
    ) : (
      <WorkGrid />
    )

  return <div className="design-page work-page">{content}</div>
}
