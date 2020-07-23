// @ts-ignore
import {atom} from "recoil";

export enum SupplierManagement {
  SUPPLIER_NAME = "SUPPLIER_NAME",
  THIRD_PARTY_RISK = "THIRD_PARTY_RISK",
}

export const supplierManagement = atom({
  key: SupplierManagement.SUPPLIER_NAME, // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export const thirdPartyRisk = atom({
  key: SupplierManagement.THIRD_PARTY_RISK, // unique ID (with respect to other atoms/selectors)
  default: {
    tabIndex: 0,
    supNames: [],
  }, // default value (aka initial value)
});
