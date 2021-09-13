/** @format */

const Contador = () => {
    const [contador, setContador] = React.useState(3);
    const aumentar = () => setContador(contador + 1);
    const disminuir = () => setContador(contador - 1);

    //uso className en lugar de class xq puede entrar en conflicto con la palabra reservada class de javascript-OOP
    return (
        <div>
            <h1 className={contador <0 ? "menor" : "mayor"}> Contador: {contador}</h1>
            <hr />
            <button  onClick={aumentar}>Aumentar</button>
            <button onClick={disminuir}>Disminuir</button>
        </div>
    );
};
