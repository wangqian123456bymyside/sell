 const path = require('path')
 
 module.export ={
 
   runtimeCompiler:true,
   devServer:{
   },
   
   configureWebpack:{
   devtool:'cheap-model-source-map',
   
   
   resolve:{
   alias:{
   '@':path.resolve(_dirname,'src'),
   '@public':path.resolve(_dirname,'public')
   }
   }
 }
}