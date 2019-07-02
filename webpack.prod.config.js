var ExtractTextPlugin=require("extract-text-webpack-plugin")
module.exports={
    entry:[ `${__dirname}/src/js/index.jsx`,`${__dirname}/src/css/style.css`],
    output:{
        path:`${__dirname}/dist/js`,
        filename:"bundle.js"
    },
 
    module:{
        rules:[
            {
            test:/\.js$/,
            exclude:/node_modules/,
            use:{
                
                loader:"babel-loader",
                options:{
                    presets:["env"]
                }
            }
        },
        {
            test:/\.jsx$/,
            exclude:/node_modules/,
            use:{
                
                loader:"babel-loader",
                options:{
                    presets:["react","env"]
                }
            } 
        }
        ,{
            test:/\.css$/,
            use:ExtractTextPlugin.extract({
                use:[
                    {
                        loader:"css-loader",
                        options:{
                            url:false,
                        }
                    },
               
                ]
            })
        }
    ]
    },
   
    
    resolve:{extensions:[".jsx",".js",".css"]},
    plugins:[
        new ExtractTextPlugin({
            filename:"../css/style.css"
        })
    ]
}
