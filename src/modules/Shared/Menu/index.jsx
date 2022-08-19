import '../styles/menu/index.css';

import {useSelector} from 'react-redux';
import RenderMenu from './RenderMenu';

export default function Menu() {

    let roles = useSelector(state => state.menurole.data);
    roles = roles.role.split(' ');

    const handleShowMenu = (currentElement) => {
        currentElement.currentTarget.parentNode.parentNode.classList.toggle('inactive')
        currentElement.currentTarget.classList.toggle('inactive')
        currentElement.currentTarget.parentNode.parentNode.nextSibling.classList.toggle('active')
    }

    return (
        <div>
            <div className="hideMenu" onClick={handleShowMenu}>
                <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.5 16.5063C25.5 17.1938 24.9425 17.75 24.2563 17.75H14.2438C13.9139 17.75 13.5975 17.619 13.3643 17.3857C13.131 17.1525 13 16.8361 13 16.5063C13 16.1764 13.131 15.86 13.3643 15.6268C13.5975 15.3935 13.9139 15.2625 14.2438 15.2625L24.2563 15.2625C24.5861 15.2625 24.9025 15.3935 25.1357 15.6268C25.369 15.86 25.5 16.1764 25.5 16.5063Z" fill="white"/>
                    <path d="M25.5 8.99996C25.5 9.68746 24.9425 10.2437 24.2563 10.2437L1.74375 10.2437C1.41389 10.2437 1.09754 10.1127 0.864286 9.87943C0.631039 9.64618 0.5 9.32983 0.5 8.99996C0.5 8.6701 0.631039 8.35375 0.864286 8.1205C1.09754 7.88725 1.41389 7.75621 1.74375 7.75621L24.2563 7.75621C24.5861 7.75621 24.9025 7.88725 25.1357 8.1205C25.369 8.35375 25.5 8.6701 25.5 8.99996Z" fill="white"/>
                    <path d="M24.2563 2.73761C24.5861 2.73761 24.9025 2.60657 25.1357 2.37332C25.369 2.14008 25.5 1.82372 25.5 1.49386C25.5 1.164 25.369 0.847642 25.1357 0.614394C24.9025 0.381145 24.5861 0.250106 24.2563 0.250106L9.24375 0.250106C8.91389 0.250106 8.59753 0.381145 8.36429 0.614394C8.13104 0.847642 8 1.164 8 1.49386C8 1.82372 8.13104 2.14008 8.36429 2.37332C8.59753 2.60657 8.91389 2.73761 9.24375 2.73761L24.2563 2.73761Z" fill="white"/>
                </svg>
            </div>

            <div id="menuItems">

                <RenderMenu role={roles} />

            </div>
        </div>
    )
}