

const Square = ({ colorValue, hexValue, isDark }) => {
    return (
        <section
            className='square'
            style={{
                backgroundColor: colorValue,
                color: isDark ? '#000' : '#FFF'
        }}
        >
            <p>{colorValue ? colorValue : "Valeur vide"}</p>
            <p>{hexValue ? hexValue : null}</p>
        </section>
    );

};

Square.defaultProps = {
    colorValue : "Couleur non définie"
}


export default Square;