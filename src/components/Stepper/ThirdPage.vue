<template>
  <div class="personalize-data">
    <div class="personalize-container">
      <div class="font-options">
        <b-form-radio-group
          id="radio-slots"
          v-model="selectedFont"
          name="radio-options-slots"
        >
          <div v-for="font in fonts" :key="font.value">
            <b-form-radio :value="font.value" size="lg">
              <div :style="{ 'font-family': `${font.value}` }">
                {{ font.name }}
              </div>
            </b-form-radio>
          </div>
        </b-form-radio-group>
      </div>
      <hr />
      <div class="input-data">
        <input
          v-model="value"
          placeholder="Type your text"
          @input="setOutputValue(null)"
        />
        <div class="symbols">
          <div
            v-for="symbol in symbols"
            :key="symbol.name"
            :style="symbol.style"
            @click="addSymbol(symbol)"
          >
            {{ symbol.shape }}
          </div>
        </div>

        <div class="output-data">
          <div v-if="outputValue" :style="{ 'font-family': `${selectedFont}` }">
            {{ outputValue }}
          </div>
          <div v-else style="color: #ddd">Your output will appear here</div>
        </div>
      </div>
    </div>

    <div class="finish">
      <div class="counter">
        <button class="subtract" @click="subtract()" :disabled="count === 1">
          -
        </button>
        <div class="value">
          {{ count }}
        </div>
        <button class="add" @click="add()">+</button>
      </div>
      <div class="cart">
        <button class="add-cart">Add to cart</button>
        <img src="@/assets/icons/heart.png" alt="heart" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.personalize-data {
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
}
.personalize-container {
  padding: 28px 35px;
  object-fit: contain;
  border-radius: 15px;
  border: solid 1px #707070;
}
.custom-radio .custom-control-label::before {
  border-radius: 50%;
  margin-top: 8px;
}
.personalize-container .font-options .bv-no-focus-ring {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: #161616;
  font-size: 20px;
}
.personalize-container .input-data input,
.personalize-container .output-data {
  width: 100%;
  margin: 17.5px 0.5px 23px 0.5px;
  padding: 15px 22px 20px;
  border-radius: 23px;
  border: solid 1px #707070;
  color: #161616;
  font-size: 20px;
}

.personalize-container .input-data input {
  overflow-x: scroll;
}
.personalize-container .output-data {
  text-align: center;
}

.personalize-container .input-data .symbols {
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
  justify-content: center;
}
.personalize-container .input-data .symbols > div {
  cursor: pointer;
}
.finish {
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: center;
  justify-content: center;
}
.finish .counter {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
  padding: 21px 44px;
  border-radius: 5px;
  border: solid 1px #d8d8d8;
  font-size: 20px;
  font-weight: 600;
}
.finish .counter .add,
.finish .counter .subtract {
  background-color: transparent;
  border: none;
}
.finish .cart {
  display: flex;
  gap: 20px;
  align-items: center;
}
.finish .cart .add-cart {
  font-size: 18px;
  padding: 23px 70px;
  text-align: center;
  color: #fff;
  border-radius: 5px;
  background-color: #b07943;
  border: none;
  text-transform: capitalize;
  font-weight: 600;
}

@media (max-width: 575px) {
  .finish {
    flex-direction: column;
  }
}
</style>

<script>
export default {
  data: function () {
    return {
      selectedFont: "",
      fonts: [
        { name: "Rantera", value: "Rantera" },
        { name: "Poppins", value: "Poppins" },
        { name: "Arial", value: "Arial" },
        { name: "Courier", value: "'Courier New', Courier, monospace" },
      ],
      value: "",
      outputValue: "",
      symbols: [
        {
          name: "heart",
          value: "[heart]",
          shape: "H",
          style: "font-size: 25px;",
        },
        {
          name: "music",
          value: "[music]",
          shape: "M",
          style:
            "font-weight: bold; font-size: 25px; transform: rotateZ(45deg);",
        },
        {
          name: "sun",
          value: "[sun]",
          shape: "S",
          style: "font-weight: bold; font-size: 25px;",
        },
        {
          name: "heart 2",
          value: "[heart]",
          shape: "H",
          style: "font-size: 30px; transform: rotateZ(90deg);",
        },
        {
          name: "music 2",
          value: "[music]",
          shape: "M",
          style:
            "font-weight: bold; font-size: 25px; transform: rotateZ(45deg);",
        },
        {
          name: "sun 2",
          value: "[sun]",
          shape: "S",
          style: "font-weight: semibold; font-size: 30px;",
        },
      ],
      count: 1,
    };
  },
  methods: {
    setFont: function (font) {
      return { "font-family": `${font}, sans-serif` };
    },
    addSymbol: function (symbol) {
      this.value = this.value + symbol.value;
      this.outputValue = this.value
        .replace("[sun]", "S")
        .replace("[heart]", "h")
        .replace("[music]", "M");
    },
    setOutputValue: function () {
      this.outputValue = this.value
        .replace("[sun]", "S")
        .replace("[heart]", "h")
        .replace("[music]", "M");
    },
    add: function () {
      this.count++;
    },
    subtract: function () {
      this.count--;
    },
  },
};
</script>
