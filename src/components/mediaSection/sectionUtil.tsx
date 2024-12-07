// components/media/MediaComponent.tsx
"use client";
import React, { useState, useRef, useEffect } from "react";
import styled from 'styled-components';
import { useMutation } from '@tanstack/react-query';
import { createMedia, LiteraryWorkType, type MediaData, type MediaResponse } from "@/app/api/media";
import { useQueryState } from 'nuqs';

interface SidebarOverlayProps {
  isOpen: boolean;
}

const UploadIcon = styled.img`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
`;

const ClearAll = styled.p`
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

const SidebarTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #FAFAFA;
  font-size: 1.4rem;
  margin-bottom: 0; 
`;

const SidebarParagraph = styled.p`
  color: #71717A;
  font-size: 0.9rem;
  margin-top: -0.7rem; 
`;

const ContainerFinished = styled.div`
  display: flex;
  justify-content: end; 
  align-items: center;
  gap: 1rem;
`;

const SidebarOverlay = styled.div<SidebarOverlayProps>`
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

interface SidebarContentProps {
  isOpen: boolean;
}

const SidebarContent = styled.div<SidebarContentProps>`
  padding: 2rem;
  color: #FAFAFA;
  opacity: ${props => props.isOpen ? 1 : 0};
  transition: opacity 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
`;

const SidebarLabel = styled.label`
  font-size: 1rem;
  margin-bottom: 0.2rem;
  color: #A1A1AA;
`;

const SidebarInput = styled.input`
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

const SidebarSubmitButton = styled.button<{ disabled?: boolean }>`
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

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #FAFAFA;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Container = styled.div`
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

const Title = styled.h1`
  font-size: 2rem;
  color: #FAFAFA;
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const InputWithIcon = styled.div`
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

const StyledImage = styled.img`
  width: 1rem;
  height: 1rem;
  position: absolute;
  left: 0.75rem;
`;

const StyledButtonImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const DropdownContainer = styled.div`
  position: relative;
  width: 6.75rem;
  @media (max-width: 480px) {
    width: calc(100% - 2rem); 
  }
`;

const CustomDropdown = styled.div<{ isOpen: boolean }>`
  position: relative;
  border: 1px solid #3F3F46;
  width: 100%;
  border-radius: 8px;
`;

const DropdownHeader = styled.div<{ isOpen: boolean }>`
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

const DropdownHeader2 = styled.div<{ isOpen: boolean }>`
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

const DropdownText = styled.span``;

interface DropdownIconProps {
  isOpen: boolean;
}

const DropdownIcon = styled.img<DropdownIconProps>`
  width: 1rem;
  height: 1rem;
  transition: transform 0.3s ease-in-out;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

const DropdownIcon2 = styled.img<DropdownIconProps>`
  width: 1rem;
  height: 1rem;
`;

const DropdownList = styled.ul`
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

const DropdownItem = styled.li`
  padding: 0.5rem 0.8rem;
  color: #FAFAFA;
  cursor: pointer;
  text-align: left;
  font-size: 0.875rem;
  &:hover {
    background-color: #1f1f1f;
  }
`;

