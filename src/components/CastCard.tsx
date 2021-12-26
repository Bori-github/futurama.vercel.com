import { Cast } from '../types/Cast';

interface CastProps {
	castData: Cast;
}

export const CastCard = ({ castData }: CastProps) => {
	const { name, born } = castData;

	return (
		<div>
			<p>{name}</p>
			<p>{born}</p>
		</div>
	);
};
