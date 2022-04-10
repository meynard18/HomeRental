import React from 'react';
import { theme } from '../../CustomTheme';
import styled from '@emotion/styled';
import image from '../../images/testimonials.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import reviewer1 from '../../images/review1.jpg';
import reviewer2 from '../../images/review2.jpg';
import reviewer3 from '../../images/review3.jpg';
import { Box, Typography } from '@mui/material';
import { Icon } from '@iconify/react';

const items = [
   {
      image: reviewer1,
      statement:
         'The best real estate company I have ever dealt with. Very professional, experienced and helpful agents and brokers. Highly recommend.',
      fullName: 'Mike Williams',
      occupation: 'Business Owner',
   },
   {
      image: reviewer2,
      statement:
         '(RN) was more than helpful in finding us an apartment in (CN). He was extremely honest, upfront, and was able to find us a great apartment that fit right in our price range!',

      fullName: 'Shiela Nguyen',
      occupation: 'Marketing Manager',
   },
   {
      image: reviewer3,
      statement:
         'Great environment, professional and nice people, clean and beautiful office set up. They care about their clients and train their agents well',

      fullName: 'DeShawn Garland',
      occupation: 'High School Teacher / Coach',
   },
];

const Testimonials = () => {
   var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      fade: true,
   };
   return (
      <>
         <StyledBox maxWidth="xxl" sx={{ m: 'auto' }}>
            <Typography
               variant="h2"
               component="h2"
               align="center"
               sx={{ pt: 8, color: 'white' }}
            >
               Client Testimonials
            </Typography>
            <StyledContainer>
               <Slider {...settings}>
                  {items.map((item, idx) => (
                     <TestimonialBox>
                        <ImageBox>
                           <ImageContainer
                              src={item.image}
                              alt="Mr. headshot"
                           />
                        </ImageBox>

                        <Box>
                           <Icon
                              icon="ci:double-quotes-l"
                              style={{
                                 fontSize: 40,
                                 color: 'white',
                              }}
                           />
                           <Typography
                              variant="h6"
                              align="center"
                              component="div"
                              sx={{
                                 fontSize: 18,
                                 color: 'white',
                              }}
                           >
                              {item.statement}
                           </Typography>
                           <Box sx={{ mt: 2 }}>
                              <Typography
                                 variant="body1"
                                 component="div"
                                 align="center"
                                 fontWeight={500}
                                 color="#5C5A56"
                              >
                                 {item.fullName}
                              </Typography>
                              <Typography
                                 align="center"
                                 variant="body2"
                                 component="div"
                                 color="#5C5A56"
                              >
                                 {item.occupation}
                              </Typography>
                           </Box>
                        </Box>
                     </TestimonialBox>
                  ))}
               </Slider>
            </StyledContainer>
         </StyledBox>
      </>
   );
};

export default Testimonials;

const StyledBox = styled(Box)`
   background-image: url(${image});
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;
   position: relative;
   z-index: 10;
   display: flex;
   flex-direction: column;
   margin: auto;
   justify-content: center;
   &::before {
      content: '';
      position: absolute;
      background-color: rgba(98, 95, 87, 0.9);
      z-index: -1;
      width: 100%;
      height: 100%;
   }
`;

const TestimonialBox = styled.div`
   background-color: ${theme.palette.bg.brown};
   padding: 1.5rem 1rem;
   height: 23.5rem;
   margin: auto;

   @media (max-width: 768px) {
      height: max-content;
      padding: 1rem 0.5rem;
   }
   @media (max-width: 480px) {
      height: max-content;
      padding: 0.5rem;
   }
`;

const StyledContainer = styled(Box)`
   width: 60%;
   margin: 4rem auto;
   padding: 1rem;

   @media (max-width: 1200px) {
      width: 70%;
   }
   @media (max-width: 1024px) {
      width: 80%;
   }
   @media (max-width: 768px) {
      width: 90%;
      margin: 2rem auto;
      padding: 0;
   }
   @media (max-width: 480px) {
      width: 85%;
   }
   @media (max-width: 360px) {
      width: 80%;
   }
`;

const ImageBox = styled.div`
   display: flex;
   justify-content: center;
`;

const ImageContainer = styled.img`
   border-radius: 50%;
   object-fit: cover;
   width: 7.5rem;
   height: 7.5rem;
`;
