import '../Shared/styles/produit/categorie.css';
import { useEffect, useState } from 'react';

import TextInput from '../Shared/components/TextInput';
import TextInputLabel from '../Shared/components/TextInputLabel';
import BtnValidate from '../Shared/components/BtnValidate';

import {IoMdSearch } from 'react-icons/io';
import {BsInfoCircle} from 'react-icons/bs';
import {SiMicrosoftexcel} from 'react-icons/si';
import TextArea from '../Shared/components/TextAreaLabel';
import FileInput from '../Shared/components/FileInput';
import { IoMdImage } from 'react-icons/io';
import { useSelector } from 'react-redux';
import AlertBox from '../Shared/components/AlertBox';
import SelectInputLabel from '../Shared/components/SelectInputLabel';

const productInitialData = {
    nom: '',
    categorie: 0,
    prixAchat: '',
    prixVente: '',
    fournisseur: 0,
    emplacement: 0,
    dateReception: '',
    quantite: 0,
    description: ''
}


export default function NouveauProduit() {

    let timer = null;
    const [showError, setShowError] = useState(false);
    const [errMessage, setErrMessage] = useState('');
    const [errMessageColor, setErrMessageColor] = useState('');
    const userData = useSelector(state => state.menurole.data);
    const [productData, setProductData] = useState(productInitialData);
    const [image, setImage] = useState();
    const [csv, setCsv] = useState();
    const [fournisseur, setFournisseur] = useState([]);
    const [categorie, setCategorie] = useState([]);
    const [location, setLocation] = useState([]);
    

    const token =  userData.token;

    const handleInputChange = (e) => {
        setProductData({...productData, [e.target.id]: e.target.value})
    }

    const handleImageChange = (e) => {
        setImage(e.target.files[0])
    }

    const handleCsvChange = (e) => {
        setCsv(e.target.files[0])
    }

    const handleErrMessagChangeFalse = () => {
        setShowError(false);
        clearTimeout(timer);
    }

    const handleErrMessagChangeTrue = () => {
        setShowError(true);
        timer = setTimeout(() => {
            handleErrMessagChangeFalse()
        }, 4000);
    }

    const fetchFournisseur = async () => {
        let result = await fetch('http://localhost:8000/fournisseurs/listFournisseur', {
            method: 'GET',
            headers: {
                authorization: 'SuluvuBearer ' + token
            }
        })
        result = await result.json();
        setFournisseur(result.data);
    }

    const fetchCategorie = async () => {
        let result = await fetch('http://localhost:8000/categorie/listCategorie', {
            method: 'GET',
            headers: {
                authorization: 'SuluvuBearer ' + token
            }
        })
        result = await result.json();
        setCategorie(result.data);
    }

    const fetchLocation = async () => {
        let result = await fetch('http://localhost:8000/location/listLocation', {
            method: 'GET',
            headers: {
                authorization: 'SuluvuBearer ' + token
            }
        })
        result = await result.json();
        setLocation(result.data);
    }

    const fetchAddProduit = async () => {
        const formData = new FormData();
        formData.append('image', image);
        formData.append('name', productData.nom);
        formData.append('purchasePrice', productData.prixAchat);
        formData.append('sellingPrice', productData.prixVente);
        formData.append('receptionDate', productData.dateReception);
        formData.append('quantity', productData.quantite);
        formData.append('description', productData.description);
        formData.append('supplier', productData.fournisseur);
        formData.append('category', productData.categorie);
        formData.append('location', productData.emplacement);
        let results = await fetch('http://localhost:8000/produits/addProduit', {
            method: 'POST',
            headers: {
                authorization: 'SuluvuBearer ' + token,
            },
            body: formData
        })
        results = await results.json()
        if(results) {
            handleErrMessagChangeTrue();
            setErrMessage(results.message);
            results['error'] === '' ? setErrMessageColor('#e32636') : setErrMessageColor('green')
        }

    }

    const fetchAddProduitFromCsv = async () => {
        const formData = new FormData();
        formData.append('csv', csv);
        let results = await fetch('http://localhost:8000/produits/addFromExcel', {
            method: 'POST',
            headers: {
                authorization: 'SuluvuBearer ' + token,
            },
            body: formData
        })
        results = await results.json();
        if(results) {
            handleErrMessagChangeTrue();
            setErrMessage(results.message);
            results['error'] === '' ? setErrMessageColor('#e32636') : setErrMessageColor('green')
        }
    }

    useEffect(() => {
        fetchFournisseur();
        fetchCategorie();
        fetchLocation();
    }, [])

    return (

        <div className='mainContainer'>
            <div>
                <div className='mainHeader'>
                    <div className="mainHeaderLeft">
                        <TextInput 
                            id='password'
                            style={{width: '350px', margin: '8px 0', borderRadius: '2px', background: 'white'}} 
                            icon={<IoMdSearch size={26} color="gray" />} 
                            placeholder='Faire une recherche'
                            // onChange={inputChange}
                        />
                    </div>
                    <div className="mainHeaderRight">
                        d
                    </div>
                </div>

                <div className='mainNote'>
                    <div className="noteTitle">
                        <BsInfoCircle size={20} style={{marginRight: '10px'}} />
                        <span>Note:</span>
                    </div>
                    <div className="noteText">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut velit perspiciatis modi animi beatae consectetur debitis magni. Maiores mollitia neque illo earum dignissimos esse obcaecati! Numquam dolore molestiae id quibusdam.
                    </div>
                </div>
            </div>

            
            <h3 style={{margin: '20px 0'}} className='dataTitle'>Ajouter un produit</h3>

            <div className="categorieContainer">
                <div className="formContainer">

                    <div style={{display: 'flex', flexDirection: 'column', margin: '0 20px', width: '80%',}}>
                        <TextInputLabel
                            title= 'Nom'
                            id="nom"
                            placeholder= 'Enre le libellé de la catégorie'
                            inputStyle= {{width: '100%', fontSize: "17px"}}
                            onChange={handleInputChange}
                            value={productData.nom}
                        />

                        <SelectInputLabel 
                            id="categorie"
                            title= 'Catégorie'
                            placeholder= 'Choisir le libellé de la catégorie'
                            inputStyle= {{width: '100%', fontSize: "17px"}}
                            data={categorie}
                            onChange={handleInputChange}
                        />

                        <TextInputLabel 
                            id="prixAchat"
                            title= "Prix d'achat"
                            placeholder= 'Enre le libellé de la catégorie'
                            inputStyle= {{width: '100%', fontSize: "17px"}}
                            onChange={handleInputChange}
                        />

                        <TextInputLabel 
                            id="prixVente"
                            title= 'Prix de vente'
                            placeholder= 'Enre le libellé de la catégorie'
                            inputStyle= {{width: '100%', fontSize: "17px"}}
                            onChange={handleInputChange}
                        />

                        <SelectInputLabel 
                            id="fournisseur"
                            title= 'Fournisseur'
                            placeholder= 'Sélectionner le fournisseur'
                            inputStyle= {{width: '100%', fontSize: "17px"}}
                            data={fournisseur}
                            onChange={handleInputChange}
                        />

                        <SelectInputLabel 
                            id="emplacement"
                            title= 'Emplacement'
                            placeholder= "Choisr l'emplacement de stockage"
                            inputStyle= {{width: '100%', fontSize: "17px"}}
                            data={location}
                            onChange={handleInputChange}
                        />

                        <TextInputLabel 
                            type="date"
                            id="dateReception"
                            title= 'Date de réception'
                            placeholder= 'Enre le libellé de la catégorie'
                            inputStyle= {{width: '100%', fontSize: "17px"}}
                            onChange={handleInputChange}
                        />

                        <TextInputLabel 
                            type = "number"
                            id="quantite"
                            title= 'Quantité reçue'
                            placeholder= 'Enre le libellé de la catégorie'
                            inputStyle= {{width: '100%', fontSize: "17px"}}
                            onChange={handleInputChange}
                        />

                        <TextArea 
                            id="description"
                            title= 'Description'
                            inputStyle= {{width: '100%', fontSize: "17px"}}
                            onChange={handleInputChange}
                        />

                        <FileInput
                            onChange={handleImageChange}
                            title="Ajouter une image"
                            icon={<IoMdImage size={30} />}
                        />

                        <BtnValidate
                            onClick={fetchAddProduit}
                            name= 'Ajouter'
                            style={{alignSelf: 'flex-end'}}
                        />
                    </div>
                </div>

                <div className="tableCategorieContainer fileContainer">
                    <h2 style={{margin: "20px 0"}}>Ajouter a partir d'un fichier CSV (Excel)</h2>

                    <FileInput
                            onChange={handleCsvChange}
                            icon={<SiMicrosoftexcel size={30} color='gray' />}
                            style={{width: '80%', margin: 0, display: 'block'}}
                    />

                    <BtnValidate
                        style={{margin: "20px 0"}}
                        name= 'Envoyer'
                        onClick={fetchAddProduitFromCsv}
                    />
                </div>
            </div>
            
            {showError && <AlertBox onClick={handleErrMessagChangeFalse} message={errMessage} color={errMessageColor} />}
        </div>
    )
}