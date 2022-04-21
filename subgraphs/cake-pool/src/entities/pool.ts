import { BigInt, ethereum } from "@graphprotocol/graph-ts";
import { CakePool } from "../../generated/schema";
import { ADDRESS_ZERO, BI_ZERO } from "../utils";

export function getOrCreateCakePool(pid: BigInt, block: ethereum.Block): CakePool {

  let pool = CakePool.load(pid.toString());
  
  // to-do: check if cake pool already exists
  return pool as CakePool;
}