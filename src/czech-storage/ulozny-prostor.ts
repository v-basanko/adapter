export class UloznyProstor {
    _data: Map<string, string>

    constructor() {
        this._data = new Map();
    }


    sada(klic:string, hodnota:string):Promise<void> {
        this._data.set(klic, hodnota);
        return Promise.resolve();
    }

    dostat(klic: string):Promise<string> {
        return Promise.resolve(this._data.get(klic));
    }

    sejmout(klic: string):Promise<void> {
        this._data.delete(klic);
        return Promise.resolve();
    }

    cisty():Promise<void> {
        this._data.clear();
        return Promise.resolve();
    }
}
