export function filterProduct(product, filterObj) {
   if (filterObj.title && !product.title.toLowerCase().includes(filterObj.title.toLowerCase())) return false
   if (filterObj.priceFrom && filterObj.priceFrom > product.price) return false
   if (filterObj.priceTo && filterObj.priceTo < product.price) return false
   return true
}
