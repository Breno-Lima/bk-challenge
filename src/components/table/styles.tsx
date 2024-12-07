"use client";
import styled from 'styled-components';

export const ContainerHeader = styled.div`
  display: flex;
  margin-left: 3.75rem;
  justify-content: space-between;
  width: 100%;
`;

export const ContainerDateCategory = styled.div`
  display: flex;
`;

export const TableWrapper = styled.div`
  width: 86%;
  margin: 0 auto; 
  overflow-x: auto; 
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    box-sizing: border-box; 
    padding: 0 1rem;
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
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    position: relative;
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
    justify-content: center;
    align-items: center;
    justify-items: center;
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
    justify-self: start;
    text-align: left;
    align-items: start;
    justify-content: start;
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
    justify-self: start;
    text-align: left;
    align-items: start;
    justify-content: start;
  }
`;

export const Date = styled.p`
  font-size: 14px;
  color: #71717A;
  margin: 5px 0;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 12px;
    justify-self: start;
    text-align: left;
    align-items: start;
    justify-content: start;
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
    text-align: center; 
    margin: 0; 
    margin-top: 0.5rem; 
    
    &::before {
      font-size: 1.2em;
    }
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
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
    justify-items: center;
  }
`;

export const InfoPage = styled.div`
  font-size: 14px;
  margin-right: 1rem;
  color: #71717A;
  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

export const RowsPageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  color: #71717A;
  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

export const RowsPage = styled.span`
  font-size: 14px;
  margin-right: 0.5rem;
`;

export const DropdownSelect = styled.select`
  background-color: transparent; 
  color: #D4D4D8;
  border: 1px solid #27272A;
  border-radius: 6px;
  padding-left: 0.7rem;
  width: 4rem;
  height: 1.75rem;
  font-size: 14px;
  cursor: pointer;
  appearance: none; 
  background-image: url('/arrow-down.svg');
  background-repeat: no-repeat;
  background-position: right 0.8rem center;
  background-size: 0.5rem; 
  background-color: transparent; 
  &:focus {
    outline: none;
    border-color: none;
  }
  &:focus-visible {
    background-color: #000;
    color: #FAFAFA;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    gap: 1rem;
   @media (max-width: 768px) {
    width: 100%;
    height: 2.5rem;
  }
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem; 
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem; 
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PaginationButton = styled.button`
  background-color: #18181B;
  border: 1px solid #27272A;
  color: #D4D4D8;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  margin: 0 0.25rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover:not(:disabled) {
    background-color: rgba(255,255,255,0.1);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const StyledDate = styled(Date)`
  grid-column: 3;
  justify-self: start;
  margin-right: 2rem;
  @media (max-width: 768px) {
    grid-column: 3;
  }
`;

export const SpacedCategory = styled(Category)`
  grid-column: 4;
  justify-self: start;
  text-align: left; 
  font-weight: bold;

  @media (max-width: 768px) {
    margin: 0;
    font-weight: normal;
    grid-column: 4;
    text-align: left;
  }
`;

export const ContainerTest = styled.div`
  display: flex;
  justify-self: start;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
    margin-top: 0.5rem;
  }
`;

export const Pages = styled.span`
  font-size: 14px;
  margin: 0 0.5rem;
  color: #71717A;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  text-align: center;
  width: 100%;
  margin-top: 3.8rem;
  margin-bottom: 5rem;
  @media (max-width: 768px) {
    margin-top: 2rem;
    width: 100%;
    overflow-x: auto;
  }
`;

export const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: 2rem 4fr 1fr 1fr;
  align-items: center;
  width: auto;
  justify-items: start;
  justify-content: start;
  padding: 10px 0;
  font-weight: bold;
  color: #D4D4D8;
  @media (max-width: 768px) {
    grid-template-columns: 0fr 3fr 4fr 2fr;
    align-items: center;
    justify-items: center;
    justify-content: center;
    justify-content: center;
    padding: 8px 0;
    margin-left: 0.5rem;
  }
`;


export const Row = styled.div`
 display: grid;
  grid-template-columns: 2rem 4fr 1fr 1fr;
  align-items: center;
  width: auto;
  justify-items: start;
  justify-content: start;
  padding: 10px 0;
  font-weight: bold;
  color: #D4D4D8;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 4fr 2fr 2fr;
    align-items: center;
    justify-items: center;
    padding: 8px 0;
  }
`;

export const HeaderColumn = styled.div`
  text-align: left;
  &:nth-child(3) {
    text-align: right;
  }
  &:nth-child(4) {
    text-align: right;
  }
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 0.5rem;
    margin-left: 1rem;
  }
`;

export const HeaderColumn2 = styled.div`
  justify-self: end;
  justify-content: start;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
  }
`;
