import React from "react";

function Product(){
    const product =[
        {id:"P001",nama:"Asus",harga:8000000},
        {id:"P002",nama:"Acer",harga:7000000},
        {id:"P003",nama:"Lenovo",harga:9000000}
    
    ];
    // const displayProduct = product.map((product)=> (
    // <div key={product}>{product}</div>
    // ));
    return (
        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nama Produk</th>
                    <th>Harga</th>
                </tr>
            </thead>
            <tbody>
                {product.length > 0 && product.map((product) => {
                    return(
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.nama}</td>
                            <td>{product.harga}</td>
                        </tr>
                    );  
                })}
            </tbody>
        </table>
    );

}

export default Product;