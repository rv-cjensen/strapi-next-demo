import ReactMarkdown from "react-markdown"
import NextImage from "../components/image"
import { fetchAPI } from "../lib/api"

const Homey = ({ page }) => {
  const chars = page.body[0].characters;

  return (
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>Homey</h1>

          <div className="uk-section">
            <ReactMarkdown source={page.content} />

            <ul>
              {chars.map((ch) => (
                <li key={ch.id}>
                  <h3>{ch.name}</h3>
                  {ch.image && (
                    <NextImage image={ch.image} />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const page = await fetchAPI("/homey");

  return {
    props: {
      page,
    },
  }
}

export default Homey
