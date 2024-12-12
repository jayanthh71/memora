import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = req.url;
  const params = new URLSearchParams(url?.split("?")[1]);
  const code = params.get("code");

  try {
    const response = await fetch(
      "https://auth.delta.nitt.edu/api/oauth/token",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `client_id=${process.env.DAUTH_ID}&client_secret=${process.env.DAUTH_SECRET}&code=${code}&grant_type=authorization_code&redirect_uri=${process.env.DAUTH_REDIRECT}`,
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = await response.json();
    const token = json.access_token;

    const userResponse = await fetch(
      "https://auth.delta.nitt.edu/api/resources/user",
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    if (!userResponse.ok) {
      throw new Error(`HTTP error! status: ${userResponse.status}`);
    }

    const user = await userResponse.json();
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}
