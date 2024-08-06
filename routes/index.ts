const routes = {
  home: "/",
  auth:{
    index: "/auth",
    signin: "/auth/signin",
    signup: "/auth/signup",
    password:{
      index: "/auth/resetPassword",
      emailCode: "/auth/resetPassword/code_to_email",
      codeVerification: "/auth/resetPassword/code_verification",
      change: "/auth/resetpassword/changePassword" 
    }
  },
  support: {
    index: "/support",
    contact: "/support/contact",
    about: "/support/about",
    privacy: "/support/about/privacy",
    terms: "/support/about/terms",
    welcome: "/support/about/welcome",
    page: "/support/about/page",
  },
};

export default routes;
