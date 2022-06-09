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

    if (Array.isArray(product.image) && product.image.length > 0) {
        product.images = product.image
    } else {
        product.images = [product.image]
    }

    product.images = product.images.map((image) => {
        return product.image.startsWith('https://')
            ? image
            : formatProductImage(image)
    })
    if (product.images.length > 0) product.image = product.images[0]

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
