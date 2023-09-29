db.inventory.find() //=fetch all documents
db.inventory.find({qty:25})
db.inventory.find({status:{$in:["A","D"]}})  //use of in operator
db.inventory.find({status:{$in:["A","D"]},qty:{$lt:30}})  //use of lt operator
db.inventory.find({$or:[{status:"A"},{qty:{$lt:30}}]}) // use of or operator
db.inventory.findOne({status:{$in:["A","D"]}}) // use of find one
db.inventory.findOne({item:"paper"})


