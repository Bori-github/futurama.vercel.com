import { NextPage } from 'next';
import { Error, Loading } from '../components';
import { useFuturamaData } from '../hooks/useFuturamaData';
import { Questions } from '../types/Questions';

const QuestionsPage: NextPage = () => {
	const { data, error } = useFuturamaData('questions');

	if (error) return <Error />;
	if (!data) return <Loading />;

	return (
		<div>
			<h1>Questions</h1>
			<main>
				{data.map((questionsData: Questions) => {
					const { id, question, possibleAnswers, correctAnswer } = questionsData;
					return (
						<div key={`questions-${id}`}>
							<strong>{question}</strong>
							<ul>
								<li>{possibleAnswers}</li>
							</ul>
							<span>{correctAnswer}</span>
						</div>
					);
				})}
			</main>
		</div>
	);
};

export default QuestionsPage;
