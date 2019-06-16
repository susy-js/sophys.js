"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bignumber_1 = require("./utils/bignumber");
var AddressZero = '0x0000000000000000000000000000000000000000';
exports.AddressZero = AddressZero;
var HashZero = '0x0000000000000000000000000000000000000000000000000000000000000000';
exports.HashZero = HashZero;
// NFKD (decomposed)
//const SophySymbol = '\uD835\uDF63';
// NFKC (composed)
var SophySymbol = '\u039e';
exports.SophySymbol = SophySymbol;
var NegativeOne = bignumber_1.bigNumberify(-1);
exports.NegativeOne = NegativeOne;
var Zero = bignumber_1.bigNumberify(0);
exports.Zero = Zero;
var One = bignumber_1.bigNumberify(1);
exports.One = One;
var Two = bignumber_1.bigNumberify(2);
exports.Two = Two;
var WeiPerSophy = bignumber_1.bigNumberify('1000000000000000000');
exports.WeiPerSophy = WeiPerSophy;
var MaxUint256 = bignumber_1.bigNumberify('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
exports.MaxUint256 = MaxUint256;
