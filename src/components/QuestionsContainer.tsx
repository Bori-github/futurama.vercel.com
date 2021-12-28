import { Error, Loading, QuestionsCard } from '.';
import { useFuturamaData } from '../hooks/useFuturamaData';
import { Questions } from '../types/Questions';

interface QuestionsProps {
	name: string;
}

export const QuestionsContainer = ({ name }: QuestionsProps) => {
	const { data, error } = useFuturamaData(name);

	if (error) return <Error />;
	if (!data) return <Loading />;

	return (
		<div>
			{data.map((useFuturamaData: Questions) => {
				return (
					<QuestionsCard
						key={`question-list-${useFuturamaData.id}`}
						questionsData={useFuturamaData}
					/>
				);
			})}
		</div>
	);
};
