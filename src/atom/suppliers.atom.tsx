import { atom, selector } from "recoil";

export enum Dashboard {
  DATAS_SELECT = "DATAS_SELECT",
  DATAS_VALUE = "DATAS_VALUE",
}

export const dataList = atom({
  key: Dashboard.DATAS_VALUE, // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export const selectDataList = selector({
  key: Dashboard.DATAS_SELECT, // unique ID (with respect to other atoms/selectors)
  get: ({ get }: any) => {
    const data = get(dataList);

    return data;
  },
});
