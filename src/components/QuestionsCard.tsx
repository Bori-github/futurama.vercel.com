import { Questions } from '../types/Questions';

interface QuestionsProps {
	questionsData: Questions;
}

export const QuestionsCard = ({ questionsData }) => {
	const { question, possibleAnswers, correctAnswer } = questionsData;
	return (
		<div>
			<p>{question}</p>
			<ul>{possibleAnswers}</ul>
			<span>{correctAnswer}</span>
		</div>
	);
};
