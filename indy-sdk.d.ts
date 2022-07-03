export type WalletHandle = number
export type SearchHandle = number
export type PoolHandle = number
export type BlobReaderHandle = number
export type BlobWriterHandle = number
export type Did = string
export type Verkey = string
export type ByteArray = number[]
export type SchemaId = string
export type CredDefId = string
export type CredentialId = string
export type KeyDerivationMethod = "ARGON2I_MOD" | "ARGON2I_INT" | "RAW"
export type Tags = Record<string, string | undefined>

// TODO: Maybe we can make this a bit more specific?
export type WalletQuery = Record<string, unknown>

export interface ReferentWalletQuery {
  [key: string]: WalletQuery
}

export interface TailsReaderConfig {
  base_dir: string
}
export interface TailsWriterConfig {
  base_dir: string
  uri_pattern: string
}

export interface WalletRecordOptions {
  retrieveType?: boolean | undefined
  retrieveValue?: boolean | undefined
  retrieveTags?: boolean | undefined
}

export interface WalletSearchOptions extends WalletRecordOptions {
  retrieveRecords?: boolean | undefined
  retrieveTotalCount?: boolean | undefined
}

export interface WalletConfig {
  id: string
  storage_type?: string | undefined
  storage_config?: WalletStorageConfig | undefined
}

export interface WalletStorageConfig {
  [key: string]: unknown
  path?: string | undefined
}

export interface WalletCredentials {
  key: string
  storage_credentials?:
    | {
        [key: string]: unknown
      }
    | undefined
  key_derivation_method?: KeyDerivationMethod | undefined
}

export interface OpenWalletCredentials extends WalletCredentials {
  rekey?: string
  rekey_derivation_method?: KeyDerivationMethod | undefined
}

export interface WalletExportImportConfig {
  key: string
  path: string
}

export interface DidConfig {
  did?: string | undefined
  seed?: string | undefined
  crypto_type?: "ed25519" | undefined
  cid?: boolean | undefined
  method_name?: string | undefined
}

export interface LedgerRequest {
  reqId: number
  identifier: string
  operation: Record<string, unknown>
  protocolVersion: number
}

export interface SignedLedgerRequest extends LedgerRequest {
  signature: string
}

export interface LedgerRejectResponse {
  op: "REJECT"
  reqId: number
  reason: string
  identifier: string
}

export interface LedgerReqnackResponse {
  op: "REQNACK"
  reqId: number
  reason: string
  identifier: string
}

export interface LedgerReplyResponse {
  op: "REPLY"
  result: Record<string, unknown>
}

export interface LedgerReadReplyResponse extends LedgerReplyResponse {
  result: {
    type: string
    identifier: string
    dest: string
    reqId: number
    seqNo: number
    txnTime: number
    state_proof: Record<string, unknown>
    // contains request specific data
    data: unknown
  }
}

export interface LedgerWriteReplyResponse extends LedgerReplyResponse {
  result: {
    ver: string
    txnMetadata: {
      txnTime: number
      seqNo: number
      txnId: string
    }
    auditPath: string[]
    reqSignature: {
      type: string
      values: Array<{ from: string; value: string }>
    }
    rootHash: string
    txn: {
      type: string
      // ... TODO: add other txn fields ...
      [key: string]: unknown
    }
  }
}

export type LedgerResponse =
  | LedgerRejectResponse
  | LedgerReqnackResponse
  | LedgerReadReplyResponse
  | LedgerWriteReplyResponse

export interface Schema {
  id: SchemaId
  attrNames: string[]
  name: string
  version: string
  ver: string
  seqNo: number
}

export interface CredDef {
  id: string
  schemaId: string
  type: string
  tag: string
  value: {
    primary: Record<string, unknown>
    revocation?: unknown | undefined
  }
  ver: string
}

export interface CredDefConfig {
  support_revocation?: boolean | undefined
}

export interface RevocRegDef {
  id: RevRegId
  revocDefType: "CL_ACCUM"
  tag: string
  credDefId: CredDefId
  value: {
    issuanceType: "ISSUANCE_BY_DEFAULT" | "ISSUANCE_ON_DEMAND"
    maxCredNum: number
    tailsHash: string
    tailsLocation: string
    publicKeys: string[]
  }
  ver: string
}

export interface CredOffer {
  schema_id: SchemaId
  cred_def_id: CredDefId
  nonce: string
  key_correctness_proof: Record<string, unknown>
}

export interface GetCredentialsFilter {
  schema_id?: string
  schema_issuer_did?: string
  schema_name?: string
  schema_version?: string
  issuer_did?: string
  cred_def_id?: string
}

