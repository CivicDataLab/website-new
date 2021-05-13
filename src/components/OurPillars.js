import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import HeroText from '../styles/HeroText';
import OurPillarsStyle from '../styles/OurPillars';

const OurPillars = () => {
  const imageData = useStaticQuery(graphql`
    query {
      dataPillar: file(relativePath: { eq: "data.png" }) {
        childImageSharp {
          fluid(maxHeight: 400, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      technologyPillar: file(relativePath: { eq: "technology.png" }) {
        childImageSharp {
          fluid(maxHeight: 400, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      designPillar: file(relativePath: { eq: "design.png" }) {
        childImageSharp {
          fluid(maxHeight: 400, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      socialPillar: file(relativePath: { eq: "social.png" }) {
        childImageSharp {
          fluid(maxHeight: 400, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  return (
    <OurPillarsStyle>
      <HeroText className={'sectors-heading'}>Our Pillars</HeroText>
      <div className={'pillars-container'}>
        <div className={'image-container'}>
          <h3>Data</h3>
          <Image fluid={imageData.dataPillar.childImageSharp.fluid} />
        </div>
        <div className={'image-container'}>
          <h3>Tech</h3>
          <Image fluid={imageData.technologyPillar.childImageSharp.fluid} />
        </div>
        <div className={'image-container'}>
          <h3>Design</h3>
          <Image fluid={imageData.designPillar.childImageSharp.fluid} />
        </div>
        <div className={'image-container'}>
          <h3>Social Science</h3>
          <Image fluid={imageData.socialPillar.childImageSharp.fluid} />
        </div>
      </div>
    </OurPillarsStyle>
  );
};

export default OurPillars;