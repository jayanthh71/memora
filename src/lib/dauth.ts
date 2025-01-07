import { OAuthConfig, OAuthUserConfig } from "next-auth/providers";

interface Profile {
  id: string;
  name: string;
  email: string;
}

export default function DAuth(
  options: OAuthUserConfig<Profile>,
): OAuthConfig<Profile> {
  return {
    id: "dauth",
    name: "DAuth",
    type: "oauth",
    issuer: "https://auth.delta.nitt.edu",
    clientId: process.env.DAUTH_ID,
    clientSecret: process.env.DAUTH_SECRET,
    authorization: {
      url: "https://auth.delta.nitt.edu/authorize",
      params: {
        client_id: process.env.DAUTH_ID,
        redirect_uri: process.env.DAUTH_REDIRECT,
        scope: "user",
      },
    },
    options,
  };
}
