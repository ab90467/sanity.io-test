import React from 'react';
import styled from 'styled-components';

const colorLookup = {
  Dongeri: '#185dc1',
  Punch: '#ff4d5b',
  Prince: '#64006B',
  Kermit: '#12D499',
  '#185dc1': '#185dc1',
  '#ff4d5b': '#ff4d5b',
  '#64006B': '#64006B',
  '#12D499': '#12D499',
};

const QuoteWrapper = styled.div`
    display: flex;
    flex-direction: column;  
    font-weight: 800;
    color: ${({ quoteColor}) =>  quoteColor};
    padding: 40px 0;
    margin: auto;
    width: 90%;
    max-width: 500px;
  `;
const QuoteTag = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 4.5rem;
    line-height: 0;
  `;
const QuoteTitle = styled.div`
    font-size: 2rem;
    line-height: 1;
    margin: 10px 0 15px 0;
    
  `;
const QuotedBy = styled.div`
    font-size: 18px;
    font-weight: normal;
    margin: 0;
    color: black;
  `;


const Quote = ({
  quote,
  quotedBy,
  color = undefined,
}) => {
  const quoteColor = colorLookup[color] || 'black';
  return (
    <QuoteWrapper quoteColor={quoteColor}>
      <QuoteTag>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill={quoteColor}
            d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
        </svg>
      </QuoteTag>
      <QuoteTitle>{quote}</QuoteTitle>
      {quotedBy && (<QuotedBy>{quotedBy}</QuotedBy>)}
    </QuoteWrapper>
  );
};

export default Quote;
