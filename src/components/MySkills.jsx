import {
	CardMedia,
	Grid,
	Card,
	CardContent,
	Typography,
	Container,
} from '@mui/material';
import { Fade } from 'react-awesome-reveal';
import React from 'react';

function MySkills({ skills }) {
	return (
		<Container className="text-center  ">
			<Grid container spacing={4}>
				{skills.map(skill => (
					<Grid item key={skill.id} sx={12} md={4} lg={3}>
						<Fade>
							<Card
								className="shadow-md hover:shadow-xl font-mont"
								sx={{ maxWidth: 200 }}
							>
								<CardMedia
									component="img"
									// height="70"
									image={skill.img}
									alt={skill.name}
									sx={{
										width: '200px',
										height: 'auto',
										backgroundColor: 'white',
									}}
								></CardMedia>
								<CardContent>
									<Typography>{skill.name}</Typography>
								</CardContent>
							</Card>
						</Fade>

						{/* <Card
							className="flex-1"
							hoverable
							title={skill.name}
							style={{
								width: 'auto',
								height: 'auto',
								transition: 'all 0.5s',
							}}
							cover={<img alt="example" className="" src={skill.img} />}
						></Card> */}
					</Grid>
				))}
			</Grid>
		</Container>
	);
}

export default MySkills;
