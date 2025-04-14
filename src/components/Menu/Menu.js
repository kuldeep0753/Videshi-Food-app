import useRestaurantMenu from "../../utils/useRestaurantMenu"

const Menu = ()=>{
    const [menu,setMenu] = useRestaurantMenu(582263)
    console.log(menu);
    return <>Menu</>
}
export default Menu; 
