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
      position: 'Property Manager',
      description:
         'Emily has over 12 years of property management experience in the Los Angeles and Inland Empire areas. She oversees an extensive portfolio of properties from our Los Angeles office. Emily is experienced in all areas of property management.',
   },
   {
      image: team2,
      fullName: 'Timothy Johnson',
      position: 'Company Co-founder, Licensed Broker',
      description:
         'With over 25 years of property management experience, Timothy supervises the daily operations of So Cal Real Estate. He is involved with every aspect of the property management, including staff supervision, maintenance and planning.',
   },
   {
      image: team3,
      fullName: 'Cassandra Davis',
      position: 'Property Manager, Licensed Broker',
      description:
         'Cassandra has over 7 years of property management experience in the San Diego County area. She oversees an extensive portfolio of properties from our San Diego office. Emily is experienced in all areas of property management.',
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
               <FlexContainer key={idx}>
                  <StyledCard sx={{ borderRadius: 0 }}>
                     <CardMedia
                        component="img"
                        alt={`${item.fullName} photo`}
                        height="250"
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
   align-center: center;
   padding: 1rem 3rem;
   box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
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
