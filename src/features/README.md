---
title: Features
description: Features
lang: en-US
---
<template>
<div>
  <div class="features-hero">
    <h1>Features</h1>
    <span>Some text</span>
  </div>
  <v-banner two-line>
    <v-avatar
      slot="icon"
      color="deep-purple accent-4"
      size="40"
    >
      <v-icon
        color="white"
      >
        mdi-lock
      </v-icon>
    </v-avatar>
    Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.
  </v-banner>
  <v-card class="mt-20">
    <v-tabs
      v-model="tab"
      align-with-title
    >
      <v-tabs-slider color="blue"></v-tabs-slider>
      <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-card flat>
          <v-card-text v-text="text"></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</div>
</template>

<script>
  export default {
    data () {
      return {
        tab: null,
        items: [
          'Feature1', 'Feature2', 'Feature3', 'Feature4', 'Feature5',
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>