"use client"
import { HeaderContainer, Logo, UserInfo, UserName, mockUser, UserEmail, UserPhoto, ContainerInside } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <Logo src="/logo-bk.svg" alt="Logo" />
      <UserInfo>
        <ContainerInside>
          <UserName>{mockUser.name}</UserName>
          <UserEmail>{mockUser.email}</UserEmail>
        </ContainerInside>
        <UserPhoto src={mockUser.photoUrl} alt="Foto do usuário" />
      </UserInfo>
    </HeaderContainer>
  );
}
