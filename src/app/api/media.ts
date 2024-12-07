export interface MediaData {
    category: string;
    link?: string;
    title?: {
      default: string[];
    };
    duration?: string;
    releaseDate?: string;
    number?: number;
    pages?: number;
    sourceId?: string;
    type?: string;
    currentChapters?: number;
    ongoing?: boolean;
    synopsis?: {
      [key: string]: string[];
    };
    tags?: string[];
  }
  
  export enum LiteraryWorkType {
    ARTICLE = "article",
    BIOGRAPHY = "biography",
    COMICS = "comics",
    DIARY = "diary",
    EPIC = "epic",
    ESSAY = "essay",
    FLASH_FICTION = "flash_fiction",
    GRAPHIC_NOVEL = "graphic_novel",
    JOURNAL = "journal",
    LIGHT_NOVEL = "light_novel",
    MANGA = "manga",
    MANHUA = "manhua",
    MANHWA = "manhwa",
    MEMOIR = "memoir",
    NOVEL = "novel",
    NOVELETTE = "novelette",
    NOVELLA = "novella",
    POETRY = "poetry",
    SCRIPT = "script",
    SHORT_STORY = "short_story",
    WEB_NOVEL = "web_novel",
    WEBTOON = "webtoon",
  }
  
  export interface MediaResponse {
    id: string;
    title: {
      default: string[];
    };
    category: string;
    releaseDate?: string;
  }
  
  export async function createMedia(data: MediaData): Promise<MediaResponse> {
    const response = await fetch('https://enki.hyoretsu.com/media/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Erro ao criar mídia');
    }
  
    return response.json();
  }
  
  export async function fetchMedia(search?: string, category?: string): Promise<MediaResponse[]> {
    let url = 'https://enki.hyoretsu.com/media';
    const params = new URLSearchParams();
  
    if (search) {
      params.append('search', search);
    }
  
    if (category) {
      params.append('category', category);
    }
  
    if ([...params].length > 0) {
      url += `?${params.toString()}`;
    }
  
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Erro ao buscar mídias');
    }
    return response.json();
  }
