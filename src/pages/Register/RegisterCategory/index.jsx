import { CheckCategory } from "../../../Components/CheckCategory";
import { useState, useEffect, useCallback } from "react";
import { Button } from "../../../Components/Button";

import { useRegister } from "../../../contexts/register.context";
import { useStep } from "../../../contexts/steps.context";
import { addCommerce } from "../../../services/api";

import Check from '../../../assets/icons/check.svg';

import styles from "./styles.module.css";

export function RegisterCategory() {
  const { newCommerce, setNewCommerce } = useRegister();
  const { previousStep } = useStep();

  const [selectedCategories, setSelectedCategories] = useState([]);

  const [modalIsActive, setModalIsActive] = useState(true);

  const showModal = useCallback(() => {
    setModalIsActive(!modalIsActive);
  }, [setModalIsActive, modalIsActive]);

  const handleRegisterCommerce = async () => {
    if (newCommerce) {
      const reqBody = {
        nome: newCommerce.name,
        password: newCommerce.password,
        attributes: {
          endereco: `${newCommerce.address.street}, ${newCommerce.address.number}`,
          horarios: newCommerce.schedule,
          categoria: newCommerce.category,
          cnpj: newCommerce.cnpj,
          phone: newCommerce.phone,
          social_media: newCommerce.social_media,
          profileImage: newCommerce.profileImage,
        },
      };
      
      await addCommerce(
        reqBody.nome,
        reqBody.password,
        reqBody.attributes
      );
    }
  };

  function toggleSelect(category) {
    if (selectedCategories.includes(category)) {
      setSelectedCategories((prevState) => {
        return prevState.filter((current) => current !== category);
      });
    } else {
      setSelectedCategories((prevState) => {
        return [...prevState, category];
      });
    }
  }

  useEffect(() => {
    setNewCommerce({
      ...newCommerce,
      category: selectedCategories,
    });
  }, [selectedCategories]);

  const categories = ["Pizza", "Hambúrguer", "Sorvete", "Lanches"];

  return (
    <>
      <div className={modalIsActive ? styles.modal : styles.inactive} onClick={showModal}>
        <h1>Cadastro realizado com sucesso!</h1>
        <span>
          <img src={Check} />
        </span>
        <span>O próximo passo será adicionar os produtos a cada categoria criada.</span>
      </div>
      <div className={modalIsActive ? styles.inactive : styles.container}>
        <div className={styles.header}>
          <h1>Construa seu perfil no SoLanches!</h1>
          <span>Adicione informações sobre seu estabelecimento</span>
        </div>
        <div className={styles.categoryList}>
          {categories.map((category, index) => {
            return (
              <div key={category} onClick={() => toggleSelect(category)}>
                <CheckCategory key={category} categoryName={category} />
              </div>
            );
          })}
        </div>
        <div className={styles.buttons}>
          <button onClick={() => previousStep()}>Cancelar</button>
          <Button
            title="Cadastrar"
            handleClick={() => {
              handleRegisterCommerce();
            }}
          />
        </div>
      </div>
    </>
  );
}
