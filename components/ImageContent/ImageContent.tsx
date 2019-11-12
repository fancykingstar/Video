import React from 'react';
import { RightContentRow, ImageContainer, RowTextContent, TalentLink } from './Styled';

interface IProps {
    src: string;
    text: any;
}

export const ImageContent = ({ src, text }: IProps) => {
    return (
        <RightContentRow>
	        <ImageContainer>
	            <img src={src} alt='image' />
	        </ImageContainer>
	        <RowTextContent>
	            {text}
	        </RowTextContent>
	    </RightContentRow>
    )
}
