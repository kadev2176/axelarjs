/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import {
  KeyType,
  keyTypeFromJSON,
  keyTypeToJSON,
} from "../../../tss/exported/v1beta1/types";

export const protobufPackage = "axelar.nexus.exported.v1beta1";

export enum TransferState {
  TRANSFER_STATE_UNSPECIFIED = 0,
  TRANSFER_STATE_PENDING = 1,
  TRANSFER_STATE_ARCHIVED = 2,
  TRANSFER_STATE_INSUFFICIENT_AMOUNT = 3,
  UNRECOGNIZED = -1,
}

export function transferStateFromJSON(object: any): TransferState {
  switch (object) {
    case 0:
    case "TRANSFER_STATE_UNSPECIFIED":
      return TransferState.TRANSFER_STATE_UNSPECIFIED;
    case 1:
    case "TRANSFER_STATE_PENDING":
      return TransferState.TRANSFER_STATE_PENDING;
    case 2:
    case "TRANSFER_STATE_ARCHIVED":
      return TransferState.TRANSFER_STATE_ARCHIVED;
    case 3:
    case "TRANSFER_STATE_INSUFFICIENT_AMOUNT":
      return TransferState.TRANSFER_STATE_INSUFFICIENT_AMOUNT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TransferState.UNRECOGNIZED;
  }
}

