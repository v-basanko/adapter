import { IStorage } from "../shared/interfaces/storage.interface";
import { UloznyProstor } from "./ulozny-prostor";

export class CzechStorageAdapter implements IStorage {
    private _db: UloznyProstor;

    constructor(db: UloznyProstor) {
        this._db = db;
    }

    set(key: string, value: string): Promise<void> {
        return this._db.sada(key, value);
    }

    get(key: string): Promise<string> {
        return this._db.dostat(key);
    }

    remove(key: string):Promise<void> {
        return this._db.sejmout(key);
    }

    clear():Promise<void> {
        return this._db.cisty();
    }
}
