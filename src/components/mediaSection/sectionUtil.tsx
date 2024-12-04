"use client"
import { useState, useRef, useEffect } from "react";
import {
  ButtonUploadMedia,
  Container,
  InsideContainer,
  InsideInContainer,
  SearchMedia,
  StyledButtonImage,
  StyledImage,
  Title,
  DropdownContainer,
  DropdownHeader,
  DropdownList,
  DropdownItem,
  DropdownIcon,
  InputWithIcon
} from "./styles";

export default function MediaComponent() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const categories = [
    { value: "natureza", label: "Natureza" },
    { value: "tecnologia", label: "Tecnologia" },
    { value: "pessoas", label: "Pessoas" },
    { value: "arte", label: "Arte" },
    { value: "esportes", label: "Esportes" },
  ];

  const handleCategorySelect = (value: string) => {
    setSelectedCategory(value);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Container>
      <Title>Media</Title>
      <InsideContainer>
        <InsideInContainer>
          <InputWithIcon>
            <StyledImage src="/tags.svg" alt="Tags Icon" />
            <DropdownContainer ref={dropdownRef}>
              <DropdownHeader onClick={toggleDropdown}>
                <DropdownIcon src="/tags.svg" alt="Dropdown Icon" />
                <span style={{ marginLeft: '1.3rem' }}>
                  {selectedCategory ? categories.find(cat => cat.value === selectedCategory)?.label : "Category"}
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
            <SearchMedia placeholder="Search Upload" />
          </InputWithIcon>
        </InsideInContainer>
        <ButtonUploadMedia>
          <StyledButtonImage src="/plus.svg" alt="Plus Icon" />
          Upload media
        </ButtonUploadMedia>
      </InsideContainer>
    </Container>
  );
}
