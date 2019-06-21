export class Product {
    public idProduct: string;
    public description: string;
    public inStock: number;
    public img: string;
    public miniature: string;
    public category: string;
    public price: Float32Array;

    constructor() { }

    getDescription(description) { 
        this.description = description;
    }

    setDescription() { 
        return this.description;
    }

    getInStock(inStock) { 
        this.inStock = inStock;
    }

    setInStock() { 
        return this.inStock;
    }

    getImg(img) { 
        this.img = img;
    }

    setImg() { 
        return this.img;
    }

    getMiniature(miniature) { 
        this.miniature = miniature;
    }

    setMiniature() { 
        return this.miniature;
    }

    getIdProduct(idProduct) { 
        this.idProduct = idProduct;
    }

    setIdProduct() { 
        return this.idProduct;
    }

    getCategory(category) { 
        this.category = category;
    }

    setCategory() { 
        return this.category;
    }

    getPrice(price) { 
        this.price = price;
    }

    setPrice() { 
        return this.price;
    }    
}