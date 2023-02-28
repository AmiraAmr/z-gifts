<template>
  <div class="d-stepper">
    <div :class="{ 'border-danger': error, 'shake-error': shake }">
      <b-card-body class="d-flex">
        <div>
          <div v-if="!fatalError">
            <transition :name="effect" mode="out-in">
              <keep-alive>
                <component
                  :step="step"
                  ref="step"
                  :is="stepComponent"
                  @error="errorHandler"
                  @fatal-error="blockStepper"
                  @can-continue="nextStepAction"
                  @set-step="setStep"
                />
              </keep-alive>
            </transition>
          </div>
          <div v-else>{{ fatalErrorMsg }}</div>
        </div>
      </b-card-body>
    </div>

    <div class="footer flex flex-col" v-if="!fatalError">
      <b-button
        v-if="step < steps.length - 1"
        class="next-button"
        @click="nextStep"
      >
        {{ steps[step].NextLabel }}
        <div class="arrow-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="24"
            viewBox="0 0 27.666 24.045"
          >
            <path
              data-name="noun_Arrow Left_2682937"
              d="M12.02 0 2 10.032l-2 2 2 2 10.02 10.013 2-1.993-8.61-8.61h22.256v-2.825H5.407L14.018 2z"
              transform="rotate(180 13.833 12.023)"
              style="fill: #fff"
            />
          </svg>
        </div>
      </b-button>

      <b-button v-if="step > 0" class="prev-button" @click="backStep">
        <div class="arrow-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27.666"
            height="24.045"
            viewBox="0 0 27.666 24.045"
          >
            <path
              data-name="noun_Arrow Left_2682937"
              d="M12.02 0 2 10.032l-2 2 2 2 10.02 10.013 2-1.993-8.61-8.61h22.256v-2.825H5.407L14.018 2z"
              style="fill: #fff"
            />
          </svg>
        </div>

        {{ steps[step].PreviuosLabel }}
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DStepper",
  props: {
    steps: { type: Array, default: () => [] }
  },
  data() {
    return {
      step: 0,
      error: false,
      fatalError: false,
      fatalErrorMsg: "",
      effect: "in-out-translate-fade",
      shake: false,
    };
  },
  computed: {
    activeStep() {
      return this.steps[this.step];
    },
    stepComponent() {
      return this.steps[this.step].component;
    },
  },
  methods: {
    setStep(step) {
      if (step >= 1 && step <= this.steps.length) this.step = step - 1;
    },
    errorHandler(payload) {
      this.error = payload;
      this.shake = payload;
      setTimeout(() => {
        this.shake = !payload;
      }, 750);
    },
    blockStepper(msg) {
      this.resetParams();
      this.fatalErrorMsg = msg;
      this.fatalError = true;
    },
    resetParams() {
      this.error = false;
      this.fatalErrorMsg = "";
      this.fatalError = false;
    },
    stepNumberClasses(i) {
      return {
        "bg-primary text-white": this.step === i && !this.fatalError,
        "bg-success text-white": this.step > i && !this.fatalerror,
        "bg-danger text-white": this.fatalError && this.step === i,
        "text-primary": this.step < i,
      };
    },
    nextStep() {
      if (!this.$refs.step.nextStep) return this.nextStepAction();
    },
    nextStepAction() {
      this.effect = "in-out-translate-fade";
      this.resetParams();
      if (this.step < this.steps.length - 1) this.step++;
    },
    backStep() {
      this.effect = "out-in-translate-fade";
      this.resetParams();
      if (this.step > 0) this.step--;
    },
  },
};
</script>

<style>
.in-out-translate-fade-enter-active,
.in-out-translate-fade-leave-active {
  transition: all 0.15s;
}
.in-out-translate-fade-enter,
.in-out-translate-fade-leave-active {
  opacity: 0;
}
.in-out-translate-fade-enter {
  transform: translateX(100px);
}
.in-out-translate-fade-leave-active {
  transform: translateX(-100px);
}

.out-in-translate-fade-enter-active,
.out-in-translate-fade-leave-active {
  transition: all 0.15s;
}
.out-in-translate-fade-enter,
.out-in-translate-fade-leave-active {
  opacity: 0;
}
.out-in-translate-fade-enter {
  transform: translateX(-100px);
}
.out-in-translate-fade-leave-active {
  transform: translateX(100px);
}

.d-stepper .footer {
  width: 100%;
}

.d-stepper .next-button,
.d-stepper .next-button:focus,
.d-stepper .prev-button {
  position: relative;
  font-size: 20px;
  background-color: #b07943;
  width: 100%;
  padding: 18px 10px 20px 10px;
  text-align: center;
  text-transform: capitalize;
  color: #fff;
  border-color: #b07943;
  box-shadow: none;
}
.d-stepper .next-button:hover {
  background-color: #b07943;
  border-color: #b07943;
  opacity: 0.8;
}

.d-stepper .prev-button,
.d-stepper .prev-button:focus {
  background-color: #707070;
  box-shadow: none;
  margin-top: 28px;
}
.d-stepper .prev-button:hover {
  background-color: #707070;
  border-color: #707070;
  opacity: 0.8;
}
.d-stepper .next-button .arrow-icon {
  position: absolute;
  right: 8%;
  top: 25%;
}
.d-stepper .prev-button .arrow-icon {
  position: absolute;
  left: 8%;
  top: 25%;
}
</style>
