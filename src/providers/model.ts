
export class Model{
    // key = null;
    // items:any[] = [];
    // constructor(public storage: Storage){
    //     // (()=>{
    //     //     if(this.storage.getItem(key)){
    //     //         this.items = this.storage.getItem(key);
    //     //     };
    //     // })();
    // }
    // save(item:any){
    //     // wkt.id = this.autoIncrement();
    //     if(item){
    //     let newElement = {id: this.autoIncrement(), name:item.name};
    //     this.items.push(newElement);}
    //     this.storage.set(this.key, this.items);
    // }
    // update(id:number, item:any){

    // }

    // all(){
    //     return this.items;
    // }
    // findById(id:number):any{
    //     let bottom = 0;
    //     let top = this.items.length - 1;
    //     let mid;
    //     let i:number=0;
			
    //     while ( bottom <= top ) {
    //     		mid = Math.floor((top + bottom) / 2);
    //         if ( this.items[mid].id == id ) {
    //             i = mid;
    //             break;
    //         } else {
    //             if ( this.items[mid].id < id ) {
    //                 bottom = mid + 1;
    //             } else {
    //                 top = mid - 1;
    //             }
    //         }
    //     }

    //     return this.items[i];
    
    // }
    
    // getLastId(){
    //     let lastId = 0;
    //     if(this.items){
    //         for(let item of this.items){
    //             if(item.id>lastId){
    //                 lastId = item.id;
    //             }
    //         }
    //     }
    //     return lastId;
    // }
    // autoIncrement(){
    //     return this.getLastId()+1;
    // }
}