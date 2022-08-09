import { CzechStorageAdapter, UloznyProstor } from "./czech-storage";
import { FinnishStorageAdapter, Varastotila} from "./finnish-storage";

const run = async () => {
    const storage1 = new CzechStorageAdapter(new UloznyProstor());
    storage1.set('key1', 'value1');
    storage1.set('key2', 'value2');
    console.log(storage1)
    console.log(await storage1.get('key1'))
    console.log(await storage1.get('key2'))

    const storage2 = new FinnishStorageAdapter(new Varastotila());
    storage2.set('key3', 'value3');
    storage2.set('key4', 'value4');
    console.log(storage2)
    console.log(await storage2.get('key3'))
    console.log(await storage2.get('key4'))
}

run();
