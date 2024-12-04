"use client";
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  text-align: center;
  width: 100%;
  margin-top: 3.8rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

export const Divider = styled.div`
  width: 86%;
  height: 1px;
  background-color: #27272A;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const DividerInside = styled(Divider)`
  background-color: #27272A;
  margin: 5px 0;
`;

export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 10px;
  background-color: transparent;
  border: 1px solid #71717A; 
  border-radius: 4px;
  width: 16px; 
  height: 16px; 
  appearance: none; 
  cursor: pointer; 

  &:checked {
    background-color: #022C22; 
    border-color: #10B981; 
  }

  @media (max-width: 768px) {
    margin-right: 8px;
    margin-top: auto;
    width: 20px;
    height: 20px;
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 5px 0;
  color: #D4D4D8;
  text-align: center;
  margin-left: 1rem;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-left: 0.5rem;
  }
`;

export const Id = styled.p`
  font-size: 14px;
  color: #71717A;
  margin: 5px 0;
  text-align: center;
  line-height: 1;
  margin-left: 1rem;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-left: 0.5rem;
  }
`;

export const Date = styled.p`
  font-size: 14px;
  color: #71717A;
  margin: 5px 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Category = styled.p<{ color: string }>`
  font-size: 14px;
  color: ${({ color }) => color};
  margin: 5px 0;
  text-align: center;
  display: flex;
  align-items: center;

  &::before {
    content: '•';
    color: ${({ color }) => color};
    display: inline-block;
    width: 1em;
    margin-right: 0.1em;
    font-size: 1.5em;
  }

  @media (max-width: 768px) {
    font-size: 12px;

    &::before {
      font-size: 1.2em;
    }
  }
`;

export const Spacer = styled.div`
  flex-grow: 1; 

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  align-items: center;
  width: 85%;
  padding: 10px 0;
  gap: 2rem; 

  @media (max-width: 768px) {
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto auto;
    align-items: flex-start;
    width: 100%;
    padding: 8px 0;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-column: 2;

  @media (max-width: 768px) {
    align-items: flex-start;
    width: 100%;
    margin-top: 8px;
  }
`;

export const SpacedCategory = styled(Category)`
  margin-left: 4rem;
  margin-right: 6rem;
  font-weight: bold;
  grid-column: 4;
  justify-self: start; 
  margin-right: 2rem;

  @media (max-width: 768px) {
    margin: 8px 0;
    font-weight: normal;
    grid-column: 2;
  }
`;

export const StyledDate = styled(Date)`
  grid-column: 3;
  justify-self: start; 

  @media (max-width: 768px) {
    grid-column: 2;
    margin-left: 0.5rem;
  }
`;


export const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  align-items: center;
  width: 85%;
  padding: 10px 0;
  font-weight: bold;
  color: #D4D4D8;
  gap: 3rem; 

  @media (max-width: 768px) {
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto auto auto;
    align-items: flex-start;
    width: 100%;
    padding: 8px 0;
  }
`;

export const HeaderColumn = styled.div`
  text-align: center;
  &:first-child {
    text-align: left;
  }


  &:nth-child(2) {
    text-align: left;
  }
  &:nth-child(4) {
    margin-right: 4rem;
    padding-left: 1rem;
  }
  @media (max-width: 768px) {
    &:nth-child(3),
    &:nth-child(4) {
      grid-column: 2;
    }
  }
`;
