import { load } from "./load.ts"
import {
  COMMAND_HANDLE,
  WALLET_HANDLE,
  ERROR_CODE,
  FUNCTION,
  POINTER,
  U32,
  VOID,
  STRING,
  U64,
  I64,
  I32,
  BOOL,
  POOL_HANDLE,
  INDY_HANDLE,
  DATA,
  USIZE,
  SEARCH_HANDLE,
} from "./primitives.ts"

export const library = Deno.dlopen(load(), {
  setLoggerWithMaxLvl: {
    parameters: [POINTER, FUNCTION, FUNCTION, FUNCTION, U32],
    result: ERROR_CODE,
    name: "indy_set_logger_with_max_lvl",
  },
  getCurrentError: {
    parameters: [POINTER],
    result: VOID,
    name: "indy_get_current_error",
  },
  abbreviateVerkey: {
    parameters: [COMMAND_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_abbreviate_verkey",
  },
  addRequestFees: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, STRING, STRING, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_add_request_fees",
  },
  addWalletRecord: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, STRING, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_add_wallet_record",
  },
  addWalletRecordTags: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_add_wallet_record_tags",
  },
  appendRequestEndorser: {
    parameters: [COMMAND_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_append_request_endorser",
  },
  appendTxnAuthorAgreementAcceptanceToRequest: {
    parameters: [COMMAND_HANDLE, STRING, STRING, STRING, STRING, STRING, U64, FUNCTION],
    result: ERROR_CODE,
    name: "indy_build_acceptance_mechanisms_request",
  },
  buildAcceptanceMechanismsRequest: {
    parameters: [COMMAND_HANDLE, STRING, STRING, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_build_acceptance_mechanisms_request",
  },
  buildAttribRequest: {
    parameters: [COMMAND_HANDLE, STRING, STRING, STRING, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_build_attrib_request",
  },
  buildAuthRuleRequest: {
    parameters: [COMMAND_HANDLE, STRING, STRING, STRING, STRING, STRING, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_build_auth_rule_request",
  },
  buildAuthRulesRequest: {
    parameters: [COMMAND_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_build_auth_rules_request",
  },
  buildCredDefRequest: {
    parameters: [COMMAND_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_build_cred_def_request",
  },
  buildDisableAllTxnAuthorAgreementsRequest: {
    parameters: [COMMAND_HANDLE, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_build_disable_all_txn_author_agreements_request",
  },
  buildGetAcceptanceMechanismsRequest: {
    parameters: [COMMAND_HANDLE, STRING, STRING, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_build_get_acceptance_mechanisms_request",
  },
  buildGetAttribRequest: {
    parameters: [COMMAND_HANDLE, STRING, STRING, STRING, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_build_get_attrib_request",
  },
  buildGetAuthRuleRequest: {
    parameters: [COMMAND_HANDLE, STRING, STRING, STRING, STRING, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_build_get_auth_rule_request",
  },
  buildGetCredDefRequest: {
    parameters: [COMMAND_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_build_get_cred_def_request",
  },
  buildGetDdoRequest: {
    parameters: [COMMAND_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_build_get_ddo_request",
  },
  buildGetFrozenLedgersRequest: {
    parameters: [COMMAND_HANDLE, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_build_get_frozen_ledgers_request",
  },
  buildGetNymRequest: {
    parameters: [COMMAND_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_build_get_nym_request",
  },
  buildGetPaymentSourcesRequest: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_build_get_payment_sources_request",
  },
  buildGetPaymentSourcesWithFromRequest: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_build_get_payment_sources_with_from_request",
  },
  buildGetRevocRegDefRequest: {
    parameters: [COMMAND_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_build_get_revoc_reg_def_request",
  },
  buildGetRevocRegDeltaRequest: {
    parameters: [COMMAND_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_build_get_revoc_reg_delta_request",
  },
  buildGetRevocRegRequest: {
    parameters: [COMMAND_HANDLE, STRING, STRING, I64, FUNCTION],
    result: ERROR_CODE,
    name: "indy_build_get_revoc_reg_request",
  },
  buildGetSchemaRequest: {
    parameters: [COMMAND_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_build_get_schema_request",
  },
  buildGetTxnAuthorAgreementRequest: {
    parameters: [COMMAND_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_build_get_txn_author_agreement_request",
  },
  buildGetTxnFeesReq: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_build_get_txn_fees_req",
  },
  buildGetTxnRequest: {
    parameters: [COMMAND_HANDLE, STRING, STRING, I32, FUNCTION],
    result: ERROR_CODE,
    name: "indy_build_get_txn_request",
  },
  buildGetValidatorInfoRequest: {
    parameters: [COMMAND_HANDLE, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_build_get_validator_info_request",
  },
  buildLedgersFreezeRequest: {
    parameters: [COMMAND_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_build_ledgers_freeze_request",
  },
  buildMintReq: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_build_mint_req",
  },
  buildNodeRequest: {
    parameters: [COMMAND_HANDLE, STRING, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_build_node_request",
  },
  buildNymRequest: {
    parameters: [COMMAND_HANDLE, STRING, STRING, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_build_nym_request",
  },
  buildPaymentReq: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, STRING, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_build_payment_req",
  },
  buildPoolConfigRequest: {
    parameters: [COMMAND_HANDLE, STRING, BOOL, BOOL, FUNCTION],
    result: ERROR_CODE,
    name: "indy_build_pool_config_request",
  },
  buildPoolRestartRequest: {
    parameters: [COMMAND_HANDLE, STRING, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_build_pool_restart_request",
  },
  buildPoolUpgradeRequest: {
    parameters: [
      COMMAND_HANDLE,
      STRING,
      STRING,
      STRING,
      STRING,
      STRING,
      I32,
      STRING,
      STRING,
      BOOL,
      BOOL,
      STRING,
      FUNCTION,
    ],
    result: ERROR_CODE,
    name: "indy_build_pool_upgrade_request",
  },
  buildRevocRegDefRequest: {
    parameters: [COMMAND_HANDLE, FUNCTION],
    result: ERROR_CODE,
    name: "indy_build_revoc_reg_def_request",
  },
  buildRevocRegEntryRequest: {
    parameters: [COMMAND_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_build_revoc_reg_entry_request",
  },
  buildSchemaRequest: {
    parameters: [COMMAND_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_build_schema_request",
  },
  buildSetTxnFeesReq: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_build_set_txn_fees_req",
  },
  buildTxnAuthorAgreementRequest: {
    parameters: [COMMAND_HANDLE, STRING, STRING, STRING, I64, I64, FUNCTION],
    result: ERROR_CODE,
    name: "indy_build_txn_author_agreement_request",
  },
  buildVerifyPaymentReq: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_build_verify_payment_req",
  },
  closePoolLedger: {
    parameters: [COMMAND_HANDLE, POOL_HANDLE, FUNCTION],
    result: ERROR_CODE,
    name: "indy_close_pool_ledger",
  },
  closeWallet: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, FUNCTION],
    result: ERROR_CODE,
    name: "indy_close_wallet",
  },
  closeWalletSearch: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, FUNCTION],
    result: ERROR_CODE,
    name: "indy_close_wallet_search",
  },
  collectMetrics: {
    parameters: [COMMAND_HANDLE, FUNCTION],
    result: ERROR_CODE,
    name: "indy_collect_metrics",
  },
  createAndStoreMyDid: {
    parameters: [COMMAND_HANDLE, FUNCTION],
    result: ERROR_CODE,
    name: "indy_create_and_store_my_did",
  },
  createKey: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_create_key",
  },
  createPairwise: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_create_pairwise",
  },
  createPaymentAddress: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_create_payment_address",
  },
  createPoolLedgerConfig: {
    parameters: [COMMAND_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_create_pool_ledger_config",
  },
  createRevocationState: {
    parameters: [COMMAND_HANDLE, INDY_HANDLE, STRING, STRING, U64, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_create_revocation_state",
  },
  createWallet: {
    parameters: [COMMAND_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_create_wallet",
  },
  cryptoAnonCrypt: {
    parameters: [COMMAND_HANDLE, STRING, DATA, U32, FUNCTION],
    result: ERROR_CODE,
    name: "indy_crypto_anon_crypt",
  },
  cryptoAnonDecrypt: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, DATA, U32, FUNCTION],
    result: ERROR_CODE,
    name: "indy_crypto_anon_decrypt",
  },
  cryptoAuthCrypt: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, STRING, DATA, U32, FUNCTION],
    result: ERROR_CODE,
    name: "indy_crypto_auth_crypt",
  },
  cryptoAuthDecrypt: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, DATA, U32, FUNCTION],
    result: ERROR_CODE,
    name: "indy_crypto_auth_decrypt",
  },
  cryptoSign: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, DATA, U32, FUNCTION],
    result: ERROR_CODE,
    name: "indy_crypto_sign",
  },
  cryptoVerify: {
    parameters: [COMMAND_HANDLE, STRING, DATA, U32, DATA, U32, FUNCTION],
    result: ERROR_CODE,
    name: "indy_crypto_verify",
  },
  deletePoolLedgerConfig: {
    parameters: [COMMAND_HANDLE, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_delete_pool_ledger_config",
  },
  deleteWallet: {
    parameters: [COMMAND_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_delete_wallet",
  },
  deleteWalletRecord: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_delete_wallet_record",
  },
  deleteWalletRecordTags: {
    parameters: [COMMAND_HANDLE, STRING, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_delete_wallet_record_tags",
  },
  exportWallet: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_export_wallet",
  },
  fetchWalletSearchNextRecords: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, SEARCH_HANDLE, USIZE, FUNCTION],
    result: ERROR_CODE,
    name: "indy_fetch_wallet_search_next_records",
  },
  generateNonce: {
    parameters: [COMMAND_HANDLE, FUNCTION],
    result: ERROR_CODE,
    name: "indy_generate_nonce",
  },
  generateWalletKey: {
    parameters: [COMMAND_HANDLE, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_generate_wallet_key",
  },
  getCredDef: {
    parameters: [COMMAND_HANDLE, POOL_HANDLE, WALLET_HANDLE, STRING, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_get_cred_def",
  },
  getDidMetadata: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_get_did_metadata",
  },
  getEndpointForDid: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, POOL_HANDLE, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_get_endpoint_for_did",
  },
  getKeyMetadata: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_get_key_metadata",
  },
  getLogger: {
    parameters: [POINTER, FUNCTION, FUNCTION, FUNCTION],
    result: ERROR_CODE,
    name: "indy_get_logger",
  },
  getMyDidWithMeta: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_get_my_did_with_meta",
  },
  getPairwise: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_get_pairwise",
  },
  getRequestInfo: {
    parameters: [COMMAND_HANDLE, STRING, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_get_request_info",
  },
  getResponseMetadata: {
    parameters: [COMMAND_HANDLE, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_get_response_metadata",
  },
  getSchema: {
    parameters: [COMMAND_HANDLE, POOL_HANDLE, WALLET_HANDLE, STRING, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_get_schema",
  },
  getWalletRecord: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_get_wallet_record",
  },
  importWallet: {
    parameters: [COMMAND_HANDLE, STRING, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_import_wallet",
  },
  isPairwiseExists: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_is_pairwise_exists",
  },
  issuerCreateAndStoreCredentialDef: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, STRING, STRING, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_issuer_create_and_store_credential_def",
  },
  issuerCreateAndStoreRevocReg: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, STRING, STRING, STRING, STRING, INDY_HANDLE, FUNCTION],
    result: ERROR_CODE,
    name: "indy_issuer_create_and_store_revoc_reg",
  },
  issuerCreateCredential: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_issuer_create_credential",
  },
  issuerCreateCredentialOffer: {
    parameters: [COMMAND_HANDLE, FUNCTION],
    result: ERROR_CODE,
    name: "indy_issuer_create_credential_offer",
  },
  issuerCreateSchema: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_issuer_create_schema",
  },
  issuerMergeRevocationRegistryDeltas: {
    parameters: [COMMAND_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_issuer_merge_revocation_registry_deltas",
  },
  issuerRevokeCredential: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, INDY_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_issuer_revoke_credential",
  },
  issuerRotateCredentialDefApply: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_issuer_rotate_credential_def_apply",
  },
  issuerRotateCredentialDefStart: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_issuer_rotate_credential_def_start",
  },
  keyForDid: {
    parameters: [COMMAND_HANDLE, POOL_HANDLE, WALLET_HANDLE, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_key_for_did",
  },
  keyForLocalDid: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_key_for_local_did",
  },
  listMyDidsWithMeta: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, FUNCTION],
    result: ERROR_CODE,
    name: "indy_list_my_dids_with_meta",
  },
  listPairwise: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, FUNCTION],
    result: ERROR_CODE,
    name: "indy_list_pairwise",
  },
  listPaymentAddresses: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, FUNCTION],
    result: ERROR_CODE,
    name: "indy_list_payment_addresses",
  },
  listPools: {
    parameters: [COMMAND_HANDLE, FUNCTION],
    result: ERROR_CODE,
    name: "indy_list_pools",
  },
  multiSignRequest: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_multi_sign_request",
  },
  openBlobStorageReader: {
    parameters: [COMMAND_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_open_blob_storage_reader",
  },
  openBlobStorageWriter: {
    parameters: [COMMAND_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_open_blob_storage_writer",
  },
  openPoolLedger: {
    parameters: [COMMAND_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_open_pool_ledger",
  },
  openWallet: {
    parameters: [COMMAND_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_open_wallet",
  },
  openWalletSearch: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_open_wallet_search",
  },
  packMessage: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, DATA, U32, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_pack_message",
  },
  parseGetCredDefResponse: {
    parameters: [COMMAND_HANDLE, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_parse_get_cred_def_response",
  },
  parseGetNymResponse: {
    parameters: [COMMAND_HANDLE, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_parse_get_nym_response",
  },
  parseGetPaymentSourcesResponse: {
    parameters: [COMMAND_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_parse_get_payment_sources_response",
  },
  parseGetPaymentSourcesWithFromResponse: {
    parameters: [COMMAND_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_parse_get_payment_sources_with_from_response",
  },
  parseGetRevocRegDefResponse: {
    parameters: [COMMAND_HANDLE, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_parse_get_revoc_reg_def_response",
  },
  parseGetRevocRegDeltaResponse: {
    parameters: [COMMAND_HANDLE, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_parse_get_revoc_reg_delta_response",
  },
  parseGetRevocRegResponse: {
    parameters: [COMMAND_HANDLE, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_parse_get_revoc_reg_response",
  },
  parseGetSchemaResponse: {
    parameters: [COMMAND_HANDLE, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_parse_get_schema_response",
  },
  parseGetTxnFeesResponse: {
    parameters: [COMMAND_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_parse_get_txn_fees_response",
  },
  parsePaymentResponse: {
    parameters: [COMMAND_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_parse_payment_response",
  },
  parseResponseWithFees: {
    parameters: [COMMAND_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_parse_response_with_fees",
  },
  parseVerifyPaymentResponse: {
    parameters: [COMMAND_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_parse_verify_payment_response",
  },
  preparePaymentExtraWithAcceptanceData: {
    parameters: [COMMAND_HANDLE, STRING, STRING, STRING, STRING, STRING, U64, FUNCTION],
    result: ERROR_CODE,
    name: "indy_prepare_payment_extra_with_acceptance_data",
  },
  proverCloseCredentialsSearch: {
    parameters: [COMMAND_HANDLE, SEARCH_HANDLE, FUNCTION],
    result: ERROR_CODE,
    name: "indy_prover_close_credentials_search",
  },
  proverCloseCredentialsSearchForProofReq: {
    parameters: [COMMAND_HANDLE, SEARCH_HANDLE, FUNCTION],
    result: ERROR_CODE,
    name: "indy_prover_close_credentials_search_for_proof_req",
  },
  proverCreateCredentialReq: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, STRING, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_prover_create_credential_req",
  },
  proverCreateMasterSecret: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_prover_create_master_secret",
  },
  proverCreateProof: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, STRING, STRING, STRING, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_prover_create_proof",
  },
  proverDeleteCredential: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_prover_delete_credential",
  },
  proverFetchCredentials: {
    parameters: [COMMAND_HANDLE, SEARCH_HANDLE, USIZE, FUNCTION],
    result: ERROR_CODE,
    name: "indy_prover_fetch_credentials",
  },
  proverFetchCredentialsForProofReq: {
    parameters: [COMMAND_HANDLE, SEARCH_HANDLE, STRING, USIZE, FUNCTION],
    result: ERROR_CODE,
    name: "indy_prover_fetch_credentials_for_proof_req",
  },
  proverGetCredential: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_prover_get_credential",
  },
  proverGetCredentialAttrTagPolicy: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_prover_get_credential_attr_tag_policy",
  },
  proverGetCredentials: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_prover_get_credentials",
  },
  proverGetCredentialsForProofReq: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_prover_get_credentials_for_proof_req",
  },
  proverSearchCredentials: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_prover_search_credentials",
  },
  proverSearchCredentialsForProofReq: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_prover_search_credentials_for_proof_req",
  },
  proverSetCredentialAttrTagPolicy: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, STRING, BOOL, FUNCTION],
    result: ERROR_CODE,
    name: "indy_prover_set_credential_attr_tag_policy",
  },
  proverStoreCredential: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, STRING, STRING, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_prover_store_credential",
  },
  purgeCredDefCache: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_purge_cred_def_cache",
  },
  purgeSchemaCache: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_purge_schema_cache",
  },
  qualifyDid: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_qualify_did",
  },
  refreshPoolLedger: {
    parameters: [COMMAND_HANDLE, POOL_HANDLE, FUNCTION],
    result: ERROR_CODE,
    name: "indy_refresh_pool_ledger",
  },
  // NOT IMPLEMENTED
  registerPaymentMethod: {
    parameters: [],
    result: ERROR_CODE,
    name: "indy_register_payment_method",
  },
  // NOT IMPLEMENTED
  registerTransactionParserForSp: {
    parameters: [],
    result: ERROR_CODE,
    name: "indy_register_transaction_parser_for_sp",
  },
  // NOT IMPLEMENTED
  registerWalletStorage: {
    parameters: [COMMAND_HANDLE, FUNCTION],
    result: ERROR_CODE,
    name: "indy_register_wallet_storage",
  },
  replaceKeysApply: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_replace_keys_apply",
  },
  replaceKeysStart: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_replace_keys_start",
  },
  setDefaultLogger: {
    parameters: [STRING],
    result: ERROR_CODE,
    name: "indy_set_default_logger",
  },
  setDidMetadata: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_set_did_metadata",
  },
  setEndpointForDid: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_set_endpoint_for_did",
  },
  setKeyMetadata: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_set_key_metadata",
  },
  setLogMaxLvl: {
    parameters: [U32],
    result: ERROR_CODE,
    name: "indy_set_log_max_lvl",
  },
  setLogger: {
    parameters: [POINTER, FUNCTION, FUNCTION, FUNCTION],
    result: ERROR_CODE,
    name: "indy_set_logger",
  },
  setPairwiseMetadata: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_set_pairwise_metadata",
  },
  setProtocolVersion: {
    parameters: [COMMAND_HANDLE, USIZE, FUNCTION],
    result: ERROR_CODE,
    name: "indy_set_protocol_version",
  },
  setRuntimeConfig: {
    parameters: [STRING],
    result: ERROR_CODE,
    name: "indy_set_runtime_config",
  },
  signAndSubmitRequest: {
    parameters: [COMMAND_HANDLE, POOL_HANDLE, WALLET_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_sign_and_submit_request",
  },
  signRequest: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_sign_request",
  },
  signWithAddress: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, DATA, U32, FUNCTION],
    result: ERROR_CODE,
    name: "indy_sign_with_address",
  },
  storeTheirDid: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_store_their_did",
  },
  submitAction: {
    parameters: [COMMAND_HANDLE, POOL_HANDLE, STRING, STRING, I32, FUNCTION],
    result: ERROR_CODE,
    name: "indy_submit_action",
  },
  submitRequest: {
    parameters: [COMMAND_HANDLE, POOL_HANDLE, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_submit_request",
  },
  toUnqualified: {
    parameters: [COMMAND_HANDLE, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_to_unqualified",
  },
  unpackMessage: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, DATA, U32, FUNCTION],
    result: ERROR_CODE,
    name: "indy_unpack_message",
  },
  updateRevocationState: {
    parameters: [COMMAND_HANDLE, INDY_HANDLE, STRING, STRING, STRING, U64, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_update_revocation_state",
  },
  updateWalletRecordTags: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_update_wallet_record_tags",
  },
  updateWalletRecordValue: {
    parameters: [COMMAND_HANDLE, WALLET_HANDLE, STRING, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_update_wallet_record_value",
  },
  verifierVerifyProof: {
    parameters: [COMMAND_HANDLE, STRING, STRING, STRING, STRING, STRING, STRING, FUNCTION],
    result: ERROR_CODE,
    name: "indy_verifier_verify_proof",
  },
  verifyWithAddress: {
    parameters: [COMMAND_HANDLE, STRING, DATA, U32, DATA, U32, FUNCTION],
    result: ERROR_CODE,
    name: "indy_verify_with_address",
  },
} as const)
