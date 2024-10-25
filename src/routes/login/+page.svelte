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
  import { toast } from "svelte-sonner";
  import { goto } from "$app/navigation";
  import { enhance } from "$app/forms";

  // handle Submit
  const handleSubmit = ({ cancel }: { cancel: () => void }) => {
    return async ({ result }: { result: any }) => {
      console.log(result, "result here");

      // step -1 after successfull submission moving to otp stage
      switch (result?.type) {
        case "success":
          toast.success(
            result?.data?.message || "Logged In successfully"
          );
          goto("/");
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
      <CardTitle>Login</CardTitle>
      <CardDescription>Sign in to your account</CardDescription>
    </CardHeader>
    <CardContent>
      <form
        class="space-y-4"
        action="?/login"
        method="POST"
        use:enhance={handleSubmit}
      >
        <div class="space-y-2">
          <Label for="username">Username</Label>
          <Input id="username" type="text" placeholder="Enter your username" />
        </div>
        <div class="space-y-2">
          <Label for="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Create a password"
          />
        </div>
        <Button type="submit" class="w-full">Login</Button>
      </form>
    </CardContent>
    <CardFooter class="flex flex-col space-y-4">
      <p class="text-sm text-center text-gray-600">
        Don't have an account?
        <a href="/register" class="font-medium text-primary hover:underline"
          >Sign up</a
        >
      </p>
    </CardFooter>
  </Card>
</div>
