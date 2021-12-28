import styled from '@emotion/styled';
import { NextPage } from 'next';
import { Error, Loading } from '../components';
import { MEDIA_QUERY_END_POINT } from '../contants';
import { useFuturamaData } from '../hooks/useFuturamaData';
import { Info } from '../types/Info';

interface CREATOR {
	name: string;
	url: string;
}

const InfoPage: NextPage = () => {
	const { data, error } = useFuturamaData('info');

	if (error) return <Error />;
	if (!data) return <Loading />;

	return (
		<Container>
			<Title>Infomation</Title>
			{data.map((infoData: Info) => {
				const { id, synopsis, yearsAired, creators } = infoData;
				return (
					<InfoContainer key={`info-${id}`}>
						<img src="/info.png" alt="Futurama poster" className="InfoImg" />
						<ul>
							<InfoItem>
								Year-aired <span className="InfoData">{yearsAired}</span>
							</InfoItem>
							<InfoItem>
								Creators
								{data[0].creators.map((creator: CREATOR) => {
									return (
										<span key={`name${creator.name}`} className="InfoData">
											{creator.name}
										</span>
									);
								})}
							</InfoItem>
						</ul>
						<p>{synopsis}</p>
					</InfoContainer>
				);
			})}
		</Container>
	);
};

export default InfoPage;

const Container = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 30px;
`;

const Title = styled.h3`
	position: relative;
	padding: 5px;
	border-bottom: 1px solid #000;

	&::after {
		content: '';
		position: absolute;
		right: 0;
		bottom: -5px;
		left: 0;
		border-bottom: 1px solid #000;
	}
`;

const InfoContainer = styled.div`
	padding: 20px 0 30px;
	text-align: center;

	.InfoImg {
		width: 60%;
		margin: 0 auto;
		object-fit: contain;
	}

	@media screen and (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
		.InfoImg {
			width: 400px;
		}
	}
`;

const InfoItem = styled.li`
	border-radius: 20px;
	background-color: #fff;
	margin-bottom: 10px;
	font-size: 14px;

	.InfoData {
		margin: 0 5px;
		font-size: 18px;
	}
`;
