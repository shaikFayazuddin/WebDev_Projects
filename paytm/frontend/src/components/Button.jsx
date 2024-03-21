export function Button({label,onSubmit}) {
    return <div>
        <button onClick={onSubmit} type="button">{label}</button>
    </div>
}