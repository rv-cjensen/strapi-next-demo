import { fetchAPI } from "../../lib/api"
import Layout from "../../components/layout"
import NextImage from "../../components/image"
import { getStrapiMedia } from "../../lib/media"

const Character = ({ character, characters }) => {
  const imageUrl = getStrapiMedia(character.image)

  return (
    <Layout characters={characters}>
      <div
        id="banner"
        className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
        data-src={imageUrl}
        data-srcset={imageUrl}
        data-uk-img
      >
        <h1>{character.name}</h1>
      </div>
      <div className="uk-section">
        <div className="uk-container uk-container-small">
          <hr className="uk-divider-small" />
          <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
            <div>
              {character.image && (
                <NextImage image={character.image} />
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const characters = await fetchAPI("/characters")

  return {
    paths: characters.map((character) => ({
      params: {
        slug: character.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const character = await fetchAPI(`/characters?slug=${params.slug}`)
  const characters = await fetchAPI(`/characters`)

  return {
    props: {
      character: character[0],
      characters,
    },
    revalidate: 1,
  }
}

export default Character
