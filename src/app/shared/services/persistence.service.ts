import {Injectable} from "@angular/core";

@Injectable()
export class PersistenceService {
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data))
    } catch (e) {
      console.error('Error saving to LS', e)
    }
  }

  get(key: string) {
    try {
      JSON.parse(localStorage.getItem(key))
    } catch (e) {
      console.error('Error getting data from LS', e)
      return null
    }
  }
}
