<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
  } from "$lib/components/ui/card";
  // import { signup } from "$lib";
  import { toast } from "svelte-sonner";
  import { applyAction, enhance } from "$app/forms";
  import { goto } from "$app/navigation";

  let username = "";
  let email = "";
  let password = "";

  // handle Submit
  const handleSubmit = ({ cancel }: { cancel: () => void }) => {
    return async ({ result }: { result: any }) => {
      console.log(result, "result here");

      // step -1 after successfull submission moving to otp stage
      switch (result?.type) {
        case "success":
          toast.success(
            result?.data?.message || "Account created successfully"
          );
          applyAction(result);
          goto("/login");
          break;

        // step -2 redirecting to location after otp verification
        case "redirect":
          goto(result?.location);
          break;

        // error handling
        case "failure":
          toast.error(result?.data?.message || "Something went wrong");
          break;

        default:
          cancel();
          break;
      }
    };
  };
</script>

<div class="flex items-center justify-center min-h-screen bg-gray-100">
  <Card class="w-full max-w-md">
    <CardHeader>
      <CardTitle>Create an account</CardTitle>
      <CardDescription>Sign up to get started</CardDescription>
    </CardHeader>
    <CardContent>
      <form
        class="space-y-4"
        method="POST"
        action="?/register"
        use:enhance={handleSubmit}
      >
        <div class="space-y-2">
          <Label for="username">Username</Label>
          <Input
            id="username"
            name="username"
            type="text"
            placeholder="Enter your username"
            bind:value={username}
          />
        </div>
        <div class="space-y-2">
          <Label for="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Create a password"
            bind:value={password}
          />
        </div>
        <Button type="submit" class="w-full my-4">Sign Up</Button>
      </form>
    </CardContent>
    <CardFooter class="flex flex-col">
      <p class="text-sm text-center text-gray-600">
        Already have an account?
        <a href="/login" class="font-medium text-primary hover:underline"
          >Log in</a
        >
      </p>
    </CardFooter>
  </Card>
</div>
