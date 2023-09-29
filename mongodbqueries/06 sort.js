db.inventory.find().limit(1) //limits the no of documents in the output to one
db.inventory.find().limit(2) //limits the no of documents in the output to two
db.inventory.find().skip(1) //skips  first one document
db.inventory.find().skip(2) //skips  first two document
db.inventory.find().sort({qty:1}) //Increasing order
db.inventory.find().sort({qty:-1}) //Decreasing order


// Achieving Pagination  using MongoDb find and limit 
// 1 to 10
no=8
db.blogs.find().skip({pageNo-1}*no).limit(no)

pageNo= 1 db.blogs.find().skip(0).limit(8)
pageNo= 2 db.blogs.find().skip(0).limit(8)
