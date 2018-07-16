<template>
    <div>
        <div v-if="signed_in">
            You are signed in!
            <br>
            <button @click="signOut" class="btn btn-dark">Sign Out</button>
        </div>
        <div v-else>
            <form v-on:submit.prevent="signIn">

                <h3 class="text-primary">Sign in as Admin</h3>

                <div class="form-group">
                    <label class="text-muted" for="password">Password</label>
                    <input v-model="password" minlength="3" type="password" class="form-control" id="password" placeholder="Password" required>
                </div>
   
                <button type="submit" class="btn btn-outline-primary">Submit</button>

                
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { apiURL } from "@/api/quiz.js";

export default {
  data: () => {
    return {
      signed_in: localStorage.getItem("token"),
      password: null,
      success: null
    };
  },

  methods: {
    signIn() {
      axios
        .post(apiURL + "api/auth", { password: this.password })
        .then(resp => {
          let token = resp.data.token;
          let success = resp.data.success;

          if (success) {
            localStorage.setItem("token", token);
            alert("Signed in!");
          } else {
            alert("Wrong password!");
          }
        })
        .catch(err => {
          alert("Could not sign in!");
        });
    },
    signOut() {
      localStorage.removeItem("token");
    }
  }
};
</script>

<style>
</style>
