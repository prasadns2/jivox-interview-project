export interface IRule {
  id: string;
  ruleName: string;
  reportConfig?: any;
  conditions?: any;
  creative_groups?: any;
}

export interface IRuleApiResponse {
  data: IRule[];
  additionalData: any;
  allowedCookieGroup: string;
  allowedMaxCookieVal: string;
  defaultAssetGroup: string;
  enableImageExport: string;
  enabletripleLift: string;
  reportingKeyFormat: string;
  rpdata: [];
}
