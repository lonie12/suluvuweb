import '../Shared/styles/produit/categorie.css';

import TextInput from '../Shared/components/TextInput';
import TextInputLabel from '../Shared/components/TextInputLabel';
import {IoMdSearch } from 'react-icons/io';
import {BsInfoCircle} from 'react-icons/bs';
import BtnValidate from '../Shared/components/BtnValidate';
import { MdOutlineDelete, MdOutlineEditNote } from 'react-icons/md';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


export default function Categories() {

    const userData = useSelector(state => state.menurole.data);
    const [categories, setCategories] = useState([]);
    const [libelle, setLibelle] = useState('');
    // const [catId, setCatId] = useState(0);

    const handleLibelleChange = (e) => {
        setLibelle(e.target.value)
    }
    
    const token =  userData.token;

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

    const fetchAddCategorie = async () => {
        let result = await fetch('http://localhost:8000/categorie/addCategorie', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                authorization: 'SuluvuBearer ' + token
            },
            body: JSON.stringify({
                wording: libelle,
            })
        })
        result = await result.json();
        fetchCategorieData();
    }

    async function fetchRemoveCategorie(id) {
        let result = await fetch(`http://localhost:8000/categorie/removeCategorie`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                authorization: 'SuluvuBearer ' + token
            },
            body: JSON.stringify({
                id: parseInt(id),
            })
        })
        result = await result.json();
        fetchCategorieData();
    }

    useEffect(() => {
        fetchCategorieData();
    },[token])

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
                        Ici la liste des catégories. Pour ajouter une catégorie, entrez le libellé de la catégorie et cliquez sur le bouton envoyer. Pour editer la catégorie, cliquez sur l'icone éditer en vert dans la colonne Modifier
                    </div>
                </div>
            </div>

            <h3 style={{margin: '20px 0'}} className='dataTitle'>Liste des catégories</h3>

            <div className="categorieContainer">
                <div className="formContainer">
                    <h4 style={{margin: '20px'}}>Ajouter une catégorie</h4>

                    <div style={{display: 'flex', flexDirection: 'column', margin: '0 20px', width: '80%'}}>
                        <TextInputLabel 
                            value={libelle}
                            onChange={handleLibelleChange}
                            title= 'Libellé'
                            placeholder= 'Enre le libellé de la catégorie'
                            inputStyle= {{width: '100%', fontSize: "17px"}}
                        />

                        <BtnValidate
                            name= 'Ajouter'
                            onClick={fetchAddCategorie}
                            style={{alignSelf: 'flex-end'}}
                        />

                        <pre style={{fontSize: 20}}>
                            {libelle}
                        </pre>
                    </div>
                </div>

                <div className="tableCategorieContainer">
                    <table className='table'>
                        <thead>
                            <tr>
                                <td>#</td>
                                <td>Libellé</td>
                                <td>Modifier</td>
                                <td>supprimer</td>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                categories && categories.map(e => (  
                                    <tr key={e.id}>
                                        <td> {e.id} </td>
                                        <td> {e.wording} </td>
                                        <td>
                                            <button style={{background: '#2EA94E', color: 'white'}}>
                                                <MdOutlineEditNote size={20} />
                                            </button>
                                        </td>
                                        <td>
                                            <button onClick={() => fetchRemoveCategorie(e.id) }>
                                                <MdOutlineDelete size={20} />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}