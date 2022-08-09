export class Varastotila {
    private _tiedot: Map<string, string>

    constructor() {
        this._tiedot = new Map();
    }


    setti(avain:string, arvo:string):Promise<void> {
        this._tiedot.set(avain, arvo);
        return Promise.resolve();
    }

    saada(avain: string):Promise<string> {
        return Promise.resolve(this._tiedot.get(avain));
    }

    poistaa(avain: string):Promise<void> {
        this._tiedot.delete(avain);
        return Promise.resolve();
    }

    tyhjentaa():Promise<void> {
        this._tiedot.clear();
        return Promise.resolve();
    }
}
