import Link from 'next/link'

type AppPageProps = {
  params: Promise<void>
}

export default function AppPage({}: AppPageProps) {
  return (
    <main className="">
      <p>AppPage</p>
      <Link href="/cowork">Cowork</Link>
    </main>
  )
}
