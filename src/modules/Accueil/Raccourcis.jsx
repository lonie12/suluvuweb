
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { BsPatchPlus, BsPatchMinus, BsXLg } from 'react-icons/bs';
import BtnValidate from '../Shared/components/BtnValidate';


export default function Raccourci() {

    const [selectedCategorie, setSelectedCategorie] = useState(null);
    const userData = useSelector(state => state.menurole.data);
    const [categories, setCategories] = useState([]);
    const [produits, setProduits] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [selectToSend, setSelectToSend] = useState([]);
    const [total, setTotal] = useState(0);

    const token =  userData.token;

    const fetchProduitData = async () => {
        let result = await fetch('http://localhost:8000/produits/listProduit', {
            method: 'GET',
            headers: {
                authorization: 'SuluvuBearer ' + token
            }
        })
        result = await result.json();
        setProduits(result.data);
    }

    const fetchCategorieData = async () => {
        let result = await fetch('http://localhost:8000/categorie/listCategorie', {
            method: 'GET',
            headers: {
                authorization: 'SuluvuBearer ' + token
            }
        })
        result = await result.json();
        setCategories(result.data);
    }
    
    const updateSelectedProduct = (product) => {
        const selectedProductId = product.id;
        const filteredProducts = selectedProducts.filter(e => e.article === selectedProductId);
        let toSaveproduct = {
            article: product.id,
            image: product.image,
            name: product.name,
            sousTotal: product.sellingPrice,
            qte: 1,
            initialPrice: product.sellingPrice,
        }
        if(filteredProducts.length === 0) {
            setSelectedProducts([...selectedProducts, toSaveproduct]);
        } else {
            return
        }
        console.log(selectToSend)
    }

    const updateProductQuantity = (product, type) => {
        const index = selectedProducts.map(o => o.article).indexOf(product.article);
        let findProduct = selectedProducts.filter(e => e.article === product.article)[0];
        let filterProduct = selectedProducts.filter(e => e.article !== product.article);
        let operation = type === 'plus' ? 1 : -1;
        if(findProduct.qte + operation <= 0) {
            filterProduct.splice(index, 0);
            setSelectedProducts(filterProduct);
            return
        } 
        findProduct.qte += operation;
        findProduct.sousTotal = (findProduct.qte * findProduct.initialPrice).toString();
        filterProduct.splice(index, 0, findProduct);
        setSelectedProducts(filterProduct);
        console.log(selectToSend)
    }

    const chnageSelectedCategorie = (category) => {
        setSelectedCategorie(category);
    }

    const fetchAddVente = async () => {
        if(selectedProducts.length <= 0) {
            alert('Rien à vendre');
            return
        }
        await fetch('http://localhost:8000/ventes/addVente', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                authorization: 'SuluvuBearer ' + token
            },
            body: JSON.stringify({
                articles: selectToSend
            })
        })
    } 

    useEffect(() => {
        fetchProduitData();
        fetchCategorieData();
    },[token])

    useEffect(() => {
        let toPush = []
        selectedProducts.map(e => {
            toPush.push({
                article: e.article,
                sousTotal: e.sousTotal,
                qte: e.qte
            })
        })
        setSelectToSend(toPush);
    },[selectedProducts])

    return (
        <div style={{width: '100%', height: '100%', background: 'whitesmoke', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <div style={{height: '50px', border: '1px solid black', overflow: 'auto', whiteSpace: 'nowrap', padding: '4px', display: 'flex'}}>
                {
                    categories && categories.lenght !== 0 && categories.map(e => {
                        return (
                            <div key={e.id} onClick={() => chnageSelectedCategorie(e.id)} style={{height: '100%', display: 'flex', alignItems: 'center', background: 'whitesmoke', fontSize: 18, borderRadius: 4, padding: '0 6px', marginRight: 10, backgroundColor: '#F06B6B', color: 'white'}}>
                                <span> {e.wording} </span>
                            </div>
                        )
                    })
                }
            </div>
            <div style={{height: 'calc(100% - 70px)', border: '1px solid green', display: 'flex'}}>
                <div style={{width: '65%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding: '10px', overflow: 'scroll'}}>
                    {

                        produits && produits.length !== 0 && produits.map(e => {
                            if(selectedCategorie === null) {
                                return (
                                    <div onClick={() => updateSelectedProduct(e)} key={e.article} style={{width: '140px', height: '170px', margin: '10px 5px', borderRadius: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}}>
                                        <div className="pProductImage" style={{height: '70%', width: '100%'}}>
                                            <img srcSet="/panache.jpg" alt="" style={{width: '100%', height: '100%',}} />
                                        </div>
                                        <div className="pProductInfo" style={{height: '30%', width: '100%', background: 'white', borderRadius: '0 0 10px 10px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', textAlign: 'center'}}>
                                            <div>
                                                {e.name}
                                            </div>
                                            <div style={{fontWeight: '700', color: '#F06B6B'}}>
                                                {`${e.sellingPrice} FCFA`}
                                            </div>
                                        </div>
                                    </div>
                                )
                            } else {
                                if(e.category !== selectedCategorie) {
                                    return
                                } else {
                                    return (
                                        <div onClick={() => updateSelectedProduct(e)} key={e.id} style={{width: '140px', height: '170px', margin: '10px 5px', borderRadius: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}}>
                                            <div className="pProductImage" style={{height: '70%', width: '100%'}}>
                                                <img srcSet="/panache.jpg" alt="" srcSetSetset="" style={{width: '100%', height: '100%',}} />
                                            </div>
                                            <div className="pProductInfo" style={{height: '30%', width: '100%', background: 'white', borderRadius: '0 0 10px 10px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', textAlign: 'center'}}>
                                                <div>
                                                    {e.name}
                                                </div>
                                                <div style={{fontWeight: '700', color: '#F06B6B'}}>
                                                    {`${e.sellingPrice} FCFA`}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            }
                        })
                            
                    }
                    
                </div>
                <div style={{width: '35%', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <div style={{height: '68%', overflow: 'scroll', boxShadow: '1px 1px 4px 1px rgba(0, 0, 0, 0.5)', padding: '10px'}}>

                        {
                            selectedProducts && selectedProducts.length !== 0 && selectedProducts.map(e => {
                                return (
                                    <div key={e.article} style={{height: '45px', border: '1px solid black', marginBottom: '10px', borderRadius: '4px', display: 'flex'}}>
                                        <div style={{display: 'flex', height: '100%', width: '70%', alignItems: 'center'}}>
                                            <div style={{height: '40px', width: '40px', border: '1px solid black', marginLeft: 6, marginRight: 5}}>
                                                <img srcSet="/panache.jpg" alt="" srcSetset="" style={{width: '100%', height: '100%',}} />
                                            </div>
                                            <span style={{color:'black', fontSize: 16}}> {e.name} </span>
                                        </div>
                                        <div style={{width: '30%', height: '100%', background: '#1C252C', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'white', padding: '0 5px'}}>
                                            <div onClick={() => updateProductQuantity(e, 'minus')}>
                                                <BsPatchMinus size={23} />
                                            </div>
                                            <div style={{fontSize: 16, fontWeight: '400'}}>
                                                {e.qte}
                                            </div>
                                            <div onClick={() => updateProductQuantity(e, 'plus')}>
                                                <BsPatchPlus size={23} />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div style={{height: '30%', background: 'white', overflow: 'scroll', boxShadow: '1px 2px 5px 1px black', display: 'flex', flexDirection: 'column'}}>
                        <div style={{padding: '10px 15px', border: '1px solid black', marginTop: 10,}}>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15}}>
                                <span style={{fontSize: 18, fontWeight: 'bold'}}>Nbre d'articles</span>
                                <span> {selectedProducts.length} </span>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                <span style={{fontSize: 18, fontWeight: 'bold'}}>Total</span>
                                <span> {total} </span>
                            </div>
                        </div>
                        <BtnValidate
                            name= 'Valider'
                            onClick={fetchAddVente}
                            style={{alignSelf: 'flex-end', position: 'absolute', bottom: 30}}
                        />
                    </div>
                </div>
            </div>

            
        </div>
    )
}