import { ref } from "vue";
import useSupabase from "../boot/supabase";

const user = ref(null);

//função principal de autenticação
export default function userAuthUser() {
  //recebendo a variavel supabase da função exportada useSupabase do qrquivo ../boot/supabase
  const { supabase } = useSupabase();

  const login = async ({ email, password }) => {
    const { user, error } = await supabase.auth.signIn({ email, password });
    if (error) throw error;
  };

  //metodo para casa algum dia for utiliza login com rede social
  const loginWithSocialProvider = async (provider) => {};

  //metodo para logoff/sair
  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  //metodo para verifica se esta logado
  const isLoggedIn = () => {
    return !!user.value;
  };

  //metodo de para resgistrar passando como paramentro email, password e meta caso precisa passar mais alguma coisa futuramente
  const register = async ({ email, password, ...meta }) => {
    const { user, error } = await supabase.auth.signUp(
      { email, password },
      {
        data: meta,
        redirectTo: `${window.location.origin}/me?fromEmail=regitrationConfirmation`,
      }
    );
  };

  const update = async (data) => {};

  const sendPasswordRestEmail = async () => {};

  return {
    login,
    loginWithSocialProvider,
    logout,
    isLoggedIn,
    register,
    update,
    sendPasswordRestEmail,
  };
}
