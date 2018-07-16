<template>
  <div id="app">
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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

    <div class="container border bg-light rounded p-3 mt-3 shadow-sm">
      <router-view/>
    </div>

    <footer class="container p-3 mt-2 font-weight-light text-muted text-center">
      <div class="row">
        <div class="col-12">
          Developed by DAMIANBAL
          </div>
        </div>
    </footer>
  </div>
</template>

<style>
</style>
