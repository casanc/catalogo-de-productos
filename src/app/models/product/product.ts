export class Product {
    public idProduct: string;
    public description: string;
    public inStock: number;
    public img: string;
    public miniature: string;
    public category: string;
    public price: Float32Array;

    constructor() { }

    setDescription(description) { 
        this.description = description;
    }

    getDescription() { 
        return this.description;
    }

    setInStock(inStock) { 
        this.inStock = inStock;
    }

    getInStock() { 
        return this.inStock;
    }

    setImg(img) { 
        this.img = img;
    }

    getImg() { 
        return this.img;
    }

    setMiniature(miniature) { 
        this.miniature = miniature;
    }

    getMiniature() { 
        return this.miniature;
    }

    setIdProduct(idProduct) { 
        this.idProduct = idProduct;
    }

    getIdProduct() { 
        return this.idProduct;
    }

    setCategory(category) { 
        this.category = category;
    }

    getCategory() { 
        return this.category;
    }

    setPrice(price) { 
        this.price = price;
    }

    getPrice() { 
        return this.price;
    }    
}