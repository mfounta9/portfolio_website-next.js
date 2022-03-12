import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
       Welcome To  <br />
       My personal Portfolio
     </SectionTitle>
     <SectionText>
       I am a recent graduate of both the Front End and the Full Stack Web
       and Mobile Development Bootcamps from Nucamp.
     </SectionText>
     

   </LeftSection>

 </Section>
);

export default Hero;