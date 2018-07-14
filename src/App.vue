<template>
  <div id="app">
<nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow">
  <a class="navbar-brand" href="#">QuizLand</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'home' }">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'createQuiz' }">Add Quiz</router-link>
      </li>
    </ul>
  </div>
</nav>

    <div class="container bg-light rounded p-3 mt-3 shadow">
      <router-view/>
    </div>
  </div>
</template>

<style>

</style>
