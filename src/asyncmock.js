const productos = [
    {nombre:"Item 1", precio: 500, id: "1", img:"../png/20-03-26-18-44-29-211_deco.jpg", idCat: "3"},
    {nombre:"Item 2", precio: 500, id: "2", img:"../png/IMG_20200619_142046109.jpg", idCat: "3"},
    {nombre:"Item 3", precio: 2500, id: "3", img:"../png/TheReverbix-Pascuas 2022JPG.jpg", idCat: "2"},
    {nombre:"Item 4", precio: 1500, id: "4", img:"../png/TANABATA.jpg", idCat: "2"},
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(()=> {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}

