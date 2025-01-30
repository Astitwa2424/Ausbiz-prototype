import { Banner } from '@/components/Banner/banner'
import ServicesGrid from '@/components/servicesgrid'
import TrainingSection from '@/components/training-section'

export default function Home() {
  return (
    <main>
      <Banner />

      <ServicesGrid />
      <TrainingSection />
    </main>
  )
}
