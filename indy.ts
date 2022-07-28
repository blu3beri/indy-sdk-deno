import type { OpenWalletCredentials, WalletConfig, WalletHandle } from "./indy-sdk.d.ts"
import { allocPtr, promisify, library } from "./ffi/mod.ts"
import { IndyError } from "./IndyError.ts"
import { WALLET_HANDLE } from "./ffi/primitives.ts"
import { serializeArguments } from "./ffi/serialize.ts"

const capi = library.symbols

export const getCurrentError = () => {
  const ptr = allocPtr()
  capi.getCurrentError(ptr)
  return new Deno.UnsafePointerView(ptr[0]).getCString()
}

const createWallet = async (config: WalletConfig, credentials: OpenWalletCredentials): Promise<void> => {
  const [serializedConfig, serializedCredentials] = serializeArguments(config, credentials)

  return await promisify([], (cb) => {
    const err = capi.createWallet(1, serializedConfig, serializedCredentials, cb)
    if (err) throw IndyError.handleError(err)
  })
}

const openWallet = async (config: WalletConfig, credentials: OpenWalletCredentials): Promise<WalletHandle> => {
  const [serializedConfig, serializedCredentials] = serializeArguments(config, credentials)

  return await promisify([WALLET_HANDLE], (cb) => {
    const err = capi.openWallet(2, serializedConfig, serializedCredentials, cb)
    if (err) throw IndyError.handleError(err)
  })
}

