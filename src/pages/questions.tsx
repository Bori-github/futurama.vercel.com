import { NextPage } from 'next';
import { QuestionsContainer } from '../components';

const QuestionsPage: NextPage = () => {
	const name = 'questions';

	return (
		<div>
			<h3>Cast</h3>
			<QuestionsContainer name={name} />
		</div>
	);
};

export default QuestionsPage;
