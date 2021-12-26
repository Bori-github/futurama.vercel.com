import { NextPage } from 'next';
import { CharactersContainer } from '../components';

const CharactersPage: NextPage = () => {
	const name = 'characters';

	return (
		<div>
			<h1>Characters</h1>
			<CharactersContainer name={name} />
		</div>
	);
};

export default CharactersPage;
