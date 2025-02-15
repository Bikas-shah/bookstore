var express = require("express");
var router = express.Router();
const book = require("../services/books");

router.get('/allbooks',async function(req,res){
    let allbooks = book.allBooks();
    res.json(allbooks);
});

router.post('/add',async (req, res) => {
    let addedBook = book.addBook(req);
    res.json(addedBook);
})

router.put('/books/:id',function(req,res){
    //reading id called params
    const id=req.params.id   
    //read data 
    let name=req.body.name  
    let author=req.body.author
    let edition=req.edition

    //pass function "students"
    let index=books.findIndex((book)=>{  
        //read index  parse convert string to number
        return(book.id==Number.parseInt(id)) 
    })
    if(index>=0){
         // object
        let obj=books[index]  
        obj.name=name
        obj.author=author
        obj.edition=edition
        //send updated data
        res.json(obj) 
    }else{
        //else pass error
        res.error(404)  
    }
})


router.delete('/books/:id',function(req,res){
    let id=req.params.id;
    let index=books.findIndex((book)=>{
        return (book.id==Number.parseInt(id))
    })
    if(index>=0){
        let obj=books[index]
//splice is used to delete from array
        books.splice(index,1)
        res.json(obj)
    }else{
        res.status(404)
    }
})


module.exports = router;
