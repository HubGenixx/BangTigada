import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    
    <Typography variant="h7" sx={{ fontSize: { lg: '25px', xs: '20px' } }} mt="41px" textAlign="left" marginLeft="20px" pb="40px"><b>Contact us </b>  
    </Typography>
    <br />
    <br />
    <Typography variant="h7" sx={{ fontSize: { lg: '20px', xs: '10px' } }} mt="41px" textAlign="left" marginLeft="20px" pb="40px">LinkedIn : <a href='https://www.linkedin.com/in/aditya-simant/'>Aditya simant</a>  |  <a href='https://www.linkedin.com/in/ritesh-sonawane-794b6a226/'>Ritesh Sonawane</a>    
    </Typography>
    <br />
    <Typography variant="h7" sx={{ fontSize: { lg: '20px', xs: '10px' } }} mt="41px" textAlign="left" marginLeft="20px" pb="40px">Email : adityasimant88@gmail.com riteshsonawne1372@gmail.com   
    </Typography>
    <br />
    <br />
    <Typography variant="h7" sx={{ fontSize: { lg: '18px', xs: '10px' } }} mt="41px" textAlign="left" marginLeft="20px" pb="40px">© 2023 MacroDawn | Made by BangTigada     
    </Typography>
  </Box>
);

export default Footer;
