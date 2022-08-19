import { allItems } from "./items";
import MenuTemplate from "./Menu";

export default function RenderMenu(props) {
    let role = props.role; 
    const menu = role.includes("admin") ? allItems:
        allItems.filter(e => role.includes(e.id) || e.id=== 'required');

    const render = menu.map(itemOnList => (
        <MenuTemplate items={itemOnList} key={itemOnList.id} />
    ))

    return(
        <>
            {render}
        </>
    );
};