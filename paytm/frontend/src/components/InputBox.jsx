export function InputBox({label,placeholder}) {
    return <div>
        <div>
            {label}
        </div>
        <div>
            <input type="text" placeholder={placeholder} />
        </div>
    </div>
}