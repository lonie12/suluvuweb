

export default function MenuItem(menuItem) {
    return (
        <div className='itemContainer'>
            <div className="menuItem" id='Ventes'>
                <div className="items">
                    {/* <MdOutlineSell size={24} color="white" /> */}
                    <span className='itemTitle'>Ventes</span>
                </div>
                {
                    menuItem.sub && (
                        <div className="leftIcon">
                            {/* <IoChevronDownOutline  color='white' /> */}
                        </div>
                    )
                }
            </div>

            {
                menuItem.sub && menuItem.forEach(element => {
                    return (
                        <div className='subMenu'>
                            <span className='subItem'>{element}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}