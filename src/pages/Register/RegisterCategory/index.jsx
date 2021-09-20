export function RegisterCategory() {

    const [selectedCategories] = useState([])

    const categories = [
        { id: 0, name: "Pizza" },
        { id: 1, name: "Hambúrguer" },
        { id: 2, name: "Sorvete" },
        { id: 3, name: "Lanchonete" }
    ]

    return (
        <div className="container">
            <div className="header">
                <h1>Construa seu perfil no SoLanches!</h1>
                <span>Adicione informações do seu estabelecimento</span>
            </div>
            <div className="categoryList">

            </div>
        </div>
    );
}