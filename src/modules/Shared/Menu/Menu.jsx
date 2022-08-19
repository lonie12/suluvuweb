import { IoChevronDownOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


// Reducers
import { changeMenuSubMenu } from '../../ReduxStore/StylesReducers/SubmenuSelecte';
import {useDispatch, useSelector} from 'react-redux';


export default function MenuTemplate(props) {
    const MenuItems = props.items;
    const menuData = useSelector(state => state.submenu.data);
    const dispatch = useDispatch();

    const handleShowSubMenu = (currentElement) => {
        const element = currentElement.currentTarget.parentNode
        element.nextSibling.classList.toggle('active')
        element.classList.toggle('active')
        dispatch(changeMenuSubMenu({...menuData, menu: element.id ? element.id : 'Dashboard', status: !menuData.status}))
    }
    
    const menu = MenuItems.hasOwnProperty('sub') ? (
        <div className={`itemContainer`}>
            <div className={`menuItem`}  id='Produits' >
                <div className="items">
                    {/* <MenuItems.Icon size={24} color="white" /> */}
                    <MenuItems.Icon />
                    <span className='itemTitle'> {MenuItems.title} </span>
                </div>
                <div onClick={handleShowSubMenu} className="leftIcon">
                    <IoChevronDownOutline color='white' />
                </div>
            </div>

            <div className='subMenu'>
                {
                    MenuItems.sub.map(e => (
                        <Link to={e.link} className='subItem'> {e.title} </Link>
                    ))
                }
            </div>
        </div>
    ): (
        <Link to={MenuItems.link} className='itemContainer'>
            <div className="menuItem menuActive" onClick={handleShowSubMenu}>
                <div className="items">
                    <MenuItems.Icon />
                    <span className='itemTitle'> {MenuItems.title} </span>
                </div>
            </div>
        </Link>
    )

    return (
        <>
            {menu}
        </>
    )
};