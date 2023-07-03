/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export enum AccuracyEstimate {
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM'
}

export type Mutation = {
  __typename?: 'Mutation';
  createSiteReport: SiteReport;
  createSurflineSite: SurflineSite;
};


export type MutationCreateSiteReportArgs = {
  input: NewSiteReport;
};


export type MutationCreateSurflineSiteArgs = {
  input: NewSurflineSite;
};

export type NewSiteReport = {
  accuracyEstimate?: InputMaybe<AccuracyEstimate>;
  email: Scalars['String']['input'];
  siteReportRating: SiteReportRating;
  surflineRating?: InputMaybe<SurflineRating>;
  surflineSiteId: Scalars['ID']['input'];
  timestamp: Scalars['Int']['input'];
};

export type NewSurflineSite = {
  name: Scalars['String']['input'];
  surflineId: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getSiteReport: SiteReport;
  getSurflineSite: SurflineSite;
  siteReports: Array<SiteReport>;
  surflineSites: Array<SurflineSite>;
};


export type QueryGetSiteReportArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetSurflineSiteArgs = {
  id: Scalars['String']['input'];
};

export type SiteReport = {
  __typename?: 'SiteReport';
  SiteReportRating: SiteReportRating;
  accuracyEstimate?: Maybe<AccuracyEstimate>;
  email: Scalars['String']['output'];
  surflineRating?: Maybe<SurflineRating>;
  surflineSite: SurflineSite;
  timestamp: Scalars['Int']['output'];
};

export enum SiteReportRating {
  Epic = 'EPIC',
  Fair = 'FAIR',
  Good = 'GOOD',
  Poor = 'POOR',
  VeryGood = 'VERY_GOOD'
}

export enum SurflineRating {
  Epic = 'EPIC',
  Fair = 'FAIR',
  Good = 'GOOD',
  Poor = 'POOR',
  VeryGood = 'VERY_GOOD'
}

export type SurflineSite = {
  __typename?: 'SurflineSite';
  name: Scalars['String']['output'];
  surflineId: Scalars['String']['output'];
  url: Scalars['String']['output'];
};
