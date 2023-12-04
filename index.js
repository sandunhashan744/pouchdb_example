const PouchDB = require('pouchdb');

// create DB
const db = new PouchDB('mydb');

// DB info
function dbinfo() {
    db.info().then((info) => {
        console.log(info)
    });
}

// single doc
function singleDoc() {
    //doc
    const doc = {
        _id:'001',
        name:'testUser',
        salary:'2000'
    }

    //insert
    db.put(doc, function(err, res){
        if(err){
            console.log(err)
        }else{
            console.log(res, 'Document Created')
        }
    });
}

// multy doc
function multyDocs() {
    doc1 = {_id:'001',name:'testUser1',salary:'2000'}
    doc2 = {_id:'002',name:'testUser2',salary:'3000'}
    doc3 = {_id:'003',name:'testUser3',salary:'4000'}

    doc = [doc1, doc2, doc3]

    db.bulkDocs(doc, function(err, res){
        if(err){
            console.log(err)
        }else{
            console.log(res, 'Bulk doc Created')
        }
    });
}

//get doc by id
function getDocbyId(id) {

    db.get(id, function(err, doc){
            if(err){
                console.log(err)
            }else{
                console.log(doc)
            }
        });
}

// update doc _id and _rev
function updateDoc(id, rev){

    doc = {
        _id:id,
        name: 'testUser1',
        salary: '2000',
        _rev: rev
        }
//update        
db.put(doc);

//check if update
getDocbyId(id);
}

// get all docs
function getAllDocs () {

    db.allDocs(function(err, doc){
        if(err){
            console.log(err)
        }else{
            console.log(doc.rows)
        }
    });
}

//delete doc
function delDoc(id, rev) { 
    db.remove(id, rev, function(err){
        if(err){
            console.log(err)
        }else{
            console.log('Document Deleted')
        }
    })
}

//remove the db
function removedb() {
    db.destroy(function(err,res){
        if(err){
            console.log(err)
        }else{
            console.log(res, "Successfully Removed")
        }
    })
}

//--------------------------------------------------------------------------------
//                          Call the Functions
//--------------------------------------------------------------------------------

// dbinfo()             //--> Database info
// singleDoc()          //--> insert single doc
// multyDocs()          //--> insert multiple docs
// getAllDocs()         //--> get all docs
// getDocbyId('001')    //--> get doc by id

// updateDoc('001', '3-25f8da5fbd74ada84b790848443d47cb')  //--> Update single doc
// delDoc('003', '1-44ce2a543603d5f6b5b528971e88ee4d')     //--> Delete single doc

removedb()  //--> Remove Database

//--------------------------------------------------------------------------------

