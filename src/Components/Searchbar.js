
import React from 'react'


const Searchbar = ({setQuery}) => {


    

    return (
        <div>
            <input placeholder="Dest Search" onChange={(event) => setQuery(event.target.value)} />
        
        </div>
    )
}

export default Searchbar

// const ProductList = () => {

//   const [query, setQuery] = useState("")

//   const productList = products
//     .filter(product => product.name.toLowerCase().includes(query.toLowerCase()))
//     .map((product) => (
//       <ProductItem product={product} key={product.id} />
//     ));

//   return (
//     <>
//       <SearchBar setQuery={setQuery} />
//       <div className="listWrapper">{productList}</div>
//     </>
//   );
// };
















// console.log(event.target.value)

















// search bar
// import React from "react";
// // Styling


// const SearchBar = (props) => {

//   const checkLength = (string) => {
//     if (string.length >= 2)
//       props.setQuery(string)
//     else props.setQuery("")
//   }

//   return (
//     <input className="searchBar"
//       onChange={(event) => checkLength(event.target.value)} //Cu
//       placeholder="Search for a cookie name"
//     />
//   );
// };

// export default SearchBar;


// import { useState } from 'react'
// // Components
// import ProductItem from "./ProductItem";
// import SearchBar from "./SearchBar";
// // Data
// import products from "../products";

// const ProductList = () => {

//   const [query, setQuery] = useState("")

//   const productList = products
//     .filter(product => product.name.toLowerCase().includes(query.toLowerCase()))
//     .map((product) => (
//       <ProductItem product={product} key={product.id} />
//     ));

//   return (
//     <>
//       <SearchBar setQuery={setQuery} />
//       <div className="listWrapper">{productList}</div>
//     </>
//   );
// };

// export default ProductList;
