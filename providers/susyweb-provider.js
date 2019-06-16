'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var json_rpc_provider_1 = require("./json-rpc-provider");
var properties_1 = require("../utils/properties");
var errors = __importStar(require("../errors"));
/*
@TODO
utils.defineProperty(SusyWebSigner, 'onchange', {

});

*/
var SusyWebProvider = /** @class */ (function (_super) {
    __extends(SusyWebProvider, _super);
    function SusyWebProvider(susywebProvider, network) {
        var _this = 
        // HTTP has a host; IPC has a path.
        _super.call(this, susywebProvider.host || susywebProvider.path || '', network) || this;
        errors.checkNew(_this, SusyWebProvider);
        if (susywebProvider) {
            if (susywebProvider.sendAsync) {
                _this._sendAsync = susywebProvider.sendAsync.bind(susywebProvider);
            }
            else if (susywebProvider.send) {
                _this._sendAsync = susywebProvider.send.bind(susywebProvider);
            }
        }
        if (!susywebProvider || !_this._sendAsync) {
            errors.throwError('invalid susywebProvider', errors.INVALID_ARGUMENT, { arg: 'susywebProvider', value: susywebProvider });
        }
        properties_1.defineReadOnly(_this, '_susywebProvider', susywebProvider);
        return _this;
    }
    SusyWebProvider.prototype.send = function (method, params) {
        var _this = this;
        // Metamask complains about sof_sign (and on some versions hangs)
        if (method == 'sof_sign' && this._susywebProvider.isMetaMask) {
            // https://octonion.institute/susy-go/susy-graviton/wiki/Management-APIs#personal_sign
            method = 'personal_sign';
            params = [params[1], params[0]];
        }
        return new Promise(function (resolve, reject) {
            var request = {
                method: method,
                params: params,
                id: 42,
                jsonrpc: "2.0"
            };
            _this._sendAsync(request, function (error, result) {
                if (error) {
                    reject(error);
                    return;
                }
                if (result.error) {
                    // @TODO: not any
                    var error = new Error(result.error.message);
                    error.code = result.error.code;
                    error.data = result.error.data;
                    reject(error);
                    return;
                }
                resolve(result.result);
            });
        });
    };
    return SusyWebProvider;
}(json_rpc_provider_1.JsonRpcProvider));
exports.SusyWebProvider = SusyWebProvider;
