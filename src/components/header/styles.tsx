"use client"
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000000;
  padding: 2.5rem 7.5rem;

  @media (max-width: 768px) {
    padding: 1.5rem 2rem;
  }
`;

export const Logo = styled.img`
  width: 37px;
  height: 24px;

  @media (max-width: 768px) {
    width: 30px;
    height: 20px;
  }
`;

export const ContainerInside = styled.div``;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  text-align: right;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;
  }
`;

export const UserName = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #FAFAFA;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const UserEmail = styled.p`
  font-size: 11px;
  color: #A1A1AA;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const UserPhoto = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

export const mockUser = {
  name: 'AbraaoDev',
  email: 'abraaodev@gmail.com',
  photoUrl: '/user-avatar.svg', 
};
