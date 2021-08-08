import { useState } from 'react'
import style from'./style.module.css'
import { Link } from 'react-router-dom';
import { SettingOutlined, PlusCircleOutlined, FormOutlined, DeleteOutlined, SelectOutlined, CloseOutlined } from '@ant-design/icons'


export const CommerceCategoryCard = ({categoryName, quantItens, deleteCategory}) => {
    const [optionsSelected, setOptionsSelected] = useState(false)
    
    return (
        <div className={style.commerceCategoryCard}>
            {!optionsSelected 
                ?
                <div className={style.categoryConfig}>
                    <SettingOutlined className={style.settingButton} onClick={() => setOptionsSelected(true)}/>
                    <h3>{categoryName}</h3>
                    <hr/>
                    <h4>{quantItens} itens</h4>
                </div>
                :
                <div className={style.categoryOptions}>
                    <CloseOutlined className={style.closeButton} onClick={() => setOptionsSelected(false)}/>
                    <h3>Opções</h3>
                    <hr/>
                    <ul>
                        <li> 
                            <FormOutlined style={{color: "#314E52"}}/>
                            <span>Editar nome</span>
                        </li>
                        <li> 
                            <Link to="/">
                                <PlusCircleOutlined style={{color: "#FF983B"}}/>
                                <span>Adicionar produtos</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <SelectOutlined style={{color: "#000000"}}/>
                                <span>Ver itens</span>
                            </Link>
                        </li>
                        <li onClick={deleteCategory}> 
                            <DeleteOutlined style={{color: "#C80000"}}/>
                            <span>Deletar categoria</span>
                        </li>
                    </ul>
                </div>
            }
        </div>


    )
}