import '../Shared/styles/produit/categorie.css';

import TextInput from '../Shared/components/TextInput';
import TextInputLabel from '../Shared/components/TextInputLabel';
import {IoMdSearch } from 'react-icons/io';
import {BsInfoCircle} from 'react-icons/bs';
import BtnValidate from '../Shared/components/BtnValidate';
import { MdOutlineDelete, MdOutlineEditNote } from 'react-icons/md';
import { useState } from 'react';
import FicheCommande from '../Ventes/FicheCommande';
import FicheProduits from './FicheProduits';
import TextArea from '../Shared/components/TextAreaLabel';
import SelectInputLabel from '../Shared/components/SelectInputLabel';


export default function NouveauMouvement() {

    const [libelle, setLibelle] = useState('Libellé');
    const [showModal, setShowModal] = useState(false);

    const showFicheModal = () => {
        setShowModal(!showModal)
    }
    
    const handleLibelleChange = (e) => {
        setLibelle(e.target.value)
    }

    const modal = showModal && <FicheProduits onClick={showFicheModal} />

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

            
            <h3 style={{margin: '20px 0'}} className='dataTitle'>Nouveau mouvement de stock</h3>

            <div className="categorieContainer">
                <div className="mvtContainer">
                    <div className="cOne">

                        <SelectInputLabel
                            id="depart"
                            title= 'Emplacement de départ'
                            placeholder= "Choisir le l'emplacement de départ"
                            style={{width: '45%', margin: 0}}
                            inputStyle= {{width: '100%', fontSize: "17px"}}
                            // data={categorie}
                            // onChange={handleInputChange}
                        />
                        {/* <TextInputLabel
                            title= 'Emplacement de départ'
                            id="nom"
                            style={{width: '45%', margin: 0}}
                            placeholder= 'Enre le libellé de la catégorie'
                            inputStyle= {{width: '100%', fontSize: "17px"}}
                        /> */}

                        <SelectInputLabel
                            id="depart"
                            title= "Emplacement d'arrivé"
                            placeholder= "Choisir le l'emplacement d'arrivé"
                            style={{width: '45%', margin: 0}}
                            inputStyle= {{width: '100%', fontSize: "17px"}}
                            // data={categorie}
                            // onChange={handleInputChange}
                        />

                        {/* <TextInputLabel
                            title= "Emplacement d'arrivé"
                            id="nom"
                            style={{width: '45%', margin: 0}}
                            placeholder= 'Enre le libellé de la catégorie'
                            inputStyle= {{width: '100%', fontSize: "17px"}}
                        /> */}
                    </div>

                    <div className="cTwo">
                        {/* <TextInputLabel
                            title= 'Motif de déplacement'
                            id="nom"
                            style={{width: '100%', margin: 0}}
                            placeholder= 'Enre le libellé de la catégorie'
                            inputStyle= {{width: '100%', fontSize: "17px"}}
                        /> */}

                        <TextArea 
                            title= 'Motif de déplacement'
                            id="nom"
                            style={{width: '100%', margin: 0}}
                            placeholder= 'Enre le motif de déplacement '
                            inputStyle= {{width: '100%', fontSize: "17px"}}
                        />
                    </div>

                    <div className="cData">
                        <div className="tableContainer">
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <td>Libellé</td>
                                        <td>Quantité</td>
                                        <td>Disponible</td>
                                        <td>Actions</td>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>Cocacola</td>
                                        <td>Electroménager</td>
                                        <td>10 000 FCFA</td>
                                        <td>
                                            <button>
                                                <MdOutlineDelete size={20} />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Cocacola</td>
                                        <td>Electroménager</td>
                                        <td>10 000 FCFA</td>
                                        <td>
                                            <button>
                                                <MdOutlineDelete size={20} />
                                            </button>
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>

                        <div style={{alignSelf: 'flex-end'}}>
                            <BtnValidate
                                onClick={showFicheModal}
                                name= 'Ajouter plusieurs produits'
                            />
                            
                            <BtnValidate 
                                style={{background: '#2EA94E'}}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {modal}
        </div>
    )
}