export const API_ROOT = "http://113.161.43.181:5000/api";

export const JWT_THE_KEY_OF_THE_LIFE = "dfo_v_d";

export interface BlockUI {
  isBlocking: boolean;
  message?: string;
}

export enum API_MODULES {
  Articles = "articles",
  Insights = "insights",
  Category = "categories",
  Suppliers = "suppliers",
  BreakingNews = "breakingnews",
  CategoryNameNews = "dashboard/category-name-news",
  KeySupplierNews = "dashboard/key-suppliers-news",
  Profile = "profiles",
  Users = "users",
  Organizations = "organizations",
  SupplyChain = "category-insights/supply-chain/news",
  SupplyChainBreakingNews = "category-insights/supply-chain/breakingnews",
  SupplyChainKeySupplierNews = "category-insights/supply-chain/key-suppliers-news",
}

export const SIDEBAR = "JKA_SIDEBAR";

export enum KEYBOARD {
  Enter = 13,
}

export enum HTTP_CODE {
  Unauthorized = 401,
}

export enum SNACKBAR_TYPE {
  Error = "error",
}

export enum TIMEOUT {
  Default = 300,
  Search = 300,
  IntervalToken = 15 * 60 * 1000, // seconds
  RefreshToken = 15, // minutes
}

export const SUPPLIER_MANAGEMENT = [
  {
    key: "bamboohr",
    name: "bamboohr",
  },
  {
    key: "w.b.mason",
    name: "w_b_mason",
  },
  {
    key: "azure",
    name: "azure",
  },
  {
    key: "kronos",
    name: "kronos",
  },
  {
    key: "workday",
    name: "workday",
  },
  {
    key: "docusign",
    name: "docusign",
  },
  {
    key: "sutisign",
    name: "sutisign",
  },
  {
    key: "esign genie",
    name: "esign_enie",
  },
  {
    key: "moody",
    name: "moody",
  },
  {
    key: "markit",
    name: "markit",
  },
  {
    key: "idc",
    name: "idc",
  },
  {
    key: "factset",
    name: "factset",
  },
  {
    key: "office depot",
    name: "office_depot",
  },
  {
    key: "staples",
    name: "staples",
  },
  {
    key: "sodexo",
    name: "sodexo",
  },
  {
    key: "aramark",
    name: "aramark",
  },
  {
    key: "aws",
    name: "aws",
  },
  {
    key: "google",
    name: "google_cloud",
  },
  {
    key: "virtustream",
    name: "Virtustream",
  },
  {
    key: "zoom",
    name: "zoom",
  },
  {
    key: "moderna",
    name: "moderna",
  },
  {
    key: "ibm",
    name: "ibm",
  },
  {
    key: "macy",
    name: "macy",
  },
  {
    key: "j.crew",
    name: "j_crew",
  },
  {
    key: "holland america",
    name: "holland_america",
  },
  {
    key: "tyson",
    name: "tyson",
  },
];

export const COMMON_STATUS_COMPONENT = {
  isFirstLoad: true,
  isLoading: true,
};
