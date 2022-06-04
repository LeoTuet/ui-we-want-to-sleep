import * as adminApi from "./adminApi";
import * as ballotApi from "./ballotApi";
import * as tokenApi from "./tokenApi";
import * as voteApi from "./voteApi";

export class Api {
  public ballotApi = ballotApi;
  public voteApi = voteApi;
  public tokenApi = tokenApi;
  public adminApi = adminApi;
}
