export function Button({label,onClick}) {
    return <div>
        <button onClick={onClick} type="button">{label}</button>
    </div>
}