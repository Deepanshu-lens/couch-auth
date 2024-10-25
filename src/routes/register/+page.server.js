// @ts-nocheck
import { signup } from "$lib";
import { fail } from "@sveltejs/kit";
import { toast } from "svelte-sonner";

export const actions = {
  register: async ({ request }) => {
    const formData = await request.formData();
    const username = formData.get("username")?.toString() || "";
    const password = formData.get("password")?.toString() || "";

    try {
      const res = await fetch("https://couch.lenscorp.cloud/auth/signup", {
        method: "POST",
        body: JSON.stringify({ username, password }),
      });
      return {
        status: 200,
        body: {
          message: "Account created successfully",
        },
      };
    } catch (error) {
      console.log(error, "error here");
      return fail(400, { message: error.message });
    }
  },
};
