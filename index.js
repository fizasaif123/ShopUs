const express=require("express");
const app=express();
const path=require("path");
const data=require("./data.json");

app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", "ejs");

app.set ('views ', path.join(__dirname, '/views '));



app.listen(8080,()=>{
    console.log("listening to port 8080");
})

app.get("/",(req,res)=>{
    res.render("home")
  
})

app.get("/r/:search",(req,res)=>{
    const {search}=req.params;
    const Search=data[search];
    if(Search)
    {
        res.render("search",{...Search});

    }
    else{
        res.render("error",{search});
    }
 
})

app.get("/about",(req,res)=>{
    const categories=["clothes","makeup","skincare"];
    res.render("about",{categories})

})