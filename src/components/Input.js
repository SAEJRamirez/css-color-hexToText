import colorNames from 'colornames'

const Input = ({ colorValue, setColorValue, setHexValue, isDark, setIsDark }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="color">Écrivez le nom d'une couleur</label>
            <input
                autoFocus
                id="color"
                type="text"
                placeholder="couleur exemple: royalblue..."
                value={colorValue}
                onChange={(e) => {
                    setColorValue(e.target.value)
                    setHexValue(colorNames(e.target.value))
                }}
            />
            <button
                type='button'
                onClick={() => setIsDark(!isDark)}
            >
                Toggle Text Color
            </button>
        </form>
    );
};

export default Input;