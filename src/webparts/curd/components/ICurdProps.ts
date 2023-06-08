import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface ICurdProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;

  siteUrl:string;
  listName:string;
  context:WebPartContext;
}
