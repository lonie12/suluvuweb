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


export default function ListeVentes() {

    const userData = useSelector(state => state.menurole.data);
    const [ventes, setVentes] = useState([]);

    const token =  userData.token;

    const fetchVenteData = async () => {
        let result = await fetch('http://localhost:8000/ventes/listVente', {
            method: 'GET',
            headers: {
                authorization: 'SuluvuBearer ' + token
            }
        })
        result = await result.json();
        setVentes(result.data);
    }

    useEffect(() => {
        fetchVenteData();
    },[token])

    return (
        <div className='mainContainer'>
            <div>
                <div className='mainHeader'>
                    <div className="mainHeaderLeft">
                        <TextInput 
                            id='password'
                            style={{width: '350px', borderRadius: '2px', background: 'white',}} 
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

            <div className="mainButtons">
                <div className="buttonsLeft">
                    <ButtonIcon 
                        name= 'CSV'
                        style={{background: 'green'}}
                        icon={<SiMicrosoftexcel style={{marginRight: '5px'}} />}
                    />
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
                    <Link to="/ventes/nouvellevente">
                        <ButtonIcon 
                            name= 'Créer'
                            icon={<AiOutlinePlusCircle style={{marginRight: '5px'}} />}
                        />
                    </Link>
                </div>
            </div>

            
            <h3 className='dataTitle'>Liste des ventes</h3>

            <div className="dataContainer">
                <div className="tableContainer">
                    <table className='table'>
                        <thead>
                            <tr>
                                <td>Prodit</td>
                                <td>Quantité</td>
                                <td>Prix unitaire</td>
                                <td>Prix HT</td>
                                <td>Date</td>
                                <td>Actions</td>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                ventes && ventes.length != 0 && ventes.map(e => {
                                    return (
                                        <tr>
                                            <td> {e['rArticle'].name} </td>
                                            <td> {e.qte} </td>
                                            <td> {e['rArticle'].sellingPrice} </td>
                                            <td> {}e.sousTotal </td>
                                            <td> {e['rVente'].sellDate} </td>
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
                                })
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

                    </div>
                </div>
            </div>
        </div>
    )
}