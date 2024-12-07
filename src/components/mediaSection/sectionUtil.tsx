"use client";
import React, { useState, useRef, useEffect } from "react";
import { useMutation } from '@tanstack/react-query';
import { createMedia, LiteraryWorkType, type MediaData, type MediaResponse } from "@/app/api/media";
import { useQueryState } from 'nuqs';
import {
  UploadIcon,
  ClearAll,
  SidebarTitle,
  SidebarParagraph,
  ContainerFinished,
  SidebarOverlay,
  SidebarContent,
  SidebarLabel,
  SidebarInput,
  SidebarSubmitButton,
  CloseButton,
  Container,
  Title,
  InputWithIcon,
  StyledImage,
  StyledButtonImage,
  DropdownContainer,
  CustomDropdown,
  DropdownHeader,
  DropdownHeader2,
  DropdownText,
  DropdownIcon,
  DropdownIcon2,
  DropdownList,
  DropdownItem,
  SearchMedia,
  ButtonUploadMedia,
  InsideContainer,
  InsideInContainer,
  FieldContainer,
  SidebarBackdrop
} from "./styles";

const literaryWorkTypes = Object.values(LiteraryWorkType);
interface MediaComponentProps {
  search: string;
  setSearch: (search: string) => void;
}
export default function MediaComponent({ search, setSearch }: MediaComponentProps) {

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
