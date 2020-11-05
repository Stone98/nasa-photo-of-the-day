import React from "react";
import styled from "styled-components";

export default function MainHeader(props) {
    const { italic, apod } = props;

    return (
        <StyledHeader italic={italic}>
            <div>
                <h1>Astronomy Picture of the Day</h1>
            </div>
            <div>
                <p>{apod.date}</p>
            </div>
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
h1 {
    &:hover {
    transform: scale(1.1);
    transition: transform 0.5s ease-in-out;
    color: ${(pr) => pr.theme.primaryColor};
  }
  transition: transform 0.5s ease-in-out;
}
p {
    &:hover {
    transform: scale(1.1);
    transition: transform 0.5s ease-in-out;
    color: ${(pr) => pr.theme.tertiaryColor};
  }
  transition: transform 0.5s ease-in-out; 
font-style: ${(pr) => (pr.italic ? 'italic' : 'normal')};
padding-bottom: 2em;
}
`;