const closeWallet = async (wh: WalletHandle): Promise<void> => {
  const [serializedWh] = serializeArguments(wh)

  await promisify([], (cb) => {
    const err = capi.closeWallet(3, serializedWh, cb)
    if (err) throw IndyError.handleError(err)
  })
}
//
//
//  const deleteWallet = (config: WalletConfig, credentials: WalletCredentials): Promise<void> => {
//    return new Promise((resolve) => resolve())
//  }
//
//
//  const importWallet = (
//    config: WalletConfig,
//    credentials: WalletCredentials,
//    importConfig: WalletExportImportConfig
//  ): Promise<void> => {
//    return new Promise((resolve) => resolve())
//  }
//
//
//  const exportWallet = (wh: WalletHandle, exportConfig: WalletExportImportConfig): Promise<void> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const createAndStoreMyDid = (wh: WalletHandle, did: DidConfig): Promise<[Did, Verkey]> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const keyForLocalDid = (wh: WalletHandle, did: Did): Promise<Verkey> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const cryptoAnonCrypt = (recipientVk: Verkey, messageRaw: Buffer): Promise<Buffer> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const cryptoSign = (wh: WalletHandle, signerVk: Verkey, messageRaw: Buffer): Promise<Buffer> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const cryptoVerify = (signerVk: Verkey, messageRaw: Buffer, signatureRaw: Buffer): Promise<boolean> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const createKey = (wh: WalletHandle, key: KeyConfig): Promise<Verkey> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const packMessage = (
//    wh: WalletHandle,
//    message: Buffer,
//    receiverKeys: Verkey[],
//    senderVk: Verkey | null
//  ): Promise<Buffer> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const unpackMessage = (wh: WalletHandle, jwe: Buffer): Promise<Buffer> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const addWalletRecord = (wh: WalletHandle, type: string, id: string, value: string, tags: Tags): Promise<void> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const updateWalletRecordValue = (wh: WalletHandle, type: string, id: string, value: string): Promise<void> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const updateWalletRecordTags = (wh: WalletHandle, type: string, id: string, tags: Tags): Promise<void> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const addWalletRecordTags = (wh: WalletHandle, type: string, id: string, tags: Tags): Promise<void> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const deleteWalletRecord = (wh: WalletHandle, type: string, id: string): Promise<void> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const getWalletRecord = (
//    wh: WalletHandle,
//    type: string,
//    id: string,
//    options: WalletRecordOptions
//  ): Promise<WalletRecord> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const openWalletSearch = (
//    wh: WalletHandle,
//    type: string,
//    query: WalletQuery,
//    options: WalletSearchOptions
//  ): Promise<SearchHandle> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const fetchWalletSearchNextRecords = (
//    wh: WalletHandle,
//    searchHandle: SearchHandle,
//    count: number
//  ): Promise<WalletRecordSearch> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const closeWalletSearch = (sh: SearchHandle): Promise<void> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const createPoolLedgerConfig = (configName: string, config?: PoolConfig): Promise<void> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const deletePoolLedgerConfig = (configName: string): Promise<void> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const openPoolLedger = (configName: string, config?: RuntimePoolConfig): Promise<PoolHandle> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const closePoolLedger = (poolHandle: PoolHandle): Promise<void> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const setProtocolVersion = (version: number): Promise<void> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const buildNymRequest = (
//    submitterDid: Did,
//    targetDid: Did,
//    verkey: string,
//    alias: string,
//    role: NymRole | null
//  ): Promise<LedgerRequest> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const buildGetNymRequest = (submitterDid: Did | null, targetDid: Did): Promise<LedgerRequest> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const parseGetNymResponse = (response: LedgerResponse): Promise<GetNymResponse> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const buildSchemaRequest = (submitterDid: Did, schema: Schema): Promise<LedgerRequest> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const buildGetSchemaRequest = (submitterDid: Did | null, schemaId: SchemaId): Promise<LedgerRequest> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const parseGetSchemaResponse = (response: LedgerResponse): Promise<[SchemaId, Schema]> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const buildCredDefRequest = (submitterDid: Did, credDef: CredDef): Promise<LedgerRequest> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const buildGetCredDefRequest = (submitterDid: Did | null, credDefId: CredDefId): Promise<LedgerRequest> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const parseGetCredDefResponse = (response: LedgerResponse): Promise<[CredDefId, CredDef]> => {
//    return new Promise((resolve) => resolve())
//  }
//
//
//  const setLogger = (
//    logFn:  = (level: number, target: string, message: string, modulePath: string, file: string, line: number) => => {
//    return new Promise((resolve) => resolve())
//  }
//   void
//  ): void
//  const setDefaultLogger = (pattern: "trace" | "info" | "debug"): void
//
//  const buildRevocRegDefRequest = (submitterDid: Did, data: RevocRegDef): Promise<LedgerRequest> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const buildGetRevocRegDefRequest = (submitterDid: Did | null, revRegId: RevRegId): Promise<LedgerRequest> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const parseGetRevocRegDefResponse = (response: LedgerResponse): Promise<[RevRegId, RevocRegDef]> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const buildRevocRegEntryRequest = (
//    submitterDid: Did,
//    revRegId: RevRegId,
//    revDefType: "CL_ACCUM",
//    value: RevocRegDelta
//  ): Promise<LedgerRequest> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const buildGetRevocRegRequest = (
//    submitterDid: Did | null,
//    revRegId: RevRegId,
//    timestamp: number
//  ): Promise<LedgerRequest> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const parseGetRevocRegResponse = (response: LedgerResponse): Promise<[RevRegId, RevocReg, number]> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const buildGetRevocRegDeltaRequest = (
//    submitterDid: Did | null,
//    revRegId: RevRegId,
//    from: number | null,
//    to: number
//  ): Promise<LedgerRequest> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const parseGetRevocRegDeltaResponse = (response: LedgerResponse): Promise<[RevRegId, RevocRegDelta, number]> => {
//    return new Promise((resolve) => resolve())
//  }
//
//
//  const signRequest = (wh: WalletHandle, submitterDid: Did, request: LedgerRequest): Promise<SignedLedgerRequest> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const signAndSubmitRequest = (
//    poolHandle: PoolHandle,
//    walletHandle: WalletHandle,
//    submitterDid: Did,
//    request: LedgerRequest
//  ): Promise<LedgerResponse> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const submitRequest = (poolHandle: PoolHandle, request: LedgerRequest): Promise<LedgerResponse> => {
//    return new Promise((resolve) => resolve())
//  }
//
//
//  const buildGetTxnAuthorAgreementRequest = (submitterDid: Did | null): Promise<LedgerRequest> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const buildGetAcceptanceMechanismsRequest = (submitterDid: Did | null): Promise<LedgerRequest> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const appendTxnAuthorAgreementAcceptanceToRequest = (
//    request: LedgerRequest,
//    text: string,
//    version: string,
//    digest: string,
//    accMechType: string,
//    timeOfAcceptance: number
//  ): Promise<LedgerRequest> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const abbreviateVerkey = (did: Did, fullVerkey: Verkey): Promise<Verkey> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const generateNonce = (): Promise<string> => {
//    return new Promise((resolve) => resolve())
//  }
//
//
//  const buildGetAttribRequest = (
//    submitterDid: Did | null,
//    targetDid: Did,
//    raw: string | null,
//    hash: string | null,
//    enc: string | null
//  ): Promise<LedgerRequest> => {
//    return new Promise((resolve) => resolve())
//  }
//
//
//  const issuerCreateSchema = (
//    issuerDid: Did,
//    name: string,
//    version: string,
//    attributes: string[]
//  ): Promise<[SchemaId, Schema]> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const issuerCreateAndStoreCredentialDef = (
//    wh: WalletHandle,
//    issuerDid: Did,
//    schema: Schema,
//    tag: string,
//    signatureType: string,
//    config?: CredDefConfig
//  ): Promise<[CredDefId, CredDef]> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const issuerCreateAndStoreRevocReg = (
//    wh: WalletHandle,
//    issuerDid: Did,
//    revocDefType: "CL_ACCUM" | null,
//    tag: string,
//    credDefId: CredDefId,
//    config: {
//      issuance_type?: "ISSUANCE_BY_DEFAULT" | "ISSUANCE_ON_DEMAND"
//      max_cred_num?: number
//    }
//  ,
//    tailsWriterHandle: BlobWriterHandle
//  ): Promise<[RevRegId, RevocRegDef, RevocRegDelta]> => {
//    return new Promise((resolve) => resolve())
//  }
//
//
//  const issuerCreateCredentialOffer = (wh: WalletHandle, credDefId: CredDefId): Promise<CredOffer> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const issuerCreateCredential = (
//    wh: WalletHandle,
//    credOffer: CredOffer,
//    credReq: CredReq,
//    credValues: CredValues,
//    revRegId: RevRegId | null,
//    blobStorageReaderHandle: BlobStorageReaderHandle | 0
//  ): Promise<[Cred, CredRevocId, RevocRegDelta]> => {
//    return new Promise((resolve) => resolve())
//  }
//
//
//  const issuerRevokeCredential = (
//    wh: WalletHandle,
//    blobStorageReaderHandle: BlobStorageReaderHandle,
//    revRegId: RevRegId,
//    credRevocId: CredRevocId
//  ): Promise<RevocRegDelta> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const issuerMergeRevocationRegistryDeltas = (
//    revRegDelta: RevocRegDelta,
//    otherRevRegDelta: RevocRegDelta
//  ): Promise<RevocRegDelta> => {
//    return new Promise((resolve) => resolve())
//  }
//
//
//  const proverCreateMasterSecret = (wh: WalletHandle, masterSecretId: string): Promise<string> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const proverCreateCredentialReq = (
//    wh: WalletHandle,
//    proverDid: Did,
//    credOffer: CredOffer,
//    credDef: CredDef,
//    masterSecretId: string
//  ): Promise<[CredReq, CredReqMetadata]> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const proverStoreCredential = (
//    wh: WalletHandle,
//    credentialId: CredentialId | null,
//    credReqMetadata: CredReqMetadata,
//    cred: Cred,
//    credDef: CredDef,
//    revRegDef: RevocRegDef | null
//  ): Promise<CredentialId> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const proverGetCredentials = (wh: WalletHandle, filter: GetCredentialsFilter): Promise<IndyCredentialInfo[]> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const proverGetCredential = (wh: WalletHandle, credId: string): Promise<IndyCredentialInfo> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const proverDeleteCredential = (wh: WalletHandle, credId: string): Promise<void> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const proverGetCredentialsForProofReq = (wh: WalletHandle, proofRequest: IndyProofRequest): Promise<ProofCred> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const proverSearchCredentialsForProofReq = (
//    wh: WalletHandle,
//    proofRequest: IndyProofRequest,
//    extraQuery: ReferentWalletQuery | null
//  ): Promise<SearchHandle> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const proverFetchCredentialsForProofReq = (
//    sh: SearchHandle,
//    itemReferent: string,
//    count: number
//  ): Promise<IndyCredential[]> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const proverCloseCredentialsSearchForProofReq = (sh: SearchHandle): Promise<void> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const proverCreateProof = (
//    wh: WalletHandle,
//    proofRequest: IndyProofRequest,
//    requestedCredentials: IndyRequestedCredentials,
//    masterSecretName: string,
//    schemas: Schemas,
//    credentialDefs: CredentialDefs,
//    revStates: RevStates
//  ): Promise<IndyProof> => {
//    return new Promise((resolve) => resolve())
//  }
//
//
//  const verifierVerifyProof = (
//    proofRequest: IndyProofRequest,
//    proof: IndyProof,
//    schemas: Schemas,
//    credentialDefs: CredentialDefs,
//    revRegDefs: RevocRegDefs,
//    revRegs: RevStates
//  ): Promise<boolean> => {
//    return new Promise((resolve) => resolve())
//  }
//
//
//  const createRevocationState = (
//    blobStorageReaderHandle: BlobReaderHandle,
//    revRegDef: RevocRegDef,
//    revRegDelta: RevocRegDelta,
//    timestamp: number,
//    credRevId: CredRevocId
//  ): Promise<RevState> => {
//    return new Promise((resolve) => resolve())
//  }
//
//
//  const openBlobStorageWriter = (type: string, tailsWriterConfig: TailsWriterConfig): Promise<BlobWriterHandle> => {
//    return new Promise((resolve) => resolve())
//  }
//
//  const openBlobStorageReader = (type: string, tailsReaderConfig: TailsReaderConfig): Promise<BlobReaderHandle> => {
//    return new Promise((resolve) => resolve())
//  }

export const indy = { openWallet, closeWallet, createWallet }
