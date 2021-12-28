import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from '../contants';
import { Questions } from '../types/Questions';

interface QuestionsProps {
	questionsData: Questions;
	showAnswer: boolean;
}

export const QuestionsCard = ({ questionsData, showAnswer }: QuestionsProps) => {
	const { question, possibleAnswers, correctAnswer, id } = questionsData;

	return (
		<Container>
			<Question>
				{id}. {question}
			</Question>
			<AnswerList>
				{possibleAnswers.map((answer: string, index: number) => {
					return (
						<AnswerItem key={`answer-list-${index}`}>
							<input type="radio" name={`answer${id}`} id={`answer-${id}-${index}`} />
							<label htmlFor={`answer-${id}-${index}`}>{answer}</label>
						</AnswerItem>
					);
				})}
			</AnswerList>
			{showAnswer && (
				<CorrectAnswer>
					Correct answer<span>{correctAnswer}</span>
				</CorrectAnswer>
			)}
		</Container>
	);
};

const Container = styled.div`
	position: relative;
	min-width: 500px;
	width: 100%;
	margin-bottom: 20px;
	padding: 10px 20px;
	border-radius: 20px 0 20px 20px;
	background-color: #fff;
	margin-bottom: 20px;
	text-align: center;
`;

const Question = styled.p`
	padding-bottom: 10px;
	border-bottom: 2px dashed #c84b31;
	font-size: 18px;
	text-align: left;

	@media screen and (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
		font-size: 16px;
	}
`;

const AnswerList = styled.ul`
	padding-left: 10px;
	text-align: left;

	@media screen and (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
		font-size: 14px;
	}
`;

const AnswerItem = styled.li`
	& input[type='radio'] {
		display: none;
	}

	& label::before {
		content: '';
		display: inline-block;
		width: 10px;
		height: 10px;
		margin-right: 10px;
		border: 2px solid #006599;
		border-radius: 3px;
		cursor: pointer;
		transition: background-color 0.2s;
	}

	&:hover label::before {
		background-color: #006599;
	}

	& input[type='radio']:checked + label::before {
		background-color: #006599;
	}
`;

const CorrectAnswer = styled.span`
	display: inline-block;
	padding: 8px 6px 8px 20px;
	border-radius: 20px;
	background-color: #ecdbba;
	font-size: 13px;
	text-align: center;

	& span {
		margin-left: 10px;
		padding: 3px 10px;
		border-radius: 0 20px 20px 0;
		background-color: #c84b31;
		color: #fff;
		font-size: 16px;
	}

	@media screen and (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
		& span {
			font-size: 13px;
		}
	}
`;
