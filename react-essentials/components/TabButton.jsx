//First Method
export default function TabButton({children,onSelect,isSelected}){
    return(
        <li><button className={isSelected ? 'active' :undefined} onClick={onSelect}>{children}</button></li>
    )
}

//second method
// export default function TabButton(props) {
    
//     return (
//         <li>
//             <button>{props.children}</button>
//             </li>
//     )
// }

//third method
// export default function TabButton({label}){
//     return(
//         <li><button>{label}</button></li>
//     )
// }