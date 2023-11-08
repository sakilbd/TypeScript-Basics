{

    interface Product {
        name: string;
        price: number;
        quantity: number;
    }

    const calculateTotalCost = (products: Product[]) => {
        let totalCost = 0;
        for (let item of products) {
            totalCost += item.price * item.quantity
        }
        return totalCost;
    }


}