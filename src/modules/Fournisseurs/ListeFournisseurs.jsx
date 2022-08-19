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
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CSVLink, } from "react-csv";
import { PDFDownloadLink } from '@react-pdf/renderer';
import DocFournisseur from '../templates/pdf/Fournisseurs';


export default function ListeFournisseurs(props) {

    const userData = useSelector(state => state.menurole.data);
    const [fournisseurs, setFournisseurs] = useState([]);
    // const [catId, setCatId] = useState(0);  

    const token =  userData.token;

    const fetchFournisseurData = async () => {
        let result = await fetch('http://localhost:8000/fournisseurs/listFournisseur', {
            method: 'GET',
            headers: {
                authorization: 'SuluvuBearer ' + token
            }
        })
        result = await result.json();
        setFournisseurs(result.data);
    }

    useEffect(() => {
        fetchFournisseurData();
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
                        style={{background: 'green'}}
                        icon={<SiMicrosoftexcel style={{marginRight: '5px'}} />}
                    > 
                        <CSVLink filename={`Fichier-${(new Date()).getDate().toString()}-${(new Date()).getMonth().toString()}-${(new Date()).getFullYear().toString()}`} data={fournisseurs ? fournisseurs: [{}]}>CSV</CSVLink> 
                    </ButtonIcon>
                    <ButtonIcon
                        style={{background: '#DC3545'}}
                        icon={<BsFileEarmarkPdf style={{marginRight: '5px'}} />}
                    >
                        <PDFDownloadLink
                            document={<DocFournisseur data={fournisseurs} name="Le champion" length={fournisseurs ? fournisseurs.length : 0} />}>
                                {({loading}) => loading ? 'Loading' : 'PDF' }
                        </PDFDownloadLink>
                    </ButtonIcon>
                    <Link to={{
                        pathname: '/fournisseurs/print',
                        state: fournisseurs
                    }}>
                        <ButtonIcon 
                            name= 'Imprimer'
                            style={{background: '#FFC107'}}
                            icon={<BsPrinter style={{marginRight: '5px'}} />}
                        />
                    </Link>
                </div>
                <div className="buttonRight">
                    <Link to="/fournisseurs/nouveau">
                        <ButtonIcon 
                            icon={<AiOutlinePlusCircle style={{marginRight: '5px'}} />}
                        />
                    </Link>
                </div>
            </div>

            
            <h3 className='dataTitle'>Liste des clients</h3>

            <div className="dataContainer">
                <div className="tableContainer">
                    <table className='table'>
                        <thead>
                            <tr>
                                <td>Raison social</td>
                                <td>Téléphone</td>
                                <td>Email</td>
                                <td>Actions</td>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                fournisseurs ? fournisseurs.map(fournisseur => {
                                    return (
                                        <tr>
                                            <td> {fournisseur.socialReason} </td>
                                            <td> +228 {fournisseur.phone} </td>
                                            <td> {fournisseur.email} </td>
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
                                }): ''
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