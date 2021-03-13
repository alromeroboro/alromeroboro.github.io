import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import { FeatureImageWrapper } from '../elements';

export const FeaturedImage = ({ fixed }) => {
    return (
        <FeatureImageWrapper>
            <StaticImage 
                src="../images/selfie-zoom.png" 
                alt="Selfie" 
                layout="fullWidth"
                placeholder="tracedSVG"
                style={{
                    position:'absolute',
                    left: 0,
                    top:0,
                    width:"100%",
                    height:"100%"

                }}
            />
        </FeatureImageWrapper>
    )
}
