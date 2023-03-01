export default function (){
    const url = "http://127.0.0.1:8000";
    return new Database(url, "root", "root", "test", "test");
}


class Database{
    constructor(url, user, pass, ns, db){
        this.url = url;
        this.user = user;
        this.pass = pass;
        this.ns = ns;
        this.db = db;
    }

    async query(data) {
        const options = {
            method : "POST",
            headers : {
                Authorization : `Basic ` + btoa(`${this.user}:${this.pass}`),
                Accept : "application/json",
                // "Content-Type" : "application/json",
                NS : this.ns,
                DB : this.db
            },
            body : data
        };

        try {
            return await fetch(`${this.url}/sql`, options)
            .then(r => r.json())
            .then(j => j[0].result);
        } catch (err) {
            console.log(`----- REQUEST ERROR -----`);
            console.error(err);
        }
    }
}


// async function main(){
//     const url = "http://127.0.0.1:8000";
//     const db = new Database(url, "root", "root", "test", "test");
//     const res = await db.query("SELECT id, name, real_name FROM users");
//     // const res = await db.query("SELECT * FROM job");
//     console.log(res);
// }

// main();