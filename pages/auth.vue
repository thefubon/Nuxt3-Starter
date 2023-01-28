<template>
  <section class="flex justify-center">
    
    <div class="p-8 w-full max-w-md rounded-md border inline-flex flex-col gap-10">

      <button
        class="w-full p-2 text-center bg-gray-800 hover:bg-gray-700 text-white rounded-md font-medium"
        @click="handleGithubLogin"
      >
        Continue with GitHub
      </button>

      <form @submit.prevent="handleLoginForm">
        <div class="grid gap-1">
          <label for="email">Email</label>
          <input
            v-model="form.email"
            type="text"
            id="email"
            class="rounded-md"
            placeholder="demo@thefubon.dev"
          />
        </div>

        <div class="grid gap-1 mt-2">
          <label for="password">Password</label>
          <input
            v-model="form.password"
            type="password"
            id="password"
            class="rounded-md"
            placeholder="password"
          />
        </div>

        <div class="mt-8 text-center">
          <button
            type="submit"
            class="w-full p-2 text-center bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium"
          >
            <template v-if="isLoggingIn">Login</template>
            <template v-else>Signup</template>
          </button>

          <button
            type="button"
            class="w-full mt-4 text-center hover:text-default/75"
            @click="isLoggingIn = !isLoggingIn"
          >
            <template v-if="isLoggingIn">Don't have an account? Signup</template>
            <template v-else>Already have an account? Login</template>
          </button>
        </div>

        <div v-if="errors" class="text-center text-red-500 pt-4">
          {{ errors }}
        </div>

      </form>
    </div>

  </section>
</template>

<script lang="ts" setup>
useHead({
  title: "Authenticate",
});

const supabaseAuth = useSupabaseAuthClient();

const isLoggingIn = ref<boolean>(true);
const form = reactive({
  email: "",
  password: "",
});

const errors = ref<string>('');

const handleGithubLogin = () => {
  supabaseAuth.auth.signInWithOAuth({
    provider: 'github'
  })
}

// Login Form
const handleLoginForm = async () => {

  console.log('Form is Submit');

  if(!form.email || !form.password){
    errors.value = "Please fill all the fields";
    return;
  }

  if(!isLoggingIn.value){
    return handleSignup();
  }

  try {
    const { data, error } = await supabaseAuth.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });

    if (error) {
      errors.value = error.message;
    }

    if (data) {
      useRouter().push("/dashboard");
    }

  } catch (err) {
    errors.value = "Something went wrong"
  }

};

// Registration Form
const handleSignup = async () => {

  try {
    const { data, error } = await supabaseAuth.auth.signUp({
      email: form.email,
      password: form.password,
    });

    if (error) {
      errors.value = error.message;
    }

    console.log({ data });

    errors.value = "Please check your email to verify your account";

  } catch (err) {
    errors.value = "Something went wrong"
  }

}
</script>
