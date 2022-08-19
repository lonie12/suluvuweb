import { Routes, Route, } from "react-router-dom";

// Components/Pages
import Connexion from "../Connexion";
import Wrapper from "../Wrapper";
import Produits from "../Produits";
import Produit from "../Produits/ListeProduits";
import Categories from "../Produits/ListeCategories";
import Dashboard from "../Dashboard";
import NouvelleVente from "../Ventes/NouvelleVente";
import ListeVentes from "../Ventes/ListeVentes";
import ListeClients from "../Clients/ListeClients";
import CreanceClients from "../Clients/CreanceClients";
import NouveauProduit from "../Produits/NouveauProduit";
import NouveauClient from "../Clients/NouveauClient";
import ListeCommandes from "../Ventes/ListeCommandes";
import NouvelleCreance from "../Clients/NouvelleCreance";
import NiveauStock from "../Stocks/NiveauStock";
import Stocks from "../Stocks";
import Ventes from '../Ventes';
import Clients from '../Clients';
import SortieStock from "../Stocks/SortieStock";
import MouvementStock from "../Stocks/MouvementStock";
import Historique from "../Stocks/Historique";
import JournalCaisse from "../Caisse/JournalCaisse";
import ArreteCaisse from "../Caisse/ArreteCaisse";
import ListeEmpacements from "../Emplacements/ListeEmplacements";
import Fournisseurs from '../Fournisseurs';
import ListeFournisseurs from "../Fournisseurs/ListeFournisseurs";
import NouveauFournisseur from "../Fournisseurs/NouveauFournisseur";
import DetteFournisseurs from "../Fournisseurs/DetteFournisseurs";
import CommandeFournisseurs from "../Fournisseurs/CommandeFournisseurs";
import NouvelleDetteFournisseur from "../Fournisseurs/NouvelleDetteFournisseur";
import NouveauMouvement from "../Stocks/NouveauMouvement";
import Raccourci from "../Accueil/Raccourcis";
import Deconnexion from "../Deconnexion";
import FPrint from "../Fournisseurs/FPrint";


export default function Navigation(props) {

    return (
        <Routes>
          <Route path='/connexion' element={<Connexion />} />
          <Route path='/' element={<Wrapper />}>

            {/* Raccourci ventes Navigation */}
            <Route path="/" element={<Dashboard />} />

            {/* Products Navigation */}
            <Route path="/produits" element={<Produits />}>
                <Route path="/produits/" element={<Produit />} />
                <Route path="/produits/categories" element={<Categories />} />
                <Route path="/produits/nvproduit" element={<NouveauProduit />} />
            </Route>

            {/* Dashboard Navigation */}
            <Route path="/sellshort" element={<Raccourci />} />

            {/* Deconnexion Navigation */}
            <Route path="/disconnect" element={<Deconnexion />} />

            {/* Ventes Navigation */}
            <Route path="/ventes" element={<Ventes />}>
                <Route path="/ventes/" element={<ListeVentes />} />
                <Route path="/ventes/nvllevente" element={<NouvelleVente />} />
                <Route path="/ventes/commandes" element={<ListeCommandes />} />
                <Route path="/ventes/devis" element={<NouveauProduit />} />
            </Route>

            {/* Clients Navigation */}
            <Route path="/clients" element={<Clients />}>
                <Route path="/clients/" element={<ListeClients />} />
                <Route path="/clients/creances" element={<CreanceClients />} />
                <Route path="/clients/nouveau" element={<NouveauClient />} />
                <Route path="/clients/nvllecreance" element={<NouvelleCreance />} />
            </Route>

            {/* Stocks Navigation */}
            <Route path="/stocks" element={<Stocks />}>
                <Route path="/stocks/niveaudestock" element={<NiveauStock />} />
                <Route path="/stocks/sortiedestock" element={<SortieStock />} />
                <Route path="/stocks/mouvements" element={<MouvementStock />} />
                <Route path="/stocks/mouvements/nouveau" element={<NouveauMouvement />} />
                <Route path="/stocks/historique" element={<Historique />} />
            </Route>

            {/* Caisse Navigation */}
            <Route path="/caisse" element={<Stocks />}>
                <Route path="/caisse/journaldecaisse" element={<JournalCaisse />} />
                <Route path="/caisse/arretedecaisse" element={<ArreteCaisse />} />
            </Route>

            {/* Emplacements Navigation */}
            <Route path="/emplacements" element={<Stocks />}>
                <Route path="/emplacements/" element={<ListeEmpacements />} />
                <Route path="/emplacements/arretedecaisse" element={<ArreteCaisse />} />
            </Route>
            

            {/* Fournisseurs Navigation */}
            <Route path="/fournisseurs" element={<Fournisseurs />}>
                <Route path="/fournisseurs/" element={<ListeFournisseurs />} />
                <Route path="/fournisseurs/nouveau" element={<NouveauFournisseur />} />
                <Route path="/fournisseurs/dettes" element={<DetteFournisseurs />} />
                <Route path="/fournisseurs/commandes" element={<CommandeFournisseurs />} />
                <Route path="/fournisseurs/nvlledette" element={<NouvelleDetteFournisseur />} />
                <Route path="/fournisseurs/print" element={<FPrint location={props.location} />} />
            </Route>
          </Route>
        </Routes>
    )
}