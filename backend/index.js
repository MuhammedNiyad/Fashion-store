const port = 5000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');


app.use(express.json());
app.use(cors());

mongoose.connect('copy the mongoDb connection link here......!');

// API creation

app.get('/', (req, res)=> [
    res.send("Expressapp is runnign")
])

// Image Storage Engine

const storage = multer.diskStorage({
    destination: "./upload/images",
    filename: (req, file, cb)=> {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})
app.use('/images', express.static('upload/images'))

// Creating upload endpoint for images.
app.post('/upload',upload.single('product'), (req,res)=> {
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

// Schema for creating Products.

const Product = mongoose.model("Product",{
    id:{
        type:Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image:{
        type:String,
        required: true,
    },
    category: {
        type:String,
        required:true,
    },
    new_price:{
        type:Number,
        reuired:true,
    },
    old_price:{
        type:Number,
        required: ture,
    },
    date:{
        type:Date,
        default: Date.now,
    },
    avilable:{
        type:Boolean,
        default: true,
    }
})


app.post('/addproduct',async(req,res)=>{
    let products = await Product.find({});
    let id;
    if(products.length>0){
       let last_product_array = products.slice(-1);
       let last_product = last_product_array[0];
       id = last_product.id+1;
    }else{
        id=1;
    }
    const product = new Product({
        id:req.body.id,
        name:req.body.name,
        image: req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    })
    await product.save();
    console.log('Product Saved');
    res.json({
        success: true,
        name: req.body.name,
    })
})

// Deleting Products.
app.post('/removeproduct', async (req, res)=> {
    await Product.findOneAndDelete({id: req.body.id});
    console.log('product Removed');
    rea.json({
        success:true,
        name:req.body.name,
    })
})

// Get all Products
app.get('/allproducts', async (req,res)=> {
    let product = await Product.find({});
    console.log("All Product Fetched");
    rea.send(products);
})

app.listen(port, (error)=>{
    if(!error){
        console.log("Backend working annu...!");
    }else{
        console.log("backend work cheyunnilla. itha error:",error);
    }
})