// src/components/table/tableComponent.tsx
"use client";
import React from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
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
  Column,
  Id,
  Title,
  DividerInside,
  Divider,
  TableWrapper,
  Container,
  RightContainer,
  ContainerTest,
  Row
} from './styles';
import { fetchMedia, MediaResponse } from '@/app/api/media';
import { parseAsInteger, useQueryState } from 'nuqs';
interface TableComponentProps {
    search: string;
  }
  
export default function TableComponent({ search }: TableComponentProps) {
    const [rowsPerPage, setRowsPerPage] = useQueryState('rowsPerPage', parseAsInteger.withDefault(10));
  const [currentPage, setCurrentPage] = useQueryState('currentPage', parseAsInteger.withDefault(1));
  const [category] = useQueryState<string>('category', { defaultValue: '', parse: (value) => value });

  const {
    data: mediasData,
    isLoading,
    isError,
    error,
  } = useQuery<MediaResponse[], Error>({
    queryKey: ['medias', search, category],
    queryFn: () => fetchMedia(search),
    staleTime: 5000,
  });

  const filteredData = mediasData?.filter(media =>
    (category ? media.category === category : true)
  ) || [];

  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / rowsPerPage);

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handleFirstPage = () => setCurrentPage(1);
  const handlePreviousPage = () => setCurrentPage(prev => Math.max(1, prev - 1));
  const handleNextPage = () => setCurrentPage(prev => Math.min(totalPages, prev + 1));
  const handleLastPage = () => setCurrentPage(totalPages);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'video_game':
        return '#0EA5E9'; 
      case 'literary_work':
        return '#A855F7'; 
      case 'movie':
        return '#EC4899'; 
      case 'video':
        return '#F97316'; 
      default:
        return '#FFFFFF'; 
    }
  };

  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

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
        {isLoading ? (
          <Row>
            <CheckBox disabled />
            <Column>
              <Title>Loading...</Title>
              <Id>N/A</Id>
            </Column>
            <StyledDate>N/A</StyledDate>
            <ContainerTest>
              <SpacedCategory color='#0447ff'>Loading</SpacedCategory>
            </ContainerTest>
          </Row>
        ) : isError ? (
          <Row>
            <CheckBox disabled />
            <Column>
              <Title>Error Loading Media</Title>
              <Id>{error?.message}</Id>
            </Column>
            <StyledDate>N/A</StyledDate>
            <ContainerTest>
              <SpacedCategory color='#ff0000'>Error</SpacedCategory>
            </ContainerTest>
          </Row>
        ) : paginatedData && paginatedData.length > 0 ? (
          paginatedData.map(media => (
            <React.Fragment key={media.id}>
              <Row>
                <CheckBox />
                <Column>
                  <Title>{media.title?.default[0]}</Title>
                  <Id>{media.id}</Id>
                </Column>
                <StyledDate>
                  {media.releaseDate
                    ? new Date(media.releaseDate).toLocaleDateString()
                    : 'N/A'}
                </StyledDate>
                <ContainerTest>
                  <SpacedCategory color={getCategoryColor(media.category)}>{media.category}</SpacedCategory>
                </ContainerTest>
              </Row>
              <DividerInside />
            </React.Fragment>
          ))
        ) : (
          <Row>
            <CheckBox disabled />
            <Column>
              <Title>No media found.</Title>
              <Id>N/A</Id>
            </Column>
            <StyledDate>N/A</StyledDate>
            <ContainerTest>
              <SpacedCategory color='#0447ff'>N/A</SpacedCategory>
            </ContainerTest>
          </Row>
        )}
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
