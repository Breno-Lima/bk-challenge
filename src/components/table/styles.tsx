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
    width: 100%;
    overflow-x: auto;
  }
`;

export const TableWrapper = styled.div`
  width: 86%;
  margin: 0 auto; 
  overflow-x: auto; 
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 0; 
    box-sizing: border-box; 
  }
`;


export const Divider = styled.div`
  width: 86%;
  height: 2px;
  background-color: #27272A;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const DividerInside = styled(Divider)`
  background-color: #27272A;
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;


export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
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
  margin: 0px 0;
  color: #D4D4D8;
  text-align: center;

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
  padding-right: 0.5rem;

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

export const Row = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  align-items: center;
  width: 85%;
  padding: 0.75rem 0;
  gap: 1.5rem; 

  @media (max-width: 768px) {
    grid-template-columns: auto 1fr auto auto;
    align-items: center;
    width: 100%;
    padding: 8px 0;
    min-width: 600px; 
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
    margin: 0;
    font-weight: normal;
    grid-column: 4;
  }
`;

export const StyledDate = styled(Date)`
  grid-column: 3;
  justify-self: start; 
  @media (max-width: 768px) {
    grid-column: 3;
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
    grid-template-columns: auto 1fr auto auto;
    align-items: center;
    width: 100%;
    min-width: 600px; 
    padding: 8px 0;
  }
`;

export const HeaderColumn = styled.div`
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
    width: 100%;
    display: flex;
    align-items: center;
  }
`;

export const ContainerPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 86%;
  margin-top: 1rem;
  color: #D4D4D8;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const InfoPage = styled.div`
  font-size: 14px;
  margin-right: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

export const RowsPageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

export const RowsPage = styled.span`
  font-size: 14px;
  margin-right: 0.5rem;
`;

export const DropdownSelect = styled.select`
  background-color: #27272A;
  color: #D4D4D8;
  border: 1px solid #71717A;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  font-size: 14px;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #10B981;
  }
`;
export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem; 

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem; 
  }
`;
export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PaginationButton = styled.button`
  background-color: transparent;
  border: 1px solid #71717A;
  color: #D4D4D8;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.5rem;
  margin: 0 0.25rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover:not(:disabled) {
    background-color: rgba(255,255,255,0.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Pages = styled.span`
  font-size: 14px;
  margin: 0 0.5rem;
`;
