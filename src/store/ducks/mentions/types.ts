export enum ActionTypesMentions {
  GET_MENTIONS_REQUEST = "@mentions/GET_MENTIONS_REQUEST",
  GET_MENTIONS_SUCCESS = "@mentions/GET_MENTIONS_SUCCESS",
  GET_MENTIONS_FAIL = "@mentions/GET_MENTIONS_FAIL",
}

export interface MentionsState {
  readonly list: Mention[];
  readonly loading: boolean;
  readonly error: boolean;
  readonly last_page: number | null;
  readonly page: number | null;
  readonly total: number | null;
}

export interface Mention {
  _id: string;
  source: "facebook" | "youtube" | "twitter" | "instagram";
  first_seem?:
    | string
    | null
    | {
        $date: {
          $numberLong: number;
        };
      };
  postid: string;
  date: string | number | any[];
  updated: number | null;
  statistics: {
    comments: string;
    dislike: string;
    like: string;
    likes: string;
    view: string;
    views: number;
    favorite: number;
    retweet: number;
    followers: number;
    shares: number;
  };

  link: string;
  title: string;
  message: string | null;
  author: {
    uuid: string;
    name: string;
    picture_url: string;
    categories: string[];
  };
  tags: string[];
  extracted_at: string | null;
  updated_at: string;
  created_at: string | null;
  // Typos facebook
  attachment?: {
    description: string;
    title: string;
    url: string;
    caption: string;
    image_url: string;
    type: string; //"photo", "video"
  };
}

export interface MentionData {
  list: Mention[];
  last_page: number;
  page: number;
  total: number;
}

export interface MentionsRequestParams {
  category?: string;
  keyword?: string;
  page?: number;
  per_page?: number;
  begin_date?: string;
  end_date?: string;
  sort_field?: string;
  source?: string;
}