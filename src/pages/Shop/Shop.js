// import React, { useState } from "react";
// import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
// import Pagination from "../../components/pageProps/shopPage/Pagination";
// import ProductBanner from "../../components/pageProps/shopPage/ProductBanner";
// import ShopSideNav from "../../components/pageProps/shopPage/ShopSideNav";

// const Shop = () => {
//   const [itemsPerPage, setItemsPerPage] = useState(12);
//   const itemsPerPageFromBanner = (itemsPerPage) => {
//     setItemsPerPage(itemsPerPage);
//   };

//   return (
//     <div className="max-w-container mx-auto px-4">
//       <Breadcrumbs title="Products" />
//       {/* ================= Products Start here =================== */}
//       <div className="w-full h-full flex pb-20 gap-10">
//         <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
//           <ShopSideNav />
//         </div>
//         <div className="w-full mdl:w-[40%] lgl:w-[75%] h-full flex flex-col gap-12">
//           <ProductBanner itemsPerPageFromBanner={itemsPerPageFromBanner} />
//           <Pagination itemsPerPage={itemsPerPage} />
//         </div>
//       </div>
      
//     </div>
//   );
// };

// export default Shop;


import React, { useState } from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import Pagination from "../../components/pageProps/shopPage/Pagination";
import ProductBanner from "../../components/pageProps/shopPage/ProductBanner";
import ShopSideNav from "../../components/pageProps/shopPage/ShopSideNav";

const Shop = () => {
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const itemsPerPageFromBanner = (itemsPerPage) => {
    setItemsPerPage(itemsPerPage);
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Products" />
      {/* ================= Products Start here =================== */}
      <div className="w-full h-full flex pb-20 gap-10">
        <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
          <ShopSideNav />
        </div>
        <div className="w-full mdl:w-[40%] lgl:w-[75%] h-full flex flex-col gap-12">
          <ProductBanner itemsPerPageFromBanner={itemsPerPageFromBanner} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Render your products here */}
            {/* Example: */}
            {/* <ProductCard /> */}
            {/* <ProductCard /> */}
            {/* ... */}
          </div>
          <Pagination itemsPerPage={itemsPerPage} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
