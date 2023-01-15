import {produk} from "./ProdukModels.js";


export const getdata= (req,res) => {
    if(produk.lenght > 0) {
        res.json ({
          status : true,
          data : produk,
          method : req.method,
          url : req.url
        }) 
      } else {
        res.json({
          status : false,
          massage : 'data user masih kosong'

        })
      }
}