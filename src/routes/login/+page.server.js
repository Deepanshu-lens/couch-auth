// @ts-nocheck
import { fail } from '@sveltejs/kit';

export const actions = {
  login: async ({ request }) => {
    const formData = await request.formData();
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const res = await fetch("https://couch.lenscorp.cloud/auth/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
      });
      return {
        status: 200,
        body: {
          message: "Logged in successfully",
        },
      };
    } catch (error) {
      console.log(error, "error here");
      return fail(400, { message: error.message });
    }
  },
};
