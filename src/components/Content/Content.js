import React from 'react'
import styled from 'styled-components';

export default function Content(props) {
    const { italic, apod } = props;

    return (
        <StyledInfo italic={italic}>
            <div>
                <img src={apod.hdurl} alt='nasa' />
            </div>
            <div>
                <h2>{apod.title}</h2>
            </div>
            <div>
                <p><strong>Explanation:</strong> {apod.explanation}</p>
            </div>
        </StyledInfo>
    )
}

const StyledInfo = styled.div`
img {
max-width: 75%;
    &:hover {
    transform: scale(1.1);
    transition: transform 0.5s ease-in-out;
  }
  transition: transform 0.5s ease-in-out;
}
h2 {
   &:hover {
    transform: scale(1.1);
    transition: transform 0.5s ease-in-out;
    color: ${(pr) => pr.theme.secondaryColor};
  }
  transition: transform 0.5s ease-in-out; 
  padding-top: 2em;
}
p {
font-style: ${(pr) => (pr.italic ? 'italic' : 'normal')};
padding-bottom: 2em;
}
`;

