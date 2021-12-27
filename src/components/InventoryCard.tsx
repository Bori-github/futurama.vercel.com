import { Inventory } from '../types/Inventory';

interface InventoryProps {
	inventoryData: Inventory;
}

export const InventoryCard = ({ inventoryData }: InventoryProps) => {
	const { title, category, description, price, stock } = inventoryData;

	return (
		<div>
			<span>{category}</span>
			<strong>{title}</strong>
			<p>{description}</p>
			<span>{price}</span>
			<span>{stock}</span>
		</div>
	);
};
