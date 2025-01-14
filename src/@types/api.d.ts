export interface IShow {
    id: number;
    name: string;
    summary: string;
    image?: {
      medium: string;
      original: string;
    };
    rating?: {
      average: number;
    };
    genres: string[];
    schedule: {
      time: string;
      days: string[];
    };
  }
  
  export interface IApiResponse {
    score: number;
    show: IShow;
  }