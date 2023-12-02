//First Method
export default function TabButton({children,isSelected,...props}){
    return(
        <li><button className={isSelected ? 'active' :undefined} {...props}>{children}</button></li>
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