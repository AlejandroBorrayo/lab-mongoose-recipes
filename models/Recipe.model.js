
const {Schema, model}= require("mongoose")

const recipeSchema = new Schema({
  // TODO: write the schema
  title:{
    type:String
  },
  level:{
    type:String,
    enum:["Easy Peasy","Amateur Chef","UltraPro Chef"]
  },
  ingredients:{
    type:[String]
  },
  cuisine:{
    type:String
  },
  dishType:{
    type:String,
    enum:["breakfast","main_course","soup","snack","drink","dessert","other"]
  },
  image:{
    type:String,
    default:"https://images.media-allrecipes.com/images/75131.jpg"
  },
  duration:{
    type:Number,
    min:0
  },
  creator:{
    type:String
  },
  created:{
    Type:Date
  }
  
},{timestamps:true});

module.exports = model('Recipe', recipeSchema);

 
