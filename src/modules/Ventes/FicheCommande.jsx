import React from "react";
import ReactDOM from 'react-dom';
import { BsEye, BsInfoCircle } from "react-icons/bs";
import {IoIosCheckmarkCircleOutline, IoIosCloseCircle} from 'react-icons/io'
import BtnValidate from "../Shared/components/BtnValidate";

export default class FicheCommande extends React.Component {

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
                    <div className="tableContainer">
                        <table className='table'>
                            <thead>
                                <tr>
                                    <td>Produit</td>
                                    <td>Numéro client</td>
                                    <td>Nbre produits</td>
                                    <td>Total produits</td>
                                    <td>Etat</td>
                                    <td>Actions</td>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Cocacola</td>
                                    <td>Electroménager</td>
                                    <td>05</td>
                                    <td>12 000 FCFA</td>
                                    <td> Traité </td>
                                    <td>
                                        <button>
                                            <BsEye size={20} />
                                        </button>
                                        <button>
                                            <IoIosCheckmarkCircleOutline size={20} />
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Cocacola</td>
                                    <td>Electroménager</td>
                                    <td>03</td>
                                    <td>12 000 FCFA</td>
                                    <td> Traité </td>
                                    <td>
                                        <button>
                                            <BsEye size={20} />
                                        </button>
                                        <button>
                                            <IoIosCheckmarkCircleOutline size={20} />
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="totalPrice">
                        <div className="priceTitle">
                            <h2>Total à payer</h2>
                        </div>
                        <div className="priceNumber">
                            120 000 FCFA
                        </div>
                    </div>

                    <div className='alertInStock'>
                        <div className="modalNoteTitle">
                            <BsInfoCircle size={20} style={{marginRight: '10px'}} />
                            <span>Note:</span>
                        </div>
                        <div className="modalNoteText">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut velit perspiciatis modi animi beatae consectetur debitis magni. Maiores mollitia neque illo earum dignissimos esse obcaecati! Numquam dolore molestiae id quibusdam.
                        </div>
                    </div>

                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div></div>
                        <div>
                            <BtnValidate 
                                name='Envoyer un message'
                                style={{background: "#F06B6B"}}
                            />
                            <BtnValidate 
                                name='Annuler la commande'
                                style={{background: "#D60001"}}
                            />
                            <BtnValidate 
                                name='Valider la commande'
                                style={{background: "#2EA94E"}}
                            />
                        </div>
                    </div>
                </div>
            </div>,
            this.modal
        )
    }
}