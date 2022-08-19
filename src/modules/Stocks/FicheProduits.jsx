import React from "react";
import ReactDOM from 'react-dom';
import { BsEye, BsInfoCircle } from "react-icons/bs";
import {IoIosCheckmarkCircleOutline, IoIosCloseCircle} from 'react-icons/io'
import BtnValidate from "../Shared/components/BtnValidate";

export default class FicheProduits extends React.Component {

    constructor(props) {
        super(props);

        this.modal = document.createElement('div');
        document.body.append(this.modal);
    }

    componentWillUnmount() {
        document.body.removeChild(this.modal)
    }

    render() {
        return ReactDOM.createPortal(
            <div className="fichieCommandeModal">
                <div onClick={this.props.onClick} className="closeModal">
                    <IoIosCloseCircle size={40} color='white' />
                </div>

                <div className="modalProductInfo">

                    <div className='mainNote mnFicheProduit'>
                        <div className="modalNoteTitle">
                            <BsInfoCircle size={20} style={{marginRight: '10px'}} />
                            <span>Note:</span>
                        </div>
                        <div className="modalNoteText">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut velit perspiciatis modi animi beatae consectetur debitis magni. Maiores mollitia neque illo earum dignissimos esse obcaecati! Numquam dolore molestiae id quibusdam.
                        </div>
                    </div>

                    <div className="mnFPContainer">
                        <div className="mnFP toSelect">
                            <h2>Produits</h2>

                            <div className="tableContainer tselect">
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <td>Libellé</td>
                                            <td>Catégorie</td>
                                            <td>Prix d'achat</td>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr onClick={() => alert('midjo')}>
                                            <td>Cocacola</td>
                                            <td>Electroménager</td>
                                            <td>10 000 FCFA</td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="mnFP selected">
                            <h2>Produits sélectionnés</h2>

                            <div className="tableContainer tselect">
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <td>Libellé</td>
                                            <td>Catégorie</td>
                                            <td>Prix d'achat</td>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>Cocacola</td>
                                            <td>Electroménager</td>
                                            <td>10 000 FCFA</td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>,
            this.modal
        )
    }
}