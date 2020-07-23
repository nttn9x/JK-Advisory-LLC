export interface AffiliateCompany {
  city?: string;
  company?: string;
  country?: string;
  postCode?: string;
  state?: string;
  street?: string;
  website?: string;
  address: string;
}
export interface AffiliateStatus {
  status?: string;
  everflowStatus?: string;
  salesforceStatus?: string;
  statusText?: string;
  assigneeId?: string;
  assigneeName?: string;
  caseNote?: string;
}
export interface AffiliateContact {
  cellPhone?: string;
  email?: string;
  firstName?: string;
  im?: string;
  imService?: string;
  jobTitle?: string;
  lastName?: string;
  workPhone?: string;
  legalEntityType?: string;
  fullName: string;
}
export interface AffiliateUpdater {
  date?: string;
  name?: string;
}

export interface AffiliateReferral {
  affiliateManagerName?: string;
  affiliateName?: string;
  referralNotes?: string;
}

export interface AffiliateMarketing {
  comments?: string;
  currency?: string;
  paymentModel?: string;
  paymentTo?: string;
  primaryCategory?: string;
  taxClass?: string;
  taxId?: string;
}

export interface Affiliate {
  caseId: string;
  company: AffiliateCompany;
  contact: AffiliateContact;
  referral: AffiliateReferral;
  marketing: AffiliateMarketing;
  status: AffiliateStatus;
  id: string;
  updater: AffiliateUpdater;
}

export interface KYCFormCompanyDetail {}

export interface KYCForm {
  companyDetail: {
    address: {
      street?: string;
      city?: string;
      state?: string;
      postCode?: string;
      fullAddress?: string;
    };
    companyName?: string;
    placeOfIncorporation?: string;
    workPhone?: string;
    cellPhone?: string;
    website?: string;
    dateOfCommence?: string;
    dateOfIncorporation?: string;
    socialMediaHandles?: string;
    socialMediaHandlesOthers?: string;
  };
  personalDetail: {
    officeAddress: {
      street?: string;
      city?: string;
      state?: string;
      postCode?: string;
      fullAddress?: string;
    };
    residentialAddress: {
      street?: string;
      city?: string;
      state?: string;
      postCode?: string;
      fullAddress?: string;
    };
    name?: string;
    sex?: string;
    nationality?: string;
    dateOfBirth?: string;
    cellPhone?: string;
    civilStatus?: string;
    email?: string;
    position?: string;
    skype?: string;
    socialMediaHandles?: string;
    socialMediaHandlesOthers?: string;
  };
  billingInfo: {
    name?: string;
    email?: string;
    position?: string;
    cellPhone?: string;
    skype?: string;
    socialMediaHandles?: string;
    socialMediaHandlesOthers?: string;
  };
  declaration: {
    place?: string;
    date?: string;
    documents?: any[];
    proofOfAddress: {
      proofName?: string;
      expiry?: string;
      otherProof?: string;
    };
  };
}

export interface User {
  _id: string;
  username: string;
  password: string;
  fullName: string;
  avatar: string;
  email: string;
  roleIds: any;
  roles?: any;
}

export interface Message {
  user?: string;
  message?: string;
  dateTime?: string;
  mine?: string;
}

export interface Account {}

export interface Options {
  id?: any;
  options?: any;
  pushMsgError?: any;
}
