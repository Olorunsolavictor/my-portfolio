import { Container } from '@mui/material';
import React from 'react';
import AboutText from './AboutText';
import PictureCard from './PictureCard';

function About() {
	return (
		<Container
			maxWidth="md"
			sx={{ display: 'flex' }}
			className="flex flex-row justify-center h-[100vh]  text-center items-center w-[50%] "
		>
			<AboutText />
			<PictureCard />
		</Container>
	);
}

export default About;
