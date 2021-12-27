import styled from '@emotion/styled';
import { Error, Loading, CastCard } from '.';
import { useFuturamaData } from '../hooks/useFuturamaData';
import { Cast } from '../types/Cast';

interface CastProps {
	name: string;
}

export const CastContainer = ({ name }: CastProps) => {
	const { data, error } = useFuturamaData(name);

	if (error) return <Error />;
	if (!data) return <Loading />;

	return (
		<CastBox>
			{data.map((useFuturamaData: Cast) => {
				return <CastCard key={`cast-list-${useFuturamaData.id}`} castData={useFuturamaData} />;
			})}
		</CastBox>
	);
};

const CastBox = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding: 30px;
`;
