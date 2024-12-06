"use client"
import { useState, useRef, useEffect } from "react";
import styled from 'styled-components';

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
  overflow: hidden;

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

const SidebarSubmitButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #2DD4BF;
  color: #022C22;
  border: none;
  width: 8.375rem;
  height: 2rem;
  border-radius: 6px;
  cursor: pointer;
  display: flex; 
  align-items: center; 
  justify-content: center;
  width: 8.75rem;
  &:hover {
    background-color: #177b5a;
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
  border: '1px solid #3F3F46';
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

const ButtonUploadMedia = styled.button`
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

const InsideContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const InsideInContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 100%;
`;

const SidebarBackdrop = styled.div<SidebarOverlayProps>`
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

export default function MediaComponent() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [mediaTitle, setMediaTitle] = useState("");
  const [mediaDescription, setMediaDescription] = useState("");
  const [sidebarSelectedCategory, setSidebarSelectedCategory] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isCustomDropdownOpen, setIsCustomDropdownOpen] = useState(false);

  const categories = [
    { value: "natureza", label: "Natureza" },
    { value: "tecnologia", label: "Tecnologia" },
    { value: "pessoas", label: "Pessoas" },
    { value: "arte", label: "Arte" },
    { value: "esportes", label: "Esportes" },
  ];

  const handleCategorySelect = (value: string) => {
    setSelectedCategory(value);
    setIsCustomDropdownOpen(false);
  };

  const handleSidebarCategorySelect = (value: string) => {
    setSidebarSelectedCategory(value);
    setIsCustomDropdownOpen(false);
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

  const handleSubmitMedia = () => {
    console.log('Submitting media:', {
      title: mediaTitle,
      description: mediaDescription,
      category: selectedCategory,
      file: mediaFile
    });

    setMediaTitle("");
    setMediaDescription("");
    setMediaFile(null);
    setIsSidebarOpen(false);
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
                  {sidebarSelectedCategory
                    ? categories.find(cat => cat.value === sidebarSelectedCategory)?.label
                    : "Select category"}
                </DropdownText>
                <DropdownIcon
                  src="/arrow-down.svg"
                  alt="Dropdown Icon"
                  isOpen={isCustomDropdownOpen}
                  style={{ transform: isCustomDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
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

          <FieldContainer>
            <SidebarLabel htmlFor="mediaTitle">Title</SidebarLabel>
            <SidebarInput
              id="mediaTitle"
              type="text"
              placeholder="Digite o título do media..."
              value={mediaTitle}
              onChange={(e) => setMediaTitle(e.target.value)}
            />
          </FieldContainer>

          <FieldContainer>
            <SidebarLabel htmlFor="mediaDescription">Data</SidebarLabel>
            <SidebarInput
              id="mediaDescription"
              type="text"
              placeholder="Digite a descrição..."
              value={mediaDescription}
              onChange={(e) => setMediaDescription(e.target.value)}
            />
          </FieldContainer>

          <ContainerFinished>
            <ClearAll onClick={() => {
              setMediaTitle("");
              setMediaDescription("");
              setSidebarSelectedCategory("");
              setMediaFile(null);
            }}>
              Clear all
            </ClearAll>


            <SidebarSubmitButton onClick={handleSubmitMedia}>
              <UploadIcon src="/check.svg" alt="Upload Icon" />
              Upload Media
            </SidebarSubmitButton>
          </ContainerFinished>
        </SidebarContent>
      </SidebarOverlay>
    </>
  );
}
