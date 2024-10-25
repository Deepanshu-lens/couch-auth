<script>
  import { goto } from "$app/navigation";

  // @ts-nocheck

  import Button from "$lib/components/ui/button/button.svelte";
  import { toast } from "svelte-sonner";
  export let data;
  // import { MessageButton } from "svelte-latest";

  const handleLogout = async () => {
    try {
      const res = await fetch("https://couch.lenscorp.cloud/auth/logout", {
        method: "POST",
        body: JSON.stringify({ cookie: data?.pb_auth }),
      });
      goto("/login");
      toast.success(res?.data?.message || "Logout successfully");
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
    }
  };
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read
  the documentation
  <Button on:click={handleLogout}>Logout</Button>
</p>
<!-- <MessageButton /> -->
