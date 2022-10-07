import { ref } from "vue";

export default function userAuthUser() {
  const login = async ({ email, password }) => {};

  //metodo para casa algum dia for utiliza login com rede social
  const loginWithSocialProvider = async (provider) => {};

  //metodo para verificar se esta logado
  const logout = async () => {};

  //metodo para verifica se esta logado
  const isLoggedIn = () => {
    return !!user.value;
  };


}
