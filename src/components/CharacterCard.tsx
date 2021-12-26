import { Characters } from '../types/Characters';

interface CharacterProps {
	characterData: Characters;
}

export const CharacterCard = ({ characterData }: CharacterProps) => {
	const { images, name, species, gender, age, homePlanet, occupation, sayings } = characterData;

	return (
		<div>
			<figure>
				<img src={images.main} alt="" />
			</figure>
			<p>
				<span>{name.first}</span> <span>{name.middle}</span> <span>{name.last}</span>
			</p>
			<dl>
				<dt>Species</dt>
				<dd>{species}</dd>
				<dt>Gender</dt>
				<dd>{gender}</dd>
				<dt>Age</dt>
				<dd>{age}</dd>
				<dt>Home Planet</dt>
				<dd>{homePlanet}</dd>
				<dt>Dccupation</dt>
				<dd>{occupation}</dd>
			</dl>
			<p>{sayings}</p>
		</div>
	);
};
