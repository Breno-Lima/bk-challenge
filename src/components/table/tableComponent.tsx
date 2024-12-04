"use client"
import { Container, Divider, DividerInside, CheckBox, Title, Id, Date, Category, Row, Column, SpacedCategory, StyledDate } from './styles';
import styled from 'styled-components';

export default function TableComponent() {
  return (
    <Container>
      <Divider />
      <Row>
        <CheckBox />
        <Column>
          <Title>God of War Ragnarok</Title>
          <Id>faba4daa-f7ef-483f-82ab-20f05d3d0de1</Id>
        </Column>
        <StyledDate>24/12/2024</StyledDate>
        <SpacedCategory color='#0447ff'>Videogame</SpacedCategory>
      </Row>
      <DividerInside />
    </Container>
  );
}
