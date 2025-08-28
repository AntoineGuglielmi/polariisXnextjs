import SiteLink from '@/features/home-page/components/molecules/site-link'

type AppPageProps = {
  params: Promise<void>
}

export default function AppPage({}: AppPageProps) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-wrap max-w-[380px] justify-center">
        <SiteLink href="/cowork">Cowork</SiteLink>
      </div>
    </main>
  )
}
