<template>
  <div class="pre-nav">
    <div class="social-media">
      <div class="media" v-for="media in socialMedia" :key="media.name">
        <a :href="'//' + media.link" target="_blank">
          <img :src="media.icon" :alt="media.name" />
        </a>
      </div>
    </div>

    <div class="text">
      <span>free</span> plane shipping over <span>$250</span>
    </div>

    <div class="options">
      <drop-down :options="languages" :defaultValue="languages[0]" />
      <drop-down :options="currencies" :defaultValue="currencies[0]" />
      <div class="account">
        <a href="/account">
          <div class="account-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Outline"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <path
                d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z"
              />
              <path
                d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"
              />
            </svg>
            Account
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pre-nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #343a40;
  color: #fff;
  padding: 10px 20% 15px;
}

.pre-nav .social-media {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.pre-nav .social-media .media {
  width: 20px;
  height: 20px;
}

.pre-nav .social-media .media img {
  width: 100%;
  height: 100%;
}

.pre-nav .text {
  font-size: 15px;
  text-transform: capitalize;
}
.pre-nav .text span {
  color: #20c8ad;
}

.pre-nav .options {
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
}

.pre-nav .options .account a {
  color: #fff;
  font-size: 15px;
}
.pre-nav .options .account a:hover {
  text-decoration: none;
  opacity: 0.8;
}
.pre-nav.options .account a .account-icon {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
}

@media (max-width: 992px) {
  .pre-nav {
    display: none;
  }
}
</style>

<script>
import FacebookLogo from "@/assets/icons/social-media/facebook.svg";
import TwitterLogo from "@/assets/icons/social-media/twitter.svg";
import InstagramLogo from "@/assets/icons/social-media/instagram.svg";
import LinkedInLogo from "@/assets/icons/social-media/linkedin.svg";
import DropDown from "../Global/DropDown.vue";

export default {
  components: { DropDown },
  name: "PreNav",
  data: function () {
    return {
      socialMedia: [
        {
          name: "facebook",
          icon: FacebookLogo,
          link: "www.facebook.com",
        },
        {
          name: "twitter",
          icon: TwitterLogo,
          link: "www.twitter.com",
        },
        {
          name: "insragram",
          icon: InstagramLogo,
          link: "www.insragram.com",
        },
        {
          name: "linkedin",
          icon: LinkedInLogo,
          link: "www.linkedin.com",
        },
      ],
      languages: [
        {
          label: "English",
          value: "english",
        },
        {
          label: "Arabic",
          value: "arabic",
        },
        {
          label: "Deutsch",
          value: "deutsch",
        },
      ],
      currencies: [
        {
          label: "US Dollars",
          value: "usd",
        },
        {
          label: "Kuwaiti Dinar",
          value: "kwd",
        },
        {
          label: "Saudi Ryal",
          value: "sar",
        },
      ],
    };
  },
};
</script>
