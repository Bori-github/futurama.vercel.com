import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from '../contants';
import { Error, Loading, InventoryCard } from '.';
import { useFuturamaData } from '../hooks/useFuturamaData';
import { Inventory } from '../types/Inventory';

interface InventoryProps {
	name: string;
}

export const InventoryContainer = ({ name }: InventoryProps) => {
	const { data, error } = useFuturamaData(name);

	if (error) return <Error />;
	if (!data) return <Loading />;

	return (
		<Container>
			{data.map((useFuturamaData: Inventory) => {
				return (
					<InventoryCard
						key={`inventory-list-${useFuturamaData.id}`}
						inventoryData={useFuturamaData}
					/>
				);
			})}
		</Container>
	);
};

const Container = styled.section`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	gap: 5px 20px;
	padding: 30px 0;

	@media screen and (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
		grid-template-columns: repeat(3, 1fr);
	}
`;
