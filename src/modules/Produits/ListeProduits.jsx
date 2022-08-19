import '../Shared/styles/produit/categorie.css';

import ButtonIcon from '../Shared/components/ButtonIcon';
import TextInput from '../Shared/components/TextInput';
import {IoMdSearch } from 'react-icons/io';
import {BsFileEarmarkPdf, BsPrinter, BsInfoCircle} from 'react-icons/bs';
import {SiMicrosoftexcel} from 'react-icons/si';
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {MdOutlineEditNote, MdOutlineDelete} from 'react-icons/md';
import SelectInput from '../Shared/components/SelectInput';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CSVLink } from 'react-csv';


export default function Produits() {

    const [searchText, setTextSearch] = useState('');
    const userData = useSelector(state => state.menurole.data);
    const [produits, setProduits] = useState([]);
    // const [catId, setCatId] = useState(0);  

    const token =  userData.token;

    const inputChange = (e) => {
        setTextSearch(e.target.value);
    }

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

    useEffect(() => {
        fetchProduitData();
    },[token])

    return (
        <div className='mainContainer'>
            <div>
                <div className='mainHeader'>
                    <div className="mainHeaderLeft">
                        <TextInput 
                            style={{width: '350px', borderRadius: '2px', background: 'white',}} 
                            icon={<IoMdSearch size={26} color="gray" />} 
                            placeholder='Faire une recherche'
                            onChange={inputChange}
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

            <div className="mainButtons">
                <div className="buttonsLeft">
                    <ButtonIcon 
                        style={{background: 'green'}}
                        icon={<SiMicrosoftexcel style={{marginRight: '5px'}} />}
                    >
                        <CSVLink filename={`Produits-${(new Date()).getDate().toString()}-${(new Date()).getMonth().toString()}-${(new Date()).getFullYear().toString()}`} data={produits ? produits: [{}]}>CSV</CSVLink> 
                    </ButtonIcon>
                    <ButtonIcon 
                        name= 'PDF'
                        style={{background: '#DC3545'}}
                        icon={<BsFileEarmarkPdf style={{marginRight: '5px'}} />}
                    />
                    <ButtonIcon 
                        name= 'Imprimer'
                        style={{background: '#FFC107'}}
                        icon={<BsPrinter style={{marginRight: '5px'}} />}
                    />
                </div>
                <div className="buttonRight">
                    <Link to="/produits/nvproduit">
                        <ButtonIcon 
                            name= 'Ajouter'
                            icon={<AiOutlinePlusCircle style={{marginRight: '5px'}} />}
                        />
                    </Link>
                </div>
            </div>

            
            <h3 className='dataTitle'>Liste des produits</h3>

            <div className="dataContainer">
                <div className="tableContainer">
                    <table className='table'>
                        <thead>
                            <tr>
                                <td>Libellé</td>
                                <td>Catégorie</td>
                                <td>Prix d'achat</td>
                                <td>Prix de vente</td>
                                <td>Stock</td>
                                <td>Emplacement</td>
                                <td>Actions</td>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                produits ? produits.map(produit => {
                                    if(produit.name.toLowerCase().indexOf(searchText) === -1) {
                                        return 
                                    }
                                    return (
                                        <tr>
                                            <td> {produit.name} </td>
                                            <td> {produit.category} </td>
                                            <td> {produit.purchasePrice} </td>
                                            <td> {produit.sellingPrice} </td>
                                            <td> {produit.quantity} </td>
                                            <td> {produit.location} </td>
                                            <td>
                                                <button>
                                                    <MdOutlineEditNote size={20} />
                                                </button>
                                                <button>
                                                    <MdOutlineDelete size={20} />
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                }) : ""
                            }
                        </tbody>
                    </table>
                </div>

                <div className="barreEtat">
                    <div className="left">
                        <SelectInput 
                            data= {[10, 20, 30, 40]}
                        />
                    </div>
                    <div className="right">
                            {searchText}
                    </div>
                </div>
            </div>
        </div>
    )
}