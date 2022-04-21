/* eslint-disable @typescript-eslint/no-unused-vars */
import { log } from "@graphprotocol/graph-ts";
import {
  Deposit,
  Withdraw
} from "../../generated/CakePool/CakePool";
import { getOrCreateCakePool } from "../entities/pool";
import { getOrCreateUser} from "../entities/users";
import { ACC_CAKE_PRECISION, BOOST_PRECISION, BI_ONE, BI_ZERO } from "../utils";

export function handleDeposit(event: Deposit): void {
  // to-do: handle deposit
}

export function handleWithdraw(event: Withdraw): void {
  // to-do: handle withdraw
}