<template>
  <app-layout>
    <template #header>Loading Animations and Screens</template>
    <template #subHeader>Pretty and sweet loading indicators</template>
    <template #default>
      <grid-section :col-desktop="1">
        <t-content-card :width="1">
          <template #title>Click to the buttons for loading screens</template>
          <template #subTitle>2 animations for buttons' inside and a lot of loading screen options</template>
          <template #content>
            <div class="flex flex-wrap gap-2 mt-4 items-center justify-start">
              <!--Simple Loading Screen with Cogs-->
              <t-button
                design="filled"
                color="green"
                type="button"
                @click="showLoadingScreenSimpleCogs = !showLoadingScreenSimpleCogs"
              >
                Show Loading Screen with Cogs
              </t-button>
              <t-loading
                :radius="3"
                loading-design="cogs"
                color="white"
                v-model="showLoadingScreenSimpleCogs"
                closeable
              />
              <!--Simple Loading Screen with Bars-->
              <t-button
                design="filled"
                color="indigo"
                type="button"
                @click="showLoadingScreenSimpleBars = !showLoadingScreenSimpleBars"
              >
                Show Loading Screen with Bars
              </t-button>
              <t-loading
                :radius="3"
                loading-design="three-bars"
                color="indigo"
                v-model="showLoadingScreenSimpleBars"
                closeable
              />
              <!--Simple Loading Screen : Dots-->
              <t-button
                design="filled"
                color="blue"
                type="button"
                @click="showLoadingScreenSimpleDots = !showLoadingScreenSimpleDots"
              >
                Show Loading Screen with Dots
              </t-button>
              <t-loading
                :radius="3"
                loading-design="three-dots"
                color="blue"
                v-model="showLoadingScreenSimpleDots"
                closeable
              />
              <!--Closeable Loading Screen-->
              <t-button
                design="light"
                color="black"
                type="button"
                @click="showLoadingScreenCloseable = !showLoadingScreenCloseable">
                Closeable Loading Screen
              </t-button>
              <t-loading
                closeable
                :radius="3"
                :color="selectedColor"
                v-model="showLoadingScreenCloseable"
              >
                <div class="flex flex-col">
                  <div class="flex">
                    <img
                      src="https://camo.githubusercontent.com/8321556a8c584594e7eeed9625375cc4639ebbde4bd527b8d150cb212d95dbf6/68747470733a2f2f7461696c61646d696e2e6465762f696d672f6d6973632f30315f7461696c61646d696e2e6a7067">
                  </div>
                  <!--Color Select-->
                  <div class="flex flex-col m-auto">
                    <div
                      class="flex flex-row max-w-min mx-auto mt-4 overflow-hidden justify-center bg-gradient-to-tr from-white to-gray-300  p-2 rounded-lg flex-shrink-0 flex-grow-0">
                      <t-button
                        size="small"
                        design="filled"
                        class="first:rounded-l-lg last:rounded-r-lg overflow-hidden shadow-lg ring-0 active:ring-0 focus:ring-0"
                        :radius="0"
                        type="button"
                        v-for="color in colors" :color="color.key"
                        @click="changeColor(color.key)"
                      >
                        {{ color.label }}
                      </t-button>
                    </div>
                    <div
                      class="flex w-full justify-center font-semibold text-gray-700 flex-shrink-0 flex-grow-0">
                      <span class="flex bg-gradient-to-b from-gray-400 to-white px-2 rounded-b-lg">Color Options</span>
                    </div>
                  </div>
                </div>
              </t-loading>
              <!--Timed Loading Screen For Close-->
              <t-button
                design="outline"
                color="red"
                type="button"
                @click="showLoadingScreenTimed = !showLoadingScreenTimed"
              >
                Timed Loading Screen For Close
              </t-button>
              <t-loading
                :timer="6000"
                :radius="3"
                :color="selectedColor"
                v-model="showLoadingScreenTimed"
              >
                <div class="flex flex-col">
                  <!--Color Select-->
                  <div class="mb-4">
                    <div class="flex mx-auto justify-center font-semibold text-lg text-gray-800">
                    <span
                      class="flex bg-gradient-to-tl from-gray-100 to-white px-2 pt-1 rounded-t-lg">Color Options</span>
                    </div>
                    <div
                      class="flex flex-row max-w-min mx-auto overflow-hidden  bg-gradient-to-tl from-gray-300 to-white p-2 rounded-lg">
                      <t-button
                        design="filled"
                        class="first:rounded-l-lg last:rounded-r-lg overflow-hidden shadow-lg ring-0 active:ring-0 focus:ring-0"
                        :radius="0"
                        type="button"
                        v-for="color in colors" :color="color.key"
                        @click="changeColor(color.key)"
                      >
                        {{ color.label }}
                      </t-button>
                    </div>
                  </div>
                  <img
                    alt="Demo"
                    class="flex mx-auto h-1/2 w-1/2"
                    src="https://images.unsplash.com/photo-1585251172245-4e87f155fc30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                  >
                </div>
              </t-loading>
            </div>
          </template>
        </t-content-card>
      </grid-section>
    </template>
  </app-layout>
</template>

<script>
/*Layout*/
import AppLayout from "@/Layouts/AppLayout.vue";
/*Component*/
import GridSection from "@/Layouts/GridSection.vue";
import TContentCard from "@/Components/Card/TContentCard.vue";
import TButton from "@/Components/Button/TButton.vue";
import TLoading from "@/Components/Loading/TLoading.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Modal",
  components: {
    TLoading,
    AppLayout, GridSection, TButton, TContentCard
  },
  setup() {
    const selectedColor = ref("gray");
    const showLoadingScreenSimpleCogs = ref(false);
    const showLoadingScreenSimpleBars = ref(false);
    const showLoadingScreenSimpleDots = ref(false);
    const showLoadingScreenCloseable = ref(false);
    const showLoadingScreenTimed = ref(false);

    const colors = [
      { key: "black", label: "Black" },
      { key: "blue", label: "Blue" },
      { key: "gray", label: "Gray" },
      { key: "green", label: "Green" },
      { key: "indigo", label: "Indigo" },
      { key: "pink", label: "Pink" },
      { key: "purple", label: "Purple" },
      { key: "white", label: "White" },
      { key: "yellow", label: "Yellow" }
    ];

    const changeColor = (color) => {
      selectedColor.value = color;
    };

    return {
      selectedColor,
      changeColor,
      colors,
      showLoadingScreenSimpleBars,
      showLoadingScreenSimpleDots,
      showLoadingScreenSimpleCogs,
      showLoadingScreenCloseable,
      showLoadingScreenTimed
    };
  }
});
</script>
