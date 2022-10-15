import { ref } from "vue";
import useSupabase from "../boot/supabase";


const user = ref(null);

//função principal de autenticação
export default function userAuthUser() {
  //recebendo a variavel supabase da função exportada useSupabase do qrquivo ../boot/supabase
  const { supabase } = useSupabase();

  /**
   * Login with email and password
   */
  const login = async ({ email, password }) => {
    const { user, error } = await supabase.auth.signIn({ email, password });
    if (error) throw error;
  };

  //metodo para caso algum dia for utiliza login com rede social
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
    if (error) throw error;
    return user;
  };

  const update = async (data) => {
    const { user, error } = await supabase.auth.update(data);
    if (error) throw error;
    return user;
  };

  /**
   * Send user an email to reset their password
   * (support "Forgot Password")
   */
  const sendPasswordRestEmail = async (email) => {
    const { user, error } = await supabase.auth.api.resetPasswordForEmail(
      email
    );
    if (error) throw error;
    return user;
  };

  return {
    user,
    login,
    loginWithSocialProvider,
    logout,
    isLoggedIn,
    register,
    update,
    sendPasswordRestEmail,
  };
}
