// final Class
class Session {

    // METHOD SET ITEM
    public async set(field: any, value: any){
        sessionStorage.setItem(field, value);
    }

    // METHOD GET ITEM
    public get(field: any){
        return sessionStorage.getItem(field);
    }

    // METHOD REMOVE ITEM
    public async remove(field: any){
        sessionStorage.removeItem(field);
    }

    // METHOD GET ALL VALUES ON SESSION
    public async getAll(){
        const allFields = Object.keys(sessionStorage);
        const obj:any = {};
        allFields.forEach((element:any) => {
            obj[element] = this.get(element)
        });
        return obj;
    }

    // METHOD SETT MULTIPLES VALUES ON SESSION
    public async setAll(obj:any = {}){
        const allFields = Object.keys(obj);
        allFields.forEach((element:any) => {
            if(obj[element])
            this.set(element, obj[element])
        });
        return obj;
    }

    // METHOD CLEAR ALL
    public async clear(){
        sessionStorage.clear()
    }

    public logged(){
        if(sessionStorage.length > 0 && this.get("_id"))
        return true;
        else
        return false;
    }

    public redirectIfLogged(url:string = "/"){
        if(this.logged())
        window.location.href = url
    }

    public redirectIfNotLogged(url:string = "/"){
        if(!this.logged())
        window.location.href = url
    }

}
export default new Session();