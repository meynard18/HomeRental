import React from 'react';
import { theme } from '../../CustomTheme';
import styled from '@emotion/styled';
import team1 from '../../images/member1.jpg';
import team2 from '../../images/member2.jpg';
import team3 from '../../images/member3.jpg';
import { Box, Typography, CardMedia, Card } from '@mui/material';

const teamMembers = [
   {
      image: team1,
      fullName: 'Emily Jacobs',
      position: 'License Real Estate Broker',
      description:
         'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat in dignissimos, magnam adipisci earum voluptates impedit molestias placeat ipsum eligendi!',
   },
   {
      image: team2,
      fullName: 'Timothy Johnson',
      position: 'License Real Estate Broker',
      description:
         'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat in dignissimos, magnam adipisci earum voluptates impedit molestias placeat ipsum eligendi!',
   },
   {
      image: team3,
      fullName: 'Cassandra Davis',
      position: 'License Real Estate Broker',
      description:
         'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat in dignissimos, magnam adipisci earum voluptates impedit molestias placeat ipsum eligendi!',
   },
];

const Team = () => {
   return (
      <>
         <StyledBox maxWidth="xxl" sx={{ m: 'auto' }}>
            <HeaderBox>
               <FlexHeader>
                  <Line sx={{ mr: 2 }} />
                  <Typography
                     variant="h4"
                     component="h4"
                     sx={{ fontWeight: 500, fontSize: 24 }}
                  >
                     Dedicated Professionals
                  </Typography>
               </FlexHeader>
               <Typography
                  variant="h3"
                  component="h3"
                  sx={{ fontWeight: 500, fontSize: 40, mt: 1 }}
               >
                  Meet Our Team
               </Typography>
            </HeaderBox>
            {teamMembers.map((item, idx) => (
               <FlexContainer>
                  <StyledCard sx={{ borderRadius: 0 }} key={idx}>
                     <CardMedia
                        component="img"
                        alt="green iguana"
                        height="300"
                        image={item.image}
                     />
                  </StyledCard>
                  <MemberInformation>
                     <TypographyName>{item.fullName}</TypographyName>
                     <TypographyPosition>{item.position}</TypographyPosition>
                     <TypographyDescription>
                        {item.description}
                     </TypographyDescription>
                  </MemberInformation>
               </FlexContainer>
            ))}
         </StyledBox>
      </>
   );
};

export default Team;

const StyledBox = styled(Box)`
   background-color: ${theme.palette.bg.main};
   padding-bottom: 5rem;
`;
const HeaderBox = styled(Box)`
   margin: auto;
   padding-top: 5.5rem;
   padding-left: 2.5rem;
   width: 90%;
   @media (max-width: 360px) {
      margin: 0 -0.5rem;
   }
`;

const FlexHeader = styled(Box)`
   display: flex;
   align-items: center;
`;
const Line = styled(Box)`
   width: 2.75rem;
   height: 0.25rem;
   background-color: black;
`;
const StyledCard = styled(Card)`
   width: 35rem;
   @media (max-width: 1024px) {
      width: 100%;
      min-width: 20rem;
      height: auto;
   }
   @media (max-width: 768px) {
      max-width: 20rem;
   }
   @media (max-width: 480px) {
      min-width: 2rem;
   }
`;
const FlexContainer = styled(Box)`
   display: flex;
   width: 85%;
   margin: 2.5rem auto auto;
   gap: 2.5rem;
   @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
      padding: 1rem;
   }
   @media (max-width: 480px) {
      width: 100%;
      margin: 2.5rem auto auto;
      gap: 0;
   }
`;
const MemberInformation = styled(Box)`
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding: 1rem;
   @media (max-width: 768px) {
      align-items: center;
      width: 100%;
      text-align: center;
   }
`;
const TypographyName = styled(Typography)`
   font-size: 1.65rem;
   font-weight: 500;
   margin: 0.25rem 0;
`;
const TypographyPosition = styled(Typography)`
   font-size: 1rem;
   font-weight: 600;
   margin: 0.25rem 0;
   color: ${theme.palette.grey[200]};
`;
const TypographyDescription = styled(Typography)`
   font-size: 1rem;
   margin: 0.25rem 0;
`;
