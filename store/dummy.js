const db = {
    'user': [
        {id :'1', name: 'Carlos'},
    ]
};

async function list(table){
    return db[table];
}
async function get(table,id){
    let col = await list(table);
    return col.filter(item => item.id === id)[0] || null;
}
async function upsert(table,data){
    await db[table].push(data);
    return db[table];
}
async function remove(table,id){
    let col = await list(table);
    user= col.filter(item => item.id != id)[0] || null;
    db[table] = user;
    return db[table];
}


module.exports = {
    list,
    get,
    upsert,
    remove,
}