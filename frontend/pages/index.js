import Layout from "../components/layout"
import Characters from '../components/characters'
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"

const Home = ({ characters, homepage }) => {
  return (
    <Layout characters={characters}>
      <Seo seo={homepage.seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{homepage.hero.title}</h1>
          <Characters characters={characters} />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [characters, homepage] = await Promise.all([
    fetchAPI("/characters"),
    fetchAPI("/homepage"),
  ])

  return {
    props: { homepage, characters },
    revalidate: 1,
  }
}

export default Home
