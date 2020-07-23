// @ts-ignore
import { atom, selector } from "recoil";

export enum Dashboard {
  TEXT_SEARCH_SELECT = "TEXT_SEARCH_SELECT",
  TEXT_SEARCH_VALUE = "TEXT_SEARCH_VALUE",
}

export const textSearch = atom({
  key: Dashboard.TEXT_SEARCH_VALUE, // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export const selectTextSearch = selector({
  key: Dashboard.TEXT_SEARCH_SELECT, // unique ID (with respect to other atoms/selectors)
  get: ({ get }: any) => {
    const text = get(textSearch);

    return text;
  },
});
