import '../Shared/styles/produit/categorie.css';
import { useState } from 'react';

import TextInput from '../Shared/components/TextInput';
import TextInputLabel from '../Shared/components/TextInputLabel';
import BtnValidate from '../Shared/components/BtnValidate';

import {IoMdSearch } from 'react-icons/io';
import {BsInfoCircle} from 'react-icons/bs';
import {SiMicrosoftexcel} from 'react-icons/si';
import { useSelector } from 'react-redux';

const fournisseurInitialData = {
    nom: 'Iphone X',
    telephone: 'Electronique',
    email: '120000',
    adresse: 'Lomé-TOGO',
    description: 'Fournisseur mil maïs ...'
}

export default function NouveauFournisseur() {

    const userData = useSelector(state => state.menurole.data);
    const [fournisseurData, setFournisseurData] = useState(fournisseurInitialData);

    const token =  userData.token;

    const handleInputChange = (e) => {
        setFournisseurData({...fournisseurData, [e.target.id]: e.target.value})
    }

    const handleSubmit = async () => {
        let result = await fetch('http://localhost:8000/fournisseurs/addFournisseur', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                authorization: 'SuluvuBearer ' + token
            },
            body: JSON.stringify({
                socialReason: fournisseurData.nom,
                phone: fournisseurData.telephone,
                email: fournisseurData.email,
                adresse: fournisseurData.adresse,
                description: fournisseurData.description
            })
        })
        result = await result.json();
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

            
            <h3 style={{margin: '20px 0'}} className='dataTitle'>Ajouter un client</h3>

            <div className="categorieContainer">
                <div className="formContainer">

                    <div style={{display: 'flex', flexDirection: 'column', margin: '0 20px', width: '80%',}}>
                        <TextInputLabel
                            id="nom"
                            title= 'Nom'
                            placeholder= 'Enre le libellé de la catégorie'
                            inputStyle= {{width: '100%', fontSize: "17px"}}
                            onChange={handleInputChange}
                            value={fournisseurData.nom}
                        />

                        <TextInputLabel 
                            id="telephone"
                            title= 'Telephone'
                            placeholder= 'Enre le libellé de la catégorie'
                            inputStyle= {{width: '100%', fontSize: "17px"}}
                            onChange={handleInputChange}
                            value={fournisseurData.telephone}
                        />

                        <TextInputLabel 
                            id="email"
                            title= "Email"
                            placeholder= 'Enre le libellé de la catégorie'
                            inputStyle= {{width: '100%', fontSize: "17px"}}
                            onChange={handleInputChange}
                            value={fournisseurData.email}
                        />

                        <TextInputLabel 
                            id="adresse"
                            title= 'Adresse'
                            placeholder= 'Enre le libellé de la catégorie'
                            inputStyle= {{width: '100%', fontSize: "17px"}}
                            onChange={handleInputChange}
                            value={fournisseurData.adresse}
                        />
                        <TextInputLabel 
                            id="description"
                            title= 'Description'
                            placeholder= 'Enre le libellé de la catégorie'
                            inputStyle= {{width: '100%', fontSize: "17px"}}
                            onChange={handleInputChange}
                            value={fournisseurData.description}
                        />

                        <BtnValidate
                            name= 'Ajouter'
                            style={{alignSelf: 'flex-end'}}
                            onClick={handleSubmit}
                        />
                    </div>
                </div>

                <div className="tableCategorieContainer fileContainer">
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