export function transferStateToJSON(object: TransferState): string {
  switch (object) {
    case TransferState.TRANSFER_STATE_UNSPECIFIED:
      return "TRANSFER_STATE_UNSPECIFIED";
    case TransferState.TRANSFER_STATE_PENDING:
      return "TRANSFER_STATE_PENDING";
    case TransferState.TRANSFER_STATE_ARCHIVED:
      return "TRANSFER_STATE_ARCHIVED";
    case TransferState.TRANSFER_STATE_INSUFFICIENT_AMOUNT:
      return "TRANSFER_STATE_INSUFFICIENT_AMOUNT";
    case TransferState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum TransferDirection {
  TRANSFER_DIRECTION_UNSPECIFIED = 0,
  TRANSFER_DIRECTION_INCOMING = 1,
  TRANSFER_DIRECTION_OUTGOING = 2,
  UNRECOGNIZED = -1,
}

export function transferDirectionFromJSON(object: any): TransferDirection {
  switch (object) {
    case 0:
    case "TRANSFER_DIRECTION_UNSPECIFIED":
      return TransferDirection.TRANSFER_DIRECTION_UNSPECIFIED;
    case 1:
    case "TRANSFER_DIRECTION_INCOMING":
      return TransferDirection.TRANSFER_DIRECTION_INCOMING;
    case 2:
    case "TRANSFER_DIRECTION_OUTGOING":
      return TransferDirection.TRANSFER_DIRECTION_OUTGOING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TransferDirection.UNRECOGNIZED;
  }
}

export function transferDirectionToJSON(object: TransferDirection): string {
  switch (object) {
    case TransferDirection.TRANSFER_DIRECTION_UNSPECIFIED:
      return "TRANSFER_DIRECTION_UNSPECIFIED";
    case TransferDirection.TRANSFER_DIRECTION_INCOMING:
      return "TRANSFER_DIRECTION_INCOMING";
    case TransferDirection.TRANSFER_DIRECTION_OUTGOING:
      return "TRANSFER_DIRECTION_OUTGOING";
    case TransferDirection.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Chain represents the properties of a registered blockchain */
export interface Chain {
  name: string;
  supportsForeignAssets: boolean;
  keyType: KeyType;
  module: string;
}

/** CrossChainAddress represents a generalized address on any registered chain */
export interface CrossChainAddress {
  chain?: Chain;
  address: string;
}

/**
 * CrossChainTransfer represents a generalized transfer of some asset to a
 * registered blockchain
 */
export interface CrossChainTransfer {
  recipient?: CrossChainAddress;
  asset?: Coin;
  id: Long;
  state: TransferState;
}

/** TransferFee represents accumulated fees generated by the network */
export interface TransferFee {
  coins: Coin[];
}

export interface FeeInfo {
  chain: string;
  asset: string;
  feeRate: Uint8Array;
  minFee: Uint8Array;
  maxFee: Uint8Array;
}

export interface Asset {
  denom: string;
  isNativeAsset: boolean;
}

export interface GeneralMessage {
  id: string;
  sender?: CrossChainAddress;
  recipient?: CrossChainAddress;
  payloadHash: Uint8Array;
  status: GeneralMessage_Status;
  asset?: Coin;
}

export enum GeneralMessage_Status {
  STATUS_UNSPECIFIED = 0,
  STATUS_APPROVED = 1,
  STATUS_SENT = 2,
  STATUS_EXECUTED = 3,
  STATUS_FAILED = 4,
  UNRECOGNIZED = -1,
}

export function generalMessage_StatusFromJSON(
  object: any
): GeneralMessage_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return GeneralMessage_Status.STATUS_UNSPECIFIED;
    case 1:
    case "STATUS_APPROVED":
      return GeneralMessage_Status.STATUS_APPROVED;
    case 2:
    case "STATUS_SENT":
      return GeneralMessage_Status.STATUS_SENT;
    case 3:
    case "STATUS_EXECUTED":
      return GeneralMessage_Status.STATUS_EXECUTED;
    case 4:
    case "STATUS_FAILED":
      return GeneralMessage_Status.STATUS_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GeneralMessage_Status.UNRECOGNIZED;
  }
}

export function generalMessage_StatusToJSON(
  object: GeneralMessage_Status
): string {
  switch (object) {
    case GeneralMessage_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case GeneralMessage_Status.STATUS_APPROVED:
      return "STATUS_APPROVED";
    case GeneralMessage_Status.STATUS_SENT:
      return "STATUS_SENT";
    case GeneralMessage_Status.STATUS_EXECUTED:
      return "STATUS_EXECUTED";
    case GeneralMessage_Status.STATUS_FAILED:
      return "STATUS_FAILED";
    case GeneralMessage_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseChain(): Chain {
  return { name: "", supportsForeignAssets: false, keyType: 0, module: "" };
}

export const Chain = {
  encode(message: Chain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.supportsForeignAssets === true) {
      writer.uint32(24).bool(message.supportsForeignAssets);
    }
    if (message.keyType !== 0) {
      writer.uint32(32).int32(message.keyType);
    }
    if (message.module !== "") {
      writer.uint32(42).string(message.module);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Chain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 3:
          message.supportsForeignAssets = reader.bool();
          break;
        case 4:
          message.keyType = reader.int32() as any;
          break;
        case 5:
          message.module = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Chain {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      supportsForeignAssets: isSet(object.supportsForeignAssets)
        ? Boolean(object.supportsForeignAssets)
        : false,
      keyType: isSet(object.keyType) ? keyTypeFromJSON(object.keyType) : 0,
      module: isSet(object.module) ? String(object.module) : "",
    };
  },

  toJSON(message: Chain): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.supportsForeignAssets !== undefined &&
      (obj.supportsForeignAssets = message.supportsForeignAssets);
    message.keyType !== undefined &&
      (obj.keyType = keyTypeToJSON(message.keyType));
    message.module !== undefined && (obj.module = message.module);
    return obj;
  },

  create<I extends Exact<DeepPartial<Chain>, I>>(base?: I): Chain {
    return Chain.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Chain>, I>>(object: I): Chain {
    const message = createBaseChain();
    message.name = object.name ?? "";
    message.supportsForeignAssets = object.supportsForeignAssets ?? false;
    message.keyType = object.keyType ?? 0;
    message.module = object.module ?? "";
    return message;
  },
};

function createBaseCrossChainAddress(): CrossChainAddress {
  return { chain: undefined, address: "" };
}

export const CrossChainAddress = {
  encode(
    message: CrossChainAddress,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.chain !== undefined) {
      Chain.encode(message.chain, writer.uint32(10).fork()).ldelim();
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CrossChainAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCrossChainAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = Chain.decode(reader, reader.uint32());
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CrossChainAddress {
    return {
      chain: isSet(object.chain) ? Chain.fromJSON(object.chain) : undefined,
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: CrossChainAddress): unknown {
    const obj: any = {};
    message.chain !== undefined &&
      (obj.chain = message.chain ? Chain.toJSON(message.chain) : undefined);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create<I extends Exact<DeepPartial<CrossChainAddress>, I>>(
    base?: I
  ): CrossChainAddress {
    return CrossChainAddress.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CrossChainAddress>, I>>(
    object: I
  ): CrossChainAddress {
    const message = createBaseCrossChainAddress();
    message.chain =
      object.chain !== undefined && object.chain !== null
        ? Chain.fromPartial(object.chain)
        : undefined;
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseCrossChainTransfer(): CrossChainTransfer {
  return { recipient: undefined, asset: undefined, id: Long.UZERO, state: 0 };
}

export const CrossChainTransfer = {
  encode(
    message: CrossChainTransfer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.recipient !== undefined) {
      CrossChainAddress.encode(
        message.recipient,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(18).fork()).ldelim();
    }
    if (!message.id.isZero()) {
      writer.uint32(24).uint64(message.id);
    }
    if (message.state !== 0) {
      writer.uint32(32).int32(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CrossChainTransfer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCrossChainTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recipient = CrossChainAddress.decode(reader, reader.uint32());
          break;
        case 2:
          message.asset = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.id = reader.uint64() as Long;
          break;
        case 4:
          message.state = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CrossChainTransfer {
    return {
      recipient: isSet(object.recipient)
        ? CrossChainAddress.fromJSON(object.recipient)
        : undefined,
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined,
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      state: isSet(object.state) ? transferStateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: CrossChainTransfer): unknown {
    const obj: any = {};
    message.recipient !== undefined &&
      (obj.recipient = message.recipient
        ? CrossChainAddress.toJSON(message.recipient)
        : undefined);
    message.asset !== undefined &&
      (obj.asset = message.asset ? Coin.toJSON(message.asset) : undefined);
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.state !== undefined &&
      (obj.state = transferStateToJSON(message.state));
    return obj;
  },

  create<I extends Exact<DeepPartial<CrossChainTransfer>, I>>(
    base?: I
  ): CrossChainTransfer {
    return CrossChainTransfer.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CrossChainTransfer>, I>>(
    object: I
  ): CrossChainTransfer {
    const message = createBaseCrossChainTransfer();
    message.recipient =
      object.recipient !== undefined && object.recipient !== null
        ? CrossChainAddress.fromPartial(object.recipient)
        : undefined;
    message.asset =
      object.asset !== undefined && object.asset !== null
        ? Coin.fromPartial(object.asset)
        : undefined;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseTransferFee(): TransferFee {
  return { coins: [] };
}

export const TransferFee = {
  encode(
    message: TransferFee,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransferFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransferFee {
    return {
      coins: Array.isArray(object?.coins)
        ? object.coins.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TransferFee): unknown {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TransferFee>, I>>(base?: I): TransferFee {
    return TransferFee.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TransferFee>, I>>(
    object: I
  ): TransferFee {
    const message = createBaseTransferFee();
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFeeInfo(): FeeInfo {
  return {
    chain: "",
    asset: "",
    feeRate: new Uint8Array(),
    minFee: new Uint8Array(),
    maxFee: new Uint8Array(),
  };
}

export const FeeInfo = {
  encode(
    message: FeeInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    if (message.feeRate.length !== 0) {
      writer.uint32(26).bytes(message.feeRate);
    }
    if (message.minFee.length !== 0) {
      writer.uint32(34).bytes(message.minFee);
    }
    if (message.maxFee.length !== 0) {
      writer.uint32(42).bytes(message.maxFee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeeInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = reader.string();
          break;
        case 2:
          message.asset = reader.string();
          break;
        case 3:
          message.feeRate = reader.bytes();
          break;
        case 4:
          message.minFee = reader.bytes();
          break;
        case 5:
          message.maxFee = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeeInfo {
    return {
      chain: isSet(object.chain) ? String(object.chain) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
      feeRate: isSet(object.feeRate)
        ? bytesFromBase64(object.feeRate)
        : new Uint8Array(),
      minFee: isSet(object.minFee)
        ? bytesFromBase64(object.minFee)
        : new Uint8Array(),
      maxFee: isSet(object.maxFee)
        ? bytesFromBase64(object.maxFee)
        : new Uint8Array(),
    };
  },

  toJSON(message: FeeInfo): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain);
    message.asset !== undefined && (obj.asset = message.asset);
    message.feeRate !== undefined &&
      (obj.feeRate = base64FromBytes(
        message.feeRate !== undefined ? message.feeRate : new Uint8Array()
      ));
    message.minFee !== undefined &&
      (obj.minFee = base64FromBytes(
        message.minFee !== undefined ? message.minFee : new Uint8Array()
      ));
    message.maxFee !== undefined &&
      (obj.maxFee = base64FromBytes(
        message.maxFee !== undefined ? message.maxFee : new Uint8Array()
      ));
    return obj;
  },

  create<I extends Exact<DeepPartial<FeeInfo>, I>>(base?: I): FeeInfo {
    return FeeInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FeeInfo>, I>>(object: I): FeeInfo {
    const message = createBaseFeeInfo();
    message.chain = object.chain ?? "";
    message.asset = object.asset ?? "";
    message.feeRate = object.feeRate ?? new Uint8Array();
    message.minFee = object.minFee ?? new Uint8Array();
    message.maxFee = object.maxFee ?? new Uint8Array();
    return message;
  },
};

function createBaseAsset(): Asset {
  return { denom: "", isNativeAsset: false };
}

export const Asset = {
  encode(message: Asset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.isNativeAsset === true) {
      writer.uint32(24).bool(message.isNativeAsset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Asset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 3:
          message.isNativeAsset = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Asset {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      isNativeAsset: isSet(object.isNativeAsset)
        ? Boolean(object.isNativeAsset)
        : false,
    };
  },

  toJSON(message: Asset): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.isNativeAsset !== undefined &&
      (obj.isNativeAsset = message.isNativeAsset);
    return obj;
  },

  create<I extends Exact<DeepPartial<Asset>, I>>(base?: I): Asset {
    return Asset.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Asset>, I>>(object: I): Asset {
    const message = createBaseAsset();
    message.denom = object.denom ?? "";
    message.isNativeAsset = object.isNativeAsset ?? false;
    return message;
  },
};

function createBaseGeneralMessage(): GeneralMessage {
  return {
    id: "",
    sender: undefined,
    recipient: undefined,
    payloadHash: new Uint8Array(),
    status: 0,
    asset: undefined,
  };
}

export const GeneralMessage = {
  encode(
    message: GeneralMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.sender !== undefined) {
      CrossChainAddress.encode(
        message.sender,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.recipient !== undefined) {
      CrossChainAddress.encode(
        message.recipient,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.payloadHash.length !== 0) {
      writer.uint32(34).bytes(message.payloadHash);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (message.asset !== undefined) {
      Coin.encode(message.asset, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GeneralMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeneralMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.sender = CrossChainAddress.decode(reader, reader.uint32());
          break;
        case 3:
          message.recipient = CrossChainAddress.decode(reader, reader.uint32());
          break;
        case 4:
          message.payloadHash = reader.bytes();
          break;
        case 5:
          message.status = reader.int32() as any;
          break;
        case 6:
          message.asset = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GeneralMessage {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      sender: isSet(object.sender)
        ? CrossChainAddress.fromJSON(object.sender)
        : undefined,
      recipient: isSet(object.recipient)
        ? CrossChainAddress.fromJSON(object.recipient)
        : undefined,
      payloadHash: isSet(object.payloadHash)
        ? bytesFromBase64(object.payloadHash)
        : new Uint8Array(),
      status: isSet(object.status)
        ? generalMessage_StatusFromJSON(object.status)
        : 0,
      asset: isSet(object.asset) ? Coin.fromJSON(object.asset) : undefined,
    };
  },

  toJSON(message: GeneralMessage): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.sender !== undefined &&
      (obj.sender = message.sender
        ? CrossChainAddress.toJSON(message.sender)
        : undefined);
    message.recipient !== undefined &&
      (obj.recipient = message.recipient
        ? CrossChainAddress.toJSON(message.recipient)
        : undefined);
    message.payloadHash !== undefined &&
      (obj.payloadHash = base64FromBytes(
        message.payloadHash !== undefined
          ? message.payloadHash
          : new Uint8Array()
      ));
    message.status !== undefined &&
      (obj.status = generalMessage_StatusToJSON(message.status));
    message.asset !== undefined &&
      (obj.asset = message.asset ? Coin.toJSON(message.asset) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GeneralMessage>, I>>(
    base?: I
  ): GeneralMessage {
    return GeneralMessage.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GeneralMessage>, I>>(
    object: I
  ): GeneralMessage {
    const message = createBaseGeneralMessage();
    message.id = object.id ?? "";
    message.sender =
      object.sender !== undefined && object.sender !== null
        ? CrossChainAddress.fromPartial(object.sender)
        : undefined;
    message.recipient =
      object.recipient !== undefined && object.recipient !== null
        ? CrossChainAddress.fromPartial(object.recipient)
        : undefined;
    message.payloadHash = object.payloadHash ?? new Uint8Array();
    message.status = object.status ?? 0;
    message.asset =
      object.asset !== undefined && object.asset !== null
        ? Coin.fromPartial(object.asset)
        : undefined;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
