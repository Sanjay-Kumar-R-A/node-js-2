const products = [
    {id:1,name:"iphone 14",price:70000},
    {id:2,name:"iphone 15",price:80000},
    {id:3,name:"iphone 16",price:90000},
    {id:4,name:"iphone 17",price:100000},
    {id:5,name:"iphone 18",price:110000},
    
]

//get method
export const getProducts = (req,res) => {
    res.status(200).json({data:products,message:"products fetched successfully"});

}

//get method by id
export const getProductById = (req,res) => {
    const productId = req.params.id;
    console.log("productId",productId);

    const productdetail = products.find((ele) => ele.id == productId);

    if(productdetail){
        res.status(200).json({data:productdetail,message:"product fetched successfully"});
    }else{
        res.status(404).json({message:"product not found"});
    }
}

//post method
export const createProduct = (req,res) => {
    const {name,price} = req.body;

    const newProduct = {
        id:products.length + 1,
        name,
        price
    }

    products.push(newProduct);
    res.status(201).json({data:newProduct,message:"product created successfully"});

}

//put method
export const updateProduct = (req,res) => {
    const productId = req.params.id;
    const {name,price} = req.body;

    const productdetail = products.find((ele) => ele.id == productId);

    if(productdetail){
        productdetail.name = name;
        productdetail.price = price;
        res.status(200).json({data:productdetail,message:"product updated successfully"});
    }else{
        res.status(404).json({message:"product not found"});
    }
}

//delete method
export const deleteProduct = (req,res) => {
    const productId = req.params.id;
    const index = products.find((ele) => ele.id == productId);

    if(index ===-1){  
        return res.status(404).json({message:"product not found"}); 
    }  
        
        products.splice(index,1);    
        res.status(200).json({message:"product deleted successfully"});
    };
    
        
    
