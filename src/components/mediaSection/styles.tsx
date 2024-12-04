"use client"
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0rem 6.5rem;

  @media (max-width: 768px) {
    padding: 0rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 0rem 1rem;
  }
`;


export const Title = styled.h1`
  font-size: 2rem;
  color: #FAFAFA;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const InputWithIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  input {
    padding-left: 2.5rem;
    color: #FAFAFA;
    
    &:focus {
      outline: none;
      border-color: #3F3F46; 
    }

    &::placeholder {
      color: #FAFAFA;
      opacity: 0.7;
    }
  }

  img {
    position: absolute;
    left: 0.75rem;
    width: 1rem;
    height: 1rem;
  }
`;

export const StyledImage = styled.img`
  width: 1rem;
  height: 1rem;
  position: absolute;
  left: 0.75rem;
`;

export const StyledButtonImage = styled.img`
  width: 1rem;
  height: 1rem;
`;

export const DropdownContainer = styled.div`
  position: relative;
  width: 6.75rem;

  @media (max-width: 480px) {
    width: calc(100% - 2rem); 
  
  }
`;

export const DropdownHeader = styled.div`
  padding: 0.5rem 0.8rem;
  border: 1px dashed #3F3F46;
  border-radius: 48px;
  background-color: #000;
  color: #FAFAFA;
  font-size: 0.875rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem; 

  @media (max-width: 480px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const DropdownIcon = styled.img`
  width: 1rem;
  height: 1rem;
  flex-shrink: 0; 
`;


export const DropdownList = styled.ul`
  position: absolute;
  top: 110%;
  left: 0;
  right: 0;
  background-color: #000;
  border: 1px dashed #3F3F46;
  border-radius: 12px;
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 0 0;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000;
`;

export const DropdownItem = styled.li`
  padding: 0.5rem 0.8rem;
  color: #FAFAFA;
  cursor: pointer;
  text-align: center;
  font-size: 0.875rem;

  &:hover {
    background-color: #1f1f1f;
  }
`;

export const SearchMedia = styled.input`
  padding: 0.5rem;
  border: 1px dashed #3F3F46;
  border-radius: 48px;
  width: 23rem;
  background-color: transparent;
  color: #FAFAFA;

  &:focus {
    outline: none;
    border-color: #3F3F46;
  }

  &::placeholder {
    color: #FAFAFA;
    opacity: 0.7; 
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const ButtonUploadMedia = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #10B981;
  color: #022C22;
  font-weight: 500;
  border: none;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background-color: #177b5a;
  }

  img {
    width: 1rem;
    height: 1rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;

export const InsideContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const InsideInContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;
