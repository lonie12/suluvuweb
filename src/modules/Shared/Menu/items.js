import { IoGridOutline, IoGiftOutline, IoBagHandleOutline, IoSettingsOutline, IoStatsChartOutline } from 'react-icons/io5';
import { BsBoxSeam } from 'react-icons/bs';
import { MdLogout, MdOutlineCalculate, MdOutlineStorefront, MdOutlineSell, MdOutlineShortcut } from 'react-icons/md';
import { RiMoneyEuroCircleLine, RiCustomerService2Fill } from 'react-icons/ri';

export const allItems = [
    {
        title: 'Dashboard',
        link: '/',
        id: 'required dashboard',
        Icon: () => (
            <IoGridOutline size="24" color="white"/>
        )
    },
    {
        title: 'Accueil',
        link: '/sellshort',
        id: 'raccourcis',
        Icon: () => (
            <MdOutlineShortcut size="24" color="white"/>
        )
    },
    {
        title: 'Produits',
        sub: [
            {
                title: 'Catégories',
                link: '/produits/categories'
            },
            {
                title: 'Produits', 
                link:'/produits/'
            }
        ],
        id: 'produits',
        Icon: () => (
            <IoGiftOutline size="24" color="white"/>
        )
    },
    {
        title: 'Ventes',
        sub: [
            {
                title: 'Liste des ventes', 
                link:'/ventes/'
            },
            {
                title: 'Liste des commandes', 
                link:'/ventes/commandes'
            },
            {
                title: 'Facture', 
                link:'/produits/'
            }
        ],
        id: 'ventes',
        Icon: () => (
            <MdOutlineSell size="24" color="white"/>
        )
    },
    {
        title: 'Clients',
        sub: [
            {
                title: 'Liste des clients', 
                link:'/clients/'
            },
            {
                title: 'Créances clients', 
                link:'/clients/creances'
            },
        ],
        id: 'clients',
        Icon: () => (
            <RiCustomerService2Fill size="24" color="white"/>
        )
    },
    {
        title: 'Fournisseurs',
        sub: [
            {
                title: 'Liste des fournisseurs',
                link: '/fournisseurs/'
            },
            {
                title: 'Liste des commandes', 
                link:'/fournisseurs/commandes'
            },
            {
                title: 'Dettes fournisseurs', 
                link:'/fournisseurs/dettes'
            },
        ],
        id: 'fournisseurs',
        Icon: () => (
            <IoBagHandleOutline size="24" color="white"/>
        )
    },
    {
        title: 'Stock',
        sub: [
            {
                title: 'Niveau de stock',
                link: '/stocks/niveaudestock'
            },
            {
                title: 'Inventaires', 
                link:'/stocks/sortiedestock'
            },
            {
                title: 'Sorties de stock', 
                link:'/stocks/sortiedestock'
            },
            {
                title: 'Mouvements de stock', 
                link:'/stocks/mouvements'
            },
            {
                title: 'Historique de stocks', 
                link:'/stocks/historique'
            },
        ],
        id: 'stock',
        Icon: () => (
            <BsBoxSeam size="24" color="white"/>
        )
    },
    {
        title: 'Caisse',
        sub: [
            {
                title: 'Journal de caisse',
                link: '/caisse/journaldecaisse'
            },
            {
                title: 'Arrêté de caisse', 
                link:'/caisse/arretedecaisse'
            },
        ],
        id: 'caisse',
        Icon: () => (
            <RiMoneyEuroCircleLine size="24" color="white"/>
        )
    },
    {
        title: 'Emplacements',
        link: '/emplacements',
        id: 'emplacement',
        Icon: () => (
            <MdOutlineStorefront size="24" color="white"/>
        )
    },
    {
        title: 'Etats',
        sub: [
            // {
            //     title: 'Liste des emplacements',
            //     link: '/produits/categories'
            // },
            // {
            //     title: 'Créer un emplacement', 
            //     link:'/produits/'
            // },
        ],
        id: 'etats',
        Icon: () => (
            <IoStatsChartOutline size="24" color="white"/>
        )
    },
    {
        title: 'Statistiques',
        sub: [
            // {
            //     title: 'Liste des emplacements',
            //     link: '/produits/categories'
            // },
            // {
            //     title: 'Créer un emplacement', 
            //     link:'/produits/'
            // },
        ],
        id: 'statistiques',
        Icon: () => (
            <IoStatsChartOutline size="24" color="white"/>
        )
    },
    {
        title: 'Exercice',
        sub: [
            {
                title: 'Créer un exercice',
                link: '/produits/categories'
            },
            {
                title: 'Exercices', 
                link:'/produits/'
            },
        ],
        id: 'exercice',
        Icon: () => (
            <MdOutlineCalculate size="24" color="white"/>
        )
    },
    {
        title: 'Paramètres',
        sub: [
            {
                title: 'Gestion des comptes',
                link: '/produits/categories'
            },
            {
                title: 'Utilisateurs', 
                link:'/produits/'
            },
            {
                title: 'Gestion des rôles', 
                link:'/produits/'
            },
            {
                title: 'Gestion des alertes', 
                link:'/produits/'
            },
            {
                title: 'Politiques', 
                link:'/produits/'
            },
            {
                title: "Plus d'infos", 
                link:'/produits/'
            },
        ],
        id: 'parametres',
        Icon: () => (
            <IoSettingsOutline size="24" color="white"/>
        )
    },
    {
        title: 'Se déconnecter',
        link: '/disconnect',
        id: 'required disconnect',
        Icon: () => (
            <MdLogout size="24" color="white"/>
        )
    },
];

export const all_privileges = 'required parametres statistiques etats ventes achats fournisseurs caisse stock clients, produits'