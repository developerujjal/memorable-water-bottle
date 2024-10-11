const getLocalStorage = () => {
    const getIteam = localStorage.getItem('cart');
    if(getIteam){
        return JSON.parse(getIteam);
    }

    return [];
}


const saveToLocalStorage = (cart)=>{
    const dataStrinify = JSON.stringify(cart);
    localStorage.setItem('cart', dataStrinify);
}


const addDataToLS = (id) => {
    const getLocalStorageData = getLocalStorage();
    getLocalStorageData.push(id);
    saveToLocalStorage(getLocalStorageData);
}


const handleRemove = (cartId)=>{
    const getCart = getLocalStorage();
    const remaining = getCart.filter((singelID)=> singelID !== cartId)
    saveToLocalStorage(remaining)
}

export{addDataToLS, getLocalStorage, handleRemove}
