"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import {
    ContainerPage,
    InfoPage,
    RowsPageContainer,
    RowsPage,
    DropdownSelect,
    PaginationContainer,
    PaginationButton,
    Pages,
    CheckBox,
    HeaderColumn,
    HeaderRow,
    StyledDate,
    SpacedCategory,
    Row,
    Column,
    Id,
    Title,
    DividerInside,
    Divider,
    TableWrapper,
    Container,
    RightContainer
} from './styles';

export default function TableComponent() {
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 11;
    const totalItems = 228;


    const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setRowsPerPage(Number(e.target.value));
        setCurrentPage(1);
    };

    const handleFirstPage = () => setCurrentPage(1);
    const handlePreviousPage = () => setCurrentPage(Math.max(1, currentPage - 1));
    const handleNextPage = () => setCurrentPage(Math.min(totalPages, currentPage + 1));
    const handleLastPage = () => setCurrentPage(totalPages);

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

            <ContainerPage>
                <InfoPage>Showing {Math.min(rowsPerPage, totalItems)} of {totalItems} medias</InfoPage>

                <RightContainer>
                    <RowsPageContainer>
                        <RowsPage>Rows per Page</RowsPage>
                        <DropdownSelect
                            value={rowsPerPage}
                            onChange={handleRowsPerPageChange}
                        >
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={30}>30</option>
                            <option value={50}>50</option>
                        </DropdownSelect>
                    </RowsPageContainer>

                    <PaginationContainer>
                        <Pages>Page {currentPage} of {totalPages}</Pages>
                        <PaginationButton
                            onClick={handleFirstPage}
                            disabled={currentPage === 1}
                        >
                            <ChevronsLeft size={16} />
                        </PaginationButton>
                        <PaginationButton
                            onClick={handlePreviousPage}
                            disabled={currentPage === 1}
                        >
                            <ChevronLeft size={16} />
                        </PaginationButton>


                        <PaginationButton
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                        >
                            <ChevronRight size={16} />
                        </PaginationButton>
                        <PaginationButton
                            onClick={handleLastPage}
                            disabled={currentPage === totalPages}
                        >
                            <ChevronsRight size={16} />
                        </PaginationButton>
                    </PaginationContainer>
                </RightContainer>
            </ContainerPage>
        </Container>
    );
}
