import { NextPage } from 'next';
import { CastContainer } from '../components/CastContainer';

const CastPage: NextPage = () => {
	const name = 'cast';

	return (
		<div>
			<h1>Cast</h1>
			<CastContainer name={name} />
		</div>
	);
};

export default CastPage;
