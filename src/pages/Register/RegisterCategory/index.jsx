import { CheckCategory } from '../../../Components/CheckCategory';
import { useState } from 'react';
import { Button } from '../../../Components/Button';


export function RegisterCategory() {

    const [selectedCategories, setSelectedCategories] = useState([])

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
                {categories.map((category, index) => {
                    return (
                        <CheckCategory categoryName={category.name} />
                    )
                })}
            </div>
            <div className="buttons">
                <a href="">
                    Cancelar
                </a>
                <Button title="Cadastrar" />
            </div>
        </div>
    );
}