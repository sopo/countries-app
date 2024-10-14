import { PropsWithChildren } from "react"

const PopupBody:React.FC<PropsWithChildren> = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}
export default PopupBody;