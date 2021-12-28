import styled from '@emotion/styled';

export const Loading = () => {
	return <Message>잠시만 기다려 주세요.</Message>;
};

const Message = styled.p`
	text-align: center;
	color: #fff;
`;
