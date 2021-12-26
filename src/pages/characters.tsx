import { NextPage } from 'next';
import { CharactersContainer } from '../components';

const CharactersPage: NextPage = () => {
	const name = 'characters';

	return (
		<div>
			<CharactersContainer name={name} />
		</div>
	);
};

export default CharactersPage;
