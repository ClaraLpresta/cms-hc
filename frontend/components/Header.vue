<template>
  <client-only>
    <nav class="uk-navbar-container" uk-navbar>
        <div class="uk-navbar-left">

            <ul class="uk-navbar-nav">
                <li class="uk-active"><router-link tag="a" class="navbar-brand" to="/" exact>Deliveroo clone</router-link></li>
                <li><router-link tag="a" class="navbar-brand" to="/restaurants" exact>Restaurants</router-link></li>
                <li><router-link tag="a" class="navbar-brand" to="/homepresta" exact>Prestashop Home</router-link></li>
                <li><router-link tag="a" class="navbar-brand" to="/prestashopinfos" exact>Prestashop Infos</router-link></li>
            </ul>

        </div>

    </nav>
  </client-only>
</template>