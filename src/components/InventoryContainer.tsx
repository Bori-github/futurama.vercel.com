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
		<div>
			{data.map((useFuturamaData: Inventory) => {
				return (
					<InventoryCard
						key={`inventory-list-${useFuturamaData.id}`}
						inventoryData={useFuturamaData}
					/>
				);
			})}
		</div>
	);
};
