import axios from "axios";
import { openNotification } from "../util/notification";

export const api = axios.create({
  baseURL: "https://solanches.herokuapp.com/",
});

/**
 * Route that returns the menu of a commerce
 *
 * @param {string} commerceName The name of the commerce
 * @returns Object that represents the the menu of the commer or null if something goes wrong
 */
export const getCardapio = async (commerceName) => {
  try {
    const response = await api.get(`/comercio/${commerceName}/cardapio`);
    return response.data;
  } catch (e) {
    openNotification(
      commerceName,
      `Ocorreu um problema ao retornar os produtos do comércio ${commerceName}`,
      `os produtos do comércio ${commerceName}`
    );
    return null;
  }
};

/**
 *
 * Route that returns the products registered in the commerce menu.
 *
 * @param {string} commerceName The name of the commerce
 * @param {bool} categories a bool value to switch the format of the reponse.
 * For more information go to the documentation of the API
 * @returns
 */
export const getProdutos = async (commerceName, categories = true) => {
  try {
    const response = await api.get(
      `/comercio/${commerceName}/produtos?categories=${categories}`
    );
    return response.data;
  } catch (e) {
    openNotification(
      commerceName,
      `Ocorreu um problema ao retornar os produtos do comércio ${commerceName}`,
      `os produtos do comércio ${commerceName}`
    );
    return null;
  }
};

/**
 * Route that delete a product by it's id
 *
 * @param {string} commerceName the name of the commerce
 * @param {string} idProduct the id of the product that's going to be deleted
 */
export const deleteProduct = async (commerceName, idProduct) => {
  try {
    await api.delete(`/comercio/${commerceName}/produto/${idProduct}`);

    openNotification(commerceName, "Produto removido com sucesso");
  } catch (e) {
    openNotification(
      commerceName,
      `Ocorreu um problema remover o produto com id: ${idProduct}`,
      e.data
    );
  }
};

/**
 *
 * Route responsable for allowing the editing of a product
 *
 * @param {String} commerceName The name of the commerce
 * @param {String} idProduct the id of the product that's going to be edit
 * @param {object} newProduct The new structure of the product with the new information.
 */
export const editProduct = async (commerceName, idProduct, newProduct) => {
  try {
    await api.patch(`/comercio/${commerceName}/produto/${idProduct}`, {
      attributes: newProduct,
    });
    openNotification(commerceName, "Produto alterado com sucesso");
  } catch (e) {
    openNotification(
      commerceName,
      `Ocorreu um problema ao alterar o produto com id: ${idProduct}`
    );
  }
};

/**
 * Route the allows the frontend to register new produtc
 *
 * @param {String} commerceName The name of the commerce
 * @param {object} newProduct Object with the data of the new product
 */
export const addProduct = async (commerceName, newProduct) => {
  try {
    await api.post(`/comercio/${commerceName}/produto`, {
      nome: newProduct.title,
      attributes: newProduct,
    });
    openNotification(commerceName, "Produto cadastrado com sucesso");
  } catch (e) {
    console.log(e);
    openNotification(
      commerceName,
      `Ocorreu um problema ao alterar o novo produto com nome: ${newProduct.title}`
    );
  }
};

/**
 * Route the allows the user to register a new category on the commerce menu
 *
 * @param {string} commerceName  The name of the commerce
 * @param {string} category The category that's going to be added
 * @returns a object that represents the menu
 */
export const addCategory = async (commerceName, category) => {
  try {
    const response = await api.post(`/comercio/${commerceName}/categoria`, {
      categoria: category,
    });
    openNotification(commerceName, "Categoria cadastrada com sucesso");
    return response.data;
  } catch (e) {
    openNotification(
      commerceName,
      `Ocorreu um problema ao cadastrar uma nova categoria com nome: ${category}`
    );
    return null;
  }
};

/**
 * Route the allows the user to delete a category on the commerce menu
 *
 * @param {string} commerceName  The name of the commerce
 * @param {string} category The category that's going to be remove
 * @returns a object that represents the menu
 */
export const deleteCategory = async (commerceName, category) => {
  try {
    const response = await api.delete(`/comercio/${commerceName}/categoria`, {
      data: { categoria: category },
    });
    openNotification(commerceName, "Categoria removida com sucesso");
    return response.data;
  } catch (e) {
    console.log(e);
    openNotification(
      commerceName,
      `Ocorreu um problema ao remover a categoria com nome: ${category}`
    );
    return null;
  }
};

/**
 * Route that allows the user to favorite a product on the menu.
 *
 * @param {string} commerceName  The name of the commerce
 * @param {string} productId The id of the product that's going to be added as favorite
 * @returns a object that represents the menu
 */
export const addFavorite = async (commerceName, productId) => {
  try {
    const response = await api.post(
      `/comercio/${commerceName}/destaques/${productId}`
    );
    openNotification(
      commerceName,
      "Produto adicionado aos destaques com sucesso"
    );
    return response.data;
  } catch (e) {
    console.log(e);
    openNotification(
      commerceName,
      `Ocorreu um problema ao adicionar o produto com id ${productId} aos destaques`
    );
    return null;
  }
};

/**
 * Route that allows the user to favorite a product on the menu.
 *
 * @param {string} commerceName  The name of the commerce
 * @param {string} productId The id of the product that's going to be added as favorite
 * @returns a object that represents the menu
 */
export const removeFavorite = async (commerceName, productId) => {
  try {
    const response = await api.delete(
      `/comercio/${commerceName}/destaques/${productId}`
    );
    openNotification(
      commerceName,
      "Produto removido aos destaques com sucesso"
    );
    return response.data;
  } catch (e) {
    console.log(e);
    openNotification(
      commerceName,
      `Ocorreu um problema ao remover o produto com id ${productId} aos destaques`
    );
    return null;
  }
};

/**
 * Route that register a new commerce in database.
 */

export const addCommerce = async (nome, password, attributes) => {
  try {
    const response = await api.post(`/comercio`, {
      nome,
      password,
      attributes
    });
    openNotification(nome, "Comércio cadastrado com sucesso");
    return response.data;
  } catch (e) {
    console.log(e)
    openNotification(
      nome,
      `Ocorreu um problema ao cadastrar o comércio com nome: ${nome}`
    );
    return null;
  }
};