export interface IndyCredentialInfo {
  referent: string
  attrs: {
    [key: string]: string
  }
  schema_id: string
  cred_def_id: string
  rev_reg_id?: number | undefined
  cred_rev_id?: string | undefined
}

export interface IndyCredential {
  cred_info: IndyCredentialInfo
  interval?: NonRevokedInterval | undefined
}
export interface ProofCred {
  requested_attrs: {
    [key: string]: IndyCredential[]
  }
  requested_predicates: {
    [key: string]: Array<{
      cred_info: IndyCredentialInfo
      timestamp?: number | undefined
    }>
  }
}

export interface IndyProof {
  requested_proof: {
    revealed_attrs: {
      [key: string]: {
        sub_proof_index: number
        raw: string
        encoded: string
      }
    }
    revealed_attr_groups: {
      [key: string]: {
        sub_proof_index: number
        values: {
          [key: string]: {
            raw: string
            encoded: string
          }
        }
      }
    }
    unrevealed_attrs: {
      [key: string]: {
        sub_proof_index: number
      }
    }
    self_attested_attrs: {
      [key: string]: string
    }
    requested_predicates: {
      [key: string]: { sub_proof_index: number }
    }
  }
  proof: any
  identifiers: Array<{
    schema_id: SchemaId
    cred_def_id: CredDefId
    rev_reg_id?: RevRegId
    timestamp?: number
  }>
}

export interface Schemas {
  [key: string]: Schema
}

export interface CredentialDefs {
  [key: string]: CredDef
}

export interface RevocRegDefs {
  [revRegId: string]: RevocRegDef
}

export interface RevStates {
  [key: string]: {
    [key: string]: unknown
  }
}

export interface RevState {
  rev_reg: RevocReg
  witness: Witness
  timestamp: number
}

export interface IndyRequestedCredentials {
  self_attested_attributes: {
    [key: string]: string
  }
  requested_attributes: {
    [key: string]: { cred_id: string; timestamp?: number | undefined; revealed: boolean }
  }
  requested_predicates: {
    [key: string]: { cred_id: string; timestamp?: number | undefined }
  }
}

export interface NonRevokedInterval {
  from?: number | undefined
  to?: number | undefined
}
export interface IndyProofRequest {
  name: string
  version: string
  nonce: string
  requested_attributes: {
    [key: string]: {
      name?: string | undefined
      names?: string | undefined
      restrictions?: WalletQuery[] | undefined
      non_revoked?: NonRevokedInterval | undefined
    }
  }
  requested_predicates: {
    [key: string]: {
      name: string
      p_type: ">=" | ">" | "<=" | "<"
      p_value: number
      restrictions?: WalletQuery[] | undefined
      non_revoked?: NonRevokedInterval | undefined
    }
  }
  non_revoked?: NonRevokedInterval | undefined
  ver?: "1.0" | "2.0" | undefined
}

export interface CredReq {
  prover_did: Did
  cred_def_id: CredDefId
  blinded_ms: Record<string, unknown>
  blinded_ms_correctness_proof: Record<string, unknown>
  nonce: string
}

export type CredReqMetadata = Record<string, unknown>

export type CredValues = Record<string, CredValue>

export interface CredValue {
  raw: string
  encoded: string // Raw value as number in string
}

export type RevRegId = string
export type BlobStorageReaderHandle = number

export interface Cred {
  schema_id: SchemaId
  cred_def_id: CredDefId
  rev_reg_id: string
  values: CredValues
  signature: unknown
  signature_correctness_proof: unknown
}

export type CredRevocId = string
export interface RevocRegDelta {
  value: {
    prevAccum: string
    accum: string
    issued: number[] | undefined
    revoked: number[] | undefined
  }
  ver: string
}

export interface RevocReg {
  value: {
    accum: string
  }
  ver: string
}

export interface Witness {
  [key: string]: unknown
}

export interface KeyConfig {
  seed?: string | undefined
}

export interface PoolConfig {
  genesis_txn: string
}

export interface RuntimePoolConfig {
  timeout?: number | undefined
  extended_timeout?: number | undefined
  preordered_nodes?: string[] | undefined
  number_read_nodes?: number | undefined
}

export interface WalletRecord {
  id: string
  type?: string | undefined
  value?: string | undefined
  tags?:
    | {
        [key: string]: string | undefined
      }
    | undefined
}

export interface WalletRecordSearch {
  totalCount: string | null
  records: WalletRecord[] | null
}

export interface GetNymResponse {
  did: Did
  verkey: Verkey
  role: NymRole
}

export type NymRole = "TRUSTEE" | "STEWARD" | "TRUST_ANCHOR" | "ENDORSER" | "NETWORK_MONITOR"
