import { NextPage } from 'next';
import { Error, Loading } from '../components';
import { useFuturamaData } from '../hooks/useFuturamaData';
import { Characters } from '../types/Characters';

const CharactersPage: NextPage = () => {
	const { data, error } = useFuturamaData('characters');

	if (error) return <Error />;
	if (!data) return <Loading />;

	return (
		<div>
			<h1>Characters</h1>
			<main>
				{data.map((charactersData: Characters) => {
					const { id, images, name, species, gender, age, homePlanet, occupation, sayings } =
						charactersData;

					return (
						<div key={`characters-list-${id}`}>
							<img src={images.main} alt="" />
							<p>{name.first}</p>
							<p>
								<span>{species}</span>
								<span>{gender}</span>
								<span>{age}</span>
								<span>{homePlanet}</span>
							</p>
							<p>{occupation}</p>
							<p>{sayings}</p>
						</div>
					);
				})}
			</main>
		</div>
	);
};

export default CharactersPage;
