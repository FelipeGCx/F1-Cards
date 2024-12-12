import { Response } from "../../types";
import { RequestProvider } from "./requestProvider";
import {
  Error,
  Driver,
  Drivers,
  Team,
  Teams,
  Countries,
  Circuits,
  Scuderies,
} from "./mocks";
import {
  DRIVER,
  DRIVERS,
  TEAM,
  TEAMS,
  COUNTRIES,
  CIRCUITS,
  SCUDERIES,
} from "../../constants";

export class DevelopmentProvider implements RequestProvider {
  async getRequest(url: string, _headers?: string): Promise<Response> {
    switch (url) {
      case DRIVER:
        return Driver;
      case DRIVERS:
        return Drivers;
      case TEAM:
        return Team;
      case TEAMS:
        return Teams;
      case COUNTRIES:
        return Countries;
      case CIRCUITS:
        return Circuits;
      case SCUDERIES:
        return Scuderies;
      default:
        return Error;
    }
  }
  async postRequest(
    url: string,
    _body: Object,
    _headers?: string
  ): Promise<Response> {
    switch (url) {
      default:
        return Error;
    }
  }
  async putRequest(
    url: string,
    _body: Object,
    _headers?: string
  ): Promise<Response> {
    switch (url) {
      default:
        return Error;
    }
  }
  async deleteRequest(url: string, _headers?: string): Promise<Response> {
    switch (url) {
      default:
        return Error;
    }
  }
}
