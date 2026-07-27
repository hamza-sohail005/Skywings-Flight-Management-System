import Hero from '../components/HomepageSections/Hero'
import Features from '../components/HomepageSections/Features'
import PopularDestinations from '../components/HomepageSections/PopularDestinations'

export default function Home({ onSearch }) {
  return (
    <>
      <Hero onSearch={onSearch} />
      <Features />
      <PopularDestinations onSearch={onSearch} />
    </>
  )
}
