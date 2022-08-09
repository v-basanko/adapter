import { IStorage } from "../shared/interfaces/storage.interface";
import { Varastotila } from "./varastotila";

export class FinnishStorageAdapter implements IStorage {
    private _db: Varastotila;

    constructor(db: Varastotila) {
        this._db = db;
    }

    set(key: string, value: string): Promise<void> {
        return this._db.setti(key, value);
    }

    get(key: string): Promise<string> {
        return this._db.saada(key);
    }

    remove(key: string):Promise<void> {
        return this._db.poistaa(key);
    }

    clear():Promise<void> {
        return this._db.tyhjentaa();
    }
}
