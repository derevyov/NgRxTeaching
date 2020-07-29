import {PopularTagType} from "../../../types/PopularTag.type";

export interface PopularTagsStateInterface {
  isLoading: boolean
  error: string | null
  data: PopularTagType[] | null
}
