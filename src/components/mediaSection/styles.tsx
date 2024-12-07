"use client"
import styled from 'styled-components';

interface SidebarOverlayProps {
  isOpen: boolean;
}



interface SidebarContentProps {
  isOpen: boolean;
}



interface DropdownIconProps {
  isOpen: boolean;
}

















export const ClearAll = styled.p`
  color: #71717A;
  font-size: 0.875rem;
  border: 2px solid #27272A;
  width: 5rem;
  height: 2rem;
  border-radius: 8px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const SidebarTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #FAFAFA;
  font-size: 1.4rem;
  margin-bottom: 0; 
`;

export const SidebarParagraph = styled.p`
  color: #71717A;
  font-size: 0.9rem;
  margin-top: -0.7rem; 
`;

export const ContainerFinished = styled.div`
  display: flex;
  justify-content: end; 
  align-items: center;
  gap: 1rem;
`;

export const SidebarOverlay = styled.div<SidebarOverlayProps>`
  position: fixed;
  top: 0;
  right: 0;
  width: ${props => props.isOpen ? '30rem' : '0'};
  height: 100%;
  background-color: #09090B;
  transition: width 0.3s ease-in-out;
  box-shadow: -4px 0 15px rgba(0,0,0,0.2);
  z-index: 1100;
  overflow-y: auto;
  overflow-x: hidden ;

  @media (max-width: 480px) {
    width: ${props => props.isOpen ? '100%' : '0'};
  }
`;
export const SidebarContent = styled.div<SidebarContentProps>`
  padding: 2rem;
  color: #FAFAFA;
  opacity: ${props => props.isOpen ? 1 : 0};
  transition: opacity 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
`;

export const SidebarLabel = styled.label`
  font-size: 1rem;
  margin-bottom: 0.2rem;
  color: #A1A1AA;
`;

export const SidebarInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  height: 2.56rem;
  border: 1px solid #3F3F46;
  border-radius: 8px;
  background-color: #18181b66;
  color: #FAFAFA;
  box-sizing: border-box; 

  &:focus {
    outline: none;
    border-color: #10B981;
  }

  &::placeholder {
    color: #71717A;
  }
`;

export const SidebarSubmitButton = styled.button<{ disabled?: boolean }>`
  padding: 0.5rem 1rem;
  background-color: #2DD4BF;
  color: #022C22;
  border: none;
  width: 8.75rem;
  height: 2rem;
  border-radius: 6px;
  cursor: pointer;
  display: flex; 
  align-items: center; 
  justify-content: center;
  &:hover {
    background-color: #177b5a;
  }

  &:disabled {
    background-color: #6B7280;
    cursor: not-allowed;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #FAFAFA;
  font-size: 1.5rem;
  cursor: pointer;
`;

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
      color: #71717A;
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
  width: 1.5rem;
  height: 1.5rem;
`;

export const DropdownContainer = styled.div`
  position: relative;
  width: 6.75rem;
  
  @media (max-width: 480px) {
    width: calc(100% - 2rem); 
  }
`;

export const CustomDropdown = styled.div<{ isOpen: boolean }>`
  position: relative;
  border: 1px solid #3F3F46;
  width: 100%;
  border-radius: 8px;
`;

export const DropdownHeader = styled.div<{ isOpen: boolean }>`
  padding: 0.5rem 0.8rem;
  border: 1px dashed #3F3F46;
  border-radius: 48px;
  background-color: transparent;
  color: #FAFAFA;
  font-size: 0.875rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  gap: 1rem; 

  transition: border 0.3s ease-in-out;

  &:hover {
    border-color: #10B981;
  }
`;

export const DropdownHeader2 = styled.div<{ isOpen: boolean }>`
  padding: 0rem 0.8rem;
  border: 1px solid #3F3F46;
  border-radius: 8px;
  height: 2.56rem;
  background-color: #18181b66;
  color: #FAFAFA;
  font-size: 0.875rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  gap: 1rem; 

  transition: border 0.3s ease-in-out;

  &:hover {
    border-color: #10B981;
  }
`;

export const DropdownText = styled.span``;
export const DropdownIcon = styled.img<DropdownIconProps>`
  width: 1rem;
  height: 1rem;
  transition: transform 0.3s ease-in-out;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

export const DropdownIcon2 = styled.img<DropdownIconProps>`
  width: 1rem;
  height: 1rem;
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
  text-align: left;
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
  color: #71717A;

  &:focus {
    outline: none;
    border-color: #3F3F46;
  }

  &::placeholder {
    color: #71717A;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const ButtonUploadMedia = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0rem 1rem;
  height: 2rem;
  background-color: #10B981;
  color: #022C22;
  font-weight: 500;
  border: none;
  border-radius: 2rem;
  cursor: pointer;

  &:hover {
    background-color: #177b5a;
    transition: background-color 0.5s;
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

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 100%;
`;

export const SidebarBackdrop = styled.div<SidebarOverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5); 
  transition: opacity 0.3s ease-in-out;
  opacity: ${props => props.isOpen ? 1 : 0};
  pointer-events: ${props => props.isOpen ? 'auto' : 'none'};
  z-index: 1099;
`;
