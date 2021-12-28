import styled from '@emotion/styled';

export const Error = () => {
	return <Message>에러가 발생했습니다.</Message>;
};

const Message = styled.p`
	text-align: center;
	color: #fff;
`;
