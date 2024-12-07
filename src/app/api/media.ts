// src/api/media.ts
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
    category: string;
    title: {
      default: string[];
    };
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
  