import axios from "axios";
import { openNotification } from "../util/notification";
import { clearLocalStorage } from "../util/util"

export const api = axios.create({
  baseURL: "https://solanches.herokuapp.com/",
});

export const login = async (user, password) => {
  try {
    const response = await api.post(`/login`, { nome: user, password: password })
    return response
  } catch (e) {
    openNotification(
      user, 
      `Ocorreu um problema ao fazer o login do comércio com o usuário ${user}`,
    )
    return null
  }
}

export const logout = async () => {
  try {
    const response = await api.delete(`/logout`, { headers: {
      'authorization': localStorage.getItem('@solanches/loginToken')
    }})

    if (response.status === 200) {
      clearLocalStorage()
      openNotification(
        'logout',
        'Logout feito com sucesso!' 
      )
    } else {
      openNotification(
        'logout',
        'Ocorreu um problema ao fazer o logout' 
      )
    }

    return response
  } catch (e) {
    openNotification(
      'logout',
      `Ocorreu um problema ao fazer o logout`, 
    )
    return null
  }
}

export const getCategories = async () => {
    try {
      const response = await api.get(`/comercios?categories=`)
      return response
      
    } catch (e) {
      return null
    }
  }

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
 * @param {*} commerceName The name of the commerce
 * @param {*} categories a bool value to switch the format of the reponse.
 * For more information go to the documentation of the API
 * @returns
 */
export const fetchProdutos = async (commerceName, categories = true) => {
  try {
    const response = await api.get(`/comercio/${commerceName}/produtos?categories=${categories}`);
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
    const response = await api.delete(`/comercio/${commerceName}/produto/${idProduct}`, { headers: {
      'authorization': localStorage.getItem('@solanches/loginToken')
    }});

    if (response.status === 200) {
      openNotification(commerceName, "Produto removido com sucesso");
    }

  } catch (e) {
    if (e.response.status === 401) {
      clearLocalStorage()
      openNotification(commerceName, "Problemas no login, por favor faça o login novamente.");
    } else {
      openNotification(commerceName, "Ocorreu um problema remover o produto");
    }
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
    const response = await api.patch(`/comercio/${commerceName}/produto/${idProduct}`, {
      attributes: newProduct,
    }, { headers: {
      'authorization': localStorage.getItem('@solanches/loginToken')
    }});

    if (response.status === 200) {
      openNotification(commerceName, "Produto alterado com sucesso");
    }

  } catch (e) {
    if (e.response.status === 401) {
      clearLocalStorage()
      openNotification(commerceName, "Problemas no login, por favor faça o login novamente.");
    } else {
      openNotification(commerceName, "Não foi possível alterar o produto desejado");
    }
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
    const response = await api.post(`/comercio/${commerceName}/produto`, {
      nome: newProduct.title,
      attributes: newProduct,
    }, { headers: {
      'authorization': localStorage.getItem('@solanches/loginToken')
    }});

    if (response.status === 200) {
      openNotification(commerceName, "Produto cadastrado com sucesso");
    }
  } catch (e) {
    if (e.response.status === 401) {
      clearLocalStorage()
      openNotification(commerceName, "Problemas no login, por favor faça o login novamente.");
    } else {
      openNotification(commerceName, "Não foi possível cadastrar o produto desejado");
    }
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
    }, { headers: {
      'authorization': localStorage.getItem('@solanches/loginToken')
    }});

    if (response.status === 201) {
      openNotification(commerceName, "Categoria cadastrada com sucesso");
    }

    return response.data;
  } catch (e) {
    if (e.response.status === 401) {
      clearLocalStorage()
      openNotification(commerceName, "Problemas no login, por favor faça o login novamente.");
    } else {
      openNotification(commerceName, "Ocorreu um erro ao tentar cadastrar a categoria, por favor tente novamente.");
    }
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
    const token = localStorage.getItem('@solanches/loginToken')

    const response = await api.delete(
      `/comercio/${commerceName}/categoria`, {
        headers: {
          'Content-Type': 'application/json',
          'authorization': token
          },
        data: { categoria: category }
      },
    );

    if (response.status === 200) {
      openNotification(commerceName, "Categoria removida com sucesso");
    }
    return response.data;
  } catch (e) {
    console.log(e.response, commerceName, category)
    if (e.response.status === 401) {
      // clearLocalStorage()
      openNotification(commerceName, "Problemas no login, por favor faça o login novamente.");
    } else {
      openNotification(commerceName, "Ocorreu um erro ao tentar remover a categoria, por favor tente novamente.");
    }
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
      `/comercio/${commerceName}/destaques/${productId}`, {},{ headers: {
        'authorization': localStorage.getItem('@solanches/loginToken')
      }}
    );

    openNotification(
      commerceName,
      "Produto adicionado aos destaques"
    );
    return response.data;
  } catch (e) {
    
    if (e.response.status === 401) {
      clearLocalStorage()
      openNotification(commerceName, "Problemas no login, por favor faça o login novamente.");
    } else {
      openNotification(commerceName, "Ocorreu um erro ao tentar adicionar o produto aos destaques, por favor tente novamente.");
    }
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
      `/comercio/${commerceName}/destaques/${productId}`, { headers: {
        'authorization': localStorage.getItem('@solanches/loginToken')
      }}
    );

    if (response.status === 200) {
      openNotification(
        commerceName,
        "Produto removido dos destaques com sucesso"
      );
    }
    return response.data;
  } catch (e) {
    if (e.response.status === 401) {
      clearLocalStorage()
      openNotification(commerceName, "Problemas no login, por favor faça o login novamente.");
    } else {
      openNotification(commerceName, "Ocorreu um erro ao tentar remover o produto aos destaques, por favor tente novamente.");
    }
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
    return response.data;
  } catch (e) {
    openNotification(
      nome,
      `Ocorreu um problema ao cadastrar o comércio com nome: ${nome}`,
    );
    return null;
  }
}

/**
 * Route that allows the frontend to get the commerce name
 * 
 * @param {string} commerceName 
 * @returns commerce data
 */
 export const getCommerce = async (commerceName) => {
  try {
    const response = await api.get(`/comercio/${commerceName}`)
    return response.data
    
  } catch (e) {
      return null
  }
}
