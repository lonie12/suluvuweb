import '../Shared/styles/produit/categorie.css';
import { useState } from 'react';

import TextInput from '../Shared/components/TextInput';
import TextInputLabel from '../Shared/components/TextInputLabel';
import BtnValidate from '../Shared/components/BtnValidate';

import {IoMdSearch } from 'react-icons/io';
import {BsInfoCircle} from 'react-icons/bs';
import {SiMicrosoftexcel} from 'react-icons/si';


export default function NouvelleVente() {

    const productInitialData = {
        nom: 'Iphone X',
        categorie: 'Electronique',
        prixAchat: '120000',
        prixVente: '150000',
        fournisseur: 'Seydou Badian',
        emplacement: 'Entrepot 1',
        dateReception: '25-12-2000',
        quantite: 50,
        description: 'Lorem ipsum ....'
    }

    const [productData, setProductData] = useState(productInitialData);

    const handleInputChange = (e) => {
        setProductData({...productData, [e.target.id]: e.target.value})
    }

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

            
            <h3 style={{margin: '20px 0'}} className='dataTitle'>Faire une vente</h3>

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

                        <TextInputLabel 
                            id="categorie"
                            title= 'Catégorie'
                            placeholder= 'Enre le libellé de la catégorie'
                            inputStyle= {{width: '100%', fontSize: "17px"}}
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
                        <TextInputLabel 
                            id="fournisseur"
                            title= 'Fournisseur'
                            placeholder= 'Enre le libellé de la catégorie'
                            inputStyle= {{width: '100%', fontSize: "17px"}}
                            onChange={handleInputChange}
                        />

                        <TextInputLabel 
                            id="emplacement"
                            title= 'Emplacement'
                            placeholder= 'Enre le libellé de la catégorie'
                            inputStyle= {{width: '100%', fontSize: "17px"}}
                            onChange={handleInputChange}
                        />

                        <TextInputLabel 
                            id="dateReception"
                            title= 'Date de réception'
                            placeholder= 'Enre le libellé de la catégorie'
                            inputStyle= {{width: '100%', fontSize: "17px"}}
                            onChange={handleInputChange}
                        />

                        <TextInputLabel 
                            id="quantite"
                            title= 'Quantité reçue'
                            placeholder= 'Enre le libellé de la catégorie'
                            inputStyle= {{width: '100%', fontSize: "17px"}}
                            onChange={handleInputChange}
                        />

                        <TextInputLabel 
                            id="description"
                            title= 'Description'
                            placeholder= 'Enre le libellé de la catégorie'
                            inputStyle= {{width: '100%', fontSize: "17px"}}
                            onChange={handleInputChange}
                        />

                        <BtnValidate
                            name= 'Ajouter'
                            style={{alignSelf: 'flex-end'}}
                        />
                    </div>
                </div>

                <div className="tableCategorieContainer">
                    {/* <pre style={{fontSize: 18}}>
                        {
                            JSON.stringify(productData, null, 2)
                        }
                    </pre> */}
                    <h2 style={{margin: "20px 0"}}>Ajouter a partir d'un fichier CSV</h2>
                    <div class="fileInputContainer">
                        <div class="fileInputView">
                            <div>
                                <SiMicrosoftexcel size={30} color='gray' />
                            </div>
                            <div>
                                Parcourir cliquez <span style={{color: "#F06B6B"}}> ici</span>
                            </div>
                        </div>
                        
                        <input type="file" id="fileInput" />
                    </div>

                    <BtnValidate
                        style={{margin: "20px 0"}}
                        name= 'Envoyer'
                    />
                </div>
            </div>
        </div>
    )
}