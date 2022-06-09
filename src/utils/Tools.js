import { API_URL } from '@constants'

export const objSize = (obj) => {
    let size = 0,
        key
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++
    }
    return size
}

export const objFormat = (obj) => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && obj[key] === undefined) obj[key] = ''
    }
    return obj
}

export const ucFirst = (str) => {
    if (str.length > 0) {
        return str[0].toUpperCase() + str.substring(1)
    } else {
        return str
    }
}

export const fNumber = (number, decimals = 2) => {
    return parseFloat(number).toFixed(decimals)
}

export const formatProduct = (product) => {
    product.quantityInCart = product.quantityInCart || 0
    product.review = product.review || 233
    product.rating = product.rating || 4.3
    if (!product.image.startsWith('https://'))
        product.image = formatProductImage(product.image)
    product.images = product.images || [product.image]
    return product
}

export const formatProductImage = (image) => {
    return `${API_URL}product_images/${image}`
}

export const formatCategoryImage = (image) => {
    return `${API_URL}category_images/${image}`
}

export const formatStoreImage = (image) => {
    return `${API_URL}store_images/${image}`
}

export const formatStoreBanner = (image) => {
    return `${API_URL}store_banner_images/${image}`
}
