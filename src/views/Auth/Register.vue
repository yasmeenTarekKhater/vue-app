<script setup lang="ts">
import {ref} from "vue";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from "vue-router";
import {useAuthStore} from "@/stores/authStore";

const router =useRouter();
const store=useAuthStore();
const formdata=ref({
    password:'12345',
    username:'yasmeen',
    email:"yasmeen@gmail.com",
    role:"ADMIN"
})
const handleSubmit= async ()=>{
    try{
        await store.registerUser(formdata.value)
        router.push('/')
    }catch(error){
        console.log(error);
    }
}
</script>
<template>
    <div class="flex flex-col justify-center items-center min-h-screen">
    <div class="mx-auto w-full max-w-md">
    <form @submit.prevent="handleSubmit">
        <Card class="overflow-y-auto">
            <CardHeader class="space-y-1">
            <CardTitle class="text-2xl"> Create an account </CardTitle>
            <CardDescription>
                Enter your details below to create your account
            </CardDescription>
            </CardHeader>
            <CardContent class="grid gap-4">
                <!-- ---------- email --------- -->
            <div class="grid gap-2">
              <Label for="email">Email</Label>
              <Input id="email" type="text" placeholder="email" v-model="formdata.email" />
            </div>
                <!-- ---------- username --------- -->
            <div class="grid gap-2">
              <Label for="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="username"
                v-model="formdata.username"
              />
            </div>
                <!-- ---------- password --------- -->
            <div class="grid gap-2">
              <Label for="password">Password</Label>
              <Input id="password" type="password" v-model="formdata.password" />
            </div>
                <!-- ---------- role ------------- -->
            <div class="grid gap-1">
              <Label for="role">Role</Label>
              <Select v-model="formdata.role" id="role">
                <SelectTrigger>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="USER"> USER </SelectItem>
                    <SelectItem value="ADMIN"> ADMIN </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            </CardContent>
            <CardFooter class="flex-col space-y-2">
            <Button class="w-full" type="submit"> Register </Button>
            <p>
              Already have an account?
              <RouterLink to="/auth/login" class="border-b border-gray-500 text-muted-foreground hover:text-primary">
                Login
              </RouterLink>
            </p>
            </CardFooter>

        </Card>
    </form>
    </div>
    </div>
</template>