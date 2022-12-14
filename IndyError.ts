import { getCurrentError } from "./indy.ts"

const errors = {
  100: "CommonInvalidParam1",
  101: "CommonInvalidParam2",
  102: "CommonInvalidParam3",
  103: "CommonInvalidParam4",
  104: "CommonInvalidParam5",
  105: "CommonInvalidParam6",
  106: "CommonInvalidParam7",
  107: "CommonInvalidParam8",
  108: "CommonInvalidParam9",
  109: "CommonInvalidParam10",
  110: "CommonInvalidParam11",
  111: "CommonInvalidParam12",
  112: "CommonInvalidState",
  113: "CommonInvalidStructure",
  114: "CommonIOError",
  115: "CommonInvalidParam13",
  116: "CommonInvalidParam14",
  200: "WalletInvalidHandle",
  201: "WalletUnknownTypeError",
  202: "WalletTypeAlreadyRegisteredError",
  203: "WalletAlreadyExistsError",
  204: "WalletNotFoundError",
  205: "WalletIncompatiblePoolError",
  206: "WalletAlreadyOpenedError",
  207: "WalletAccessFailed",
  208: "WalletInputError",
  209: "WalletDecodingError",
  210: "WalletStorageError",
  211: "WalletEncryptionError",
  212: "WalletItemNotFound",
  213: "WalletItemAlreadyExists",
  214: "WalletQueryError",
  300: "PoolLedgerNotCreatedError",
  301: "PoolLedgerInvalidPoolHandle",
  302: "PoolLedgerTerminated",
  303: "LedgerNoConsensusError",
  304: "LedgerInvalidTransaction",
  305: "LedgerSecurityError",
  306: "PoolLedgerConfigAlreadyExistsError",
  307: "PoolLedgerTimeout",
  308: "PoolIncompatibleProtocolVersion",
  309: "LedgerNotFound",
  400: "AnoncredsRevocationRegistryFullError",
  401: "AnoncredsInvalidUserRevocId",
  404: "AnoncredsMasterSecretDuplicateNameError",
  405: "AnoncredsProofRejected",
  406: "AnoncredsCredentialRevoked",
  407: "AnoncredsCredDefAlreadyExistsError",
  500: "UnknownCryptoTypeError",
  600: "DidAlreadyExistsError",
  700: "PaymentUnknownMethodError",
  701: "PaymentIncompatibleMethodsError",
  702: "PaymentInsufficientFundsError",
  703: "PaymentSourceDoesNotExistError",
  704: "PaymentOperationNotSupportedError",
  705: "PaymentExtraFundsError",
  706: "TransactionNotAllowedError",
}

export class IndyError extends Error {
  constructor({ number, message, backtrace }: { number: number; message: string; backtrace?: string }) {
    super()
    this.name = errors[number as keyof typeof errors]
    this.message = message
    this.stack = backtrace
  }

  public static handleError(error: number) {
    if (error === 0) return

    const errorMessage = getCurrentError()
    return {
      number: error,
      name: errors[error as keyof typeof errors],
      ...JSON.parse(errorMessage),
    }
  }
}
