import Choose from '@/sites/cowork/components/layers/choose/choose'
import Hero from '@/sites/cowork/components/layers/hero/hero'
import LayerBlog from '@/sites/cowork/components/layers/layer-blog/layer-blog'
import LayerCta from '@/sites/cowork/components/layers/layer-cta/layer-cta'
import LayerFaq from '@/sites/cowork/components/layers/layer-faq/layer-faq'
import LayerKeyFigures from '@/sites/cowork/components/layers/layer-key-figures/layer-key-figures'
import LayerTestimonials from '@/sites/cowork/components/layers/layer-testimonials/layer-testimonials'
import LayerTour from '@/sites/cowork/components/layers/layer-tour/layer-tour'
import Trusted from '@/sites/cowork/components/layers/trusted/trusted'
import Test from '@/sites/cowork/components/test'

export default function Home() {
  return (
    <main>
      <Test color="red" />
      <Test
        color="green"
        className="bg-green-500"
      />
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
