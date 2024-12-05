"use client"
import {
    Container,
    Divider,
    DividerInside,
    CheckBox,
    Title,
    Id,
    Row,
    Column,
    SpacedCategory,
    StyledDate,
    HeaderRow,
    HeaderColumn,
    TableWrapper
} from './styles';

export default function TableComponent() {
    return (
        <Container>
            <Divider />
            <TableWrapper>
                <HeaderRow>
                    <CheckBox />
                    <HeaderColumn>Media</HeaderColumn>
                    <HeaderColumn>Release Date</HeaderColumn>
                    <HeaderColumn>Category</HeaderColumn>
                </HeaderRow>

                <DividerInside />

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
            </TableWrapper>
        </Container>
    );
}
