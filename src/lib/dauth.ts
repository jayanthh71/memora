import { OAuthConfig, OAuthUserConfig } from "next-auth/providers";

interface Profile {
  id: string;
  name: string;
  email: string;
}

export default function DAuth<P extends Profile>(
  options: OAuthUserConfig<P>,
): OAuthConfig<P> {
  return {
    id: "dauth",
    name: "DAuth",
    type: "oauth",
    authorization: "https://auth.delta.nitt.edu/authorize?scope=user",
    token: "https://auth.delta.nitt.edu/api/oauth/token",
    userinfo: {
      url: "https://auth.delta.nitt.edu/api/resources/user",
      async request(context: { tokens: { access_token: string } }) {
        const userResponse = await fetch(
          "https://auth.delta.nitt.edu/api/resources/user",
          {
            method: "POST",
            headers: { Authorization: `Bearer ${context.tokens.access_token}` },
          },
        );

        if (!userResponse.ok) {
          throw new Error(`HTTP error! status: ${userResponse.status}`);
        }

        return await userResponse.json();
      },
    },
    profile: (profile) => {
      return {
        id: profile.id,
        name: profile.name,
        email: profile.email,
      };
    },
    client: {
      token_endpoint_auth_method: "client_secret_post",
    },
    options,
  };
}