const SearchMedia = styled.input`
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

const literaryWorkTypes = Object.values(LiteraryWorkType);

export default function MediaComponent() {
  const [search, setSearch] = useQueryState<string>('search', { defaultValue: '', parse: (value) => value });
  const [category, setCategory] = useQueryState<string>('category', { defaultValue: '', parse: (value) => value });
  
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [videoLink, setVideoLink] = useState<string>("");
  const [generalTitle, setGeneralTitle] = useState<string>("");
  const [movieDuration, setMovieDuration] = useState<string>("");
  const [movieReleaseDate, setMovieReleaseDate] = useState<string>("");
  const [chapterNumber, setChapterNumber] = useState<number | "">("");
  const [chapterPages, setChapterPages] = useState<number | "">("");
  const [chapterReleaseDate, setChapterReleaseDate] = useState<string>("");
  const [chapterSourceId, setChapterSourceId] = useState<string>("");
  const [literaryWorkCurrentChapters, setLiteraryWorkCurrentChapters] = useState<number | "">("");
  const [literaryWorkOngoing, setLiteraryWorkOngoing] = useState<boolean>(true);
  const [literaryWorkSynopsis, setLiteraryWorkSynopsis] = useState<string>("");
  const [literaryWorkType, setLiteraryWorkType] = useState<string>("");
  const [literaryWorkTags, setLiteraryWorkTags] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isCustomDropdownOpen, setIsCustomDropdownOpen] = useState<boolean>(false);
  const categories = [
    { value: "chapter", label: "Chapter" },
    { value: "literary_work", label: "Literary Work" },
    { value: "movie", label: "Movie" },
    { value: "video", label: "Video" },
    { value: "video_game", label: "Video Game" },
  ];

  const handleCategorySelect = (value: string) => {
    setCategory(value);
    setIsDropdownOpen(false);
  };

  const handleSidebarCategorySelect = (value: string) => {
    setCategory(value);
    setIsCustomDropdownOpen(false);
    resetFields();
  };

  const toggleCustomDropdown = () => {
    setIsCustomDropdownOpen(prev => !prev);
  };

  const handleUploadClick = () => {
    setIsSidebarOpen(true);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  const resetFields = () => {
    setGeneralTitle("");
    setVideoLink("");
    setMovieDuration("");
    setMovieReleaseDate("");
    setChapterNumber("");
    setChapterPages("");
    setChapterReleaseDate("");
    setChapterSourceId("");
    setLiteraryWorkCurrentChapters("");
    setLiteraryWorkOngoing(true);
    setLiteraryWorkSynopsis("");
    setLiteraryWorkType("");
    setLiteraryWorkTags("");
  };

  const mutation = useMutation<MediaResponse, Error, MediaData>({
    mutationFn: createMedia,
    onSuccess: () => {
      resetFields();
      setCategory("");
      setIsSidebarOpen(false);
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });

  const handleSubmitMedia = () => {
    const selectedCategory = category;
    if (!selectedCategory) {
      alert("Por favor, selecione uma categoria.");
      return;
    }
    const data: MediaData = { category: selectedCategory as string };
    switch (selectedCategory) {
      case "video":
        if (!videoLink) {
          alert("O campo 'Link' é obrigatório para vídeo.");
          return;
        }
        data.link = videoLink;
        break;
      case "video_game":
        if (!generalTitle) {
          alert("O campo 'Title' é obrigatório para Video Game.");
          return;
        }
        data.title = { default: [generalTitle] };
        break;
      case "movie":
        if (!generalTitle) {
          alert("O campo 'Title' é obrigatório para Movie.");
          return;
        }
        data.title = { default: [generalTitle] };
        if (movieDuration) data.duration = movieDuration;
        if (movieReleaseDate) data.releaseDate = new Date(movieReleaseDate).toISOString();
        break;
      case "chapter":
        if (!generalTitle) {
          alert("O campo 'Title' é obrigatório para Chapter.");
          return;
        }
        if (chapterNumber === "" || isNaN(Number(chapterNumber))) {
          alert("O campo 'Number' é obrigatório e deve ser numérico para Chapter.");
          return;
        }
        if (!chapterSourceId) {
          alert("O campo 'Source ID' é obrigatório para Chapter.");
          return;
        }
        data.title = { default: [generalTitle] };
        data.number = Number(chapterNumber);
        data.sourceId = chapterSourceId;
        if (chapterPages !== "" && !isNaN(Number(chapterPages))) data.pages = Number(chapterPages);
        if (chapterReleaseDate) data.releaseDate = new Date(chapterReleaseDate).toISOString();
        break;
      case "literary_work":
        if (!generalTitle) {
          alert("O campo 'Title' é obrigatório para Literary Work.");
          return;
        }
        if (!literaryWorkType) {
          alert("O campo 'Type' é obrigatório para Literary Work.");
          return;
        }
        data.title = { default: [generalTitle] };
        data.type = literaryWorkType;
        if (literaryWorkCurrentChapters !== "" && !isNaN(Number(literaryWorkCurrentChapters))) {
          data.currentChapters = Number(literaryWorkCurrentChapters);
        }
        data.ongoing = literaryWorkOngoing;
        if (literaryWorkSynopsis) data.synopsis = { "en": [literaryWorkSynopsis] };
        if (literaryWorkTags) data.tags = literaryWorkTags.split(",").map(t => t.trim());
        break;
      default:
        alert("Categoria não suportada.");
        return;
    }
    mutation.mutate(data);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (event.target && !(event.target as Element).closest('.custom-dropdown')) {
        setIsCustomDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderCategoryInputs = () => {
    switch (category) {
      case "video":
        return (
          <FieldContainer>
            <SidebarLabel htmlFor="videoLink">Link (required)</SidebarLabel>
            <SidebarInput
              id="videoLink"
              type="text"
              placeholder="Insira o link do vídeo..."
              value={videoLink}
              onChange={(e) => setVideoLink(e.target.value)}
            />
          </FieldContainer>
        );
      case "video_game":
        return (
          <FieldContainer>
            <SidebarLabel htmlFor="generalTitle">Title (required)</SidebarLabel>
            <SidebarInput
              id="generalTitle"
              type="text"
              placeholder="Insira o título..."
              value={generalTitle}
              onChange={(e) => setGeneralTitle(e.target.value)}
            />
          </FieldContainer>
        );
      case "movie":
        return (
          <>
            <FieldContainer>
              <SidebarLabel htmlFor="generalTitle">Title (required)</SidebarLabel>
              <SidebarInput
                id="generalTitle"
                type="text"
                placeholder="Insira o título..."
                value={generalTitle}
                onChange={(e) => setGeneralTitle(e.target.value)}
              />
            </FieldContainer>
            <FieldContainer>
              <SidebarLabel htmlFor="movieDuration">Duration (optional)</SidebarLabel>
              <SidebarInput
                id="movieDuration"
                type="text"
                placeholder="Ex: PT5H10M30S"
                value={movieDuration}
                onChange={(e) => setMovieDuration(e.target.value)}
              />
            </FieldContainer>
            <FieldContainer>
              <SidebarLabel htmlFor="movieReleaseDate">Release Date (optional)</SidebarLabel>
              <SidebarInput
                id="movieReleaseDate"
                type="datetime-local"
                value={movieReleaseDate}
                onChange={(e) => setMovieReleaseDate(e.target.value)}
              />
            </FieldContainer>
          </>
        );
      case "chapter":
        return (
          <>
            <FieldContainer>
              <SidebarLabel htmlFor="generalTitle">Title (required)</SidebarLabel>
              <SidebarInput
                id="generalTitle"
                type="text"
                placeholder="Insira o título..."
                value={generalTitle}
                onChange={(e) => setGeneralTitle(e.target.value)}
              />
            </FieldContainer>
            <FieldContainer>
              <SidebarLabel htmlFor="chapterNumber">Number (required)</SidebarLabel>
              <SidebarInput
                id="chapterNumber"
                type="number"
                placeholder="Número do capítulo"
                value={chapterNumber}
                onChange={(e) => setChapterNumber(Number(e.target.value))}
              />
            </FieldContainer>
            <FieldContainer>
              <SidebarLabel htmlFor="chapterSourceId">Source ID (required)</SidebarLabel>
              <SidebarInput
                id="chapterSourceId"
                type="text"
                placeholder="ID da fonte"
                value={chapterSourceId}
                onChange={(e) => setChapterSourceId(e.target.value)}
              />
            </FieldContainer>
            <FieldContainer>
              <SidebarLabel htmlFor="chapterPages">Pages (optional)</SidebarLabel>
              <SidebarInput
                id="chapterPages"
                type="number"
                placeholder="Quantidade de páginas"
                value={chapterPages}
                onChange={(e) => setChapterPages(Number(e.target.value))}
              />
            </FieldContainer>
            <FieldContainer>
              <SidebarLabel htmlFor="chapterReleaseDate">Release Date (optional)</SidebarLabel>
              <SidebarInput
                id="chapterReleaseDate"
                type="datetime-local"
                value={chapterReleaseDate}
                onChange={(e) => setChapterReleaseDate(e.target.value)}
              />
            </FieldContainer>
          </>
        );
      case "literary_work":
        return (
          <>
            <FieldContainer>
              <SidebarLabel htmlFor="generalTitle">Title (required)</SidebarLabel>
              <SidebarInput
                id="generalTitle"
                type="text"
                placeholder="Insira o título..."
                value={generalTitle}
                onChange={(e) => setGeneralTitle(e.target.value)}
              />
            </FieldContainer>
            <FieldContainer>
              <SidebarLabel htmlFor="literaryWorkType">Type (required)</SidebarLabel>
              <SidebarInput
                as="select"
                id="literaryWorkType"
                value={literaryWorkType}
                onChange={(e) => setLiteraryWorkType(e.target.value)}
              >
                <option value="">Selecione um tipo</option>
                {literaryWorkTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </SidebarInput>
            </FieldContainer>
            <FieldContainer>
              <SidebarLabel htmlFor="literaryWorkCurrentChapters">Current Chapters (optional)</SidebarLabel>
              <SidebarInput
                id="literaryWorkCurrentChapters"
                type="number"
                placeholder="Capítulos atuais"
                value={literaryWorkCurrentChapters}
                onChange={(e) => setLiteraryWorkCurrentChapters(Number(e.target.value))}
              />
            </FieldContainer>
            <FieldContainer>
              <SidebarLabel htmlFor="literaryWorkOngoing">Ongoing (optional)</SidebarLabel>
              <SidebarInput
                as="select"
                id="literaryWorkOngoing"
                value={literaryWorkOngoing ? "true" : "false"}
                onChange={(e) => setLiteraryWorkOngoing(e.target.value === "true")}
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </SidebarInput>
            </FieldContainer>
            <FieldContainer>
              <SidebarLabel htmlFor="literaryWorkSynopsis">Synopsis (optional)</SidebarLabel>
              <SidebarInput
                id="literaryWorkSynopsis"
                type="text"
                placeholder="Sinopse"
                value={literaryWorkSynopsis}
                onChange={(e) => setLiteraryWorkSynopsis(e.target.value)}
              />
            </FieldContainer>
            <FieldContainer>
              <SidebarLabel htmlFor="literaryWorkTags">Tags (optional, separated by commas)</SidebarLabel>
              <SidebarInput
                id="literaryWorkTags"
                type="text"
                placeholder="ex: tag1, tag2"
                value={literaryWorkTags}
                onChange={(e) => setLiteraryWorkTags(e.target.value)}
              />
            </FieldContainer>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Container>
        <Title>Media</Title>
        <InsideContainer>
          <InsideInContainer>
            <InputWithIcon>
              <StyledImage src="/tags.svg" alt="Tags Icon" />
              <DropdownContainer ref={dropdownRef}>
                <DropdownHeader onClick={toggleDropdown} isOpen={isDropdownOpen}>
                  <DropdownIcon2 src="/tags.svg" alt="Dropdown Icon" isOpen={isDropdownOpen} />
                  <span style={{ marginLeft: '1.3rem' }}>
                    {category ? categories.find(cat => cat.value === category)?.label : "Category"}
                  </span>
                </DropdownHeader>
                {isDropdownOpen && (
                  <DropdownList>
                    {categories.map(category => (
                      <DropdownItem
                        key={category.value}
                        onClick={() => handleCategorySelect(category.value)}
                      >
                        {category.label}
                      </DropdownItem>
                    ))}
                  </DropdownList>
                )}
              </DropdownContainer>
            </InputWithIcon>
            <InputWithIcon>
              <StyledImage src="/search.svg" alt="Search Icon" />
              <SearchMedia 
                placeholder="Search Upload" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </InputWithIcon>
          </InsideInContainer>
          <ButtonUploadMedia onClick={handleUploadClick}>
            <StyledButtonImage src="/plus.svg" alt="Plus Icon" />
            Upload media
          </ButtonUploadMedia>
        </InsideContainer>
      </Container>
      {isSidebarOpen && <SidebarBackdrop isOpen={isSidebarOpen} onClick={handleCloseSidebar} />}
      <SidebarOverlay isOpen={isSidebarOpen}>
        <CloseButton onClick={handleCloseSidebar}>×</CloseButton>
        <SidebarContent isOpen={isSidebarOpen}>
          <SidebarTitle>
            <StyledButtonImage src="/archive.svg" alt="Archive Icon" />
            Upload Media
          </SidebarTitle>
          <SidebarParagraph>
            Put the best files for BK Beta, 🤘🏽.
          </SidebarParagraph>
          <FieldContainer>
            <SidebarLabel htmlFor="mediaCategory">Category</SidebarLabel>
            <CustomDropdown className="custom-dropdown" isOpen={isCustomDropdownOpen}>
              <DropdownHeader2 onClick={toggleCustomDropdown} isOpen={isCustomDropdownOpen} aria-haspopup="listbox" aria-expanded={isCustomDropdownOpen}>
                <DropdownText>
                  {category
                    ? categories.find(cat => cat.value === category)?.label
                    : "Select category"}
                </DropdownText>
                <DropdownIcon
                  src="/arrow-down.svg"
                  alt="Dropdown Icon"
                  isOpen={isCustomDropdownOpen}
                />
              </DropdownHeader2>
              {isCustomDropdownOpen && (
                <DropdownList role="listbox">
                  <DropdownItem
                    key="placeholder"
                    onClick={() => handleSidebarCategorySelect("")}
                    style={{ color: '#3F3F46' }}
                  >
                    Select category
                  </DropdownItem>
                  {categories.map((cat) => (
                    <DropdownItem
                      key={cat.value}
                      onClick={() => handleSidebarCategorySelect(cat.value)}
                    >
                      {cat.label}
                    </DropdownItem>
                  ))}
                </DropdownList>
              )}
            </CustomDropdown>
          </FieldContainer>
          {renderCategoryInputs()}
          <ContainerFinished>
            <ClearAll onClick={() => {
              resetFields();
              setCategory("");
            }}>
              Clear all
            </ClearAll>
            <SidebarSubmitButton onClick={handleSubmitMedia} disabled={mutation.status === 'pending'}>
              {mutation.status === 'pending' ? 'Uploading...' : (
                <>
                  <UploadIcon src="/check.svg" alt="Upload Icon" />
                  Upload Media
                </>
              )}
            </SidebarSubmitButton>
          </ContainerFinished>
          {mutation.isError && (
            <p style={{ color: 'red' }}>Erro ao enviar mídia: {mutation.error instanceof Error ? mutation.error.message : 'Erro desconhecido'}</p>
          )}
        </SidebarContent>
      </SidebarOverlay>
    </>
  );
}
