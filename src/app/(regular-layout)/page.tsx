import Choose from '@/components/layers/choose/choose'
import Hero from '@/components/layers/hero/hero'
import LayerBlog from '@/components/layers/layer-blog/layer-blog'
import LayerCta from '@/components/layers/layer-cta/layer-cta'
import LayerFaq from '@/components/layers/layer-faq/layer-faq'
import LayerKeyFigures from '@/components/layers/layer-key-figures/layer-key-figures'
import LayerTestimonials from '@/components/layers/layer-testimonials/layer-testimonials'
import LayerTour from '@/components/layers/layer-tour/layer-tour'
import Trusted from '@/components/layers/trusted/trusted'

export default function Home() {
  return (
    <main>
      <Hero />
      <Trusted />
      <Choose />
      <LayerTour />
      <LayerKeyFigures />
      <LayerTestimonials />
      <LayerFaq />
      <LayerCta />
      <LayerBlog />
    </main>
  )
}
