// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Enum, Struct, Text, U256, U8aFixed, bool, u32, u64 } from '@polkadot/types';
import type { ITuple } from '@polkadot/types/types';
import type { MultiAddress } from '@polkadot/types/interfaces/runtime';

/** @name Account */
export interface Account extends Struct {
  readonly nonce: U256;
  readonly balance: U256;
}

/** @name Address */
export interface Address extends MultiAddress {}

/** @name BlockLength */
export interface BlockLength extends u64 {}

/** @name BlockWeights */
export interface BlockWeights extends u64 {}

/** @name CID */
export interface CID extends Bytes {}

/** @name ClassId */
export interface ClassId extends u32 {}

/** @name ClassIdOf */
export interface ClassIdOf extends ClassId {}

/** @name ClassType */
export interface ClassType extends Enum {
  readonly is1: boolean;
  readonly as1: u32;
  readonly is2: boolean;
  readonly as2: HashByte32;
  readonly is3: boolean;
  readonly as3: ITuple<[CID, CID, bool]>;
}

/** @name DataSource */
export interface DataSource extends u64 {}

/** @name EthAddress */
export interface EthAddress extends U8aFixed {}

/** @name HashByte32 */
export interface HashByte32 extends U8aFixed {}

/** @name LookupSource */
export interface LookupSource extends MultiAddress {}

/** @name ParachainInherentData */
export interface ParachainInherentData extends u64 {}

/** @name Properties */
export interface Properties extends Enum {
  readonly isNone: boolean;
  readonly isTransferable: boolean;
  readonly isBurnable: boolean;
  readonly isBoth: boolean;
}

/** @name QueryKey */
export interface QueryKey extends u64 {}

/** @name Signature */
export interface Signature extends U8aFixed {}

/** @name TokenId */
export interface TokenId extends u64 {}

/** @name TokenIdOf */
export interface TokenIdOf extends TokenId {}

/** @name Transaction */
export interface Transaction extends Struct {
  readonly nonce: U256;
  readonly action: Text;
  readonly gas_price: u64;
  readonly gas_limit: u64;
  readonly value: U256;
  readonly input: Bytes;
  readonly signature: Signature;
}

export type PHANTOM_LITENTRY = 'litentry';
