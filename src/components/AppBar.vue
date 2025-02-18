<template>
  <v-app-bar :elevation="1" height="100">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="5" class="d-flex">
          <img
            src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-store-logo5.svg"
            alt="Logo image organic"
            width="140"
          />
          <v-list class="d-flex">
            <v-list-item>
              <router-link to="#" class="text-decoration-none"> Everything </router-link>
            </v-list-item>
            <v-list-item>
              <router-link to="#" class="text-decoration-none"> Groceries </router-link>
            </v-list-item>
            <v-list-item>
              <router-link to="#" class="text-decoration-none"> Juice </router-link>
            </v-list-item>
          </v-list>
        </v-col>

        <v-col class="d-flex justify-end">
          <v-list class="d-flex">
            <v-list-item>
              <router-link to="#" class="text-decoration-none"> About </router-link>
            </v-list-item>
            <v-list-item>
              <router-link to="#" class="text-decoration-none"> Contact </router-link>
            </v-list-item>
            <v-list-item>
              <router-link to="#" class="text-decoration-none"> R$0.00 </router-link>
            </v-list-item>
            <v-list-item>
              <router-link to="#" class="text-decoration-none"> Account </router-link>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
