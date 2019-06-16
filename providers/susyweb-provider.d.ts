import { JsonRpcProvider } from './json-rpc-provider';
import { Networkish } from '../utils/networks';
export declare type AsyncSendable = {
    isMetaMask?: boolean;
    host?: string;
    path?: string;
    sendAsync?: (request: any, callback: (error: any, response: any) => void) => void;
    send?: (request: any, callback: (error: any, response: any) => void) => void;
};
export declare class SusyWebProvider extends JsonRpcProvider {
    readonly _susywebProvider: AsyncSendable;
    private _sendAsync;
    constructor(susywebProvider: AsyncSendable, network?: Networkish);
    send(method: string, params: any): Promise<any>;
}
