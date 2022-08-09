export interface IStorage {
    set: (key:string, value:string)=>Promise<void>;
    get: (key:string)=>Promise<string>;
    remove: (key:string)=>Promise<void>;
    clear: ()=>Promise<void>;
}
