/* eslint-disable @typescript-eslint/no-unused-vars */
import { CakePool, User } from "../../generated/schema";
import { BigInt, Address, ethereum } from "@graphprotocol/graph-ts";
import { getOrCreateCakePool } from "./pool";
import { BI_ZERO, BI_ONE, BOOST_PRECISION } from "../utils";

export function getOrCreateUser(address: Address, pool: CakePool, block: ethereum.Block): User {

  const uid = address.toHex();
  const id = pool.id.concat("-").concat(uid);
  let user = User.load(id);

  // to-do: check if user is already in the pool
  return user as User;
}