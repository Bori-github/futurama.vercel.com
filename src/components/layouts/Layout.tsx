import React from 'react';
import styled from '@emotion/styled';
import { Navigation } from '.';
import { Footer } from './Footer';

export const Layout: React.FC = ({ children }) => {
	return (
		<>
			<Navigation />
			<ContentsContainer>{children}</ContentsContainer>
			<Footer />
		</>
	);
};

const ContentsContainer = styled.main``;
