const Character = ({ character }) => {
  return (
    <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" data-uk-grid>
      <div className="uk-card-media-left uk-cover-container">
        <img src={`http://localhost:1337${character.image.url}`} data-uk-cover />
        <canvas width={character.image.width} height={character.image.height} />
      </div>
      <div>
          <div className="uk-card-body">
              <h3 className="uk-card-title">{character.name}</h3>
              <p>Slug: {character.slug}</p>
          </div>
      </div>
    </div>
  )
}

export default Character;
