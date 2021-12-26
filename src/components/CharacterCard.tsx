import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from '../contants';

import { Characters } from '../types/Characters';

interface CharacterProps {
	characterData: Characters;
}

export const CharacterCard = ({ characterData }: CharacterProps) => {
	const { images, name, species, gender, age, homePlanet, occupation, sayings } = characterData;

	return (
		<Container>
			<CharacterInfoContainer>
				<CharacterImgContainer>
					<CharacterImg src={images.main} alt="" />
				</CharacterImgContainer>
				<CharacterName>
					<span>{name.first}</span> <span>{name.middle}</span> <span>{name.last}</span>
				</CharacterName>
				<CharacterSay>{sayings[0]}</CharacterSay>
			</CharacterInfoContainer>
			<CharacterInfo>
				<InfoLi>
					Species<InfoDd>{species}</InfoDd>
				</InfoLi>
				<InfoLi>
					Gender<InfoDd>{gender}</InfoDd>
				</InfoLi>
				<InfoLi>
					Age<InfoDd>{age}</InfoDd>
				</InfoLi>
				<InfoLi>
					Home Planet<InfoDd>{homePlanet || 'Unknown'}</InfoDd>
				</InfoLi>
				<InfoLi>
					Occupation<InfoDd>{occupation || 'Unknown'}</InfoDd>
				</InfoLi>
			</CharacterInfo>
		</Container>
	);
};

const CharacterInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	filter: drop-shadow(10px 10px 5px rgba(0, 0, 0, 0.3));
`;

const CharacterImgContainer = styled.figure`
	overflow: hidden;
	width: 180px;
	height: 180px;
	border: 5px solid #fff;
	border-radius: 50% 50% 0 0;
	background-color: rgba(255, 255, 255, 0.6);
`;

const CharacterImg = styled.img`
	min-height: 100%;
	object-fit: cover;
`;

const CharacterName = styled.span`
	position: relative;
	top: -30px;
	padding: 10px 20px;
	min-width: 220px;
	border-radius: 30px;
	background-color: #333;
	color: #fff;
	text-align: center;
`;

const CharacterInfo = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	opacity: 0;
	transition: opacity 0.3s;
`;

const InfoLi = styled.li`
	margin: 5px 0;
	padding: 3px 3px 3px 8px;
	border-radius: 20px;
	background-color: #ecdbba;
	font-size: 13px;
`;

const InfoDd = styled.span`
	display: inline-block;
	margin-left: 5px;
	padding: 3px 8px;
	border-radius: 0 20px 20px 0;
	background-color: #c84b31;
	font-size: 13px;
`;

const CharacterSay = styled.div`
	position: relative;
	max-width: 80%;
	padding: 15px 25px;
	border-radius: 10px;
	background-color: rgba(255, 255, 255, 0.5);
	font-size: 14px;

	&::after {
		content: '';
		position: absolute;
		top: -15px;
		left: 50%;
		width: 0;
		height: 0;
		border-right: 10px solid transparent;
		border-bottom: 15px solid rgba(255, 255, 255, 0.5);
		border-left: 10px solid transparent;
		transform: translateX(-50%);
	}
`;

const Container = styled.section`
	position: relative;
	width: 90%;
	margin: 30px 0;

	&:hover > * {
		opacity: 1;
	}

	@media screen and (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
		width: 49%;
	}
	@media screen and (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
		width: 33%;
	}
`;
