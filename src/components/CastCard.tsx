import styled from '@emotion/styled';
import Link from 'next/link';
import { MEDIA_QUERY_END_POINT } from '../contants';

import { Cast } from '../types/Cast';

interface CastProps {
	castData: Cast;
}

interface BIO {
	text: string;
	url: string;
}

export const CastCard = ({ castData }: CastProps) => {
	const { name, born, bio } = castData;
	console.log(bio);
	return (
		<Container>
			<TextBox>
				<CastText>{name}</CastText>
				<CastText>{born}</CastText>
			</TextBox>
			<Link href={`${bio.url}`}>
				<MoreBtn target="_blank">more</MoreBtn>
			</Link>
		</Container>
	);
};

const Container = styled.div`
	width: 200px;
	margin: 10px;
	padding: 10px;
	border-radius: 10px;
	background-color: #fff;
	text-align: center;
`;

const TextBox = styled.div`
	margin-bottom: 10px;
	padding: 5px;
	border: 2px solid #c84b31;
`;

const MoreBtn = styled.a`
	padding: 3px 7px;
	border: 2px solid #c84b31;
	border-radius: 20px;
	background-color: #c84b31;
	cursor: pointer;
`;

const CastText = styled.p`
	margin: 0;
	padding: 3px 0;

	&:first-child {
		border-bottom: 1px dashed #c84b31;
	}
	&:last-child {
		font-size: 14px;
	}
`;
