import styled from '@emotion/styled';
import { useState } from 'react';
import { Error, Loading, QuestionsCard } from '.';
import { useFuturamaData } from '../hooks/useFuturamaData';
import { Questions } from '../types/Questions';

interface QuestionsProps {
	name: string;
}

export const QuestionsContainer = ({ name }: QuestionsProps) => {
	const { data, error } = useFuturamaData(name);
	const [showAnswer, setShowAnswer] = useState(false);
	const handleAnswer = () => {
		setShowAnswer(curr => !curr);
	};

	if (error) return <Error />;
	if (!data) return <Loading />;

	return (
		<QuestionsBox>
			{data.map((useFuturamaData: Questions) => {
				return (
					<QuestionsCard
						key={`question-list-${useFuturamaData.id}`}
						questionsData={useFuturamaData}
						showAnswer={showAnswer}
					/>
				);
			})}
			<SubmitBtn type="submit" onClick={() => handleAnswer()}>
				Submit!
			</SubmitBtn>
		</QuestionsBox>
	);
};

const QuestionsBox = styled.section`
	padding: 30px;
	text-align: center;
`;

const SubmitBtn = styled.button`
	padding: 10px 20px;
	border: 2px solid #fff;
	border-radius: 30px;
	background-color: transparent;
	color: #fff;
	font-family: 'Fugaz One', sans-serif;
	font-size: 20px;
	cursor: pointer;
	transition: background-color 0.2s;

	&:hover {
		background-color: #c84b31;
	}
`;
