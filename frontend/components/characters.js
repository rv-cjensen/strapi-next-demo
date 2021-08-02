import Character from './character'

const Characters = ({ characters }) => {
  return (
    <div>
      {characters.map((character) => <Character character={character} key={character.id} /> )}
    </div>
  )
}

export default Characters
