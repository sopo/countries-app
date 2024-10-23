function Tab({tabTitle, className, onClick}){
return(
    <div onClick={onClick}><p className={className}>{tabTitle}</p></div>
)
}
export default Tab;